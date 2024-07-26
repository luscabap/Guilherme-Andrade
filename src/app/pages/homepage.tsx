import { useContext } from "react";
import { Header } from "../components/Header";
import { ThemeContext } from "../page";

const HomePage = () => {
  const { themeOperator } = useContext(ThemeContext)
  return (
    <div className={themeOperator}>
      <div className="bg-colorBackground min-h-svh">
        <Header />
      </div>
    </div>
  )
}

export default HomePage;