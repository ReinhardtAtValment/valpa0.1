/**
 * Example Contact Form Utility Functions
 * Copy this to your website project: utils/contactForm.js or lib/contactForm.js
 */

import { API_CONFIG } from '@/config/api'; // Adjust import path as needed

/**
 * Submit contact form data to the API
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - API response
 */
export async function submitContactForm(formData) {
  try {
    const response = await fetch(API_CONFIG.contactEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
        throw new Error('Too many requests. Please wait a few minutes before trying again.');
      }
      
      // Handle other errors
      throw new Error(data.message || 'Failed to submit contact form');
    }

    return data;
  } catch (error) {
    // Network errors
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Network error. Please check your internet connection and try again.');
    }
    throw error;
  }
}

/**
 * Validate email format (client-side validation)
 * @param {string} email - Email address to validate
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize form data before submission
 * @param {Object} formData - Raw form data
 * @returns {Object} - Sanitized form data
 */
export function sanitizeFormData(formData) {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      // Remove leading/trailing whitespace
      sanitized[key] = value.trim();
    } else if (Array.isArray(value)) {
      // Sanitize array elements
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? item.trim() : item
      );
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

