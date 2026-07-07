# ============================================
# PANDUAN INSTALASI NGINX + SMUSH WEBP
# Server: backend.bengkelwiguna.com
# ============================================

## 🇮🇩 Langkah di Server aaPanel Anda

### 1. Cek Struktur Folder

Di **aaPanel Terminal**, jalankan:

```bash
# Cek struktur folder
ls -la /www/wwwroot/backend.bengkelwiguna.com/
```

### 2. Cek Apakah Sudah Ada nginx.conf

```bash
cat /www/wwwroot/backend.bengkelwiguna.com/nginx.conf 2>/dev/null || echo "nginx.conf TIDAK ADA"
```

### 3. Paste Output ke Sini

Paste hasilnya, dan saya akan generate config yang tepat untuk server Anda.

---

## 📁 File yang Sudah Saya Siapkan

Di localhost ini sudah siap:

```
server-configs/
├── docker-compose.yml          # Docker Compose template
├── smush-webp.conf            # Simple Smush WebP config
└── nginx/
    ├── nginx.conf             # Main nginx config
    └── conf.d/
        └── backend.conf       # WordPress site config + Smush WebP
```

---

## 🆘 Jika aaPanel Pakai Nginx Bawaan

Jika aaPanel punya nginx sendiri di `/www/server/nginx/`:

```bash
# Cek config nginx aaPanel
ls -la /www/server/nginx/conf/

# Edit via aaPanel → Web Server → Nginx → Configuration
```

---

## ⏳ Tunggu Input Anda

Silakan jalankan perintah di atas di aaPanel Terminal dan paste hasilnya!
