import { useThemeContext } from "@/hooks/useThemeContext"
import { SocialMediaLinks } from "../SocialMediaLinks"

export const Footer = () => {
  const { darkTheme } = useThemeContext()

  return (
    <footer className="w-full bg-colorDark flex flex-col justify-center items-center py-12 mt-16 gap-4">
      <p className={`text-center mb-3 text-sm text-colorLight`}>&copy;Todos os direitos reservados - Guilherme Andrade 2024 </p>
      <SocialMediaLinks tamanho="normal"/>
      <abbr title="O homem é o arquiteto de seu próprio destino." className="no-underline italic font-light">suae quisque fortuna faber est.</abbr>
      <div className="border-t-[1px] border-solid border-colorLight w-full flex flex-col items-center justify-center gap-6 pt-6">
        <code className="text-colorLight">Site desenvolvido por <a href="https://portfolio-luscabap.vercel.app/" target="_blank" className="underline">Lucas Baptista</a></code>
      </div>
    </footer>
  )
}