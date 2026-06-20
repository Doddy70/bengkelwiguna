# BW Headless CMS Plugin - Installation Package

**Version:** 1.8.6-FINAL
**Date:** 2026-06-20
**Size:** ~60KB

---

## 📦 Files Included

```
bw-headless-cms-v1.8.6-FINAL.zip    ← UPLOAD INI KE WORDPRESS
```

### ACF Field Group (Import via WordPress Admin)
```
acf-json/group_promosi_faq_cf7.json  ← Import via Custom Fields > Tools
```

---

## 🚀 Installation Steps

### 1. Upload Plugin
- **WordPress Admin:** Plugins → Add New → Upload Plugin → Pilih `bw-headless-cms-v1.8.6-FINAL.zip`
- **File Manager (cPanel):** Upload ke `/wp-content/plugins/` → Extract → Activate

### 2. Import ACF Field Group
1. Buka **Custom Fields** → **Tools**
2. **Import** → Pilih file `acf-json/group_promosi_faq_cf7.json`
3. Atau paste isi JSON langsung

### 3. Flush Cache
```bash
wp cache flush
wp transient delete --all
```

Atau via phpMyAdmin:
```sql
DELETE FROM wp_options WHERE option_name LIKE '_transient_bw_%';
```

---

## 🆕 What's New in v1.8.6

- ✅ FAQ Meta Box untuk post type `promosi`
- ✅ CF7 Form Selector untuk post type `promosi`
- ✅ WA Template field
- ✅ ACF JSON auto-load
- ✅ Fixed transient mismatch (v3 → v5)
- ✅ `before_delete_post` hook for proper cache clear
- ✅ REST API fields: `faq`, `syarat_ketentuan`, `cf7_form_id`, `wa_template`

---

## ⚠️ PHP Limits

Jika error upload:
```php
// wp-config.php
@ini_set('post_max_size', '64M');
@ini_set('upload_max_filesize', '64M');
```

---

**Questions?** Contact: Bengkel Wiguna Dev Team
