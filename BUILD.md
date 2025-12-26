# Build Instructions

## Quick Build Command

For **Windows PowerShell** (recommended):

```bash
npm run buildstatic
```

This is an alias that clears Next.js environment variables before building.

## What It Does

The `buildstatic` command:
1. Clears Next.js private environment variables that can interfere with static exports
2. Runs `next build` to create the static site
3. Outputs to the `/out` folder

## If You Get Build Errors

### Error: "generate is not a function"

This happens when Next.js environment variables conflict with static export mode.

**Solution:** Use `npm run buildstatic` instead of `npm run build`

**Manual command:**
```powershell
Remove-Item Env:__NEXT_PRIVATE_STANDALONE_CONFIG -ErrorAction SilentlyContinue; Remove-Item Env:__NEXT_PRIVATE_ORIGIN -ErrorAction SilentlyContinue; Remove-Item Env:NEXT_DEPLOYMENT_ID -ErrorAction SilentlyContinue; Remove-Item Env:__NEXT_PRIVATE_RUNTIME_TYPE -ErrorAction SilentlyContinue; Remove-Item Env:NEXT_OTEL_FETCH_DISABLED -ErrorAction SilentlyContinue; npm run build
```

## Build Output

After successful build, you'll see:

```
▲ Next.js 16.1.0 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully
  Generating static pages (16/16)
✓ Generating static pages

Route (app)
├ ○ /
├ ○ /about
├ ○ /approach
├ ○ /contact
└ ○ /services

○  (Static)  prerendered as static content
```

The `/out` folder will contain all static files ready for deployment.

## Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Standard build (may fail on static export)
npm run buildstatic # Build with env cleanup (recommended for production)
npm run start       # Start production server (not used for static export)
npm run lint        # Run linter
```

## Next Steps

After building, see [DEPLOYMENT.md](./DEPLOYMENT.md) for upload instructions.

