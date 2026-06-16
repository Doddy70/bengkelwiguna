# ============================================================
# Git Workflow Aliases — Bengkel Wiguna
# ============================================================
# Usage: Run: source scripts/git-aliases.sh
# Then use: gf, gfp, gmm, gdeploy
# ============================================================

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo ""
echo -e "${CYAN}⚡ Git Workflow Aliases Loaded${NC}"
echo "================================"

# gf = git feature - Create feature branch and switch
alias gf='read -p "Feature name: " name && git checkout -b feat/$name'

# gfp = git feature push - Create feature, commit all, push
gfp() {
    read -p "Feature name: " name
    git checkout -b feat/$name && \
    git add -A && \
    read -p "Commit message: " msg && \
    git commit -m "$msg" && \
    git push -u origin HEAD
}

# gmm = git merge main - Merge current branch to main
alias gmm='git checkout main && git pull origin main && git merge @{-1}'

# gdeploy = merge to main and push
gdeploy() {
    echo -e "${YELLOW}Deploying to main...${NC}"
    git checkout main
    git pull origin main
    git merge @{-1}
    echo -e "${YELLOW}Press Enter to push to origin main...${NC}"
    read
    git push origin main
}

# gsync = Sync feature branch with latest main
alias gsync='git stash && git checkout main && git pull origin main && git checkout @{-1} && git merge main && git stash pop'

# gclean-branches = Delete merged local branches
alias gclean-branches='git branch --merged main | grep -v "main" | xargs -n 1 git branch -d'

# gstatus-all = Show all branches status
alias gstatus-all='git branch -vv && echo "---" && git status'

# gp = git push current branch
alias gp='git push origin $(git branch --show-current)'

# grh = git rebase with main
alias grh='git fetch origin main && git rebase origin/main'

# gundo = Undo last commit (keep changes)
alias gundo='git reset --soft HEAD~1'

# gundo-hard = Undo last commit (discard changes)
alias gundo-hard='git reset --hard HEAD~1'

echo ""
echo "Available aliases:"
echo "  gf          - Create feature branch"
echo "  gfp         - Create, commit & push feature"
echo "  gmm         - Merge to main"
echo "  gdeploy     - Full deploy workflow"
echo "  gsync       - Sync branch with main"
echo "  gclean      - Delete merged branches"
echo "  gp          - Push current branch"
echo "  grh         - Rebase on main"
echo "  gundo       - Undo last commit (keep changes)"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
echo ""
