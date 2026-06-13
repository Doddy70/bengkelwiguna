#!/bin/bash

# ============================================================
# Pre-Push Validator — Bengkel Wiguna Project
# ============================================================
# Usage: Automatically runs on git push (via pre-push hook)
# Purpose: Validate code quality before pushing
# ============================================================

echo "🔍 Running pre-push validation..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

EXIT_CODE=0

# 1. Check branch name
echo "📋 Checking branch name..."
BRANCH=$(git symbolic-ref --short HEAD 2>/dev/null)
if [[ ! "$BRANCH" =~ ^(perf/|fix/|feat/|docs|refactor|test|chore)/ ]]; then
    echo -e "${RED}❌ Branch must follow naming convention: <type>/<description>${NC}"
    echo "   Examples: perf/inline-critical-css, fix/cls-issue, feat/new-feature"
    EXIT_CODE=1
else
    echo -e "${GREEN}✅ Branch name valid: $BRANCH${NC}"
fi
echo ""

# 2. Check commit message (if commits exist)
echo "📋 Checking commit messages..."
COMMIT_MSG=$(git log -1 --pretty=%B 2>/dev/null)
if [ -n "$COMMIT_MSG" ]; then
    if [[ ! "$COMMIT_MSG" =~ ^(feat|fix|perf|docs|refactor|test|chore) ]]; then
        echo -e "${RED}❌ Commit message must follow conventional commits${NC}"
        echo "   Expected format: <type>: <description>"
        echo "   Examples: perf: inline critical CSS, fix: resolve CLS issue"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ Commit message valid${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No commits to check${NC}"
fi
echo ""

# 3. Check for console.log statements
echo "📋 Checking for console.log statements..."
CONSOLE_LOGS=$(grep -r "console\.log" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" bexon/src/ 2>/dev/null | grep -v "node_modules" | head -5)
if [ -n "$CONSOLE_LOGS" ]; then
    echo -e "${YELLOW}⚠️  Found console.log statements:${NC}"
    echo "$CONSOLE_LOGS" | head -3 | sed 's/^/   /'
    echo "   Consider removing or using proper logging"
fi
echo ""

# 4. Check TypeScript errors
echo "📋 Checking TypeScript..."
if [ -f "package.json" ]; then
    if grep -q '"type-check"' package.json 2>/dev/null; then
        npm run type-check 2>/dev/null
        if [ $? -ne 0 ]; then
            echo -e "${RED}❌ TypeScript check failed${NC}"
            EXIT_CODE=1
        else
            echo -e "${GREEN}✅ TypeScript check passed${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  type-check script not found in package.json${NC}"
    fi
fi
echo ""

# 5. Check linting
echo "📋 Checking linting..."
if [ -f "package.json" ]; then
    if grep -q '"lint"' package.json 2>/dev/null; then
        npm run lint 2>/dev/null
        if [ $? -ne 0 ]; then
            echo -e "${RED}❌ Linting failed${NC}"
            EXIT_CODE=1
        else
            echo -e "${GREEN}✅ Linting passed${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  lint script not found in package.json${NC}"
    fi
fi
echo ""

# 6. Check build
echo "📋 Checking build..."
if [ -f "package.json" ]; then
    if grep -q '"build"' package.json 2>/dev/null; then
        npm run build --turbopack 2>/dev/null
        if [ $? -ne 0 ]; then
            echo -e "${RED}❌ Build failed${NC}"
            EXIT_CODE=1
        else
            echo -e "${GREEN}✅ Build passed${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  build script not found in package.json${NC}"
    fi
fi
echo ""

# 7. Summary
echo "=========================================="
if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅ Pre-push validation passed!${NC}"
else
    echo -e "${RED}❌ Pre-push validation failed${NC}"
    echo "   Please fix the issues above before pushing"
fi
echo "=========================================="

exit $EXIT_CODE
