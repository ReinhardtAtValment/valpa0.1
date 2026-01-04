# Contact Form API - Integration Guide

This document explains how to integrate the Contact Form API into your website application.

## API Endpoint

- **Development/Testing**: `http://localhost:3001/api/contact`
- **Production**: `https://app.valment.com/api/contact`

## Configuration

### Recommended: Environment-Based Configuration

Create a configuration file or use environment variables in your frontend project:

**JavaScript/TypeScript Config Example:**
```javascript
// config/api.js or config/constants.js
const API_CONFIG = {
  contactFormEndpoint: process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
    : process.env.NODE_ENV === 'production'
    ? 'https://app.valment.com/api/contact'
    : 'http://localhost:3001/api/contact'
};

export default API_CONFIG;
```

**Environment Variables (.env.local for Next.js, .env for others):**
```env
# Development
NEXT_PUBLIC_API_URL=http://localhost:3001

# Production
NEXT_PUBLIC_API_URL=https://app.valment.com
```

### Simple Config File Approach

**config/api.config.js:**
```javascript
const config = {
  development: {
    apiUrl: 'http://localhost:3001'
  },
  production: {
    apiUrl: 'https://app.valment.com'
  }
};

const env = process.env.NODE_ENV || 'development';
export const API_URL = config[env].apiUrl;
export const CONTACT_API_ENDPOINT = `${API_URL}/api/contact`;
```

## API Specification

### Endpoint
`POST /api/contact`

### Request Headers
```
Content-Type: application/json
```

### Request Body
The API accepts any JSON object with contact form fields. Common fields include:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Inquiry about services",
  "message": "I'm interested in learning more...",
  "interests": ["Web Development", "Consulting"],
  "newsletter": true,
  "company": "Acme Inc.",
  "preferredContact": "email"
}
```

**Field Notes:**
- All fields are optional (but at least one field is required)
- Field names are flexible - use whatever matches your form
- Arrays are supported (e.g., checkboxes, multiple selections)
- Booleans are supported (e.g., newsletter subscription)
- The API will accept any field names you send

### Response Format

**Success (200 OK):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "messageId": "<message-id@valment.com>"
}
```

**Error (400 Bad Request - Validation Error):**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "\"email\" must be a valid email"
    }
  ]
}
```

**Error (429 Too Many Requests - Rate Limited):**
```json
{
  "success": false,
  "message": "Too many requests from this IP, please try again later."
}
```

**Error (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Failed to process contact form submission"
}
```

## Integration Examples

### React/Next.js Example

```javascript
// utils/contactForm.js
import API_CONFIG from '@/config/api';

export async function submitContactForm(formData) {
  try {
    const response = await fetch(API_CONFIG.contactFormEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}
```

**Usage in a React Component:**
```javascript
import { useState } from 'react';
import { submitContactForm } from '@/utils/contactForm';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await submitContactForm(formData);
      setSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', message: '', newsletter: false });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        />
        Subscribe to newsletter
      </label>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Thank you! Your message has been sent.</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### Vanilla JavaScript Example

```javascript
// config.js
const API_CONFIG = {
  contactFormEndpoint: window.location.hostname === 'localhost'
    ? 'http://localhost:3001/api/contact'
    : 'https://app.valment.com/api/contact'
};

// contactForm.js
async function submitContactForm(formData) {
  try {
    const response = await fetch(API_CONFIG.contactFormEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('Contact form error:', error);
    throw error;
  }
}

// Usage
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    newsletter: document.getElementById('newsletter').checked
  };

  try {
    const result = await submitContactForm(formData);
    alert('Thank you! Your message has been sent.');
    e.target.reset();
  } catch (error) {
    alert('Error: ' + error.message);
  }
});
```

### TypeScript Example with Types

```typescript
// types/contact.ts
export interface ContactFormData {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  interests?: string[];
  newsletter?: boolean;
  company?: string;
  [key: string]: any; // Allow any additional fields
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  messageId?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// utils/contactForm.ts
import { ContactFormData, ContactFormResponse } from '@/types/contact';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL 
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
  : process.env.NODE_ENV === 'production'
  ? 'https://app.valment.com/api/contact'
  : 'http://localhost:3001/api/contact';

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result: ContactFormResponse = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit contact form');
  }

  return result;
}
```

## CORS Configuration

The API is configured to accept requests from specific origins. Make sure your frontend domain is included in the `ALLOWED_ORIGINS` environment variable on the API server:

```env
ALLOWED_ORIGINS=https://valment.com,https://www.valment.com
```

For local development, the API allows requests with no origin in development mode.

## Rate Limiting

The API implements rate limiting:
- **Limit**: 5 requests per 15 minutes per IP address
- **Response**: 429 Too Many Requests if exceeded

Handle rate limiting in your frontend:

```javascript
try {
  const result = await submitContactForm(formData);
} catch (error) {
  if (error.message.includes('Too many requests')) {
    // Show user-friendly message
    alert('Please wait a few minutes before submitting again.');
  } else {
    // Handle other errors
    alert('Error: ' + error.message);
  }
}
```

## Error Handling Best Practices

```javascript
async function submitContactForm(formData) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle validation errors
      if (response.status === 400 && data.errors) {
        const errorMessages = data.errors.map(e => e.message).join(', ');
        throw new Error(errorMessages);
      }
      // Handle rate limiting
      if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }
      // Handle other errors
      throw new Error(data.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    // Network errors
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Network error. Please check your connection.');
    }
    throw error;
  }
}
```

## Testing

### Local Testing Setup

1. **Start the API server:**
   ```bash
   cd mailservice
   npm install
   npm start
   # Server runs on http://localhost:3001
   ```

2. **Configure your frontend:**
   - Set `NEXT_PUBLIC_API_URL=http://localhost:3001` in `.env.local`
   - Or update your config file to point to `http://localhost:3001`

3. **Test the form submission:**
   - Fill out your contact form
   - Submit and verify the email is received

### Production Setup

1. **Deploy the API** to your VPS at `app.valment.com`
2. **Update frontend config** to use `https://app.valment.com`
3. **Verify CORS** settings include your frontend domain

## Email Format

The submitted form data will be sent as:
- **HTML email** with formatted table of all fields
- **Plain text** alternative
- **JSON attachment** with raw form data
- **Subject line**: "New Contact Form Submission from [Name]" (or email/subject if no name)

## Support

For API issues or questions, check:
- `README.md` - API setup and deployment
- `TROUBLESHOOTING.md` - Common issues and solutions
- API health endpoint: `GET /api/contact/health`

