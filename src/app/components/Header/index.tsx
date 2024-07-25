import { ThemeContext } from "@/app/page"
import { useContext } from "react"

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <h1 className="bg-colorLight">Logo</h1>
      <nav>
        <ul>
          <li className="bg-colorPrimary">TESTE</li>
          <li className="bg-colorSecondary">TESTE1</li>
          <li className="bg-colorTerciary">TESTE2</li>
          <li className="">TESTE3</li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="bg-colorContrast">trocar tema</button>
    </header>
  )
}