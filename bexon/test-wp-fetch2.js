async function test() {
  const res = await fetch('https://backend.bengkelwiguna.com/wp-json/wp/v2/posts?page=1&per_page=1&_embed=1&_fields=id,slug,title,excerpt,date,modified,link,_embedded,featured_media');
  const data = await res.json();
  data.forEach(post => {
    console.log(`Featured Media: ${post?._embedded?.['wp:featuredmedia']?.[0]?.source_url}`);
  });
}
test();
