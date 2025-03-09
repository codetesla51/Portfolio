import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

// Create auth store with initial values
export const auth = writable({
  isAuthenticated: false,
  token: null,
  isLoading: true
});

// Initialize auth state from localStorage
export function initAuth() {
  // Need to check if we're in browser environment for SSR compatibility
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('admin_token');
    
    if (token) {
      auth.update(state => ({
        ...state,
        isAuthenticated: true,
        token,
        isLoading: false
      }));
      return true;
    }
  }
  
  auth.update(state => ({
    ...state,
    isAuthenticated: false,
    token: null,
    isLoading: false
  }));
  return false;
}

// Login function
export async function login(adminKey) {
  auth.update(state => ({ ...state, isLoading: true }));
  
  try {
    const response = await fetch('http://127.0.0.1:8000/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin_key: adminKey
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Store token in localStorage
      localStorage.setItem('admin_token', data.token);
      
      // Update store
      auth.update(state => ({
        ...state,
        isAuthenticated: true,
        token: data.token,
        isLoading: false
      }));
      
      // Redirect to dashboard
      goto('/admin/dashboard');
      return { success: true };
    } else {
      auth.update(state => ({ ...state, isLoading: false }));
      return { 
        success: false, 
        error: data.message || 'Authentication failed' 
      };
    }
  } catch (err) {
    auth.update(state => ({ ...state, isLoading: false }));
    return { 
      success: false, 
      error: 'Connection error. Please try again.' 
    };
  }
}

// Logout function
export function logout() {
  localStorage.removeItem('admin_token');
  
  auth.update(state => ({
    ...state,
    isAuthenticated: false,
    token: null
  }));
  
  goto('/admin/login');
}