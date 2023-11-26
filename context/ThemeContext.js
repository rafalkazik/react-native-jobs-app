import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme } from '../constants/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  const theme = isNightMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isNightMode, toggleNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
