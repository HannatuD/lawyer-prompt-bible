#!/bin/bash

echo "🔧 Fixing MDX variable placeholders..."

# Navigate to docs directory
cd docs-site/docs

# Find all the variables used in your prompts
echo "📋 Found these variables:"
grep -h -o '{[^}]*}' $(find . -name "*.md" -o -name "*.mdx") | sort | uniq

# Fix Method 1: Escape curly braces
echo "🔄 Escaping curly braces..."
find . -name "*.md" -o -name "*.mdx" | while read file; do
    # Create backup
    cp "$file" "$file.backup"
    
    # Escape curly braces
    sed -i 's/{/\\{/g; s/}/\\}/g' "$file"
    
    echo "✅ Fixed: $file"
done

echo "🎉 Done! Try building again."
