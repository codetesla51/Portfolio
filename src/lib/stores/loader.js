// src/lib/stores/loader.js
import { writable } from 'svelte/store';

// Start with false - let the page load control it
export const isLoading = writable(false);

// Helper functions
export function startLoading() {
  isLoading.set(true);
}

export function stopLoading() {
  setTimeout(() => {
    isLoading.set(false);
  }, 300);
}

// Async function wrapper to handle loading state with minimum duration
export async function withLoading(asyncFn) {
  startLoading();
  const startTime = Date.now();
  
  try {
    const result = await asyncFn();
    
    // Ensure loader shows for at least 1000ms (aesthetic purposes)
    const elapsed = Date.now() - startTime;
    const minDuration = 1000;
    
    if (elapsed < minDuration) {
      await new Promise(resolve => setTimeout(resolve, minDuration - elapsed));
    }
    
    return result;
  } catch (error) {
    throw error;
  } finally {
    stopLoading();
  }
}

// Force reset function for emergency use
export function forceResetLoading() {
  isLoading.set(false);
}

// Timeout to prevent stuck loading state (15 seconds max)
if (typeof window !== 'undefined') {
  let timeoutId;
  
  isLoading.subscribe(value => {
    if (value === true) {
      // Clear any existing timeout
      if (timeoutId) clearTimeout(timeoutId);
      
      // Set new timeout
      timeoutId = setTimeout(() => {
        console.warn('Loading timeout reached - forcing reset');
        forceResetLoading();
      }, 15000);
    } else {
      // Clear timeout when loading stops
      if (timeoutId) clearTimeout(timeoutId);
    }
  });
}