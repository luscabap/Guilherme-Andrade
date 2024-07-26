import { ThemeContext } from "@/components/ThemeProvider"
import { useContext } from "react"

export const useThemeContext = () => {
  const { darkTheme, themeOperator, toggleTheme } = useContext(ThemeContext)

  return ({
    darkTheme,
    themeOperator,
    toggleTheme
  })
}