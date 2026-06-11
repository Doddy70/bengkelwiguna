/**
 * Content Migration Script - Bengkel Wiguna
 * Fetches all content from WordPress and saves to local files
 *
 * Usage: node scripts/migrate-content.mjs
 *
 * This script will:
 * 1. Fetch all pages, posts, services, and promotions from WordPress
 * 2. Download all media files to public/images/migrated/
 * 3. Generate URL replacement map
 * 4. Save all data as JSON files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import { pipeline } from 'stream/promises';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_URL || 'https://backend.bengkelwiguna.com/wp-json/wp/v2';
const OUTPUT_DIR = path.join(__dirname, '..', 'migration-data');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'migrated');

// Ensure directories exist
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(IMAGES_DIR, { recursive: true });

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Fetch with timeout and error handling
 */
async function fetchWithTimeout(url, options = {}, timeout = 30000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Download file from URL
 */
async function downloadFile(url, filepath) {
  if (fs.existsSync(filepath)) {
    console.log(`  ⏭️  Skip (exists): ${path.basename(filepath)}`);
    return filepath;
  }

  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;
    const options = {
      agent: protocol === https ? httpsAgent : undefined
    };

    const request = protocol.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        file.close();
        fs.unlink(filepath, () => {}); // clean up partial file
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      pipeline(response, file)
        .then(() => {
          console.log(`  ✅ Downloaded: ${path.basename(filepath)}`);
          resolve(filepath);
        })
        .catch((err) => {
          file.close();
          fs.unlink(filepath, () => {});
          reject(err);
        });
    });

    request.on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });

    request.setTimeout(15000, () => {
      request.destroy();
      file.close();
      fs.unlink(filepath, () => {});
      reject(new Error('TIMEOUT'));
    });
  });
}

/**
 * Download file with robust exponential backoff retry controls
 */
async function downloadFileWithRetry(url, filepath, retries = 3, initialDelay = 1000) {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      await downloadFile(url, filepath);
      return filepath;
    } catch (error) {
      attempt++;
      if (attempt > retries) {
        throw error;
      }
      const backoffDelay = initialDelay * Math.pow(2, attempt - 1);
      console.warn(`    ⚠️  Download failed: ${error.message}. Retrying in ${backoffDelay}ms (attempt ${attempt}/${retries})...`);
      await sleep(backoffDelay);
    }
  }
}

/**
 * Fetch all pages (handle pagination)
 */
async function fetchAll(endpoint, params = {}) {
  let page = 1;
  let allItems = [];
  const baseUrl = `${WP_API_BASE}${endpoint}`;

  while (true) {
    const url = new URL(baseUrl);
    url.searchParams.set('per_page', '100');
    url.searchParams.set('page', page);
    url.searchParams.set('_embed', '1');

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    console.log(`  Fetching page ${page}...`);

    try {
      const response = await fetchWithTimeout(url.toString());

      if (!response.ok) {
        console.warn(`  ⚠️  Response ${response.status}, stopping pagination`);
        break;
      }

      const items = await response.json();

      if (!items || !items.length || !Array.isArray(items)) {
        break;
      }

      allItems = [...allItems, ...items];

      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      console.log(`  Found ${items.length} items (page ${page}/${totalPages})`);

      if (page >= totalPages) break;
      page++;

      // Rate limiting
      await sleep(200);
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
      break;
    }
  }

  return allItems;
}

/**
 * Extract image URLs from HTML content
 */
