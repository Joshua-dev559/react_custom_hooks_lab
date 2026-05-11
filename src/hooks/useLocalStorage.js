import { useState, useEffect } from "react";

/*Safe localStorage hook that works in all test environments*/
function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? stored : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (value === undefined) return;
      localStorage.setItem(key, value);
    } catch {
      // ignore storage errors in test environment
    }
  }, [key, value]);

  return [value, setValue];
}

/* CRITICAL FIX FOR APP TEST */

// named export
export { useLocalStorage };

// default export (IMPORTANT)
export default useLocalStorage;