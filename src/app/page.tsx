"use client";
import { useState } from "react";
import HomePage from "./pages/homepage";
import { createContext } from "react"

type ThemeContextProps = {
  themeOperator: "dark" | "light",
  toggleTheme: () => void,
  darkTheme: boolean
}
export const ThemeContext = createContext({} as ThemeContextProps);

export default function Home() {
  const [darkTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevValue => !prevValue);
  }

  const themeOperator = darkTheme ? "dark" : "light"

  return (
    <ThemeContext.Provider value={{ themeOperator, toggleTheme, darkTheme }}>
      <HomePage />
    </ThemeContext.Provider>
  );
}
