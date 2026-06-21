// ✅ Server component shell — force-dynamic prevents SSG on this dev-only route
// Components inside preview-ui access WP data (blogPosts.slug) that is undefined at build time
export const dynamic = 'force-dynamic';

import PreviewUIClient from './PreviewUIClient';

export default function PreviewUIPage() {
  return <PreviewUIClient />;
}
