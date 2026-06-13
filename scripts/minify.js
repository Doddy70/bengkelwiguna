const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const terser = require('terser');

async function processFiles() {
  console.log('🚀 Starting minification process...');

  // Minify CSS in src/styles/
  const stylesDir = path.join(process.cwd(), 'src/styles');
  if (fs.existsSync(stylesDir)) {
    const cssFiles = fs.readdirSync(stylesDir).filter(f => f.endsWith('.css') && !f.endsWith('.min.css'));
    for (const file of cssFiles) {
      const inputPath = path.join(stylesDir, file);
      const outputPath = path.join(stylesDir, file.replace('.css', '.min.css'));
      const css = fs.readFileSync(inputPath, 'utf8');
      
      try {
        const result = await postcss([cssnano]).process(css, { from: inputPath, to: outputPath });
        fs.writeFileSync(outputPath, result.css);
        console.log(`✅ Minified CSS: ${file} -> ${path.basename(outputPath)}`);
      } catch (err) {
        console.error(`❌ Error minifying ${file}:`, err);
      }
    }
  }

  // Minify JS in scripts/
  const scriptsDir = path.join(process.cwd(), 'scripts');
  if (fs.existsSync(scriptsDir)) {
    const jsFiles = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.js') && !f.endsWith('.min.js'));
    for (const file of jsFiles) {
      const inputPath = path.join(scriptsDir, file);
      const outputPath = path.join(scriptsDir, file.replace('.js', '.min.js'));
      const code = fs.readFileSync(inputPath, 'utf8');
      
      try {
        const minified = await terser.minify(code);
        if (minified.code) {
          fs.writeFileSync(outputPath, minified.code);
          console.log(`✅ Minified JS: ${file} -> ${path.basename(outputPath)}`);
        }
      } catch (err) {
        console.error(`❌ Error minifying ${file}:`, err);
      }
    }
  }

  console.log('✨ Minification complete!');
}

processFiles().catch(err => {
  console.error('💥 Minification failed:', err);
  process.exit(1);
});
