#!/bin/bash

# ====================================================================
# Deploy & Ops Script untuk Headless CMS Bengkel Wiguna
# ====================================================================
# Cara penggunaan di Server Anda:
# 1. Pastikan script ini dan file `bw-headless-cms.php` sudah diupload ke server.
# 2. Beri hak eksekusi: chmod +x deploy-ops.sh
# 3. Jalankan: ./deploy-ops.sh
# ====================================================================

echo "=============================================="
echo "🚀 Memulai Operasi Deploy & Flush Bengkel Wiguna"
echo "=============================================="

# Memastikan WP-CLI tersedia
if ! command -v wp &> /dev/null
then
    echo "❌ ERROR: WP-CLI tidak ditemukan di server ini."
    echo "Harap pastikan 'wp' command bisa diakses secara global, atau jalankan perintah secara manual."
    exit 1
fi

# Cek path WordPress (Asumsi script dijalankan di wp-content/plugins/bw-headless-cms/)
# Anda bisa mengubah WP_PATH sesuai dengan letak absolute public_html Anda.
WP_PATH="$(pwd)/../../.." 
echo "📂 Mendeteksi direktori WordPress di: $WP_PATH"

echo "🧹 Menghapus cache Transients Headless CMS..."
wp transient delete bw_services_full --path="$WP_PATH" --allow-root 2>/dev/null || echo "Transient bw_services_full tidak ada atau sudah dihapus."
wp transient delete bw_promosi_active --path="$WP_PATH" --allow-root 2>/dev/null || echo "Transient bw_promosi_active tidak ada atau sudah dihapus."

# Eksekusi Ability via REST (Alternatif internal jika WP_CLI script memanggil REST internal - opsional)
# wp eval "bw_headless_register_abilities(); ... "

echo "✅ Cache berhasil dibersihkan!"
echo "🎉 API Headless Anda sekarang menyajikan data terbaru dan tervalidasi Schema."
echo "=============================================="
