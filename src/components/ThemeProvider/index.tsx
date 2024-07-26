"use client"

import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextProps = {
  themeOperator: "dark" | "light";
  toggleTheme: () => void;
  darkTheme: boolean;
};

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevValue) => !prevValue);
  };

  const themeOperator = darkTheme ? "dark" : "light";
  
  useEffect(() => {
    document.body.classList.add(themeOperator)
    return () => {
      document.body.classList.remove(themeOperator)
    }
  }, [themeOperator])


  return (
    <ThemeContext.Provider value={{ themeOperator, toggleTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
