name: Deploy Docusaurus site
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
        
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install deps & build
      run: |
        cd docs-site
        npm ci
        npm run build
        
    - name: Deploy to GH Pages
      run: |
        cd docs-site
        git config --global user.email "actions@github.com"
        git config --global user.name "GitHub Actions"
        npx docusaurus deploy --skip-build
      env:
        GIT_USER: git
        GIT_PASS: ${{ secrets.GITHUB_TOKEN }}
        USE_SSH: false
