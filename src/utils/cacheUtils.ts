
interface CacheOptions {
  maxAge?: number; // In milliseconds
}

interface CachedItem<T> {
  value: T;
  timestamp: number;
}

class MemoryCache {
  private cache: Map<string, CachedItem<any>> = new Map();
  
  /**
   * Set a value in the cache
   */
  set<T>(key: string, value: T, options: CacheOptions = {}): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
  
  /**
   * Get a value from the cache
   */
  get<T>(key: string, options: CacheOptions = {}): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }
    
    // Check if the cached item has expired
    if (options.maxAge && Date.now() - item.timestamp > options.maxAge) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
  
  /**
   * Check if a key exists in the cache
   */
  has(key: string, options: CacheOptions = {}): boolean {
    const item = this.cache.get(key);
    
    if (!item) {
      return false;
    }
    
    // Check if the cached item has expired
    if (options.maxAge && Date.now() - item.timestamp > options.maxAge) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }
  
  /**
   * Remove an item from the cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }
  
  /**
   * Clear the entire cache
   */
  clear(): void {
    this.cache.clear();
  }
}

/**
 * Prefetch an image
 */
export const prefetchImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });
};

/**
 * Prefetch a page
 */
export const prefetchPage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          resolve();
        } else {
          reject();
        }
      })
      .catch(reject);
  });
};

// Export a singleton instance
export const memoryCache = new MemoryCache();
