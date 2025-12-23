# Deployment Instructions

## Upload to GitHub

### Option 1: Using GitHub CLI (Recommended)

1. **Install GitHub CLI** (if not already installed):
   - Download from: https://cli.github.com/
   
2. **Authenticate with GitHub**:
   ```bash
   gh auth login
   ```

3. **Create and push repository**:
   ```bash
   # Create a new GitHub repository and push
   gh repo create valpa0.1 --public --source=. --remote=origin --push
   
   # Or for private repository:
   gh repo create valpa0.1 --private --source=. --remote=origin --push
   ```

### Option 2: Using GitHub Web Interface

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `valpa0.1`
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect and push your local repository**:
   ```bash
   # Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/valpa0.1.git
   
   # Verify remote was added
   git remote -v
   
   # Push to GitHub
   git push -u origin main
   ```

### Option 3: Using SSH (More Secure)

1. **Set up SSH key** (if not already done):
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # Copy public key to clipboard (Windows)
   type "$env:USERPROFILE\.ssh\id_ed25519.pub" | clip
   ```

2. **Add SSH key to GitHub**:
   - Go to GitHub Settings → SSH and GPG keys → New SSH key
   - Paste your key and save

3. **Create repository and push**:
   ```bash
   # Add remote using SSH
   git remote add origin git@github.com:YOUR_USERNAME/valpa0.1.git
   
   # Push to GitHub
   git push -u origin main
   ```

## Upload to GitLab

```bash
# Create repository on GitLab first, then:
git remote add origin https://gitlab.com/YOUR_USERNAME/valpa0.1.git
git push -u origin main
```

## Upload to Bitbucket

```bash
# Create repository on Bitbucket first, then:
git remote add origin https://bitbucket.org/YOUR_USERNAME/valpa0.1.git
git push -u origin main
```

## Deploy to Vercel (Recommended for Next.js)

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Option 2: Using Vercel Web Interface

1. Push your code to GitHub first (see above)
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

Your app will be live at: `https://valpa01.vercel.app` (or similar)

## Deploy to Netlify

1. Push code to GitHub first
2. Go to https://app.netlify.com/start
3. Connect to your Git provider
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Environment Variables

If you need environment variables for deployment:

1. Create `.env.local` for local development (already in .gitignore)
2. For production, add environment variables in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **GitHub**: Repository Settings → Secrets and variables → Actions

## Common Git Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Add specific files
git add file1.txt file2.txt

# Commit changes
git commit -m "Your commit message"

# Push changes
git push

# Pull latest changes
git pull

# View remote repositories
git remote -v
```

## Troubleshooting

### "Failed to push some refs"
```bash
# Pull the latest changes first
git pull origin main --rebase

# Then push again
git push origin main
```

### "Remote origin already exists"
```bash
# Remove existing remote
git remote remove origin

# Add the correct remote
git remote add origin YOUR_REPO_URL
```

### Change remote URL
```bash
git remote set-url origin NEW_URL
```


