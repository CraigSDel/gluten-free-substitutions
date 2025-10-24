# Manual Deployment Guide

## 🚨 **If GitHub Actions Deployment Fails**

If the automated GitHub Pages deployment continues to fail, you can deploy manually using these steps:

### **Method 1: Manual Build and Deploy**

```bash
# Step 1: Build the project locally
cd /Users/craigstroberg/myworkspace/gluten-free/gluten-free-substitutions
npm run build

# Step 2: The dist folder now contains your built website
# You can upload the contents of the dist folder to GitHub Pages manually
```

### **Method 2: Use GitHub CLI (if available)**

```bash
# Step 1: Build the project
npm run build

# Step 2: Deploy using GitHub CLI
gh pages deploy dist --branch gh-pages --clean
```

### **Method 3: Manual Upload to GitHub Pages**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to your GitHub repository:**
   - Navigate to Settings → Pages
   - Change source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder

3. **Create gh-pages branch manually:**
   ```bash
   # Create and switch to gh-pages branch
   git checkout --orphan gh-pages
   
   # Remove all files except dist
   git rm -rf .
   cp -r dist/* .
   
   # Commit and push
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

### **Method 4: Alternative Hosting**

If GitHub Pages continues to have issues, consider these alternatives:

#### **Netlify (Recommended)**
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

#### **Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy automatically

#### **Surge.sh (Simple)**
```bash
# Install surge globally
npm install -g surge

# Build and deploy
npm run build
cd dist
surge
# Follow prompts to set up domain
```

## 🔧 **Troubleshooting GitHub Pages**

### **Common Issues:**

1. **"Page not found" error:**
   - Check if the repository is public
   - Verify GitHub Pages is enabled in Settings → Pages
   - Ensure the workflow has proper permissions

2. **Build fails:**
   - Check the Actions tab for error details
   - Verify all dependencies are installed
   - Test build locally first

3. **Deployment doesn't trigger:**
   - Check if the workflow file is in `.github/workflows/`
   - Verify the branch trigger is correct
   - Check repository permissions

### **GitHub Pages Settings:**

1. **Go to repository Settings → Pages**
2. **Source:** GitHub Actions
3. **Branch:** main
4. **Folder:** / (root)

### **Required Permissions:**

Make sure your workflow has these permissions:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## 📋 **Current Status**

- **✅ Build works locally** (997ms build time)
- **✅ All dependencies resolved**
- **✅ GitHub Actions workflow updated**
- **⚠️ GitHub Pages deployment needs verification**

## 🎯 **Next Steps**

1. **Check GitHub Actions tab** in your repository
2. **Verify the deployment workflow runs**
3. **Check GitHub Pages settings** in repository Settings
4. **If still failing, use manual deployment methods above**

---

**Last Updated:** December 2024  
**Status:** GitHub Pages deployment in progress  
**Website URL:** https://craigsdel.github.io/gluten-free-substitutions (once deployed)
