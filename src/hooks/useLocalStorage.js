import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue = null) {
  // Get value from localStorage (if it exists)
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    // If nothing exists in storage, use initialValue (or null)
    if (stored === null) return initialValue;

    return stored;
  });

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    if (value === undefined) return;

    // IMPORTANT: store raw string (NO JSON.stringify)
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}