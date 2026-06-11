#!/usr/bin/env node

/**
 * What: Validates Tailwind v4 and NextUI usage in a given file.
 * When: Use this after generating or modifying UI components in V3.
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

    // V3 uses Brand Blue (#224297) and Gold (#ffd900). Check for hardcoded arbitrary hex colors.
    const arbitraryColorRegex = /bg-\[#[0-9a-fA-F]{3,6}\]|text-\[#[0-9a-fA-F]{3,6}\]/g;
    const matches = content.match(arbitraryColorRegex);
    if (matches) {
      warnings.push(`Arbitrary colors found: ${matches.join(', ')}. Use semantic brand colors (e.g. text-brand-blue) instead.`);
    }

    // V3 uses 12px border radius -> rounded-xl in Tailwind
    // Check if generic rounded-md or rounded-sm is used excessively
    if (content.includes('rounded-md') || content.includes('rounded-sm')) {
       warnings.push('Found generic border radii (rounded-md, rounded-sm). Preferred is 12px (rounded-xl) for main containers.');
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
  console.log(JSON.stringify({ status: 'error', message: 'Usage: node validate_nextui_styles.js <path/to/component.tsx>' }));
  process.exit(1);
}

const result = validateStyles(args[0]);
console.log(JSON.stringify(result, null, 2));
