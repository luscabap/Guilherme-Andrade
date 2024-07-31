"use client"

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { useThemeContext } from "@/hooks/useThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { MenuDesktop } from "../MenuDesktop";

export const Header = () => {
  const { darkTheme, toggleTheme } = useThemeContext();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prevValue) => !prevValue);
  };

  const iconProps = {
    color: "white",
  };


  return (
    <header
      className={`${ menuIsOpen ? "bg-colorPrimary" : "bg-colorTerciary" } flex items-center justify-between px-2 fixed w-full z-50 py-2 xl:px-8`}
    >
      <div
        className="cursor-pointer p-2 xl:hidden"
      >
        { menuIsOpen 
        ? ( <IoMdClose {...iconProps} onClick={toggleMenu} />) 
        : ( <TiThMenuOutline {...iconProps} onClick={toggleMenu} />)
        }
      </div>

      <AnimatePresence>
        {menuIsOpen && (
            <Menu />
        )}
      </AnimatePresence>

      <Logo />
      
      <div className="hidden xl:block">
        <MenuDesktop />
      </div>

      {darkTheme ? (
        <FaSun
          onClick={toggleTheme}
          {...iconProps}
          className="cursor-pointer w-6 h-6 md:w-10 md:h-10"
        />
      ) : (
        <FaMoon
          onClick={toggleTheme}
          {...iconProps}
          className="cursor-pointer w-6 h-6 md:w-10 md:h-10"
        />
      )}
    </header>
  );
};
