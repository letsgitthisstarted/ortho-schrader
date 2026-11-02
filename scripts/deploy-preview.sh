#!/bin/sh
# Builds a no-index preview and publishes it to the gh-pages branch (GitHub Pages).
# Usage: sh scripts/deploy-preview.sh
set -e
cd "$(dirname "$0")/.."
REPO_URL=$(git remote get-url origin)
NAME=$(basename -s .git "$REPO_URL")
BASE="/$NAME/" NOINDEX=1 node build.mjs
cd dist
touch .nojekyll
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Preview build $(date +%Y-%m-%d\ %H:%M)"
git push -q -f "$REPO_URL" gh-pages
rm -rf .git
cd .. && node build.mjs >/dev/null  # restore the local build
echo "Published: https://$(git remote get-url origin | sed -E 's#.*github.com[/:]([^/]+)/.*#\1#').github.io/$NAME/"
