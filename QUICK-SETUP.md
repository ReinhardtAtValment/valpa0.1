# Quick Template Setup Guide

## Step 1: Create Repository on GitHub

1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name**: `valpa-nextjs-template`
   - **Description**: "Next.js 16 + TypeScript + Tailwind CSS v3 + shadcn/ui starter template"
   - Choose: **Public** (so you can use it as a template)
   - **DO NOT** check any boxes (no README, no .gitignore, no license)
3. Click **"Create repository"**

## Step 2: Push Your Code

Copy your username from GitHub, then run these commands:

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/valpa-nextjs-template.git

# Push your code
git push -u origin main
```

Example:
```powershell
git remote add origin https://github.com/rmueh/valpa-nextjs-template.git
git push -u origin main
```

## Step 3: Convert to Template Repository

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top right)
3. Scroll down to **"Template repository"** section
4. Check the box: **☑ Template repository**
5. Done! ✅

## Using Your Template

### Method 1: GitHub Web Interface
1. Go to: `https://github.com/YOUR_USERNAME/valpa-nextjs-template`
2. Click the green **"Use this template"** button
3. Click **"Create a new repository"**
4. Name your new project (e.g., `my-app`)
5. Click **"Create repository"**
6. Clone your new project:
   ```powershell
   git clone https://github.com/YOUR_USERNAME/my-app.git
   cd my-app
   npm install
   npm run dev
   ```

### Method 2: Simple Local Copy (No GitHub)
```powershell
# In the parent directory
Copy-Item -Path "valpa0.1" -Destination "my-new-project" -Recurse
cd my-new-project

# Remove old git and start fresh
Remove-Item -Path ".git" -Recurse -Force
git init
git add .
git commit -m "Initial commit"

# Install and run
npm install
npm run dev
```

## That's It! 🎉

Your template is now ready to use for all future projects!


