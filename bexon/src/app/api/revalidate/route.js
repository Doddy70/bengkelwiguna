/**
 * On-Demand ISR Revalidation API Route
 * Endpoint: POST /api/revalidate
 *
 * Accepts:
 *   { "path": "/", "secret": "..." }         → revalidatePath
 *   { "tags": ["services"], "secret": "..." } → revalidateTag
 *
 * Called by: WordPress bw-headless-cms plugin (auto on content change)
 * Also callable manually for admin-triggered revalidation.
 */

import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || '';

/**
 * Validate secret token
 */
function validateSecret(secret) {
  if (!REVALIDATE_SECRET) return true; // Skip if not configured
  if (!secret) return false;
  return secret === REVALIDATE_SECRET;
}

/**
 * GET — health check / info
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Revalidation endpoint active. Use POST to trigger.',
    usage: {
      method: 'POST',
      body: {
        path: 'string (optional, revalidate single path)',
        paths: 'string[] (optional, revalidate multiple paths)',
        tags: 'string[] (optional, revalidate by cache tags)',
        secret: 'string (required if REVALIDATE_SECRET is set)',
      },
      examples: [
        'POST { "path": "/", "secret": "..." }',
        'POST { "tags": ["services"], "secret": "..." }',
        'POST { "paths": ["/", "/services/"], "secret": "..." }',
      ],
    },
  });
}

/**
 * POST — trigger revalidation
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));

    const secret  = body?.secret ?? '';
    const paths  = Array.isArray(body?.paths) ? body.paths : [];
    const tags   = Array.isArray(body?.tags)  ? body.tags  : [];
    const singlePath = typeof body?.path === 'string' ? body.path : null;

    // Validate secret
    if (!validateSecret(secret)) {
      return NextResponse.json(
        { error: 'Invalid or missing revalidation secret.', status: 401 },
        { status: 401 }
      );
    }

    // Validate request has at least one target
    if (!singlePath && paths.length === 0 && tags.length === 0) {
      return NextResponse.json(
        { error: 'Must provide at least one: path, paths[], or tags[].', status: 400 },
        { status: 400 }
      );
    }

    const results = {
      paths: [],
      tags: [],
      errors: [],
    };

    // --- Path-based revalidation ---
    const allPaths = singlePath ? [singlePath, ...paths] : paths;

    for (const p of allPaths) {
      const cleanPath = '/' + p.replace(/^\/+/, ''); // Normalize to leading slash

      try {
        revalidatePath(cleanPath);
        results.paths.push(cleanPath);
      } catch (err) {
        console.error(`[revalidate] path failed: ${cleanPath}`, err.message);
        results.errors.push(`path:${cleanPath} — ${err.message}`);
      }
    }

    // --- Tag-based revalidation ---
    for (const tag of tags) {
      const cleanTag = String(tag).trim();
      if (!cleanTag) continue;

      try {
        revalidateTag(cleanTag);
        results.tags.push(cleanTag);
      } catch (err) {
        console.error(`[revalidate] tag failed: ${cleanTag}`, err.message);
        results.errors.push(`tag:${cleanTag} — ${err.message}`);
      }
    }

    // Report
    const total = results.paths.length + results.tags.length;
    const hasErrors = results.errors.length > 0;
    const status = hasErrors ? (total > 0 ? 207 : 500) : 200;

    console.log('[revalidate] done', {
      paths: results.paths,
      tags: results.tags,
      errors: results.errors.length,
    });

    return NextResponse.json(
      {
        success: !hasErrors,
        revalidated: total,
        message: hasErrors
          ? `Revalidated ${total} items with ${results.errors.length} error(s).`
          : `Successfully revalidated ${total} item(s).`,
        results,
      },
      { status }
    );

  } catch (err) {
    console.error('[revalidate] unexpected error:', err);
    return NextResponse.json(
      { error: 'Internal revalidation error.', message: err.message, status: 500 },
      { status: 500 }
    );
  }
}