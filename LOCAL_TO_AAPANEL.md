# Deploy dari Local ke aapanel (Docker Desktop)

## Opsi Deployment

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Local Machine   │     │   Registry       │     │  aapanel Server  │
│  (Docker Desktop)│     │  (Docker Hub /   │     │  (148.230.101.241│
│                  │     │   GHCR)          │     │                  │
│  Build Image ────┼────▶│  Push Image ─────┼────▶│  Pull Image      │
│                  │     │                  │     │  Run Container   │
└──────────────────┘     └──────────────────┘     └──────────────────┘
```

---

## OPTION 1: Docker Hub (Recommended)

### Step 1: Buat Docker Hub Repository

1. Buka https://hub.docker.com
2. **Create Repository**: `bengkelwiguna/web`
3. Set visibility: **Public** (atau Private jika mau)

### Step 2: Build & Push dari Local

```bash
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

# Login ke Docker Hub
docker login -u YOUR_DOCKERHUB_USERNAME

# Build image dengan tag
docker build -t YOUR_DOCKERHUB_USERNAME/bengkelwiguna:latest .

# Push ke Docker Hub
docker push YOUR_DOCKERHUB_USERNAME/bengkelwiguna:latest
```

### Step 3: Pull & Run di aapanel Server

```bash
# SSH ke server
ssh root@148.230.101.241

# Login ke Docker Hub di server
docker login -u YOUR_DOCKERHUB_USERNAME

# Pull image
docker pull YOUR_DOCKERHUB_USERNAME/bengkelwiguna:latest

# Run container
docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file .env.production \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  YOUR_DOCKERHUB_USERNAME/bengkelwiguna:latest
```

---

## OPTION 2: GitHub Container Registry (Free & Private)

### Step 1: Enable GHCR di GitHub

1. GitHub repo → **Settings** → **Packages** → Enable **Improved package support**

### Step 2: Generate GitHub Token

1. https://github.com/settings/tokens
2. **Generate new token (classic)**
3. Scopes: `write:packages`, `read:packages`
4. Copy token

### Step 3: Build & Push dari Local

```bash
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

# Login ke GHCR
echo "YOUR_GITHUB_TOKEN" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

# Build image dengan GHCR tag
docker build -t ghcr.io/YOUR_GITHUB_USERNAME/bengkelwiguna:latest .

# Push
docker push ghcr.io/YOUR_GITHUB_USERNAME/bengkelwiguna:latest
```

### Step 4: Pull & Run di aapanel Server

```bash
ssh root@148.230.101.241

# Login ke GHCR
echo "YOUR_GITHUB_TOKEN" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

# Pull image
docker pull ghcr.io/YOUR_GITHUB_USERNAME/bengkelwiguna:latest

# Run container
docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file .env.production \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  ghcr.io/YOUR_GITHUB_USERNAME/bengkelwiguna:latest
```

---

## OPTION 3: Save as Tar + SCP (Tanpa Registry)

### Step 1: Build Image di Local

```bash
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

# Build image
docker build -t bengkelwiguna:latest .

# Save sebagai tar file
docker save bengkelwiguna:latest -o bengkelwiguna-image.tar

# Cek size
ls -lh bengkelwiguna-image.tar
```

### Step 2: Upload ke Server via SCP

```bash
# Upload ke server (估 ~500MB - 1GB)
scp bengkelwiguna-image.tar root@148.230.101.241:/root/

# Upload env file juga
scp .env.production root@148.230.101.241:/root/bengkelwiguna.env
```

### Step 3: Load & Run di Server

```bash
ssh root@148.230.101.241

# Load image dari tar
docker load -i /root/bengkelwiguna-image.tar

# Buat direktori & setup
mkdir -p /www/wwwroot/bengkelwiguna
mv /root/bengkelwiguna.env /www/wwwroot/bengkelwiguna/.env.production

# Run container
docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file /www/wwwroot/bengkelwiguna/.env.production \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  bengkelwiguna:latest
```

---

## Complete Deployment Script (Copy-Paste)

### Di Local Machine (Docker Desktop):

```bash
#!/bin/bash
# deploy-local.sh

set -e

# Config
REGISTRY="docker.io"  # atau "ghcr.io"
USERNAME="YOUR_USERNAME"
IMAGE_NAME="bengkelwiguna"
IMAGE_TAG="latest"
PROJECT_DIR="/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

echo "🚀 Starting deployment..."

cd "$PROJECT_DIR"

# 1. Build
echo "📦 Building Docker image..."
docker build -t ${USERNAME}/${IMAGE_NAME}:${IMAGE_TAG} .

# 2. Login
echo "🔐 Logging in to Docker Hub..."
docker login -u $USERNAME

# 3. Push
echo "⬆️  Pushing to registry..."
docker push ${USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}

echo "✅ Build & push complete!"
echo ""
echo "Next steps on server:"
echo "1. ssh root@148.230.101.241"
echo "2. docker pull ${USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}"
echo "3. Setup .env.production"
echo "4. docker run -d --name bengkelwiguna-web -p 127.0.0.1:3000:3000 --env-file .env.production ${USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}"
```

```bash
chmod +x deploy-local.sh
./deploy-local.sh
```

### Di Server aapanel:

```bash
#!/bin/bash
# deploy-server.sh

set -e

REGISTRY="docker.io"  # atau "ghcr.io"
USERNAME="YOUR_USERNAME"
IMAGE_NAME="bengkelwiguna"
IMAGE_TAG="latest"
APP_DIR="/www/wwwroot/bengkelwiguna"

echo "🚀 Deploying to aapanel..."

cd $APP_DIR

# 1. Pull latest image
echo "📥 Pulling latest image..."
docker pull ${USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}

# 2. Stop & remove old container
echo "🛑 Stopping old container..."
docker stop bengkelwiguna-web 2>/dev/null || true
docker rm bengkelwiguna-web 2>/dev/null || true

# 3. Run new container
echo "🚀 Starting new container..."
docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file .env.production \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  --health-cmd "wget --no-verbose --tries=1 --spider http://localhost:3000" \
  --health-interval=30s \
  --health-timeout=10s \
  --health-retries=3 \
  ${USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}

# 4. Verify
echo "✅ Deployment complete!"
docker ps | grep bengkelwiguna
```

```bash
chmod +x deploy-server.sh
```

---

## Setup Nginx Reverse Proxy di aapanel

### Via aapanel GUI:

1. **Login** ke aapanel: http://148.230.101.241:7800
2. **Website** → **Nginx** → **Reverse Proxy** → **Add**

```
Name:        bengkelwiguna
Domain:      bengkelwiguna.com www.bengkelwiguna.com
Target URL:  http://127.0.0.1:3000
```

3. **Website** → Pilih domain → **SSL** → **Let's Encrypt**
   - Select: `bengkelwiguna.com`, `www.bengkelwiguna.com`
   - Apply

---

## Troubleshooting

### Image pull fails di server?

```bash
# Cek login
docker login -u USERNAME

# Manual pull test
docker pull USERNAME/bengkelwiguna:latest
```

### Container not starting?

```bash
# Cek logs
docker logs bengkelwiguna-web

# Cek port
netstat -tlnp | grep 3000

# Restart
docker restart bengkelwiguna-web
```

### SSL Warning?

```bash
# Renew SSL
# Website → Domain → SSL → Let's Encrypt → Apply
```

### Koneksi ke Backend gagal?

```bash
# Test dari container
docker exec -it bengkelwiguna-web sh
curl -I https://backend.bengkelwiguna.com

# Jika SSL error, mungkin perlu update CA certificates
apt update && apt install ca-certificates -y
```

---

## Auto-Deployment dengan GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Build and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/bengkelwiguna:latest
```

**Setup Secrets di GitHub:**
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

---

## Quick Commands Reference

```bash
# DI LOCAL
docker build -t USERNAME/bengkelwiguna:latest .
docker push USERNAME/bengkelwiguna:latest

# DI SERVER
docker pull USERNAME/bengkelwiguna:latest
docker stop bengkelwiguna-web && docker rm bengkelwiguna-web
docker run -d --name bengkelwiguna-web \
  -p 127.0.0.1:3000:3000 \
  --env-file .env.production \
  --restart unless-stopped \
  USERNAME/bengkelwiguna:latest

# CEK STATUS
docker ps
docker logs -f bengkelwiguna-web
curl -I https://bengkelwiguna.com
```
