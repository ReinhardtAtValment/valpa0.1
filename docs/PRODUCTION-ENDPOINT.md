# Production Contact Form Endpoint Configuration

## Current Implementation

The contact form uses the following logic to determine the API endpoint:

```typescript
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL 
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
  : process.env.NODE_ENV === 'production'
  ? 'https://app.valment.com/api/contact'
  : 'http://localhost:3001/api/contact';
```

## Production Endpoint

**For production static builds, the form will call:**
```
https://app.valment.com/api/contact
```

This happens when:
- `NEXT_PUBLIC_API_URL` is NOT set, AND
- `NODE_ENV === 'production'` (which is the default when running `npm run build`)

## Verification

### Option 1: Use Default (Recommended)
If you don't set any environment variables, the form will automatically use:
- **Production endpoint:** `https://app.valment.com/api/contact`

### Option 2: Explicit Configuration
If you want to explicitly set the endpoint, create a `.env.production` file:

```env
NEXT_PUBLIC_API_URL=https://app.valment.com
```

Then build with:
```bash
npm run build
```

This will bake `https://app.valment.com/api/contact` into the static files.

## Important Notes

1. **Static Export Behavior:**
   - Next.js replaces `process.env.NEXT_PUBLIC_*` variables at BUILD time
   - These values are baked into the JavaScript bundle
   - The values are available in the browser (client-side)

2. **NODE_ENV:**
   - When you run `npm run build`, Next.js sets `NODE_ENV=production` automatically
   - This means the fallback to `https://app.valment.com/api/contact` will work

3. **CORS Configuration:**
   - Ensure your API server at `app.valment.com` has CORS configured to allow requests from your production domain
   - Example: `ALLOWED_ORIGINS=https://valment.com,https://www.valment.com`

## Testing Production Build Locally

To test the production endpoint locally:

1. Build the static site:
   ```bash
   npm run build
   ```

2. Serve the `out` directory:
   ```bash
   npx serve out
   ```

3. Open the site in your browser and test the contact form
4. Check the browser console - you should see:
   ```
   Submitting to API: https://app.valment.com/api/contact
   Current origin: http://localhost:3000 (or whatever port serve uses)
   ```

## Verification Checklist

- [ ] API server is running at `https://app.valment.com`
- [ ] API server CORS allows requests from your production domain
- [ ] Build the static site: `npm run build`
- [ ] Verify the endpoint in the built JavaScript (check `out/_next/static/chunks/`)
- [ ] Test form submission in production environment

