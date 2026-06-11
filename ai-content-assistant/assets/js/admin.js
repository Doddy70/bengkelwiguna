/**
 * AI Content Assistant - Admin JavaScript
 * Version: 1.0.0
 */

(function($) {
    'use strict';

    // Toast notification
    function showToast(message, type) {
        var $existing = $('.aica-toast');
        if ($existing.length) $existing.remove();

        var $toast = $('<div class="aica-toast aica-toast-' + (type || 'success') + '">' + message + '</div>');
        $('body').append($toast);

        setTimeout(function() {
            $toast.fadeOut(300, function() { $(this).remove(); });
        }, 3000);
    }

    // Copy to clipboard
    function copyToClipboard(text, $elem) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                $elem.addClass('copied');
                setTimeout(function() { $elem.removeClass('copied'); }, 1500);
            });
        } else {
            var $temp = $('<textarea style="position:absolute;left:-9999px;top:-9999px;" />').val(text).appendTo('body');
            $temp[0].select();
            document.execCommand('copy');
            $temp.remove();
            $elem.addClass('copied');
            setTimeout(function() { $elem.removeClass('copied'); }, 1500);
        }
    }

    // Apply content to editor
    function applyToEditor(content, actionType) {
        var $editor = $('#content');

        if (actionType === 'title') {
            $('#title').val(content).trigger('input');
            showToast(aica.strings.success, 'success');
        } else if (actionType === 'excerpt') {
            // Try classic excerpt first
            var $excerpt = $('#excerpt');
            if ($excerpt.length) {
                $excerpt.val(content).trigger('input');
            } else {
                // Fallback: store in hidden field or use wp.data
                var $hiddenExcerpt = $('input[name="excerpt"]');
                if ($hiddenExcerpt.length) {
                    $hiddenExcerpt.val(content);
                } else {
                    // Try tinyMCE for block editor
                    if (typeof wp !== 'undefined' && wp.data && wp.data.dispatch('core/editor')) {
                        wp.data.dispatch('core/editor').editPost({ excerpt: content });
                    }
                }
            }
            showToast(aica.strings.success, 'success');
        } else if (actionType === 'improve') {
            // For improve content, append or replace
            if ($editor.length) {
                var currentContent = $editor.val();
                if (currentContent.trim()) {
                    $editor.val(currentContent + '\n\n' + content);
                } else {
                    $editor.val(content);
                }
                $editor.trigger('input');
            }
            // Also try block editor
            if (typeof wp !== 'undefined' && wp.data && wp.data.dispatch('core/editor')) {
                var currentBlocks = wp.data.select('core/editor').getEditedPostContent();
                if (currentBlocks) {
                    // Parse and insert as HTML block
                    var newBlocks = wp.data.select('core/editor').getBlocks();
                    if (newBlocks.length) {
                        var lastBlock = newBlocks[newBlocks.length - 1];
                        wp.data.dispatch('core/editor').insertBlocks(
                            wp.blocks.createBlock('core/paragraph', { content: content })
                        );
                    }
                }
            }
            showToast(aica.strings.success, 'success');
        } else if (actionType === 'summarize') {
            // Store summarize result as meta or show in results area
            var $results = $('#aica-summarize-results');
            $results.find('.aica-results-text').html(content);
            showToast(aica.strings.success, 'success');
        }
    }

    // Generate content
    function generateContent($btn, actionType) {
        var $metaBox = $('#aica-meta-box');
        var postId = $btn.data('post-id');

        // Disable all buttons
        $metaBox.find('.aica-btn').prop('disabled', true).attr('aria-busy', 'true');
        $metaBox.find('#aica-loading').show();

        var resultsId = 'aica-' + actionType + '-results';

        $.ajax({
            url: aica.ajaxurl,
            type: 'POST',
            data: {
                action: 'aica_generate_content',
                nonce: aica.nonce,
                action_type: actionType,
                post_id: postId
            },
            success: function(response) {
                if (response.success && response.data.result) {
                    renderResults(response.data.result, actionType, resultsId);
                } else {
                    $('#' + resultsId).html(
                        '<div class="aica-alert aica-alert-warning" style="padding:10px;border-radius:6px;background:#fff8e5;border-left:4px solid #dba617;color:#7d6505;font-size:12px;">' +
                        (response.data.message || aica.strings.error) +
                        '</div>'
                    );
                    showToast(response.data.message || aica.strings.error, 'error');
                }
            },
            error: function(xhr) {
                var errorMsg = xhr.responseJSON && xhr.responseJSON.data && xhr.responseJSON.data.message
                    ? xhr.responseJSON.data.message
                    : aica.strings.error;

                $('#' + resultsId).html(
                    '<div class="aica-alert aica-alert-warning" style="padding:10px;border-radius:6px;background:#fff8e5;border-left:4px solid #dba617;color:#7d6505;font-size:12px;">' +
                    errorMsg + '</div>'
                );
                showToast(errorMsg, 'error');
            },
            complete: function() {
                $metaBox.find('.aica-btn').prop('disabled', false).removeAttr('aria-busy');
                $metaBox.find('#aica-loading').hide();
            }
        });
    }

    // Render results
    function renderResults(result, actionType, resultsId) {
        var $results = $('#' + resultsId);

        if (actionType === 'title') {
            // Parse JSON array
            try {
                var titles = typeof result === 'string' ? JSON.parse(result) : result;
                var html = '';

                if (Array.isArray(titles)) {
                    titles.forEach(function(title, index) {
                        title = title.trim().replace(/^["']|["']$/g, '');
                        html += '<div class="aica-results-item" data-text="' + escapeHtml(title) + '" style="margin-bottom:6px;">' +
                            '<span>' + (index + 1) + '. ' + escapeHtml(title) + '</span>' +
                            '<div class="aica-results-actions" style="margin-top:6px;">' +
                            '<button type="button" class="button aica-btn-copy" style="font-size:11px;padding:4px 8px;" data-text="' + escapeHtml(title) + '">' + aica.strings.copy + '</button> ' +
                            '<button type="button" class="button aica-btn-apply" style="font-size:11px;padding:4px 8px;background:#00a878!important;border-color:#00a878!important;color:#fff;" data-text="' + escapeHtml(title) + '" data-action="title">' + aica.strings.apply + '</button>' +
                            '</div></div>';
                    });
                }

                if (!html) {
                    html = '<div class="aica-results-text">' + escapeHtml(result) + '</div>';
                }

                $results.html(html);
            } catch (e) {
                $results.html('<div class="aica-results-text">' + escapeHtml(result) + '</div>');
            }
        } else {
            // For excerpt, improve, summarize — display as text with action buttons
            var contentHtml = '<div class="aica-results-text">' + result + '</div>';
            contentHtml += '<div class="aica-btn-row">';
            contentHtml += '<button type="button" class="button aica-btn-copy" data-text="' + escapeHtml(result.replace(/"/g, '&quot;')) + '">' + aica.strings.copy + '</button>';
            contentHtml += '<button type="button" class="button aica-btn-apply" data-text="' + escapeHtml(result.replace(/"/g, '&quot;')) + '" data-action="' + actionType + '">' + aica.strings.apply + '</button>';
            contentHtml += '</div>';
            $results.html(contentHtml);
        }
    }

    // Escape HTML
    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Save draft
    function saveDraft(content, postId, field, actionType) {
        $.ajax({
            url: aica.ajaxurl,
            type: 'POST',
            data: {
                action: 'aica_save_draft',
                nonce: aica.nonce,
                post_id: postId,
                content: content,
                field: field
            },
            success: function(response) {
                if (response.success) {
                    showToast(aica.strings.save_draft, 'success');
                }
            },
            error: function() {
                showToast(aica.strings.error, 'error');
            }
        });
    }

    // Initialize
    $(document).ready(function() {
        var $metaBox = $('#aica-meta-box');

        if ($metaBox.length) {
            // Generate button click
            $metaBox.on('click', '.aica-btn[data-action]', function(e) {
                e.preventDefault();
                var $btn = $(this);
                var actionType = $btn.data('action');
                generateContent($btn, actionType);
            });

            // Copy button click
            $metaBox.on('click', '.aica-btn-copy', function(e) {
                e.stopPropagation();
                var text = $(this).data('text');
                copyToClipboard(text, $(this).closest('.aica-results-item, .aica-results'));
                showToast('Copied!', 'success');
            });

            // Apply button click
            $metaBox.on('click', '.aica-btn-apply', function(e) {
                e.stopPropagation();
                var text = $(this).data('text');
                var actionType = $(this).data('action');
                applyToEditor(text, actionType);
            });

            // Results item click — apply title/excerpt
            $metaBox.on('click', '.aica-results-item', function() {
                var $item = $(this);
                var text = $item.data('text');
                var actionType = $item.closest('.aica-section').find('.aica-btn').data('action');
                if (text && actionType) {
                    applyToEditor(text, actionType);
                }
            });
        }
    });

})(jQuery);