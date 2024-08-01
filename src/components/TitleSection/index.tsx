type TitleSectionProps = {
  texto: string
}

export const TitleSection= ({ texto }: TitleSectionProps) => {
  return (
    <h2 className="hover:underline inline-block transition-all text-colorContrast mb-6 text-2xl md:text-3xl xl:text-4xl cursor-help">
      {texto}
    </h2>
  )
}