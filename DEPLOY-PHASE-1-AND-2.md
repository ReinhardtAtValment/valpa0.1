# Combined Phase 1 + Phase 2 Deployment Guide

**Date:** December 25, 2025  
**Status:** Ready for deployment

---

## Quick Summary

### What's Being Deployed

**Phase 1 - Emergency Fixes:**
- ✅ Fixed 403 errors on /services and /approach pages
- ✅ Corrected metadata (Google showing wrong brand name)
- ✅ Made contact form company field optional
- ✅ Created 3 legal pages (Privacy, Terms, Cookies)
- ✅ Updated sitemap with legal pages

**Phase 2 - Content Refinements:**
- ✅ Reduced "portfolio management capability" jargon
- ✅ Added disclaimers to example numbers
- ✅ Improved About page intro voice
- ✅ Standardized credential naming (SAP LeanIX)
- ✅ Removed filler industry section

---

## Pre-Deployment Checklist

Before you build and deploy, verify:

- [ ] All changes reviewed and approved
- [ ] Current working directory is project root
- [ ] Node modules installed (`npm install` if needed)
- [ ] No uncommitted critical changes
- [ ] Email addresses for legal pages configured:
  - `privacy@valment.com` (or update in legal JSON files)
  - `legal@valment.com` (or update in legal JSON files)

---

## Deployment Steps

### Step 1: Build the Site

```bash
cd C:\Users\rmueh\OneDrive\Documents\atValment\www\valpa0.1

npm run build
```

**Expected output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    xyz kB        xyz kB
├ ○ /about                               xyz kB        xyz kB
├ ○ /approach                            xyz kB        xyz kB
├ ○ /contact                             xyz kB        xyz kB
├ ○ /cookies                             xyz kB        xyz kB  ← NEW
├ ○ /privacy                             xyz kB        xyz kB  ← NEW
├ ○ /services                            xyz kB        xyz kB
└ ○ /terms                               xyz kB        xyz kB  ← NEW
```

**If build fails:**
- Check error message carefully
- Verify all JSON files are valid (no trailing commas)
- Ensure all imports are correct
- Contact for assistance if needed

---

### Step 2: Verify Build Output

```bash
# Check that /out directory was created
dir out

# Verify legal pages exist
dir out\privacy
dir out\terms
dir out\cookies

