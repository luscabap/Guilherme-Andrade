import Image from "next/image";
import { InfoButton } from "../InfoButton";
import { MdOutlineEmail, MdOutlineWhatsapp  } from "react-icons/md";
import guilherme from "/public/assets/guilherme.jpeg"

const iconProps = {
  size: 25,
}

export const HomeContent = () => {
  return (
    <div id="homeContent" className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl text-center">Olá, sou o <strong>Dr. Guilherme Menezes de Andrade</strong></h1>
      <h2 className="text-xl">O N° da minha OAB é: 510.723</h2>
      <Image 
        src={guilherme}
        alt="Foto do Dr. Guilherme Andrade"
        className="rounded-xl w-4/5"
      />
      <InfoButton 
        data="guilherme.oabsv@gmail.com" 
        dataToClipboard="guilherme.oabsv@gmail.com" 
        icon={<MdOutlineEmail {...iconProps} className="text-colorPrimary"/>}
        primario={true}
      />
      <InfoButton 
        data="+55 (13) 99144-6831" 
        dataToClipboard="+5513991446831" 
        icon={<MdOutlineWhatsapp {...iconProps} className="text-colorPrimary"/>}
        primario={true}
      />

    </div>
  )
}