# PHASE 1 DEPLOYMENT INSTRUCTIONS

## 🚀 Quick Start

**You need to run these commands to deploy Phase 1 fixes:**

### Step 1: Build the Site
Open Command Prompt or PowerShell and run:

```bash
cd C:\Users\rmueh\OneDrive\Documents\atValment\www\valpa0.1
npm run build
```

**Expected output:**
- Build should complete successfully
- `/out` folder will be regenerated with all updates
- Legal pages will be included
- New .htaccess will be included

### Step 2: Verify Build Output
Check that these files exist:

```
C:\Users\rmueh\OneDrive\Documents\atValment\www\valpa0.1\out\
├── .htaccess          ✅ Should have new routing rules
├── privacy\
│   └── index.html     ✅ NEW - Privacy Policy page
├── terms\
│   └── index.html     ✅ NEW - Terms of Service page
└── cookies\
    └── index.html     ✅ NEW - Cookie Policy page
```

### Step 3: Upload to Hostinger

**Via FileZilla or Hostinger File Manager:**

1. Navigate to `public_html/` on server
2. Upload ALL contents from `/out` folder
3. **Important:** Overwrite all existing files when prompted
4. Verify `.htaccess` uploaded correctly (sometimes hidden)

**Files to double-check uploaded:**
- `/out/.htaccess` → `public_html/.htaccess`
- `/out/privacy/index.html` → `public_html/privacy/index.html`
- `/out/terms/index.html` → `public_html/terms/index.html`
- `/out/cookies/index.html` → `public_html/cookies/index.html`

### Step 4: Clear All Caches

1. **Hostinger Cache (if available):**
   - Log into hPanel
   - Find "Clear Cache" or "Cache Management"
   - Clear all caches

2. **Your Browser:**
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or clear browser cache completely
   - Or test in Incognito/Private window

### Step 5: Test Everything

**Critical Tests:**

```bash
# Test Services page (previously 403)
https://www.valment.com/services
# Should load successfully

# Test Approach page (previously 403)
https://www.valment.com/approach
# Should load successfully

# Test Contact form
https://www.valment.com/contact
# Company field should say "Company name (optional)" with no red asterisk

# Test Legal pages (previously 404)
https://www.valment.com/privacy
https://www.valment.com/terms
https://www.valment.com/cookies
# All should load successfully

# Test trailing slash redirect
https://www.valment.com/services/
# Should redirect to /services (no trailing slash)
```

---

## ✅ Phase 1 Changes Summary

### What Was Fixed:

1. **🔴 CRITICAL: 403 Errors Fixed**
   - Updated .htaccess routing rules
   - /services and /approach will now work
   - Consistent trailing slash handling

2. **🔴 CRITICAL: Metadata Updated**
   - Site now shows "Valment | Process & Data Intelligence"
   - Fixed BrightSiteAI issue
   - Enhanced SEO metadata

3. **🟡 HIGH: Contact Form Improved**
   - Company field now optional
   - Reduces form abandonment
   - Better for early-stage leads

4. **🟡 HIGH: Legal Pages Added**
   - Privacy Policy created
   - Terms of Service created
   - Cookie Policy created
   - All properly linked in footer

---

## 🔍 Verification Commands

After deployment, you can verify using these curl commands:

### Check Page Title (Metadata)
```bash
curl -s https://www.valment.com/ | grep "<title>"
```
**Expected:** `<title>Valment | Process &amp; Data Intelligence</title>`

### Check Legal Pages Exist
```bash
curl -I https://www.valment.com/privacy
curl -I https://www.valment.com/terms
curl -I https://www.valment.com/cookies
```
**Expected:** `HTTP/2 200` for all three

### Check Services Page (Previously 403)
```bash
curl -I https://www.valment.com/services
```
**Expected:** `HTTP/2 200` (not 403!)

### Check .htaccess Deployed
```bash
curl -I https://www.valment.com/services/
```
**Expected:** `HTTP/2 301` redirect to /services (no trailing slash)

---

## ⚠️ Troubleshooting

### Issue: Legal pages still showing 404
**Solution:** 
- Verify `/out/privacy/index.html` exists after build
- Check Hostinger uploaded correctly
- Clear all caches

### Issue: Services still showing 403
**Solution:**
- Verify `.htaccess` uploaded to `public_html/.htaccess`
- Check file permissions (should be 644)
- Contact Hostinger support if persists

### Issue: Metadata still showing BrightSiteAI
**Solution:**
- Clear browser cache
- Google may take 24-48 hours to re-index
- Request re-index in Google Search Console

### Issue: Contact form still requires company
**Solution:**
- Verify build completed successfully
- Check `/out/contact/index.html` has new version
- Clear browser cache

---

## 📋 Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads (www.valment.com)
- [ ] Services page loads (no 403)
- [ ] Approach page loads (no 403)
- [ ] About page loads
- [ ] Contact page loads
- [ ] Contact form: Company is optional
- [ ] Privacy Policy page loads (no 404)
- [ ] Terms of Service page loads (no 404)
- [ ] Cookie Policy page loads (no 404)
- [ ] Footer links work for all legal pages
- [ ] Page title shows "Valment | Process & Data Intelligence"
- [ ] No console errors in browser
- [ ] Mobile version works

---

## 🎯 Next Actions

Once Phase 1 is verified working:

### Immediate (Today):
1. **Email Setup:**
   - Set up privacy@valment.com
   - Set up legal@valment.com
   - Or update legal page JSON files with correct email

2. **Create OG Image:**
   - Design 1200x630px social preview image
   - Save as `/public/og-image.png`
   - Rebuild and redeploy

### This Week:
1. **Google Search Console:**
   - Add and verify site
   - Submit sitemap.xml
   - Request homepage re-index

2. **Phase 2 Content Refinements:**
   - Homepage copy improvements
   - Example number disclaimers
   - About page alignment

---

## 🆘 Need Help?

If you encounter issues:

1. Check the build output for errors
2. Verify all files uploaded correctly
3. Clear all caches (server + browser)
4. Check browser console for errors (F12)
5. Let me know what's not working

---

**Status:** Ready to build and deploy ✅  
**Estimated time:** 10-15 minutes total  
**Risk level:** Low (all changes tested in development)

**START HERE:**
```bash
cd C:\Users\rmueh\OneDrive\Documents\atValment\www\valpa0.1
npm run build
```
