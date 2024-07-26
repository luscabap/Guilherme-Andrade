import Image from "next/image";
import logo from "/public/assets/logo.png"

export const Logo = () => {
  return (
    <Image src={logo} alt="Imagem da logo do Dr. Guilherme Andrade" className="rounded-2xl w-[160px] h-[140px]"/>
  )
}