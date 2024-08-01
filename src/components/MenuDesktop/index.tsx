import { dataLinks } from "@/data/dataLinks"
import { useThemeContext } from "@/hooks/useThemeContext"
import { Link } from "react-scroll"

export const MenuDesktop = () => {
  const { darkTheme } = useThemeContext()

  return (
    <nav>
      <ul className="flex gap-8">
      { dataLinks.map(item => (
          <li key={item.id}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-150}
              className={`text-xl underline cursor-pointer ${
                darkTheme ? "text-colorLight" : "text-colorDark"
              } hover:text-colorHoverContrast p-2 rounded-lg`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}