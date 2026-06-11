#!/usr/bin/env node

/**
 * What: Analyzes a Next.js component in bexon/ to check for Bexon architecture compliance.
 * When: Use this before modifying or creating components in bexon/.
 * When Not: Do not use this for nextjs-v3 template files.
 * Returns: JSON object with dependency check results.
 */

const fs = require('fs');
const path = require('path');

function analyzeComponent(filePath) {
  try {
    const fullPath = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      return { status: 'error', message: `File not found: ${filePath}` };
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check for prohibited NextUI/Tailwind imports
    const hasNextUI = content.includes('@nextui-org/react');
    const hasTailwind = content.includes('tailwindcss') || (content.includes('className=') && content.match(/className=(['"]).*\b(rounded-xl|rounded-lg|flex-col|grid-cols-\d+|gap-\d+|items-center|justify-between|w-full)\b.*(['"])/) && !content.includes('bootstrap') && !content.includes('row') && !content.includes('col-'));

    // Check for standard fetch wrappers
    const usesNativeFetch = content.match(/\bfetch\s*\(/) && !content.includes('wpFetch') && !content.includes('bwFetch');
    const usesWpFetch = content.includes('wpFetch') || content.includes('bwFetch') || content.includes('gqlFetch');

    // Check for Bootstrap class indicators
    const hasBootstrap = content.match(/className=(['"]).*\b(row|col-|container|card|btn|d-flex|justify-content|align-items)\b.*(['"])/);

    return {
      status: 'success',
      file: filePath,
      analysis: {
        hasProhibitedNextUI: hasNextUI,
        hasProhibitedTailwind: !!hasTailwind,
        usesNativeFetchDirectly: !!usesNativeFetch,
        usesStandardWpFetch: usesWpFetch,
        usesBootstrap: !!hasBootstrap,
        isBexonCompliant: !hasNextUI && !hasTailwind && !usesNativeFetch
      }
    };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(JSON.stringify({ status: 'error', message: 'Usage: node analyze_bexon_components.js <path/to/component.js>' }));
  process.exit(1);
}

const result = analyzeComponent(args[0]);
console.log(JSON.stringify(result, null, 2));
