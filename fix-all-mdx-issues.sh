#!/bin/bash

cd docs-site

echo "🔍 Checking current structure..."
echo "Files in docs/prompts:"
find docs/prompts -name "*.md" | head -5

echo -e "\n📊 Found these variables that need fixing:"
grep -h -o '{[^}]*}' $(find docs -name "*.md" -o -name "*.mdx") 2>/dev/null | sort | uniq | head -20

echo -e "\n🔧 Fixing MDX variable placeholders..."

# Method 1: Escape curly braces
find docs -name "*.md" -o -name "*.mdx" | while read file; do
    # Create backup
    cp "$file" "$file.bak"
    
    # Escape all curly braces
    sed -i 's/{/\\{/g; s/}/\\}/g' "$file"
    
    echo "✅ Fixed: $file"
done

echo -e "\n📝 Creating intro.md if missing..."
if [ ! -f "docs/intro.md" ]; then
    cat > docs/intro.md << 'EOF'
# UK Legal Prompt Bible

Welcome to the comprehensive collection of legal prompts for UK practitioners.

## Getting Started

Browse prompts by practice area:
- Corporate & Commercial
- Litigation
- Property
- Employment
- Family
- Criminal
- Immigration
- Intellectual Property
- Regulatory

Each prompt includes metadata about complexity, jurisdiction, and tested models.
EOF
    echo "✅ Created intro.md"
fi

echo -e "\n🔍 Verifying fixes..."
# Check if any unescaped braces remain
remaining=$(grep -h '{[^\\]' $(find docs -name "*.md") 2>/dev/null | wc -l)
if [ $remaining -eq 0 ]; then
    echo "✅ All variables escaped successfully!"
else
    echo "⚠️  Found $remaining lines with potential unescaped braces"
fi

echo -e "\n🏗️  Ready to build! Run: npm run build"
