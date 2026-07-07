# Deploy Bengkel Wiguna ke aapanel dengan Docker

## Arsitektur

```
┌─────────────────────────────────────────────────────────┐
│  Server aapanel (148.230.101.241)                       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  WordPress Backend (Nginx + PHP + MySQL)         │   │
│  │  Domain: backend.bengkelwiguna.com               │   │
│  │  Port: 443 (SSL)                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                          ↑                              │
│                          │ REST API                     │
│                          ↓                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Next.js Frontend (Docker Container)             │   │
│  │  Domain: bengkelwiguna.com                      │   │
│  │  Port: 3000 → Nginx Reverse Proxy → :443         │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Prerequisites

1. **aapanel** sudah terinstall dengan Docker Manager
2. **Domain/Subdomain** sudah configured:
   - `bengkelwiguna.com` → IP server
   - `backend.bengkelwiguna.com` → IP server
3. **SSL Certificates** untuk kedua domain (via Let's Encrypt)
4. **WordPress Backend** sudah running di aapanel

---

## Step-by-Step Deployment

### Step 1: Upload Project ke Server

```bash
# SSH ke server aapanel
ssh root@148.230.101.241

# Buat direktori untuk frontend
mkdir -p /www/wwwroot/bengkelwiguna
cd /www/wwwroot/bengkelwiguna

# Clone atau upload project
git clone https://github.com/your-repo/bengkel-wiguna.git .

# Set permission
chown -R www-data:www-data /www/wwwroot/bengkelwiguna
```

### Step 2: Setup Environment Variables

```bash
cd /www/wwwroot/bengkelwiguna

# Buat .env.production
nano .env.production
```

Isi dengan:

```env
# WordPress Backend URL (local - sama server)
NEXT_PUBLIC_WORDPRESS_URL=https://backend.bengkelwiguna.com

# Site URL (domain utama)
NEXT_PUBLIC_SITE_URL=https://bengkelwiguna.com

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-WKKBRC8X
NEXT_PUBLIC_META_PIXEL_ID=1214658270215713

# Google Maps
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
GOOGLE_PLACE_ID=YOUR_GOOGLE_PLACE_ID

# Contact Form 7
NEXT_PUBLIC_CF7_BOOKING_ID=b5abf32
NEXT_PUBLIC_CF7_MAIN_CONTACT_ID=124
NEXT_PUBLIC_CF7_NEWSLETTER_ID=123

# YouTube
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
YOUTUBE_CHANNEL_ID=UC8aLawn1bvqzg7CHfWr6w0Q

# Security
REVALIDATE_SECRET=CHANGE_TO_RANDOM_SECRET

NODE_ENV=production
```

### Step 3: Build Docker Image

```bash
cd /www/wwwroot/bengkelwiguna

# Build image
docker build -t bengkelwiguna:latest .

# Jika error memory, tambah swap:
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```

### Step 4: Run Container

```bash
# Run container (bind ke localhost aja, Nginx yang handle reverse proxy)
docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file .env.production \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  bengkelwiguna:latest

# Cek status
docker ps
docker logs -f bengkelwiguna-web
```

### Step 5: Setup Nginx Reverse Proxy di aapanel

1. Buka **aapanel Dashboard**
2. Menu: **Website** → **Nginx** → **Reverse Proxy** → **Add**

#### Reverse Proxy Config:

| Field | Value |
|-------|-------|
| **Name** | `bengkelwiguna` |
| **Domain** | `bengkelwiguna.com www.bengkelwiguna.com` |
| **Target URL** | `http://127.0.0.1:3000` |
| **Send Real IP** | ✅ Enable |

3. Klik **Submit**

### Step 6: Enable SSL

1. **Website** → Pilih domain `bengkelwiguna.com`
2. **SSL** → **Let's Encrypt**
3. Select domains: `bengkelwiguna.com`, `www.bengkelwiguna.com`
4. **Apply** → **Auto SSL**

---

## Docker Compose Method (Alternative)

```bash
cd /www/wwwroot/bengkelwiguna

# Start
docker compose up -d

# Logs
docker compose logs -f

# Stop
docker compose down
```

---

## Verify Deployment

```bash
# Test direct access
curl http://127.0.0.1:3000

# Test via domain
curl -I https://bengkelwiguna.com

# Check container health
docker inspect --format='{{.State.Health.Status}}' bengkelwiguna-web

# Check logs
docker logs bengkelwiguna-web
```

---

## Troubleshooting

### 502 Bad Gateway

```bash
# Cek apakah container running
docker ps

# Cek port occupancy
netstat -tlnp | grep 3000

# Restart container
docker restart bengkelwiguna-web
```

### Cannot connect to backend

```bash
# Test koneksi ke WordPress
curl -I https://backend.bengkelwiguna.com

# Jika gagal, cek SSL certificate backend
# Domain → SSL → Let's Encrypt → Apply
```

### Build Error (Memory)

```bash
# Tambah swap 2GB
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Rebuid
docker build --no-cache -t bengkelwiguna:latest .
```

### SSL Certificate Error

```bash
# Renew SSL via aapanel
# Website → Domain → SSL → Let's Encrypt → Renew
```

---

## Auto-Redeploy Script

```bash
#!/bin/bash
# deploy.sh - Simpan di /www/wwwroot/bengkelwiguna/

cd /www/wwwroot/bengkelwiguna

echo "Pulling latest code..."
git pull origin main

echo "Building Docker image..."
docker build -t bengkelwiguna:latest . --no-cache

echo "Stopping old container..."
docker stop bengkelwiguna-web
docker rm bengkelwiguna-web

echo "Starting new container..."
docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file .env.production \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  bengkelwiguna:latest

echo "Done!"
docker logs --tail 20 bengkelwiguna-web
```

```bash
# chmod +x deploy.sh
chmod +x deploy.sh

# Usage:
./deploy.sh
```

---

## Health Monitoring

```bash
# Create health check cron
crontab -e

# Add line:
*/5 * * * * docker inspect --format='{{.State.Health.Status}}' bengkelwiguna-web | grep -q healthy || (docker restart bengkelwiguna-web && echo "Restarted at $(date)" >> /var/log/bw-health.log)
```

---

## Backup

```bash
# Backup env file
cp /www/wwwroot/bengkelwiguna/.env.production /backup/bw-env-$(date +%Y%m%d).bak

# Backup container config
docker inspect bengkelwiguna-web > /backup/bw-container-$(date +%Y%m%d).json
```