# Verify .htaccess is present
type out\.htaccess
```

**Critical files to verify:**
- `/out/index.html` (homepage)
- `/out/services/index.html` (should exist)
- `/out/approach/index.html` (should exist)
- `/out/privacy/index.html` (NEW)
- `/out/terms/index.html` (NEW)
- `/out/cookies/index.html` (NEW)
- `/out/.htaccess` (routing rules)
- `/out/sitemap.xml` (updated with legal pages)

---

### Step 3: Deploy to Hostinger

#### Option A: Using Hostinger File Manager

1. Log into Hostinger control panel
2. Open **File Manager**
3. Navigate to `public_html/`
4. **BACKUP FIRST:**
   - Select all files in `public_html/`
   - Click "Compress" → Create `backup-YYYYMMDD.zip`
   - Download the backup to your local machine
5. **Delete old files:**
   - Select all files/folders in `public_html/` (except backup)
   - Click "Delete"
6. **Upload new build:**
   - Click "Upload"
   - Upload entire contents of `/out` folder
   - Ensure all files upload successfully

#### Option B: Using FTP (recommended for large deployments)

1. Connect via FTP client (FileZilla, etc.)
   - Host: Your Hostinger FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
2. **Backup:**
   - Download entire `public_html/` folder to local backup
3. **Deploy:**
   - Delete all files in `public_html/` (or upload and overwrite)
   - Upload entire contents of `/out` folder to `public_html/`
   - Verify all files transferred successfully

---

### Step 4: Clear Caches

**Hostinger Cache:**
1. In Hostinger control panel
2. Go to **Website** → **Performance**
3. Click **Clear Cache** or **Purge Cache**

**Browser Cache:**
1. Open www.valment.com in browser
2. Press `Ctrl+Shift+Delete` (Chrome/Edge)
3. Select "Cached images and files"
4. Click "Clear data"
5. Or use hard refresh: `Ctrl+Shift+R`

---

### Step 5: Verify Deployment

**Critical URLs to Test:**

| URL | Expected Result | Phase |
|-----|----------------|-------|
| www.valment.com | Homepage loads | Both |
| www.valment.com/services | Loads (no 403) ✅ | Phase 1 |
| www.valment.com/approach | Loads (no 403) ✅ | Phase 1 |
| www.valment.com/about | Loads, no industry section ✅ | Phase 2 |
| www.valment.com/contact | Company field optional ✅ | Phase 1 |
| www.valment.com/privacy | Legal page loads ✅ | Phase 1 |
| www.valment.com/terms | Legal page loads ✅ | Phase 1 |
| www.valment.com/cookies | Legal page loads ✅ | Phase 1 |

**Visual Checks:**

Homepage:
- [ ] Hero subheadline says "value-driven prioritization" (not "portfolio management capability")
- [ ] Hero tile #2 says "Initiative portfolio ranked..." (not "Portfolio management capability...")
- [ ] Discovery visual footer shows disclaimer about illustrative example
- [ ] Page title in browser tab shows "Valment | Process & Data Intelligence"

About Page:
- [ ] Profile intro mentions "disciplined approach—evidence-based discovery..."
- [ ] No "Industry Experience" section visible
- [ ] Only 4 navigation items (Overview, Who We Are, Credentials, Expertise)
- [ ] SAP certifications show "SAP LeanIX Enterprise Architecture"

Contact Page:
- [ ] Company field shows "(optional)" in placeholder
- [ ] No red asterisk next to Company field
- [ ] Form submits without requiring company

Legal Pages:
- [ ] Footer shows Privacy Policy, Terms of Service, Cookie Policy links
- [ ] All legal pages show "Last Updated: December 25, 2025"
- [ ] All legal pages have cross-links to each other
- [ ] Contact email addresses are correct

---

## Post-Deployment Tasks

### Immediate (Within 24 hours):

1. **Monitor Contact Form:**
   - Test form submission (with and without company field)
   - Verify emails are received
   - Check spam folders

2. **Check Analytics:**
   - Verify Google Analytics still tracking (if installed)
   - Check for 404 errors in server logs
   - Monitor for any unusual error patterns

3. **Test on Multiple Devices:**
   - Desktop (Chrome, Edge, Firefox)
   - Mobile (iOS Safari, Android Chrome)
   - Tablet if available

### Within 1 Week:

4. **Google Search Console:**
   - Submit new sitemap.xml if not auto-detected
   - Request re-indexing of homepage
   - Monitor for crawl errors
   - Check "Performance" tab for ranking changes

5. **Metadata Verification:**
   - Google search for "valment" or "valment partners"
   - Verify result shows "Valment | Process & Data Intelligence"
   - May take 24-48 hours to update

6. **Legal Page Setup:**
   - Ensure email addresses are active:
     - privacy@valment.com
     - legal@valment.com
   - Consider legal review of Privacy/Terms/Cookies content
   - Add pages to main navigation if desired

---

## Rollback Plan (If Issues Occur)

If critical issues are discovered post-deployment:

1. **Immediate Rollback:**
   - Access Hostinger File Manager
   - Delete all files in `public_html/`
   - Extract backup zip (`backup-YYYYMMDD.zip`)
   - Upload restored files
   - Clear cache

2. **Identify Issue:**
   - Document what's broken
   - Check browser console for errors
   - Review deployment logs
   - Contact for assistance

3. **Fix and Re-deploy:**
   - Make fixes in development
   - Test thoroughly
   - Re-build
   - Re-deploy

---

## Known Issues & Limitations

**Phase 1:**
- Legal page content is template-based; recommend legal review before official launch
- Email addresses (privacy@, legal@) need to be configured in your email system

**Phase 2:**
- None identified

**General:**
- First Google re-index may take 24-48 hours
- Browser cache may show old content until cleared
- Contact form backend integration still pending (separate project)

---

## Success Criteria

Deployment is successful when:

- [x] All pages load without errors
- [x] No 403 errors on /services or /approach
- [x] Legal pages accessible and formatted correctly
- [x] Homepage shows updated content (no jargon, has disclaimers)
- [x] About page shows streamlined content
- [x] Contact form works with optional company field
- [x] Footer links to legal pages work
- [x] Mobile responsive design intact
- [x] Google showing correct brand name (within 24-48 hours)

---

## Support & Questions

**Documentation:**
- Phase 1 details: `PHASE-1-SUMMARY.md`
- Phase 2 details: `PHASE-2-SUMMARY.md`
- Combined guide: This file

**If deployment issues occur:**
1. Check browser console for JavaScript errors
2. Check browser network tab for failed requests
3. Review Hostinger error logs
4. Verify file upload completed successfully
5. Confirm cache was cleared (both server and browser)

**Build issues:**
- Verify Node.js version is compatible (v18+ recommended)
- Check `package.json` for correct dependencies
- Delete `node_modules` and `.next` folders, reinstall

---

## Post-Deployment Timeline

**Day 1 (Today):**
- Deploy and verify all URLs working
- Test contact form
- Test on mobile devices

**Day 2-3:**
- Monitor for errors/issues
- Check Google Search Console
- Verify analytics tracking

**Day 4-7:**
- Google re-indexing should complete
- Verify search results show correct metadata
- Consider legal review of legal pages

**Week 2+:**
- Business as usual
- Monitor for any issues
- Plan Phase 3 if needed (OG images, additional features, etc.)

---

**Status:** ✅ Ready for Deployment  
**Risk Level:** Low  
**Estimated Deployment Time:** 30-45 minutes  
**Recommended Deployment Window:** Anytime (low traffic impact)

Good luck with the deployment! 🚀
