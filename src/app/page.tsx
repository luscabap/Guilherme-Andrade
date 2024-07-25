"use client";
import { useState } from "react";
import HomePage from "./pages/homepage";
import { createContext } from "react"

type ThemeContextProps = {
  themeOperator: "dark" | "light",
  toggleTheme: () => void
}
export const ThemeContext = createContext({} as ThemeContextProps);

export default function Home() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevValue => !prevValue);
  }

  const themeOperator = theme ? "dark" : "light"

  return (
    <ThemeContext.Provider value={{ themeOperator, toggleTheme }}>
      <HomePage />
    </ThemeContext.Provider>
  );
}
