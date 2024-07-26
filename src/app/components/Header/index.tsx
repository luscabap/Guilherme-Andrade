import { ThemeContext } from "@/app/page";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuIsOpen(prevValue => !prevValue)
  }

  const iconProps = {
    size: 30,
    color: "white"
  }

  return (
    <header className={`${menuIsOpen ? "bg-colorPrimary" : "bg-colorTerciary"} flex items-center justify-between px-2 fixed w-full`}>
      { menuIsOpen 
        ? <IoMdClose {...iconProps} onClick={toggleMenu}/> 
        : <TiThMenuOutline {...iconProps} onClick={toggleMenu}/>}
      
      { menuIsOpen && <Menu />}
      <Logo />
      {
      darkTheme 
        ? <FaSun onClick={toggleTheme} {...iconProps} className="cursor-pointer"/> 
        : <FaMoon onClick={toggleTheme} {...iconProps} className="cursor-pointer"/>
      }
    </header>
  )
}