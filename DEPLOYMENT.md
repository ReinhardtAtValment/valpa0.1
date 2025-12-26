# Deployment Instructions for Hostinger

## Problem Fixed
- Homepage works but subpages get 403 errors
- This is because Next.js static export needs proper routing configuration

## What Changed

### 1. Next.js Config (`next.config.mjs`)
- Added `trailingSlash: true` 
- This makes Next.js create `/services/index.html` instead of `/services.html`
- Better compatibility with traditional hosting

### 2. Created `.htaccess` file
- Handles clean URLs (e.g., `/services` → `/services/index.html`)
- Forces HTTPS
- Prevents 403 errors on subpages
- Sets up caching and security headers

### 3. Added 404 page
- Custom error page for missing URLs

## Deploy Steps

### Step 1: Build New Static Export

**Windows (PowerShell) - Recommended:**
```bash
npm run buildstatic
```

**Alternative (if buildstatic fails):**
```bash
npm run build
```

**Manual PowerShell command (if needed):**
```powershell
Remove-Item Env:__NEXT_PRIVATE_STANDALONE_CONFIG -ErrorAction SilentlyContinue; Remove-Item Env:__NEXT_PRIVATE_ORIGIN -ErrorAction SilentlyContinue; Remove-Item Env:NEXT_DEPLOYMENT_ID -ErrorAction SilentlyContinue; Remove-Item Env:__NEXT_PRIVATE_RUNTIME_TYPE -ErrorAction SilentlyContinue; Remove-Item Env:NEXT_OTEL_FETCH_DISABLED -ErrorAction SilentlyContinue; npm run build
```

> **Note:** The `buildstatic` command clears Next.js environment variables that can interfere with static export builds. Use this if `npm run build` gives "generate is not a function" errors.

This will create a fresh `/out` folder with:
- Proper directory structure
- All pages as `/page-name/index.html`
- The new `.htaccess` file
- `robots.txt` and `sitemap.xml`

### Step 2: Upload to Hostinger

**Upload ALL contents from the `/out` folder to `public_html/`:**

```
out/
├── index.html              → public_html/index.html
├── .htaccess              → public_html/.htaccess
├── robots.txt             → public_html/robots.txt
├── sitemap.xml            → public_html/sitemap.xml
├── 404.html               → public_html/404.html
├── services/
│   └── index.html         → public_html/services/index.html
├── approach/
│   └── index.html         → public_html/approach/index.html
├── about/
│   └── index.html         → public_html/about/index.html
├── contact/
│   └── index.html         → public_html/contact/index.html
├── _next/                 → public_html/_next/
└── ... (all other files)
```

**IMPORTANT:** 
- Make sure `.htaccess` is uploaded (it's hidden, starts with a dot)
- In FileZilla/FTP client: enable "Show hidden files"
- Verify it exists: `public_html/.htaccess`

### Step 3: Test

Test all pages:
```bash
curl -I https://www.valment.com/
curl -I https://www.valment.com/services/
curl -I https://www.valment.com/approach/
curl -I https://www.valment.com/about/
curl -I https://www.valment.com/contact/
```

All should return `200 OK` (not 403).

Also test in browser:
- https://www.valment.com
- https://www.valment.com/services
- https://www.valment.com/approach
- https://www.valment.com/about
- https://www.valment.com/contact

### Step 4: Verify SEO Files

Check these URLs work:
- https://www.valment.com/robots.txt
- https://www.valment.com/sitemap.xml

## Troubleshooting

### If subpages still get 403:

**Option 1: Simplify .htaccess**

Replace the `.htaccess` content with this minimal version:

```apache
RewriteEngine On
RewriteBase /

# Serve index.html for directories
DirectoryIndex index.html

# Handle clean URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ /$1/ [L,R=301]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}/index.html -f
RewriteRule ^(.*)$ /$1/index.html [L]
```

**Option 2: Check file permissions**

In Hostinger hPanel:
- Use "Fix File Ownership" tool
- Set directories to 755
- Set files to 644

**Option 3: Disable ModSecurity (if active)**

Add to top of `.htaccess`:
```apache
<IfModule mod_security.c>
  SecFilterEngine Off
</IfModule>
```

## What This Fixes

✅ Homepage accessible  
✅ All subpages accessible (no more 403)  
✅ Clean URLs work (`/services` instead of `/services.html`)  
✅ HTTPS redirect  
✅ Proper caching  
✅ Google can crawl all pages  
✅ LinkedIn previews work  

## Next Steps After Deployment

1. **Google Search Console**
   - Add property: https://www.valment.com
   - Submit sitemap: https://www.valment.com/sitemap.xml
   - Request indexing for all 5 pages

2. **Test Social Media Previews**
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

3. **Monitor**
   - Check Google Search Console for crawl errors
   - Verify all pages indexed within 1-2 weeks

