// src/lib/stores/loader.js
import { writable } from 'svelte/store';

// Create a store with initial value true to show loader immediately
export const isLoading = writable(true);

// Helper functions
export function startLoading() {
  isLoading.set(true);
}

export function stopLoading() {
  setTimeout(() => {
    isLoading.set(false);
  }, 300);
}

// Async function wrapper to handle loading state
export async function withLoading(asyncFn) {
  startLoading();
  return new Promise((resolve, reject) => {
    Promise.resolve()
      .then(async () => {
        try {
          const result = await asyncFn();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          stopLoading();
        }
      });
  });
}

// Force reset function for emergency use
export function forceResetLoading() {
  isLoading.set(false);
}

// Timeout to prevent stuck loading state
if (typeof window !== 'undefined') {
  setTimeout(() => {
    isLoading.subscribe(value => {
      if (value === true) {
        forceResetLoading();
      }
    });
  }, 15000);
}