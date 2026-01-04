# GitHub Setup Instructions

## Option 1: Create Repository via GitHub Website

1. Go to https://github.com/new
2. Repository name: `mailservice` (or your preferred name)
3. Description: "REST API for contact form submissions via email using Google Workspace SMTP"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Option 2: Create Repository via GitHub CLI (if installed)

```bash
gh repo create mailservice --public --description "REST API for contact form submissions via email using Google Workspace SMTP" --source=. --remote=origin --push
```

## After Creating Repository

Run these commands to push your code:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/mailservice.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/mailservice.git

# Push to GitHub
git push -u origin main
```

## Verify

After pushing, verify at: `https://github.com/YOUR_USERNAME/mailservice`

