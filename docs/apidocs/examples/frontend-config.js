/**
 * Example API Configuration for Frontend Projects
 * Copy this to your website project and adjust as needed
 */

// Option 1: Environment-based (Recommended for Next.js)
const getApiUrl = () => {
  // Check for explicit environment variable (Next.js, Vite, etc.)
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // Check for browser environment
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // Local development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:3001';
    }
  }
  
  // Production default
  return 'https://app.valment.com';
};

export const API_CONFIG = {
  baseUrl: getApiUrl(),
  contactEndpoint: `${getApiUrl()}/api/contact`,
};

// Option 2: Simple config object (for static sites)
export const API_CONFIG_SIMPLE = {
  development: {
    baseUrl: 'http://localhost:3001',
    contactEndpoint: 'http://localhost:3001/api/contact',
  },
  production: {
    baseUrl: 'https://app.valment.com',
    contactEndpoint: 'https://app.valment.com/api/contact',
  },
};

// Usage:
// const env = process.env.NODE_ENV || 'development';
// const config = API_CONFIG_SIMPLE[env];
// fetch(config.contactEndpoint, ...)

