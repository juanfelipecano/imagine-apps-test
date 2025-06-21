import { useCallback } from 'react';

export function useStorage() {
  const getItem = useCallback(async <T = unknown>(key: string): Promise<T | null> => {
    return new Promise((resolve) => {
      const item = localStorage.getItem(key);
      resolve(item ? JSON.parse(item) : null);
    });
  }, []);

  const setItem = useCallback(async <T = unknown>(key: string, value: T): Promise<void> => {
    return new Promise((resolve) => {
      localStorage.setItem(key, JSON.stringify(value));
      resolve();
    });
  }, []);

  const removeItem = useCallback(async (key: string): Promise<void> => {
    return new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve();
    });
  }, []);

  return {
    getItem,
    setItem,
    removeItem,
  };
}
