import Link from "next/link";
import { motion } from "framer-motion"
import { useThemeContext } from "@/hooks/useThemeContext";

export const Menu = () => {
  const { darkTheme } = useThemeContext()  

  const menuVariants = {
    initial: {
      scaleX: 0
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      }
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  return (
    <motion.nav 
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-colorPrimary absolute top-[136px] left-0 w-1/2 h-96 rounded-b-3xl origin-left"
    >
      <ul className="flex flex-col justify-between p-4 items-start h-full">
        <li>
          <Link href={"/"} className={`text-xl underline ${darkTheme ? "text-colorLight" : "text-colorDark"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/"} className={`text-xl underline ${darkTheme ? "text-colorLight" : "text-colorDark"}`}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link href={"/"} className={`text-xl underline ${darkTheme ? "text-colorLight" : "text-colorDark"}`}>
            Área de Atuação
          </Link>
        </li>
        <li>
          <Link href={"/"} className={`text-xl underline ${darkTheme ? "text-colorLight" : "text-colorDark"}`}>
            Entre em contato
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};
