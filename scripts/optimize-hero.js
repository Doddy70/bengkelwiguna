const sharp = require('sharp');
const path = require('path');

const input = 'public/images/hero-main.jpg';
const outputDir = 'public/images';

async function optimizeHero() {
  console.log('🚀 Optimizing hero image...');

  try {
    // 1. Desktop (Original Width or 1920)
    await sharp(input)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'hero-desktop.webp'));
    console.log('✅ Created hero-desktop.webp');

    // 2. Tablet (1200px)
    await sharp(input)
      .resize(1200)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'hero-tablet.webp'));
    console.log('✅ Created hero-tablet.webp');

    // 3. Mobile (600px)
    await sharp(input)
      .resize(600)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'hero-mobile.webp'));
    console.log('✅ Created hero-mobile.webp');

    console.log('✨ Hero optimization complete!');
  } catch (err) {
    console.error('❌ Error during optimization:', err);
    process.exit(1);
  }
}

optimizeHero();
