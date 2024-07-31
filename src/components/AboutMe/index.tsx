import Image from "next/image";
import { TitleSection } from "../TitleSection";
import guilhermeHamburgada from "/public/assets/guilherme-hamburgada.png"

export const AboutMe = () => {
  return (
    <section id="quem-sou-eu">
      <TitleSection texto="Quem sou eu?"/>
      <div className="flex flex-col gap-4 mt-2 justify-center items-center">
        <p className="indent-4 text-justify xl:indent-10 2xl:indent-14">Sou Guilherme Menezes de Andrade, tenho 24 anos, sou assessor da Diretoria e serventuário das comissões tematicas na OAB/SP - 44° Subseção de São Vicente e no meu tempo livre sou voluntário na "Hamburgada do Bem", ONG que faz hamburgueres para crianças carentes.</p>
        <Image 
          alt="Foto do Guilherme Andrade na ONG Hamburgada do Bem"
          src={guilhermeHamburgada}
          className="w-1/2 rounded-md"
        />
        <p className="indent-4 text-justify xl:indent-10 2xl:indent-14">Nascido em São Vicente, 1ª cidade do Brasil, filho único de mãe diarista e pai zelador, sempre estudei em escola pública. Comecei a trabalhar com 13 anos, ajudando meu tio a instalar ar condicionado e em março de 2017 ingressei como jovem aprendiz na OAB de São Vicente com 16 anos.</p>
        <p className="indent-4 text-justify xl:indent-10 2xl:indent-14">Desde adolescente sempre quis ser advogado, para aprender a lidar com as injustiças e se posicionar em debates juridicos. No começo pensei em fazer o curso de Direito para prestar concursos públicos, mas depois de estudar e passar no exame da OAB vi que a Advocacia é um mundo sem fronteiras onde há espaço para todos.</p>
        <p className="indent-4 text-justify xl:indent-10 2xl:indent-14">Em 2019 ingressei na faculdade de Direito ESAMC Santos e finalizei o bacharelado em 2023, onde em novembro do mesmo ano passei a 1° fase do exame da Ordem e concluindo a 2° fase em janeiro de 2024, passando em 39° lugar.</p>
        <p className="indent-4 text-justify xl:indent-10 2xl:indent-14">Destaca-se aquele que conseguem desenvolver um melhor trabalho e sempre estar atualizado com as questões atuais. Sendo o diferencial para conseguir êxito em atuações, seja ela consensual ou litigiosa</p>
      </div>
    </section>
  )
}