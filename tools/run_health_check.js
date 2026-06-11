#!/usr/bin/env node
/**
 * What: Verifies the connectivity of a local or remote URL.
 * When: Used by health-check-agent to confirm build accessibility.
 * When Not: Do not use for testing complex user flows or stateful interactions.
 * Returns: { status: 'ok', url, statusCode, timestamp }
 */
const { withRetry } = require('../utils/with-retry');
const http = require('http');
const https = require('https');

const targetUrl = process.argv[2] || 'http://localhost:3000';

async function checkUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ statusCode: res.statusCode });
      } else {
        reject(new Error(`URL returned status code: ${res.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

(async () => {
  try {
    const result = await withRetry(() => checkUrl(targetUrl), {
      maxRetries: 3,
      initialDelay: 1000,
      retryableErrors: ['ECONNREFUSED', 'ETIMEDOUT']
    });

    console.log(JSON.stringify({
      status: 'ok',
      url: targetUrl,
      statusCode: result.statusCode,
      timestamp: new Date().toISOString()
    }));
  } catch (err) {
    console.error(JSON.stringify({
      status: 'error',
      url: targetUrl,
      message: err.message,
      code: err.code || 'HEALTH_CHECK_FAILED'
    }));
    process.exit(1);
  }
})();
