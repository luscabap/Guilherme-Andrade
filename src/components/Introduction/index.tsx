import { ButtonContact } from "../ButtonContact"

export const Introduction = () => {
  return (
    <section className="flex flex-col gap-4 justify-start items-start 2xl:w-1/2 2xl:mx-auto">
      <h2 className="text-colorContrast uppercase text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Precisando de um advgogado especialista?</h2>
      <p className="indent-5">Meu <strong className="text-colorContrast font-light">principal objetivo</strong> é firmar-me como uma <strong className="text-colorContrast font-light">referência de excelência jurídica</strong>, com dedicação inabalável à defesa da justiça e da verdade, <strong className="text-colorContrast font-light">guiado pela lei</strong> como força integradora e harmonizadora.</p>
      <ButtonContact />
    </section>
  )
}