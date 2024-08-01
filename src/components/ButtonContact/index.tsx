import { IoLogoWhatsapp } from "react-icons/io";

export const ButtonContact = () => {
  return (
    <a target="_blank" href="https://wa.me/5513991446831" className="bg-colorContrast py-2 px-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-colorHoverContrast">
      <h4 className="text-colorDark">Falar com um especialista!</h4>
      <IoLogoWhatsapp size={20} className="text-colorDark"/>
    </a>
  )
}