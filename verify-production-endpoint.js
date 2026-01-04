/**
 * Script to verify what endpoint will be called in production
 * Run: node verify-production-endpoint.js
 */

// Simulate the logic from contact form
const getApiEndpoint = (NEXT_PUBLIC_API_URL, NODE_ENV) => {
  // In Next.js static export, process.env values are replaced at build time
  // This simulates what happens during build
  
  const apiBaseUrl = NEXT_PUBLIC_API_URL 
    ? `${NEXT_PUBLIC_API_URL}/api/contact`
    : NODE_ENV === 'production'
    ? 'https://app.valment.com/api/contact'
    : 'http://localhost:3001/api/contact';
  
  return apiBaseUrl;
};

console.log('=== Production Endpoint Verification ===\n');

// Test scenario 1: No env vars set (default production build)
console.log('Scenario 1: Default production build (no env vars)');
console.log('  NEXT_PUBLIC_API_URL: undefined');
console.log('  NODE_ENV: production');
console.log('  Endpoint:', getApiEndpoint(undefined, 'production'));
console.log('');

// Test scenario 2: NEXT_PUBLIC_API_URL set
console.log('Scenario 2: NEXT_PUBLIC_API_URL set');
console.log('  NEXT_PUBLIC_API_URL: https://app.valment.com');
console.log('  NODE_ENV: production');
console.log('  Endpoint:', getApiEndpoint('https://app.valment.com', 'production'));
console.log('');

// Test scenario 3: Development
console.log('Scenario 3: Development mode');
console.log('  NEXT_PUBLIC_API_URL: undefined');
console.log('  NODE_ENV: development');
console.log('  Endpoint:', getApiEndpoint(undefined, 'development'));
console.log('');

console.log('=== Conclusion ===');
console.log('For production static build (npm run build):');
console.log('✅ Endpoint will be: https://app.valment.com/api/contact');
console.log('✅ This is correct for production deployment');

