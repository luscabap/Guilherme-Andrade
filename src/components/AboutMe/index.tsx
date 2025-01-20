import Image from "next/image";
import { motion } from "framer-motion";
import { TitleSection } from "../TitleSection";
import guilhermeHamburgada from "/public/assets/guilherme-hamburgada.png";
import guilhermeHamburgada2 from "/public/assets/guilherme-hamburgada2.png";

const baseStylesP = "indent-4 text-justify xl:indent-5";

const baseAnimationP = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.3,
  },
};

export const AboutMe = () => {
  return (
    <section id="quem-sou-eu" className="">
      <TitleSection texto="Quem sou eu?" />
      <div className="flex flex-col gap-4 mt-2 justify-center items-center xl:w-3/4 xl:mx-auto">
        <motion.p className={baseStylesP} {...baseAnimationP}>
          Sou Guilherme Menezes de Andrade, tenho 24 anos, sou assessor da
          Diretoria e serventuário das comissões tematicas na OAB/SP - 44°
          Subseção de São Vicente e no meu tempo livre sou voluntário na
          "Hamburgada do Bem", ONG que faz hamburgueres para crianças carentes.
        </motion.p>
        <motion.div
          className=" flex justify-evenly"
          initial={{ opacity: 0.3, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Image
            alt="Foto do Guilherme Andrade na ONG Hamburgada do Bem"
            src={guilhermeHamburgada}
            className="w-1/2 rounded-md xl:w-1/3"
          />
          <Image
            alt="Foto do Guilherme Andrade na ONG Hamburgada do Bem"
            src={guilhermeHamburgada2}
            className="w-1/2 rounded-md xl:w-1/3 hidden xl:block"
          />
        </motion.div>
        <motion.p
          className={baseStylesP}
          {...baseAnimationP}
          transition={{ ...baseAnimationP.transition, duration: 0.4 }}
        >
          Nascido em São Vicente, a 1ª cidade do Brasil, filho único de pais
          nordestinos, sempre estudei em escola pública. Comecei a trabalhar aos
          13 anos, ajudando meu tio a instalar ar condicionado, e em março de
          2017 ingressei como jovem aprendiz na OAB de São Vicente, com 16 anos.
        </motion.p>
        <motion.p
          className={baseStylesP}
          {...baseAnimationP}
          transition={{ ...baseAnimationP.transition, duration: 0.5 }}
        >
          Desde adolescente, sempre quis ser advogado para aprender a lidar com
          as injustiças e me posicionar em debates jurídicos. No começo, pensei
          em fazer o curso de Direito para prestar concursos públicos, mas,
          depois de estudar e passar no exame da OAB, percebi que a Advocacia é
          um mundo sem fronteiras, onde há espaço para todos.
        </motion.p>
        <motion.p
          className={baseStylesP}
          {...baseAnimationP}
          transition={{ ...baseAnimationP.transition, duration: 0.6 }}
        >
          Em 2019, ingressei na faculdade de Direito da ESAMC Santos e
          concluindo em 2023. No mesmo ano, em novembro, aprovado na 1ª fase do
          exame da Ordem, concluindo a 2ª fase em janeiro de 2024, no 39º Exame
          da OAB.
        </motion.p>
        <motion.p
          className={baseStylesP}
          {...baseAnimationP}
          transition={{ ...baseAnimationP.transition, duration: 0.7 }}
        >
          Destaca-se aquele que consegue desenvolver um trabalho de excelência e
          está sempre atualizado com as questões atuais, sendo esse o
          diferencial para alcançar êxito nas atuações, seja de forma consensual
          ou litigiosa.
        </motion.p>
      </div>
    </section>
  );
};
