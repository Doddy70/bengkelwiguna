# Di LOCAL MACHINE
cd "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna"

docker build -t brododdev/bwiguna:latest .
Tunggu sampai selesai, lalu:


docker push brododdev/bwiguna:latest



# Di SERVER - Pull & restart
docker pull brododdev/bwiguna:latest

docker stop bengkelwiguna-web

docker rm bengkelwiguna-web

docker run -d \
  --name bengkelwiguna-web \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  brododdev/bwiguna:latest



Verifikasi dengan:


docker logs -f bengkelwiguna-web



# 1. Baca onboarding prompt
cat .maestro/onboarding-seo-implementation-2026-07-11.md

# 2. Baca task breakdown
cat .claude/tasks_seo_performance.md

# 3. Start dengan Task 1
git checkout -b fix/seo-internal-links-phase1

# 4. Run WordPress MCP untuk dapat post IDs
# (prompt sudah include semua ID yang diperlukan)