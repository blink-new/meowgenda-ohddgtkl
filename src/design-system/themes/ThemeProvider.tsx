import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeMode, lightTheme, darkTheme } from './theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    return savedTheme === 'dark' ? darkTheme : lightTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.mode);
    document.documentElement.setAttribute('data-theme', theme.mode);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};