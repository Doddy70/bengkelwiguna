/**
 * BW Editor Assistant - Classic & Block Editor Integrations
 * Fixed: Robust dependency handling to prevent "Failed to load" errors in TinyMCE/Gutenberg
 */
(function() {
    'use strict';

    // 1. Initial Dependency Check
    var $ = window.jQuery;
    var wp = window.wp;
    var tinymce = window.tinymce;

    // Helper to safely update React-controlled inputs in the DOM
    function setReactInputValue(selectors, value) {
        if (!value || typeof document === 'undefined') return false;
        var success = false;
        selectors.forEach(function(selector) {
            var el = document.querySelector(selector);
            if (!el) return;
            
            var nativeSetter = null;
            try {
                if (el.tagName === 'TEXTAREA') {
                    nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
                } else if (el.tagName === 'INPUT') {
                    nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                }
                
                if (nativeSetter) {
                    nativeSetter.call(el, value);
                } else {
                    el.value = value;
                }
                
                if (el._valueTracker) {
                    el._valueTracker.setValue('');
                }
                
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
                if (window.jQuery) {
                    window.jQuery(el).trigger('change').trigger('keyup');
                }
                success = true;
            } catch (e) {
                console.warn('BW Assistant: Failed to set React input value', e);
            }
        });
        return success;
    }

    // Helper to safely update Rank Math SEO fields via WordPress Data Registry & DOM Fallback
    function updateRankMathSEO(seoTitle, seoDesc, seoKeyword) {
        if (typeof wp !== 'undefined' && wp.data && typeof wp.data.dispatch === 'function') {
            try {
                // 1. Try Gutenberg core/editor store first
                var coreEditor = wp.data.dispatch('core/editor');
                if (coreEditor && typeof coreEditor.editPost === 'function') {
                    var metaUpdate = {};
                    if (seoTitle) metaUpdate.rank_math_title = seoTitle;
                    if (seoDesc) metaUpdate.rank_math_description = seoDesc;
                    if (seoKeyword) metaUpdate.rank_math_focus_keyword = seoKeyword;
                    coreEditor.editPost({ meta: metaUpdate });
                }
            } catch (e) {
                // Silent skip
            }

            try {
                // 2. Try Rank Math native store
                var rankMathStore = wp.data.dispatch('rank-math');
                if (rankMathStore) {
                    var metaUpdate = {};
                    if (seoTitle) metaUpdate.title = seoTitle;
                    if (seoDesc) metaUpdate.description = seoDesc;
                    if (seoKeyword) {
                        metaUpdate.focusKeyword = seoKeyword;
                        metaUpdate.focus_keyword = seoKeyword;
                    }
                    if (typeof rankMathStore.updateEditorMeta === 'function') {
                        rankMathStore.updateEditorMeta(metaUpdate);
                    }
                    if (seoKeyword && typeof rankMathStore.setFocusKeyword === 'function') {
                        rankMathStore.setFocusKeyword(seoKeyword);
                    }
                }
            } catch (e) {
                // Silent skip
            }
        }

        // Fallback to update classic DOM fields directly
        if (seoTitle) {
            setReactInputValue(['#rank_math_title', '#rank-math-title', 'input[name="rank_math_title"]', 'input[name="rank-math-title"]', '.rank-math-title input'], seoTitle);
        }
        if (seoDesc) {
            setReactInputValue(['#rank_math_description', '#rank-math-description', '#rank_math_desc', '#rank-math-desc', 'textarea[name="rank_math_description"]', 'textarea[name="rank-math-description"]', 'textarea[name="rank_math_desc"]', 'textarea[name="rank-math-desc"]', '.rank-math-description textarea'], seoDesc);
        }
        if (seoKeyword) {
            setReactInputValue(['#rank_math_focus_keyword', '#rank-math-focus-keyword', 'input[name="rank_math_focus_keyword"]', 'input[name="rank-math-focus-keyword"]', '.rank-math-focus-keyword input', '.rank-math-focus-keyword'], seoKeyword);
        }
    }

    // Helper to safely set Featured Image in Classic Editor
    function setClassicFeaturedImage(imageId) {
        if (!imageId || !window.jQuery) return;
        var $ = window.jQuery;
        
        if (typeof wp !== 'undefined' && wp.media && wp.media.featuredImage && typeof wp.media.featuredImage.set === 'function') {
            wp.media.featuredImage.set(imageId);
            return;
        }

        // Manual fallback
        var postId = $('#post_ID').val() || (typeof wp !== 'undefined' && wp.data && wp.data.select('core/editor') && wp.data.select('core/editor').getCurrentPostId());
        if (!postId) return;

        $('#_thumbnail_id').val(imageId);

        var nonce = $('#_wpnonce').val();
        if (typeof ajaxurl !== 'undefined') {
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'get-post-thumbnail-html',
                    post_id: postId,
                    thumbnail_id: imageId,
                    _wpnonce: nonce
                },
                success: function(html) {
                    if (html && html !== '0') {
                        $('.inside', '#postimagediv').html(html);
                    }
                }
            });
        }
    }

    // ==========================================
    // 1. CLASSIC EDITOR (TINYMCE) INTEGRATION
    // ==========================================
    if (typeof tinymce !== 'undefined' && tinymce.PluginManager) {
        tinymce.PluginManager.add('bw_assistant', function(editor, url) {
            
            // Helper to generate content
            function runGeneration(actionType, textInput, imageId) {
                if (!window.bwEditorAssistant || !window.jQuery) {
                    alert('Error: Plugin assets not fully loaded.');
                    return;
                }
                var $ = window.jQuery;
                editor.setProgressState(true);

                $.ajax({
                    url: window.bwEditorAssistant.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'bw_editor_assistant_generate',
                        action_type: actionType,
                        text_input: textInput,
                        image_id: imageId || 0,
                        post_id: $('#post_ID').val(),
                        nonce: window.bwEditorAssistant.nonce
                    },
                    success: function(response) {
                        editor.setProgressState(false);
                        if (response.success && response.data.result) {
                            if (['services', 'promosi', 'custom'].includes(actionType)) {
                                editor.insertContent(response.data.result);
                            } else {
                                editor.selection.setContent(response.data.result);
                            }

                            updateRankMathSEO(response.data.seo_title, response.data.seo_desc, response.data.seo_keyword);

                            if (imageId > 0) {
                                setClassicFeaturedImage(imageId);
                            }
                        } else {
                            alert('AI Assistant Error: ' + (response.data.message || 'Gagal generate content'));
                        }
                    },
                    error: function() {
                        editor.setProgressState(false);
                        alert('Koneksi gagal saat menghubungi AI Assistant.');
                    }
                });
            }

            // Dialog for user prompt input
            function showPromptDialog(title, callback) {
                editor.windowManager.open({
                    title: 'AI Assistant — ' + title,
                    body: [
                        {
                            type: 'textbox',
                            name: 'prompt',
                            label: 'Masukkan Instruksi/Detail:',
                            multiline: true,
                            minWidth: 400,
                            minHeight: 100
                        },
                        {
                            type: 'button',
                            name: 'select_image',
                            text: 'Pilih Gambar (Opsional)',
                            onclick: function(e) {
                                var win = this.parent();
                                if (typeof wp !== 'undefined' && wp.media) {
                                    var frame = wp.media({
                                        title: 'Pilih Gambar untuk Analisa AI',
                                        button: { text: 'Gunakan Gambar Ini' },
                                        multiple: false
                                    });
                                    frame.on('select', function() {
                                        var attachment = frame.state().get('selection').first().toJSON();
                                        win.find('#image_id').value(attachment.id);
                                        win.find('#select_image').text('Gambar Terpilih: ' + (attachment.filename || attachment.id));
                                    });
                                    frame.open();
                                }
                            }
                        },
                        {
                            type: 'textbox',
                            name: 'image_id',
                            label: 'Image ID:',
                            visible: false,
                            id: 'image_id'
                        }
                    ],
                    onsubmit: function(e) {
                        if (e.data.prompt && e.data.prompt.trim()) {
                            callback(e.data.prompt, e.data.image_id);
                        }
                    }
                });
            }

            // Add Assistant button on TinyMCE toolbar
            editor.addButton('bw_assistant', {
                text: 'Assistant',
                type: 'menubutton',
                icon: 'dashicons-admin-generic',
                menu: (function() {
                    var $ = window.jQuery;
                    var postType = ($ && $('#post_type').val()) || 'post';
                    var postTypeLabel = 'Artikel';

                    if (postType === 'services') postTypeLabel = 'Layanan';
                    else if (postType === 'promosi') postTypeLabel = 'Promo';
                    else if (['paket_service', 'paket-service'].includes(postType)) postTypeLabel = 'Paket Service';

                    return [
                        {
                            text: 'Generate ' + postTypeLabel + ' Baru (AI)',
                            onclick: function() {
                                showPromptDialog(postTypeLabel, function(prompt, imageId) {
                                    runGeneration(postType, prompt, imageId);
                                });
                            }
                        },
                        { text: 'Sempurnakan Teks (Improve)', onclick: function() { runGeneration('improve', editor.selection.getContent()); } },
                        { text: 'Perbaiki Grammar', onclick: function() { runGeneration('grammar', editor.selection.getContent()); } },
                        { text: 'Ringkas Teks', onclick: function() { runGeneration('shorten', editor.selection.getContent()); } },
                        { text: 'Perpanjang Teks', onclick: function() { runGeneration('lengthen', editor.selection.getContent()); } },
                        {
                            text: 'Custom AI Command...',
                            onclick: function() {
                                showPromptDialog('Custom Command', function(prompt, imageId) {
                                    runGeneration('custom', prompt, imageId);
                                });
                            }
                        }
                    ];
                })()
            });
        });
    }

    // ==========================================
    // 2. BLOCK EDITOR (GUTENBERG) INTEGRATION
    // ==========================================
    if (typeof wp !== 'undefined' && wp.plugins && wp.editPost && wp.element) {
        const { registerPlugin } = wp.plugins;
        const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
        const { PanelBody, Button, TextareaControl, SelectControl, Spinner } = wp.components;
        const { useState, useEffect } = wp.element;
        const { useSelect, useDispatch } = wp.data;

        const BWAiAssistantComponent = () => {
            const [prompt, setPrompt] = useState('');
            const [isLoading, setIsLoading] = useState(false);
            const [resultText, setResultText] = useState('');
            const [statusMessage, setStatusMessage] = useState('');
            const [provider, setProvider] = useState('gemini');
            const [imageId, setImageId] = useState(0);
            const [imageUrl, setImageUrl] = useState('');
            const [imageFilename, setImageFilename] = useState('');

            const postId = useSelect((select) => select('core/editor').getCurrentPostId());
            const postType = useSelect((select) => select('core/editor').getCurrentPostType());
            const { editPost } = useDispatch('core/editor');

            const handleGenerate = async (actionType) => {
                if (!prompt && ['services', 'promosi', 'custom'].includes(actionType)) {
                    setStatusMessage('Silakan masukkan instruksi/draft terlebih dahulu.');
                    return;
                }
                
                setIsLoading(true);
                setStatusMessage('Menghubungi AI Specialist...');
                setResultText('');

                try {
                    const response = await fetch(window.bwEditorAssistant.ajaxurl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({
                            action: 'bw_editor_assistant_generate',
                            action_type: actionType || postType,
                            text_input: prompt,
                            post_id: postId,
                            image_id: imageId,
                            nonce: window.bwEditorAssistant.nonce
                        })
                    });

                    const data = await response.json();
                    if (data.success) {
                        setResultText(data.data.result);
                        setStatusMessage('Generate berhasil!');
                        
                        // Update Rank Math SEO
                        updateRankMathSEO(data.data.seo_title, data.data.seo_desc, data.data.seo_keyword);
                    } else {
                        setStatusMessage('Error: ' + (data.data.message || 'Gagal generate.'));
                    }
                } catch (e) {
                    setStatusMessage('Koneksi gagal.');
                } finally {
                    setIsLoading(false);
                }
            };

            const handleInsert = () => {
                const { insertDefaultBlock } = useDispatch('core/block-editor');
                const { parse } = wp.blocks;
                const blocks = parse(resultText);
                
                if (blocks.length > 0) {
                    useDispatch('core/block-editor').insertBlocks(blocks);
                } else {
                    // Fallback to raw HTML
                    useDispatch('core/block-editor').insertBlock(
                        wp.blocks.createBlock('core/freeform', { content: resultText })
                    );
                }
                setStatusMessage('Konten berhasil dimasukkan!');
            };

            const selectImage = () => {
                const frame = wp.media({
                    title: 'Pilih Gambar untuk Analisa AI',
                    button: { text: 'Gunakan Gambar Ini' },
                    multiple: false
                });
                frame.on('select', () => {
                    const attachment = frame.state().get('selection').first().toJSON();
                    setImageId(attachment.id);
                    setImageUrl(attachment.url);
                    setImageFilename(attachment.filename || attachment.title);
                });
                frame.open();
            };

            return wp.element.createElement(
                wp.element.Fragment,
                null,
                wp.element.createElement(PluginSidebarMoreMenuItem, { target: 'bw-editor-assistant-sidebar', icon: 'admin-generic' }, 'BW AI Assistant'),
                wp.element.createElement(
                    PluginSidebar,
                    { name: 'bw-editor-assistant-sidebar', title: 'BW AI Assistant', icon: 'admin-generic' },
                    wp.element.createElement(
                        PanelBody,
                        { title: 'AI Specialist Bengkel Wiguna', initialOpen: true },
                        wp.element.createElement(TextareaControl, {
                            label: 'Instruksi / Draft Konten:',
                            value: prompt,
                            onChange: (value) => setPrompt(value),
                            placeholder: 'Contoh: Buat artikel tentang servis kaki-kaki mobil untuk area Depok...'
                        }),
                        wp.element.createElement(
                            'div',
                            { style: { marginBottom: '15px' } },
                            wp.element.createElement(Button, { isSecondary: true, onClick: selectImage, style: { width: '100%', justifyContent: 'center' } }, 
                                imageId ? 'Ganti Gambar (' + imageFilename + ')' : 'Pilih Gambar (Opsional)'
                            )
                        ),
                        wp.element.createElement(
                            'div',
                            { style: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' } },
                            wp.element.createElement(Button, { isPrimary: true, onClick: () => handleGenerate(postType), disabled: isLoading }, 'Generate Konten Baru'),
                            wp.element.createElement(Button, { isSecondary: true, onClick: () => handleGenerate('improve'), disabled: isLoading }, 'Improve SEO')
                        ),
                        statusMessage && wp.element.createElement('p', { style: { fontSize: '12px', color: '#666', fontStyle: 'italic' } }, statusMessage),
                        isLoading && wp.element.createElement(Spinner, null),
                        resultText && wp.element.createElement('div', {
                            style: { background: '#fff', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '10px', maxHeight: '200px', overflowY: 'auto' },
                            dangerouslySetInnerHTML: { __html: resultText }
                        }),
                        resultText && wp.element.createElement(Button, { isPrimary: true, onClick: handleInsert, style: { width: '100%' } }, 'Insert ke Editor')
                    )
                )
            );
        };

        registerPlugin('bw-editor-assistant-sidebar-plugin', { render: BWAiAssistantComponent });
    }

})();
