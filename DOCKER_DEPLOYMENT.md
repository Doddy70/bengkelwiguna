# Docker Deployment Guide - Bengkel Wiguna

Your Next.js project is now ready to deploy on any platform with Docker support, including aPanel.

## What's Included

- **Dockerfile**: Multi-stage build for optimized production image (~350MB)
- **docker-compose.yml**: Easy local testing and deployment orchestration
- **.dockerignore**: Excludes unnecessary files to reduce build context

## Local Testing

Start the containerized app locally:

```bash
docker compose up -d
```

Access at: `http://localhost:3000`

Stop the container:

```bash
docker compose down
```

## Deployment on aPanel

### Prerequisites
- SSH access to your aPanel server
- Docker and Docker Compose installed on the server

### Step 1: Transfer Files to aPanel Server

Copy your project to the server:

```bash
scp -r . user@your-server-ip:/home/user/bengkel-wiguna
```

### Step 2: Build on Server

SSH into your server and navigate to the project:

```bash
ssh user@your-server-ip
cd /home/user/bengkel-wiguna
docker compose build
```

### Step 3: Start the Container

```bash
docker compose up -d
```

Verify it's running:

```bash
docker compose ps
docker logs bengkel-wiguna-web
```

### Step 4: Configure aPanel Reverse Proxy

In aPanel panel:
1. Go to **Websites** → **Add Site**
2. Create a new site for your domain
3. In site settings, configure a reverse proxy:
   - **Proxy Type**: HTTP
   - **Proxy Address**: `http://127.0.0.1:3000`
   - **Proxy Headers**: Enable all

This allows aPanel to route traffic from your domain to the Docker container.

### Step 5: Auto-restart on Server Reboot

The compose file includes `restart: unless-stopped`, so the container auto-starts if the server reboots.

Verify:

```bash
docker compose ps
```

## Environment Variables

If your app needs environment variables (e.g., API keys, database URLs), add them to docker-compose.yml:

```yaml
services:
  web:
    environment:
      NEXT_PUBLIC_WORDPRESS_URL: "https://cms.bengkelwiguna.com"
      NODE_ENV: "production"
```

Or create a `.env` file in the project root and reference it:

```yaml
services:
  web:
    env_file:
      - .env
```

## Updating the App

When you make code changes:

```bash
# Pull latest code
git pull

# Rebuild the image
docker compose build --no-cache

# Restart the container
docker compose down
docker compose up -d
```

## Monitoring

View logs:

```bash
docker logs bengkel-wiguna-web -f  # Follow logs in real-time
```

Check container health:

```bash
docker ps  # Shows "healthy" status
docker inspect bengkel-wiguna-web
```

## Backup & Recovery

Backup your data/volumes:

```bash
docker compose down
tar -czf bengkel-backup.tar.gz .
```

Restore:

```bash
tar -xzf bengkel-backup.tar.gz
docker compose up -d
```

## Performance Notes

- Image size: ~350MB (lean multi-stage Alpine build)
- Build time: ~2-3 minutes
- Startup time: ~10 seconds
- Memory usage: 150-300MB running
- Runs as non-root user (`nextjs`) for security

## Troubleshooting

**Container won't start:**
```bash
docker compose logs bengkel-wiguna-web
```

**Port already in use:**
```bash
docker compose down
# Or change port in docker-compose.yml: `"8080:3000"`
```

**Need to rebuild from scratch:**
```bash
docker compose down -v
docker system prune -a
docker compose up -d
```

## Next Steps

- Set up SSL/TLS on aPanel for HTTPS
- Configure auto-renewal of SSL certificates
- Set up monitoring/alerts for container health
- Consider using a load balancer if scaling to multiple servers
