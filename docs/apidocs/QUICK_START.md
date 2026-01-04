# Quick Start Guide

## For API Developers (Backend)

See [README.md](README.md) for API setup and deployment.

## For Frontend Developers (Website Integration)

### 1. Configuration

**Option A: Environment Variables (Recommended)**
```env
# .env.local (development)
NEXT_PUBLIC_API_URL=http://localhost:3001

# .env.production
NEXT_PUBLIC_API_URL=https://app.valment.com
```

**Option B: Config File**
Copy `examples/frontend-config.js` to your project and import it.

### 2. API Endpoints

- **Development**: `http://localhost:3001/api/contact`
- **Production**: `https://app.valment.com/api/contact`

### 3. Basic Usage

```javascript
import { submitContactForm } from '@/utils/contactForm';

const result = await submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
});
```

### 4. Complete Examples

- **[API_USAGE.md](API_USAGE.md)** - Full API specification and examples
- **[INTEGRATION_EXAMPLE.md](INTEGRATION_EXAMPLE.md)** - Step-by-step integration
- **[examples/](examples/)** - Ready-to-use code snippets

### 5. Testing Locally

1. Start API: `cd mailservice && npm start` (runs on port 3001)
2. Configure frontend to use `http://localhost:3001`
3. Submit form and check email inbox

### 6. Production Deployment

1. Deploy API to `app.valment.com`
2. Update frontend config to `https://app.valment.com`
3. Ensure CORS includes your frontend domain

## Documentation Files

- **API_USAGE.md** - Complete API documentation with examples
- **INTEGRATION_EXAMPLE.md** - Quick integration guide
- **README.md** - API setup and deployment
- **TROUBLESHOOTING.md** - Common issues and solutions
- **examples/** - Code examples you can copy