function extractImageUrls(htmlContent) {
  if (!htmlContent) return [];

  const regex = /https?:\/\/[^\s"')>]+wp-content\/uploads\/[^\s"')>]+\.(jpg|jpeg|png|webp|gif|svg)/gi;
  return [...new Set(htmlContent.match(regex) || [])];
}

/**
 * Sleep utility
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format number with commas
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ============================================
// MAIN MIGRATION FUNCTION
// ============================================

async function migrate() {
  console.log('\n🚀 Bengkel Wiguna - Content Migration Script');
  console.log('═'.repeat(50));
  console.log(`📡 WordPress API: ${WP_API_BASE}`);
  console.log(`📁 Output Directory: ${OUTPUT_DIR}`);
  console.log(`🖼️  Images Directory: ${IMAGES_DIR}`);
  console.log('═'.repeat(50) + '\n');

  const imageLog = [];
  const urlReplacementMap = {};

  try {
    // ============================================
    // 1. FETCH ALL PAGES
    // ============================================
    console.log('📄 [1/6] Fetching Pages...');
    console.log('─'.repeat(30));

    const pages = await fetchAll('/pages');
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'pages.json'),
      JSON.stringify(pages, null, 2)
    );
    console.log(`✅ Saved ${pages.length} pages to migration-data/pages.json\n`);

    // ============================================
    // 2. FETCH ALL POSTS (Blog)
    // ============================================
    console.log('📝 [2/6] Fetching Blog Posts...');
    console.log('─'.repeat(30));

    const posts = await fetchAll('/posts');
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'posts.json'),
      JSON.stringify(posts, null, 2)
    );
    console.log(`✅ Saved ${posts.length} posts to migration-data/posts.json\n`);

    // ============================================
    // 3. FETCH MEDIA LIBRARY
    // ============================================
    console.log('🖼️  [3/6] Fetching Media Library...');
    console.log('─'.repeat(30));

    const media = await fetchAll('/media');
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'media.json'),
      JSON.stringify(media, null, 2)
    );
    console.log(`✅ Saved ${media.length} media items to migration-data/media.json\n`);

    // ============================================
    // 4. FETCH CUSTOM POST TYPES
    // ============================================
    console.log('📦 [4/6] Fetching Custom Post Types...');
    console.log('─'.repeat(30));

    // Try to fetch services
    try {
      const services = await fetchAll('/services');
      if (services.length > 0) {
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'services.json'),
          JSON.stringify(services, null, 2)
        );
        console.log(`✅ Saved ${services.length} services to migration-data/services.json`);
      } else {
        console.log('⚠️  No services found (CPT may not be exposed in REST API)');
      }
    } catch (e) {
      console.warn('⚠️  Could not fetch services CPT');
    }

    // Try to fetch promosi
    try {
      const promos = await fetchAll('/promosi');
      if (promos.length > 0) {
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'promosi.json'),
          JSON.stringify(promos, null, 2)
        );
        console.log(`✅ Saved ${promos.length} promotions to migration-data/promosi.json`);
      } else {
        console.log('⚠️  No promotions found (CPT may not be exposed in REST API)');
      }
    } catch (e) {
      console.warn('⚠️  Could not fetch promosi CPT');
    }
    console.log('');

    // ============================================
    // 5. DOWNLOAD IMAGES FROM MEDIA LIBRARY
    // ============================================
    console.log('⬇️  [5/6] Downloading Media Files in Parallel...');
    console.log('─'.repeat(30));

    let downloadedCount = 0;
    let skippedCount = 0;

    const BATCH_SIZE = 5;
    console.log(`  Processing parallel downloads in batches of ${BATCH_SIZE}...`);

    for (let i = 0; i < media.length; i += BATCH_SIZE) {
      const batch = media.slice(i, i + BATCH_SIZE);

      await Promise.all(
        batch.map(async (item) => {
          if (!item.source_url) return;

          const url = item.source_url;
          const filename = path.basename(url);
          const filepath = path.join(IMAGES_DIR, filename);

          try {
            await downloadFileWithRetry(url, filepath);
            downloadedCount++;

            imageLog.push({
              id: item.id,
              originalUrl: url,
              localPath: `/images/migrated/${filename}`,
              alt: item.alt_text || '',
              title: item.title?.rendered || '',
              width: item.media_details?.width,
              height: item.media_details?.height,
            });

            urlReplacementMap[url] = `/images/migrated/${filename}`;
          } catch (error) {
            console.error(`  ❌ Failed: ${url} — ${error.message}`);
            skippedCount++;
          }
        })
      );

      // Short delay between batches
      await sleep(200);
    }

    console.log(`\n📊 Media download: ${downloadedCount} downloaded, ${skippedCount} skipped`);
    console.log('');

    // ============================================
    // 6. SCAN AND DOWNLOAD INLINE IMAGES
    // ============================================
    console.log('🔍 [6/6] Scanning Inline Images in Content...');
    console.log('─'.repeat(30));

    const allContent = [
      ...pages.map((p) => p.content?.rendered || ''),
      ...posts.map((p) => p.content?.rendered || ''),
    ].join(' ');

    const inlineImageUrls = extractImageUrls(allContent);
    const inlineUrlsToDownload = inlineImageUrls.filter(url => !urlReplacementMap[url]);
    console.log(`Found ${inlineImageUrls.length} unique image URLs in content (${inlineUrlsToDownload.length} to download)`);

    let inlineDownloaded = 0;
    console.log(`  Processing parallel inline image downloads in batches of ${BATCH_SIZE}...`);

    for (let i = 0; i < inlineUrlsToDownload.length; i += BATCH_SIZE) {
      const batch = inlineUrlsToDownload.slice(i, i + BATCH_SIZE);

      await Promise.all(
        batch.map(async (url) => {
          const filename = `inline_${path.basename(url)}`;
          const filepath = path.join(IMAGES_DIR, filename);

          try {
            await downloadFileWithRetry(url, filepath);
            inlineDownloaded++;

            imageLog.push({
              originalUrl: url,
              localPath: `/images/migrated/${filename}`,
              type: 'inline',
            });

            urlReplacementMap[url] = `/images/migrated/${filename}`;
          } catch (error) {
            console.error(`  ❌ Failed: ${url} — ${error.message}`);
          }
        })
      );

      await sleep(200);
    }

    console.log(`Inline images: ${inlineDownloaded} downloaded\n`);

    // ============================================
    // SAVE IMAGE LOG AND URL MAP
    // ============================================
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'image-map.json'),
      JSON.stringify(imageLog, null, 2)
    );
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'url-replacement-map.json'),
      JSON.stringify(urlReplacementMap, null, 2)
    );

    // ============================================
    // GENERATE SUMMARY
    // ============================================
    console.log('═'.repeat(50));
    console.log('✅ MIGRATION COMPLETED!');
    console.log('═'.repeat(50));
    console.log('\n📁 Files Generated:');
    console.log('   • migration-data/pages.json');
    console.log('   • migration-data/posts.json');
    console.log('   • migration-data/media.json');
    console.log('   • migration-data/services.json (if available)');
    console.log('   • migration-data/promosi.json (if available)');
    console.log('   • migration-data/image-map.json');
    console.log('   • migration-data/url-replacement-map.json');
    console.log('\n📊 Summary:');
    console.log(`   • Pages: ${formatNumber(pages.length)}`);
    console.log(`   • Posts: ${formatNumber(posts.length)}`);
    console.log(`   • Media: ${formatNumber(media.length)}`);
    console.log(`   • Images Downloaded: ${formatNumber(imageLog.length)}`);
    console.log('\n🖼️  Images Location:');
    console.log(`   public/images/migrated/`);
    console.log('═'.repeat(50));

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run migration
migrate().catch(console.error);