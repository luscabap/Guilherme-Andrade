import Image from "next/image";
import logoWhite from "/public/assets/logo_t.png";
import logoBlack from "/public/assets/logo_tb.png";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Link } from "react-scroll";

export const Logo = () => {
  const { darkTheme } = useThemeContext();

  return (
    <Link 
      to="home-content" 
      smooth={true} 
      duration={500} 
      offset={-150}
    >
      <Image
        src={darkTheme ? logoWhite : logoBlack}
        alt="Imagem da logo do Dr. Guilherme Andrade"
        className="rounded-2xl w-[160px] h-[120px]"
        priority={true}
      />
    </Link>
  );
};
