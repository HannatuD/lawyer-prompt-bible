#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Docusaurus Build Diagnostic Report"
echo "====================================="
echo ""

# 1. Clone and setup (if needed)
if [ ! -d "lawyer-prompt-bible" ]; then
    echo "📦 Cloning repository..."
    git clone https://github.com/HannatuD/lawyer-prompt-bible.git
    cd lawyer-prompt-bible
else
    cd lawyer-prompt-bible
    git pull
fi

# 2. Check Node version
echo "📌 Checking Node version..."
node_version=$(node -v)
echo "Current Node version: $node_version"
if [[ ! "$node_version" =~ ^v18\. ]]; then
    echo -e "${YELLOW}⚠️  Warning: Node 18 recommended${NC}"
fi

# 3. Navigate to docs-site and install dependencies
echo ""
echo "📦 Installing dependencies..."
cd docs-site
npm ci

# 4. Run the build and capture output
echo ""
echo "🏗️  Running production build..."
npm run build 2>&1 | tee build-output.log

# Check if build succeeded
if [ ${PIPESTATUS[0]} -eq 0 ]; then
    echo -e "${GREEN}✅ Build completed successfully!${NC}"
else
    echo -e "${RED}❌ Build failed. Analyzing errors...${NC}"
fi
