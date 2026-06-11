/**
 * AI Master SDK - Admin JavaScript
 * Version: 1.0.0
 */

(function($) {
    'use strict';

    /**
     * Show toast notification
     */
    function showToast(message, type) {
        type = type || 'success';
        var $toast = $('<div class="aimsdk-toast aimsdk-toast-' + type + '">' + message + '</div>');
        $('body').append($toast);

        setTimeout(function() {
            $toast.fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }

    /**
     * Copy to clipboard
     */
    function copyToClipboard(text, $elem) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                if ($elem) {
                    $elem.addClass('copied');
                    setTimeout(function() {
                        $elem.removeClass('copied');
                    }, 1500);
                }
                showToast('Copied to clipboard!');
            });
        } else {
            var $temp = $('<textarea style="position:absolute;left:-9999px;top:-9999px;" />').val(text).appendTo('body');
            $temp[0].select();
            document.execCommand('copy');
            $temp.remove();
            if ($elem) {
                $elem.addClass('copied');
                setTimeout(function() {
                    $elem.removeClass('copied');
                }, 1500);
            }
            showToast('Copied to clipboard!');
        }
    }

    /**
     * Run AI ability
     */
    function runAbility($btn, abilityId, postId) {
        var $metaBox = $btn.closest('.aimsdk-ability-meta-box');
        var $result = $metaBox.find('.aimsdk-ability-result');

        // Get context based on ability type
        var context = {
            content: $('#content').val() || '',
            title: $('#title').val() || '',
            post_id: postId,
            type: 'post'
        };

        // Add ability-specific options
        switch (abilityId) {
            case 'title-generation':
                context.count = parseInt($metaBox.find('#aimsdk-title-count').val()) || 5;
                context.tone = $metaBox.find('#aimsdk-title-tone').val() || 'professional';
                break;
            case 'excerpt-generation':
                context.style = $metaBox.find('#aimsdk-excerpt-style').val() || 'informative';
                break;
            case 'content-summarization':
                context.length = $metaBox.find('#aimsdk-summary-length').val() || 'medium';
                context.format = $metaBox.find('#aimsdk-summary-format').val() || 'bullets';
                break;
            case 'editorial-notes':
                var focusAreas = [];
                $metaBox.find('.aimsdk-focus-areas input:checked').each(function() {
                    focusAreas.push($(this).data('focus'));
                });
                context.focus_areas = focusAreas;
                break;
        }

        // Disable button
        $btn.prop('disabled', true).attr('aria-busy', 'true');

        // Show loading
        $result.html('<span class="spinner is-active" style="float:none;margin-right:5px;"></span> Generating...').show();

        // Make AJAX request
        $.ajax({
            url: aimsdk.ajaxurl,
            type: 'POST',
            data: {
                action: 'aimsdk_ability_request',
                nonce: aimsdk.nonce,
                ability_id: abilityId,
                post_id: postId,
                context: JSON.stringify(context)
            },
            success: function(response) {
                if (response.success) {
                    renderAbilityResult(response.data.result, abilityId, $result);
                    showToast('Generation complete!');
                } else {
                    $result.html('<div style="color:#dc3545;padding:10px;">Error: ' + (response.data.message || 'Unknown error') + '</div>');
                    showToast('Error: ' + (response.data.message || 'Unknown error'), 'error');
                }
            },
            error: function(xhr) {
                var errorMsg = 'Request failed';
                if (xhr.responseJSON && xhr.responseJSON.data && xhr.responseJSON.data.message) {
                    errorMsg = xhr.responseJSON.data.message;
                }
                $result.html('<div style="color:#dc3545;padding:10px;">' + errorMsg + '</div>');
                showToast(errorMsg, 'error');
            },
            complete: function() {
                $btn.prop('disabled', false).removeAttr('aria-busy');
            }
        });
    }

    /**
     * Render ability result
     */
    function renderAbilityResult(result, abilityId, $result) {
        var html = '';

        switch (abilityId) {
            case 'title-generation':
                // Handle array of titles
                var titles = Array.isArray(result) ? result : [result];
                html = '<div class="aimsdk-titles-list">';
                titles.forEach(function(title, index) {
                    title = typeof title === 'string' ? title.trim() : '';
                    if (title) {
                        html += '<div class="aimsdk-ability-result-item" data-text="' + escapeHtml(title) + '">';
                        html += '<span style="margin-right:8px;color:#999;">' + (index + 1) + '.</span>';
                        html += '<span>' + escapeHtml(title) + '</span>';
                        html += '<div style="margin-top:6px;">';
                        html += '<button type="button" class="button button-small aimsdk-copy-result" data-text="' + escapeHtml(title) + '">Copy</button> ';
                        html += '<button type="button" class="button button-small button-primary aimsdk-apply-title" data-text="' + escapeHtml(title) + '">Use Title</button>';
                        html += '</div></div>';
                    }
                });
                html += '</div>';
                break;

            case 'excerpt-generation':
            case 'meta-description-generation':
                html = '<div class="aimsdk-ability-result-item" data-text="' + escapeHtml(result) + '">';
                html += '<pre style="white-space:pre-wrap;margin:0;font-size:12px;">' + escapeHtml(result) + '</pre>';
                html += '<div style="margin-top:8px;">';
                html += '<button type="button" class="button button-small aimsdk-copy-result" data-text="' + escapeHtml(result) + '">Copy</button> ';
                html += '<button type="button" class="button button-small button-primary aimsdk-apply-excerpt" data-text="' + escapeHtml(result) + '">Apply</button>';
                html += '</div></div>';
                break;

            case 'content-summarization':
                html = '<div class="aimsdk-ability-result-item" data-text="' + escapeHtml(result) + '">';
                html += '<div style="white-space:pre-wrap;font-size:13px;">' + escapeHtml(result) + '</div>';
                html += '<div style="margin-top:8px;">';
                html += '<button type="button" class="button button-small aimsdk-copy-result" data-text="' + escapeHtml(result) + '">Copy</button> ';
                html += '<button type="button" class="button button-small button-primary aimsdk-insert-content" data-text="' + escapeHtml(result) + '">Insert</button>';
                html += '</div></div>';
                break;

            case 'content-classification':
                // Handle classification result
                if (typeof result === 'object' && result.tags) {
                    html = '<div>';
                    if (result.tags && result.tags.length) {
                        html += '<p><strong>Suggested Tags:</strong></p><div style="margin-bottom:10px;">';
                        result.tags.forEach(function(tag) {
                            html += '<span class="aimsdk-tag" style="display:inline-block;background:#f0f0f1;padding:3px 8px;border-radius:4px;margin:2px;font-size:12px;">' + escapeHtml(tag) + '</span> ';
                        });
                        html += '</div>';
                    }
                    if (result.categories && result.categories.length) {
                        html += '<p><strong>Suggested Categories:</strong></p><div>';
                        result.categories.forEach(function(cat) {
                            html += '<span class="aimsdk-category" style="display:inline-block;background:#e0f0e8;padding:3px 8px;border-radius:4px;margin:2px;font-size:12px;">' + escapeHtml(cat) + '</span> ';
                        });
                        html += '</div>';
                    }
                    html += '<div style="margin-top:10px;"><button type="button" class="button button-small aimsdk-copy-result" data-text="' + escapeHtml(JSON.stringify(result)) + '">Copy</button></div>';
                    html += '</div>';
                } else {
                    html = '<pre style="white-space:pre-wrap;font-size:12px;">' + escapeHtml(String(result)) + '</pre>';
                }
                break;

            case 'editorial-notes':
                // Handle editorial notes
                if (typeof result === 'object' && result.length) {
                    html = '<div class="aimsdk-editorial-notes-list">';
                    result.forEach(function(note) {
                        var severity = note.severity || 'info';
                        var icons = { info: 'ℹ️', warning: '⚠️', error: '❌' };
                        var colors = { info: '#2271b1', warning: '#dba617', error: '#dc3545' };

                        html += '<div class="aimsdk-editorial-note" style="padding:10px;background:#f7f7f7;border-radius:6px;margin-bottom:8px;">';
                        html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">';
                        html += '<span style="font-size:16px;">' + (icons[severity] || 'ℹ️') + '</span>';
                        html += '<strong style="color:' + colors[severity] + ';">' + escapeHtml(note.type || 'info') + '</strong>';
                        html += '<span style="font-size:11px;color:#999;">Block #' + (note.block || '?') + '</span>';
                        html += '</div>';
                        if (note.issue) {
                            html += '<p style="margin:0 0 5px;font-size:13px;"><strong>Issue:</strong> ' + escapeHtml(note.issue) + '</p>';
                        }
                        if (note.suggestion) {
                            html += '<p style="margin:0;font-size:13px;color:#00a878;"><strong>Suggestion:</strong> ' + escapeHtml(note.suggestion) + '</p>';
                        }
                        html += '</div>';
                    });
                    html += '</div>';
                } else {
                    html = '<pre style="white-space:pre-wrap;font-size:12px;">' + escapeHtml(String(result)) + '</pre>';
                }
                break;

            default:
                html = '<div class="aimsdk-ability-result-item" data-text="' + escapeHtml(result) + '">';
                html += '<pre style="white-space:pre-wrap;margin:0;font-size:12px;">' + escapeHtml(result) + '</pre>';
                html += '<div style="margin-top:8px;"><button type="button" class="button button-small aimsdk-copy-result" data-text="' + escapeHtml(result) + '">Copy</button></div>';
                html += '</div>';
        }

        $result.html(html).addClass('has-result');
    }

    /**
     * Escape HTML
     */
    function escapeHtml(text) {
        if (typeof text !== 'string') {
            text = String(text);
        }
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Apply title to post
     */
    function applyTitle(title) {
        var $titleInput = $('#title');
        if ($titleInput.length) {
            $titleInput.val(title).trigger('input');
            showToast('Title applied!');
        }
    }

    /**
     * Apply excerpt to post
     */
    function applyExcerpt(excerpt) {
        var $excerptInput = $('#excerpt');
        if ($excerptInput.length) {
            $excerptInput.val(excerpt).trigger('input');
            showToast('Excerpt applied!');
        } else {
            // Try WordPress block editor
            if (typeof wp !== 'undefined' && wp.data && wp.data.dispatch('core/editor')) {
                wp.data.dispatch('core/editor').editPost({ excerpt: excerpt });
                showToast('Excerpt applied via block editor!');
            } else {
                showToast('Could not find excerpt field', 'error');
            }
        }
    }

    /**
     * Insert content into editor
     */
    function insertContent(content) {
        var $editor = $('#content');
        if ($editor.length) {
            var current = $editor.val();
            $editor.val(current + (current ? '\n\n' : '') + content).trigger('input');
            showToast('Content inserted!');
        }
    }

    // Initialize when document is ready
    $(document).ready(function() {

        // Run ability buttons in meta boxes
        $(document).on('click', '.aimsdk-run-ability', function(e) {
            e.preventDefault();
            var $btn = $(this);
            var abilityId = $btn.data('ability');
            var postId = $btn.data('post-id') || 0;

            runAbility($btn, abilityId, postId);
        });

        // Copy result buttons
        $(document).on('click', '.aimsdk-copy-result', function(e) {
            e.stopPropagation();
            var text = $(this).data('text');
            copyToClipboard(text, $(this).closest('.aimsdk-ability-result-item'));
        });

        // Apply title buttons
        $(document).on('click', '.aimsdk-apply-title', function(e) {
            e.stopPropagation();
            var title = $(this).data('text');
            applyTitle(title);
        });

        // Apply excerpt buttons
        $(document).on('click', '.aimsdk-apply-excerpt', function(e) {
            e.stopPropagation();
            var excerpt = $(this).data('text');
            applyExcerpt(excerpt);
        });

        // Insert content buttons
        $(document).on('click', '.aimsdk-insert-content', function(e) {
            e.stopPropagation();
            var content = $(this).data('text');
            insertContent(content);
        });

        // Result item click (for titles)
        $(document).on('click', '.aimsdk-titles-list .aimsdk-ability-result-item', function() {
            var title = $(this).data('text');
            applyTitle(title);
        });

        // Generate alt text from media library
        $(document).on('click', '.aimsdk-generate-alt', function(e) {
            e.preventDefault();
            var $btn = $(this);
            var attachmentId = $btn.data('attachment-id');

            $btn.prop('disabled', true).text('Generating...');

            $.ajax({
                url: aimsdk.ajaxurl,
                type: 'POST',
                data: {
                    action: 'aimsdk_ability_request',
                    nonce: aimsdk.nonce,
                    ability_id: 'alt-text-generation',
                    context: JSON.stringify({
                        attachment_id: attachmentId,
                        type: 'media'
                    })
                },
                success: function(response) {
                    if (response.success) {
                        var altText = response.data.result;
                        // Update the media library alt text field
                        var $altInput = $('input[name="attachments[' + attachmentId + '][alt]"]');
                        if ($altInput.length) {
                            $altInput.val(altText).trigger('change');
                        }
                        $btn.text('✅ Generated');
                        showToast('Alt text generated!');
                    } else {
                        $btn.text('Failed');
                        showToast('Error generating alt text', 'error');
                    }
                },
                error: function() {
                    $btn.text('Failed');
                    showToast('Error generating alt text', 'error');
                },
                complete: function() {
                    setTimeout(function() {
                        $btn.prop('disabled', false).text('Generate Alt Text');
                    }, 3000);
                }
            });
        });

    });

})(jQuery);