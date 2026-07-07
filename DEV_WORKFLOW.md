# Development Workflows

## Quick Reference

### 1. Development with Docker (Hot Reload)

```bash
# Start dev container
docker compose -f docker-compose.dev.yml up

# Stop
docker compose -f docker-compose.dev.yml down

# View logs
docker logs -f bw-dev
```

**Access:** http://localhost:3000

Code changes in `src/` folder will auto-reload.

---

### 2. Production Build & Deploy

```bash
# Build image
DOCKER_BUILDKIT=1 docker build --no-cache -t bengkelwiguna:test .

# Tag
docker tag bengkelwiguna:test brododdev/bwiguna:latest

# Push to Docker Hub
docker push brododdev/bwiguna:latest
```

**Server-side:**
```bash
# Pull & restart
docker pull brododdev/bwiguna:latest
docker stop bengkelwiguna-web && docker rm bengkelwiguna-web
docker run -d --name bengkelwiguna-web --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  --env-file /www/sites/bengkelwiguna.com/config/.env.production \
  --dns 8.8.8.8 --dns 1.1.1.1 \
  brododdev/bwiguna:latest
```

---

### 3. Local NPM Development (No Docker)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Workflow Decision Guide

| Situation | Use |
|-----------|-----|
| Quick CSS/UI changes | Docker dev (Option 1) |
| Component changes | Docker dev (Option 1) |
| Backend API integration | Docker dev (Option 1) |
| Testing production build | Option 2 (production) |
| Final deployment | Option 2 (production) |
