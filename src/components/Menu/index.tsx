import { motion } from "framer-motion";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Link } from "react-scroll";
import { SocialMediaLinks } from "../SocialMediaLinks";
import { dataLinks } from "@/data/dataLinks";

export const Menu = () => {
  const { darkTheme } = useThemeContext();

  const menuVariants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.nav
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-colorPrimary absolute top-[136px] left-0 w-1/2 h-96 rounded-b-3xl origin-left"
    >
      <ul className="flex flex-col justify-between p-4 items-start w-full gap-10 mb-8">
        { dataLinks.map(item => (
          <li>
            <Link
              to={item.to}
              key={item.id}
              smooth={true}
              duration={500}
              offset={-150}
              className={`text-xl underline cursor-pointer ${
                darkTheme ? "text-colorLight" : "text-colorDark"
              }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <SocialMediaLinks tamanho="small" cor="white"/>
      </div>
      <div className="hidden md:block">
        <SocialMediaLinks tamanho="normal" cor="white"/>
      </div>
    </motion.nav>
  );
};
