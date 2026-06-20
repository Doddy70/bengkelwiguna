-- ============================================
-- BW Headless CMS Cache Cleanup Script
-- Run via phpMyAdmin SQL tab or WP-CLI
-- ============================================

-- 1. Clear all BW transients
DELETE FROM wp_options WHERE option_name LIKE '_transient_bw_%';
DELETE FROM wp_options WHERE option_name LIKE '_transient_timeout_bw_%';

-- 2. Clear all WordPress transients (cleanup orphan)
DELETE FROM wp_options WHERE option_name LIKE '_transient_%' AND option_name NOT LIKE '%_transient_timeout_%';

-- 3. Clear site transients
DELETE FROM wp_options WHERE option_name LIKE '_site_transient_%';
DELETE FROM wp_options WHERE option_name LIKE '_transient_timeout_site_transient_%';

-- 4. Clear Vercel Edge Cache: deploy ulang atau via Vercel Dashboard → Cache → Purge Everything

-- 5. After cleanup, buka frontend untuk populate cache baru
