# Di LOCAL MACHINE
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

# Build & push
docker build -t brododdev/bwiguna:latest
docker push brododdev/bwiguna:latest

# Di SERVER - Pull & restart
docker pull brododdev/bwiguna:latest
docker stop bengkelwiguna-web && docker rm bengkelwiguna-web
docker run -d --name bengkelwiguna-web \
  -p 3000:3000 \
  --restart unless-stopped \
  --add-host=backend.bengkelwiguna.com:host-gateway \
  brododdev/bwiguna:latest




# 1. Baca onboarding prompt
cat .maestro/onboarding-seo-implementation-2026-07-11.md

# 2. Baca task breakdown
cat .claude/tasks_seo_performance.md

# 3. Start dengan Task 1
git checkout -b fix/seo-internal-links-phase1

# 4. Run WordPress MCP untuk dapat post IDs
# (prompt sudah include semua ID yang diperlukan)