#!/usr/bin/env node
/**
 * What: Prints a greeting or returns JSON greeting
 * When: Use for basic connectivity checks
 * When Not: Do not use for I/O-heavy tasks
 * Returns: { status: 'ok', greeting, timestamp }
 */
const payload = process.argv[2] || 'world';

try {
  // Simple check
  if (payload === 'error') {
    throw new Error('Simulated tool failure');
  }

  console.log(JSON.stringify({
    status: 'ok',
    greeting: `hello ${payload}`,
    timestamp: new Date().toISOString()
  }));
} catch (err) {
  console.error(JSON.stringify({
    status: 'error',
    message: err.message,
    code: err.code || 'UNKNOWN_ERROR'
  }));
  process.exit(1);
}
