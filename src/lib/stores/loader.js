// src/lib/stores/loader.js
import { writable } from 'svelte/store';

// Simple loading state - default to false for instant content
export const isLoading = writable(false);

// Start loading (rarely needed now)
export function startLoading() {
  isLoading.set(true);
}

// Stop loading
export function stopLoading() {
  isLoading.set(false);
}

// Wrapper for async operations - minimal delay
export async function withLoading(asyncFn) {
  // Don't show loader for fast operations
  const startTime = Date.now();
  
  try {
    const result = await asyncFn();
    return result;
  } catch (error) {
    throw error;
  }
}

// Force reset
export function forceResetLoading() {
  isLoading.set(false);
}