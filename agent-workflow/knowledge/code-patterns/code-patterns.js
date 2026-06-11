/**
 * Code Patterns Knowledge — Bengkel Wiguna Agent Workflow
 * Documented patterns for consistent code generation
 * Source: bexon/src/lib/
 * Last Updated: 2026-06-07
 */

/**
 * Fetch Function Pattern
 * Source: wordpress.js
 */
export const FETCH_PATTERN = `
/**
 * [Description]
 * @param {[type]} [param] - [description]
 * @returns {Promise<[type]>} [description] atau null pada error
 */
export async function [functionName](param) {
  return bwFetch('/[endpoint]/${param}')
}
`.trim()

/**
 * Helper Function Pattern
 * Source: wordpress.js (getFeaturedImage, stripHtml, formatDate)
 */
export const HELPER_PATTERN = `
/**
 * [Description]
 * @param {[type]} [param] - [description]
 * @returns {[type]} [description] atau [safe default]
 */
export function [functionName](param) {
  return param?.nested?.property ?? [safeDefault]
}
`.trim()

/**
 * JSDoc Template for Fetch Functions
 */
export const FETCH_JSDOC_TEMPLATE = `
/**
 * [What it does]
 * @param {[type]} [param] - [description with constraints]
 * @returns {Promise<Object|null>} [object type] atau null pada error
 * @throws {Error} [when error occurs]
 */
`.trim()

/**
 * JSDoc Template for Helper Functions
 */
export const HELPER_JSDOC_TEMPLATE = `
/**
 * [What it does]
 * @param {[type]} [param] - [description]
 * @returns {[type]} [return type] atau [safe default]
 */
`.trim()

/**
 * Error Handling Pattern
 * Source: wordpress.js, agent-workflow/utils/
 */
export const ERROR_HANDLING_PATTERN = `
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url, {
      signal: AbortController.signal,
      timeout: 30000,
    })
    if (!response.ok) {
      console.error(\`API Error: \${response.status}\`)
      return null
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch failed:', error.message)
    return null
  }
}
`.trim()

/**
 * Import Order Convention
 * Source: CONVENTIONS.md
 */
export const IMPORT_ORDER = [
  '// External dependencies (node_modules)',
  'import React from "react"',
  '',
  '// Internal dependencies',
  'import { something } from "./local"',
  'import { something } from "../utils"',
  '',
  '// Types (if using TypeScript)',
  '// import type { SomeType } from "./types"',
  '',
  '// [REST OF FILE]',
].join('\n')

/**
 * Component Pattern (Next.js App Router)
 * Source: bexon/src/app/
 */
export const COMPONENT_PATTERN = `
// 'use client' — only if using client hooks
'use client'

import { useState, useEffect } from 'react'
import styles from './Component.module.css'

// JSDoc for props
/**
 * @typedef {Object} ComponentProps
 * @property {string} [title] - Component title
 * @property {Array} [items] - List items
 */

/**
 * [Component description]
 * @param {ComponentProps} props
 */
export default function Component({ title = '', items = [] }) {
  const [state, setState] = useState(null)

  // Client-side effects
  useEffect(() => {
    // Effect logic
  }, [])

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
`.trim()

/**
 * Page Pattern (Next.js App Router with Server Components)
 * Source: bexon/src/app/
 */
export const PAGE_PATTERN = `
// No 'use client' — server component by default
import { getData } from '@/lib/wordpress'
import Component from './Component'

/**
 * @returns {Promise<JSX.Element>}
 */
export default async function Page({ params }) {
  // Fetch data on server
  const data = await getData(params.slug)

  // 404 if not found (for dynamic routes)
  if (!data) {
    notFound()
  }

  return <Component data={data} />
}

/**
 * Generate static params for SSG
 * @returns {Promise<Array<{slug: string}>>}
 */
export async function generateStaticParams() {
  const items = await getAllItems()
  return items.map(item => ({ slug: item.slug }))
}
`.trim()

/**
 * SEO Component Pattern
 * Source: seo.ts, seo-complete.ts
 */
export const SEO_PATTERN = `
import { getRankMathData } from '@/lib/wordpress'

export async function generateMetadata({ params }) {
  const data = await getData(params.slug)
  const seo = getRankMathData(data)

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [{ url: seo.ogImage }] : [],
    },
    alternates: {
      canonical: seo.canonical,
    },
  }
}
`.trim()

/**
 * Naming Conventions
 * Source: CONVENTIONS.md
 */
export const NAMING_CONVENTIONS = {
  functions: {
    getSingle: 'get{Noun}BySlug',
    getList: 'getAll{Nouns}',
    getPaginated: 'get{Nouns}ByCategory',
    generate: 'generate{Noun}Sitemap',
    format: 'format{Date|Type}',
    extract: 'get{Featured|Type}',
  },
  files: {
    components: 'PascalCase.tsx',
    utils: 'camelCase.js',
    hooks: 'use{Name}.js',
    styles: 'PascalCase.module.css',
  },
  constants: {
    env: 'UPPER_SNAKE_CASE',
    config: 'camelCase',
  },
}

/**
 * Return Value Standards
 * Source: CONVENTIONS.md
 */
export const RETURN_STANDARDS = {
  singleItem: {
    success: 'Object with all fields',
    error: 'null',
    example: 'const data = await getServiceBySlug(slug) // null or object',
  },
  list: {
    success: 'Array of items',
    error: '[]',
    example: 'const services = await getAllServices() // [] or array',
  },
  paginated: {
    success: '{ posts: [], total: N, totalPages: M }',
    error: '{ posts: [], total: 0, totalPages: 0 }',
    example: 'const result = await getPosts(page, perPage)',
  },
  helper: {
    success: 'typed value (string, number, etc.)',
    error: 'safe default (null, "", 0, [])',
    example: 'const url = getFeaturedImage(post) // null or string',
  },
}

export default {
  FETCH_PATTERN,
  HELPER_PATTERN,
  FETCH_JSDOC_TEMPLATE,
  HELPER_JSDOC_TEMPLATE,
  ERROR_HANDLING_PATTERN,
  IMPORT_ORDER,
  COMPONENT_PATTERN,
  PAGE_PATTERN,
  SEO_PATTERN,
  NAMING_CONVENTIONS,
  RETURN_STANDARDS,
}