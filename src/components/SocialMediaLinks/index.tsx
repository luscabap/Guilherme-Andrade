import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

type SocialMediaLinks = {
  tamanho: "small" | "normal" | "large";
  cor?: string
};

export const SocialMediaLinks = ({ tamanho, cor = "#082f63" }: SocialMediaLinks) => {
  const [iconProps, setIconProps] = useState({
    size: 35,
    color: cor
  })

  useEffect(() => {
    switch (tamanho) {
      case "small":
        return (setIconProps({
          size: 15,
          color: cor
        }))
      case "normal":
        return (
          setIconProps({
          size: 35,
          color: cor
        })
        )
      case "large":
        return (
          setIconProps({
            size: 55,
            color: cor
      }))
      default:
        break;
    }
  }, [tamanho, cor])

  return (
    <div className="flex gap-8 items-center justify-center w-full">
      <a href="https://wa.me/5513991446831" target="_blank" className="bg-transparent hover:bg-colorHover rounded-xl">
        <FaWhatsapp {...iconProps} />
      </a>
      <a href="https://www.instagram.com/gui.andrade_adv/" target="_blank" className="bg-transparent hover:bg-colorHover rounded-xl">
        <FaInstagram {...iconProps} />
      </a>
      <a href="https://www.linkedin.com/in/guilherme-andrade-bb6b3328a/" target="_blank" className="bg-transparent hover:bg-colorHover rounded-xl">
        <IoLogoLinkedin {...iconProps} />
      </a>
    </div>
  )
};
