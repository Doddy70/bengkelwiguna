/**
 * AI Master SDK - Block Editor JavaScript
 * Version: 1.0.0
 */

(function(wp) {
    'use strict';

    var createElement = wp.element.createElement;
    var Fragment = wp.element.Fragment;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var PanelBody = wp.components.PanelBody;
    var Button = wp.components.Button;
    var TextareaControl = wp.components.TextareaControl;
    var SelectControl = wp.components.SelectControl;
    var Placeholder = wp.components.Placeholder;

    // Only run on block editor
    if (typeof wp.data === 'undefined') {
        return;
    }

    /**
     * Register AI Tools sidebar panel
     */
    wp.plugins.registerPlugin('ai-master-sdk-sidebar', {
        render: function() {
            return createElement(wp.editPost.PluginDocumentSettingPanel, {
                name: 'ai-master-sdk-panel',
                title: 'AI Tools',
                icon: 'admin-tools',
            }, createElement(AI_Master_SDK_Panel));
        }
    });

    /**
     * AI Master SDK Panel Component
     */
    var AI_Master_SDK_Panel = function() {
        var selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();
        var postContent = wp.data.select('core/editor').getEditedPostAttribute('content');
        var postTitle = wp.data.select('core/editor').getEditedPostAttribute('title');

        var state = {
            isGenerating: false,
            result: null,
            error: null,
            action: 'title',
        };

        return createElement('div', {
            className: 'aimsdk-sidebar-panel',
            style: { padding: '15px' }
        },
            // Quick Actions
            createElement('div', { className: 'aimsdk-quick-actions' },
                createElement('h4', null, '🎯 Quick Actions'),
                createElement(Button, {
                    variant: 'primary',
                    isBusy: state.isGenerating && state.action === 'title',
                    onClick: function() {
                        runAbility('title-generation', {
                            content: postContent,
                            title: postTitle,
                            count: 5,
                            tone: 'professional'
                        });
                    },
                    style: { marginBottom: '8px', width: '100%' }
                }, 'Generate Titles'),

                createElement(Button, {
                    variant: 'secondary',
                    isBusy: state.isGenerating && state.action === 'excerpt',
                    onClick: function() {
                        runAbility('excerpt-generation', {
                            content: postContent,
                            title: postTitle
                        });
                    },
                    style: { marginBottom: '8px', width: '100%' }
                }, '📝 Generate Excerpt'),

                createElement(Button, {
                    variant: 'secondary',
                    isBusy: state.isGenerating && state.action === 'classify',
                    onClick: function() {
                        runAbility('content-classification', {
                            content: postContent,
                            title: postTitle
                        });
                    },
                    style: { marginBottom: '8px', width: '100%' }
                }, '🏷️ Classify Content'),

                createElement(Button, {
                    variant: 'secondary',
                    isBusy: state.isGenerating && state.action === 'summarize',
                    onClick: function() {
                        runAbility('content-summarization', {
                            content: postContent,
                            title: postTitle
                        });
                    },
                    style: { marginBottom: '8px', width: '100%' }
                }, '📋 Summarize')
            ),

            // Selected Block Actions
            selectedBlock && createElement('div', { className: 'aimsdk-block-actions', style: { marginTop: '20px' } },
                createElement('h4', null, '✂️ Resize Selected Block'),
                createElement(SelectControl, {
                    label: 'Action',
                    value: state.resizeAction || 'improve',
                    options: [
                        { value: 'shorten', label: 'Shorten' },
                        { value: 'expand', label: 'Expand' },
                        { value: 'rephrase', label: 'Rephrase' },
                        { value: 'improve', label: 'Improve' },
                        { value: 'simplify', label: 'Simplify' },
                        { value: 'formal', label: 'Make Formal' },
                        { value: 'casual', label: 'Make Casual' },
                    ],
                    onChange: function(value) {
                        state.resizeAction = value;
                    }
                }),
                createElement(Button, {
                    variant: 'secondary',
                    isBusy: state.isGenerating && state.action === 'resize',
                    onClick: function() {
                        var blockContent = selectedBlock.attributes.content || '';
                        runAbility('content-resizing', {
                            content: blockContent,
                            action: state.resizeAction || 'improve'
                        }, function(result) {
                            // Update block content
                            wp.data.dispatch('core/block-editor').updateBlockAttributes(
                                selectedBlock.clientId,
                                { content: result }
                            );
                        });
                    },
                    style: { marginTop: '10px', width: '100%' }
                }, 'Apply to Block')
            ),

            // Result Display
            state.result && createElement('div', {
                className: 'aimsdk-result-box',
                style: {
                    marginTop: '20px',
                    padding: '15px',
                    background: '#f0f6fc',
                    borderRadius: '6px'
                }
            },
                createElement('h4', { style: { marginTop: 0 } }, 'Result'),
                createElement('pre', {
                    style: {
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        fontSize: '13px'
                    }
                }, String(state.result)),
                createElement('div', { style: { marginTop: '10px' } },
                    createElement(Button, {
                        variant: 'secondary',
                        onClick: function() {
                            copyToClipboard(String(state.result));
                        }
                    }, '📋 Copy'),
                    createElement(Button, {
                        variant: 'primary',
                        onClick: function() {
                            applyResult(state.result, state.action);
                        },
                        style: { marginLeft: '8px' }
                    }, '✓ Apply')
                )
            )
        );
    };

    /**
     * Run AI ability
     */
    function runAbility(abilityId, context, onSuccess) {
        jQuery.ajax({
            url: aimsdkEditor.ajaxurl || window.ajaxurl,
            type: 'POST',
            data: {
                action: 'aimsdk_ability_request',
                nonce: aimsdkEditor.nonce || jQuery('body').data('nonce'),
                ability_id: abilityId,
                context: JSON.stringify(context)
            },
            success: function(response) {
                if (response.success) {
                    if (typeof onSuccess === 'function') {
                        onSuccess(response.data.result);
                    } else {
                        // Show in panel (handled by state update)
                        console.log('AI Result:', response.data.result);
                    }
                } else {
                    alert('Error: ' + (response.data.message || 'Unknown error'));
                }
            },
            error: function() {
                alert('Request failed');
            }
        });
    }

    /**
     * Copy to clipboard
     */
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                alert('Copied!');
            });
        } else {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Copied!');
        }
    }

    /**
     * Apply result to post
     */
    function applyResult(result, action) {
        switch (action) {
            case 'title':
                wp.data.dispatch('core/editor').editPost({ title: result });
                break;
            case 'excerpt':
                wp.data.dispatch('core/editor').editPost({ excerpt: result });
                break;
            default:
                // Insert at cursor or append
                var currentContent = wp.data.select('core/editor').getEditedPostAttribute('content') || '';
                var newContent = currentContent + '\n\n' + result;
                wp.data.dispatch('core/editor').editPost({ content: newContent });
        }
        alert('Applied!');
    }

})(window.wp);