import Image from "next/image";
import { InfoButton } from "../InfoButton";
import { MdOutlineEmail, MdOutlineWhatsapp  } from "react-icons/md";
import guilherme from "/public/assets/guilherme.jpeg"

const iconProps = {
  size: 25,
}

export const HomeContent = () => {
  return (
    <div id="home-content" className="flex flex-col items-center justify-center gap-4 my-4">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl text-center md:text-3xl xl:text-4xl 2xl:text-5xl">Olá, sou o <strong>Dr. Guilherme Menezes de Andrade</strong></h1>
          <div>
            <h2 className="italic font-light text-center">Pós graduando em direito civil e processo civil</h2>
            <h2 className="italic font-light text-center">Pós gradudando em direito penal e processo penal</h2>
          </div>
          <h3 className="text-lg md:text-3xl xl:text-4xl 2xl:text-5xl">OAB N°: <strong>510.723</strong></h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image 
            src={guilherme}
            alt="Foto do Dr. Guilherme Andrade"
            className="rounded-xl w-4/5 xl:w-1/2"
            priority={true}
          />
          <blockquote className="text-center text-base italic lg:text-xl" cite="https://pt.wikipedia.org/wiki/Sobral_Pinto">“A advocacia não é profissão de covardes” <br />- Sobral Pinto</blockquote>
        </div>
      </div>
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