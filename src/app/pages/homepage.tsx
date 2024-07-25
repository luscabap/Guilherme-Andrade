import { useContext } from "react";
import { Header } from "../components/Header";
import { ThemeContext } from "../page";

const HomePage = () => {
  const { themeOperator } = useContext(ThemeContext)
  return (
    <div className={themeOperator}>
      <h1 className="bg-colorPrimary">TITULO SITE</h1>
      <Header />
    </div>
  )
}

export default HomePage;