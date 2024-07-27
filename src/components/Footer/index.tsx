import { SocialMediaLinks } from "../SocialMediaLinks"

export const Footer = () => {
  return (
    <footer className="w-full bg-colorDark flex flex-col justify-center items-center py-6">
      <p className="text-center border-solid border-colorPrimary border-b-[1px] pb-3 mb-3">&copy;Todos os direitos reservados - Guilherme Andrade 2024 </p>
      <SocialMediaLinks tamanho="normal"/>
      <p>Site desenvolvido por <a href="https://portfolio-luscabap.vercel.app/" target="_blank">Lucas Baptista</a></p>
    </footer>
  )
}