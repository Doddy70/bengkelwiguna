async function test() {
  const res = await fetch('https://backend.bengkelwiguna.com/wp-json/wp/v2/posts?page=1&per_page=3&_embed=1&_fields=id,slug,title,excerpt,date,modified,link,_embedded');
  const data = await res.json();
  data.forEach(post => {
    console.log(`ID: ${post.id}`);
    console.log(`Title: ${post.title.rendered}`);
    console.log(`Featured Media: ${post?._embedded?.['wp:featuredmedia']?.[0]?.source_url}`);
    console.log("-------------------");
  });
}
test();
