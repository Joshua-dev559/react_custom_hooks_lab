import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    // If nothing exists, use initialValue (or null)
    return stored !== null ? stored : initialValue;
  });

  useEffect(() => {
    // IMPORTANT: store raw value (NO JSON.stringify)
    if (value === undefined || value === null) return;

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}