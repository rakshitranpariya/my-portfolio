import { createContext, useContext, useState } from "react";
import { useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    if (isToggled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isToggled]);

  // Optional: Persist
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) setIsToggled(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isToggled));
  }, [isToggled]);
  return (
    <ThemeContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
