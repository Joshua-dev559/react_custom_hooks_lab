import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    // If nothing in localStorage, use initialValue (or null)
    if (stored === null) return initialValue;

    return stored;
  });

  useEffect(() => {
    if (value === undefined) return;

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}