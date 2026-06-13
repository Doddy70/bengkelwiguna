#!/bin/bash

# ============================================================
# Agent Bootstrapper — Bengkel Wiguna Project
# ============================================================
# Usage: bash scripts/agent-start.sh
# Purpose: Help new agents understand project state quickly
# ============================================================

echo "=========================================="
echo " Agent Bootstrapper — Bengkel Wiguna"
echo "=========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if in project directory
if [ ! -f ".claude/CLAUDE.md" ]; then
    echo -e "${RED}❌ Error: Not in project directory${NC}"
    echo "   This script should be run from the project root."
    echo "   Expected: .claude/CLAUDE.md not found"
    exit 1
fi

# 1. Show welcome
echo -e "${BLUE}📋 Project: Bengkel Wiguna${NC}"
echo -e "${BLUE}📍 Location: $(pwd)${NC}"
echo ""

# 2. Show current state from state.json
echo -e "${YELLOW}📊 Current State:${NC}"
if command -v jq &> /dev/null; then
    echo "   Performance Score: $(jq -r '.performance.baseline.metrics.performance' .claude/state.json 2>/dev/null || echo 'N/A')"
    echo "   LCP: $(jq -r '.performance.baseline.metrics.lcp' .claude/state.json 2>/dev/null || echo 'N/A')"
    echo "   FCP: $(jq -r '.performance.baseline.metrics.fcp' .claude/state.json 2>/dev/null || echo 'N/A')"
    echo "   CLS: $(jq -r '.performance.baseline.metrics.cls' .claude/state.json 2>/dev/null || echo 'N/A')"
    echo "   TBT: $(jq -r '.performance.baseline.metrics.tbt' .claude/state.json 2>/dev/null || echo 'N/A')"
else
    echo "   (Install jq for detailed state: brew install jq)"
    echo "   Run: cat .claude/state.json"
fi
echo ""

# 3. Show next tasks
echo -e "${YELLOW}📋 Next Tasks (from tasks.md):${NC}"
if [ -f ".claude/tasks.md" ]; then
    echo "   HIGH PRIORITY:"
    grep -A 3 "Priority.*🔴 HIGH" .claude/tasks.md 2>/dev/null | head -12 | sed 's/^/   /'
else
    echo "   tasks.md not found"
fi
echo ""

# 4. Show git status
echo -e "${YELLOW}🔀 Git Status:${NC}"
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
STATUS=$(git status --short 2>/dev/null | head -5 || echo "unknown")
echo "   Branch: $BRANCH"
if [ -n "$STATUS" ]; then
    echo "   Status:"
    echo "$STATUS" | sed 's/^/   /'
else
    echo "   Status: Clean"
fi
echo ""

# 5. Show last commit
echo -e "${YELLOW}📝 Last Commit:${NC}"
LAST_COMMIT=$(git log -1 --pretty="%h %s (%an, %ar)" 2>/dev/null || echo "No commits yet")
echo "   $LAST_COMMIT"
echo ""

# 6. Show constraints
echo -e "${RED}🚫 Constraints:${NC}"
echo "   • Don't change brand colors (#224297, #ffd900)"
echo "   • Don't change URL slugs"
echo "   • Use feature branches (perf/*, fix/*, feat/*)"
echo "   • Don't push directly to main/master"
echo "   • Zero Initiative Rule: No visual changes without permission"
echo ""

# 7. Show available commands
echo -e "${GREEN}🚀 Available Commands:${NC}"
echo "   cat .claude/CLAUDE.md           # Read primary instructions"
echo "   cat .claude/state.json          # View current state"
echo "   cat .claude/tasks.md            # View task list"
echo "   cat .claude/workflow.md         # View workflow"
echo "   cat .claude/conventions.md      # View coding standards"
echo "   npm run build --turbopack       # Build validation"
echo "   npm run lighthouse              # Run Lighthouse audit"
echo ""

# 8. Show quick start
echo -e "${GREEN}✅ Quick Start:${NC}"
echo "   1. Read: cat .claude/CLAUDE.md"
echo "   2. Choose task from: cat .claude/tasks.md"
echo "   3. Create branch: git checkout -b perf/<task-name>"
echo "   4. Implement task"
echo "   5. Test: npm run build --turbopack"
echo "   6. Commit: git commit -m 'perf: <description>'"
echo "   7. Push & PR"
echo ""

echo "=========================================="
echo -e "${GREEN}✅ Read .claude/CLAUDE.md to start${NC}"
echo "=========================================="
