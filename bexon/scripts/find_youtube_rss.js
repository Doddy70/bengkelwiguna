const req = require('https').get('https://www.youtube.com/@BengkelWiguna', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Search for rel="alternate" type="application/rss+xml"
    const match = data.match(/href="([^"]+videos\.xml\?channel_id=[^"]+)"/);
    if (match) {
      console.log("FOUND RSS URL:", match[1]);
    } else {
      console.log("RSS URL NOT FOUND");
      // Search for any channel_id=
      const idMatch = data.match(/channel_id=(UC[A-Za-z0-9_-]{22})/);
      if (idMatch) {
        console.log("FOUND channel_id parameter:", idMatch[1]);
      } else {
        // Look for externalid
        const extMatch = data.match(/"externalId"\s*:\s*"(UC[A-Za-z0-9_-]{22})"/);
        if (extMatch) {
          console.log("FOUND externalId:", extMatch[1]);
        } else {
          console.log("No ID found in head.");
        }
      }
    }
  });
});
