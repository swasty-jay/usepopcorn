import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem("value");
    return storedValue ? JSON.parse(storedValue) : initialState; // Fallback to an empty array
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); // Runs whenever `value` changes

  return [value, setValue];
}
