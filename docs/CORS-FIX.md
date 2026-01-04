# CORS Error Fix for Contact Form API

## Problem
When submitting the contact form, you may encounter a "Failed to fetch" error. This is typically caused by a CORS (Cross-Origin Resource Sharing) issue.

## Solution

The API server needs to allow requests from your Next.js development server origin. 

### For Local Development

1. **Find your Next.js dev server origin:**
   - Check the console output when running `npm run dev`
   - Typically: `http://localhost:3000` (or another port)

2. **Configure the API server:**
   - Set the `ALLOWED_ORIGINS` environment variable to include your Next.js origin
   - Example: `ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001`
   - Or for development, allow all localhost origins: `ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,http://127.0.0.1:3000`

3. **Restart the API server** after making changes

### Example API Server Configuration

If your API server uses environment variables, create or update `.env`:

```env
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,http://127.0.0.1:3000
```

### Verify the Fix

1. Check browser console - you should see the API URL being called
2. Check Network tab - look for the POST request to `/api/contact`
3. If CORS is fixed, you should see a successful response (200 OK)
4. If still failing, check the Response headers for `Access-Control-Allow-Origin`

### Alternative: Test API Directly

You can test if the API is working by running the test script:

```powershell
powershell -ExecutionPolicy Bypass -File test-contact-api.ps1
```

If this works but the browser doesn't, it confirms a CORS issue.

### Production

For production, ensure `ALLOWED_ORIGINS` includes your production domain:
```env
ALLOWED_ORIGINS=https://valment.com,https://www.valment.com
```

