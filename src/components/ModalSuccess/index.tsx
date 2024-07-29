import { FaRegCheckCircle } from "react-icons/fa";
import { Logo } from "../Logo";
import { useThemeContext } from "@/hooks/useThemeContext";

export const ModalSuccess = () => {
  const { darkTheme } = useThemeContext()

  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-colorBackgroundModal">
      <div className={`p-4 flex flex-col items-center justify-center gap-4 rounded-lg ${darkTheme ? "bg-colorDark" : "bg-colorLight"}`}>
        <h2 className="text-2xl text-colorPrimary">Sucesso ao enviar o e-mail</h2>
        <p className={`text-lg text-center ${darkTheme ? "text-colorLight" : "text-colorDark"}`}>Em breve, entraremos em contato com você!</p>
        <FaRegCheckCircle size={45} color="082f63"/>
        <Logo />
      </div>
    </div>
  )
}