import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "scripts/**",
      "*.js",
      "*.mjs",
      "bw-headless-cms/**",
      "Exist/**",
      "design-system/**",
      ".augment/**",
      ".claude/**",
      "_archived_files/**",
      ".agents/**",
      "aapanel-deployment/**",
      ".vercel/**",
      // Sandbox/experimental code
      "kumpulan_ui/**",
      "scratch_*.tsx",
      "scratch_*.ts",
      "test*.tsx",
      "test*.ts",
      "fix_*.js",
      "rebuild_*.js",
      "rewrite_*.js",
      "generate_preview.js",
      "capture_screenshot.js",
      "fix_coordinates.js",
      "fix_offsets.js",
      "fix_right_panel.js",
      "fix_modern_equipment.js",
      "fix_syntax.js",
      "update_equipment*.js",
      "find_hotspots.py",
      "calculate_exact_hotspots*.py",
      "extract_circles.py",
      "draw_debug.py",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@next/next/no-img-element': 'off',
      // Allow unescaped entities in JSX content (blog posts, etc.)
      'react/no-unescaped-entities': 'off',
      // Allow empty object types for TypeScript interfaces
      '@typescript-eslint/no-empty-object-type': 'off',
      // Allow require() for specific cases
      '@typescript-eslint/no-require-imports': 'off',
      // Allow <a> tags for specific use cases (external links)
      '@next/next/no-html-link-for-pages': 'off',
      // Allow this aliasing (common in JavaScript targets)
      '@typescript-eslint/no-this-alias': 'off',
      // Allow @ts-ignore for backward compatibility
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];

export default eslintConfig;
