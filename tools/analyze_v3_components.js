#!/usr/bin/env node

/**
 * What: Analyzes a Next.js component to check for V3 architecture compliance.
 * When: Use this before modifying or creating components in bengkel-wiguna-nextjs/.
 * When Not: Do not use this for the bexon/ directory.
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
    
    // Check for required NextUI imports
    const hasNextUI = content.includes('@nextui-org/react');
    
    // Check for prohibited Bootstrap imports (V3 should not use Bootstrap)
    const hasBootstrap = content.includes('bootstrap') || content.match(/className=(['"]).*\b(row|col-|container-fluid|p-3)\b.*(['"])/);
    
    return {
      status: 'success',
      file: filePath,
      analysis: {
        usesNextUI: hasNextUI,
        usesProhibitedBootstrap: !!hasBootstrap,
        isV3Compliant: hasNextUI && !hasBootstrap
      }
    };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(JSON.stringify({ status: 'error', message: 'Usage: node analyze_v3_components.js <path/to/component.tsx>' }));
  process.exit(1);
}

const result = analyzeComponent(args[0]);
console.log(JSON.stringify(result, null, 2));
