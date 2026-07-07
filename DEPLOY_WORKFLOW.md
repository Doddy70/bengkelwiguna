# Deployment Workflow - Bengkel Wiguna

## Standard Flow

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│  Local Machine  │         │  Docker Hub     │         │  aapanel Server │
│  (Docker Desktop│  Push ─▶│  brododdev/    │  Pull ─▶│                 │
│                 │         │  bwiguna        │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

---

## Step 1 - Local (Build & Push)

Run di terminal local:

```bash
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

docker build -t brododdev/bwiguna:latest .
docker push brododdev/bwiguna:latest
```

---

## Step 2 - Server (Pull & Deploy)

Run di aapanel terminal:

```bash
docker pull brododdev/bwiguna:latest && docker stop bengkelwiguna-web && docker rm bengkelwiguna-web && docker run -d --name bengkelwiguna-web -p 3000:3000 brododdev/bwiguna:latest
```

---

## Quick Deploy Script (Local)

```bash
#!/bin/bash
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"
docker build -t brododdev/bwiguna:latest . && docker push brododdev/bwiguna:latest
echo "✅ Done! Run on server:"
echo "docker pull brododdev/bwiguna:latest && docker stop bengkelwiguna-web && docker rm bengkelwiguna-web && docker run -d --name bengkelwiguna-web -p 3000:3000 brododdev/bwiguna:latest"
```

---

## Registry Info

- **Docker Hub:** https://hub.docker.com/r/brododdev/bwiguna
- **Image:** `brododdev/bwiguna:latest`
