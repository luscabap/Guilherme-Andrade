import Image from "next/image";
import logoWhite from "/public/assets/logo_t.png"
import logoBlack from "/public/assets/logo_tb.png"
import { useThemeContext } from "@/hooks/useThemeContext";

export const Logo = () => {
  const { darkTheme } = useThemeContext()

  return (
    <Image src={darkTheme ? logoWhite : logoBlack} alt="Imagem da logo do Dr. Guilherme Andrade" className="rounded-2xl w-[160px] h-[120px]" priority={true}/>
  )
}