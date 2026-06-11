#!/usr/bin/env node

/**
 * What: Validates Bootstrap 5.3 and brand style usage in a given bexon/ file.
 * When: Use this after generating or modifying UI components in bexon/.
 * When Not: Do not use this for logic-only files.
 * Returns: JSON object with validation results and warnings.
 */

const fs = require('fs');
const path = require('path');

function validateStyles(filePath) {
  try {
    const fullPath = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      return { status: 'error', message: `File not found: ${filePath}` };
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    const warnings = [];

    // Bexon uses Brand Blue (#224297) and Gold (#ffd900). Check for arbitrary non-brand hex colors.
    // Allow the specific brand colors but flag others.
    const arbitraryColorRegex = /#([0-9a-fA-F]{3,6})/g;
    let match;
    const allowedBrandColors = ['#224297', '#ffd900', '#224297'.toLowerCase(), '#ffd900'.toLowerCase()];
    while ((match = arbitraryColorRegex.exec(content)) !== null) {
      const color = match[0];
      // Skip common colors like white, black, transparent
      const isCommon = ['#fff', '#ffffff', '#000', '#000000', '#fff000'].includes(color.toLowerCase());
      const isBrand = allowedBrandColors.includes(color.toLowerCase());
      if (!isBrand && !isCommon) {
        warnings.push(`Arbitrary color found: ${color}. Use Bexon brand colors (#224297 / #ffd900) or CSS utility classes (e.g. text-brand-blue).`);
      }
    }

    // Bexon uses 12px border radius -> brand-rounded
    // Check if the component does not mention brand-rounded or border-radius: 12px / 0.75rem
    if (!content.includes('brand-rounded') && !content.includes('border-radius: 12px') && !content.includes('borderRadius: 12') && !content.includes('border-radius: 0.75rem')) {
       // Only warn if the component has cards or containers that should be rounded
       if (content.includes('card') || content.includes('container') || content.includes('box')) {
         warnings.push('Component contains containers but does not use brand-rounded or 12px border radius.');
       }
    }

    return {
      status: 'success',
      file: filePath,
      validation: {
        isValid: warnings.length === 0,
        warnings: warnings
      }
    };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(JSON.stringify({ status: 'error', message: 'Usage: node validate_bexon_styles.js <path/to/component.js>' }));
  process.exit(1);
}

const result = validateStyles(args[0]);
console.log(JSON.stringify(result, null, 2));
