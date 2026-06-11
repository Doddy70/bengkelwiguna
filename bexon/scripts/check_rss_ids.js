const https = require('https');

const ids = [
  'UC8aLawn1bvqzg7CHfWr6w0Q',
  'UCEJGtEhgDIhMIwIus6eXslA',
  'UCEJmNBRgCIhMIwIus6eXslA',
  'UCEJmNBRgGIhMIwIus6eXslA',
  'UCEJmNBRgKIhMIwIus6eXslA',
  'UCEPBbIhMIwIus6eXslAMVMA',
  'UCEkoAd31OYdnCrzXElMaVdZ',
  'UCRbu6kIdjIDzXevuqgFOdNM',
  'UChJEN1hcsPvD1NJwv8z5UWB',
  'UCwKX2iHqTLg8vsIOJu5R42h'
];

async function checkIds() {
  for (const id of ids) {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${id}`;
    await new Promise((resolve) => {
      https.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      }, (res) => {
        console.log(`ID: ${id} -> Status: ${res.statusCode}`);
        if (res.statusCode === 200) {
          console.log(`  SUCCESS FOR ID: ${id}`);
        }
        resolve();
      }).on('error', () => {
        resolve();
      });
    });
  }
}

checkIds();
