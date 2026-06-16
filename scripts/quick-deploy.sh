#!/bin/bash
# ============================================================
# Quick Deploy Script — Bengkel Wiguna
# ============================================================
# Simplifies: commit → merge → push workflow
# ============================================================

set -e

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

BRANCH=$(git branch --show-current)

echo ""
echo -e "${CYAN}🚀 Quick Deploy Script${NC}"
echo "================================"
echo "Current branch: $BRANCH"
echo ""

# Check if we're on main
if [ "$BRANCH" = "main" ]; then
    echo -e "${YELLOW}⚠️  You're on main branch!${NC}"
    echo "This script is for deploying feature branches."
    echo ""
    echo "Usage:"
    echo "  1. Create feature branch: git checkout -b feat/my-feature"
    echo "  2. Make changes and commit"
    echo "  3. Run this script: ./scripts/quick-deploy.sh"
    exit 1
fi

# Ask for commit message
echo -e "${CYAN}Enter commit message:${NC}"
read -p "> " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    echo -e "${RED}❌ Commit message required${NC}"
    exit 1
fi

# Show summary
echo ""
echo -e "${CYAN}Summary:${NC}"
echo "  Branch: $BRANCH"
echo "  Commit: $COMMIT_MSG"
echo ""

# Ask for confirmation
read -p "Continue? [y/N] " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 1
fi

# Stage all changes
echo ""
echo -e "${CYAN}📦 Staging changes...${NC}"
git add -A

# Commit
echo -e "${CYAN}💾 Committing...${NC}"
git commit -m "$COMMIT_MSG"

# Push feature branch
echo -e "${CYAN}⬆️  Pushing to origin/$BRANCH...${NC}"
git push -u origin "$BRANCH"

# Merge to main
echo ""
echo -e "${CYAN}🔀 Merging to main...${NC}"
git checkout main
git pull origin main
git merge "$BRANCH"

# Push main (will trigger Vercel deploy)
echo ""
echo -e "${YELLOW}⬆️  Pushing to origin/main (triggers Vercel deploy)...${NC}"
git push origin main

echo ""
echo -e "${GREEN}✅ Deploy initiated!${NC}"
echo "Vercel will automatically deploy your changes."
echo ""
