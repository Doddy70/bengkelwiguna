require('dotenv').config({ path: '.env.local' });
const { getAllPosts } = require('./src/lib/wordpress.js');

async function test() {
  const result = await getAllPosts(1, 3);
  result.posts.forEach(post => {
     console.log('Post:', post.title?.rendered || post.title);
     console.log('Featured Media URL:', post?._embedded?.['wp:featuredmedia']?.[0]?.source_url);
  });
}
test();
