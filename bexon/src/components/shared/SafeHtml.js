import DOMPurify from 'isomorphic-dompurify';

/**
 * SafeHtml component for rendering sanitized HTML content.
 * Prevents XSS attacks by sanitizing input before using dangerouslySetInnerHTML.
 * 
 * @param {string} html - The raw HTML string to sanitize and render
 * @param {string} as - The HTML tag to use as a wrapper (default: 'div')
 * @param {object} props - Additional props passed to the wrapper tag
 */
export default function SafeHtml({ html, as: Tag = 'div', ...props }) {
  if (!html) return null;
  
  // Sanitize the HTML string to remove potentially dangerous scripts
  const sanitizedHtml = DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe'], // Allow iframes for youtube embeds
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  });

  return <Tag dangerouslySetInnerHTML={{ __html: sanitizedHtml }} {...props} />;
}
