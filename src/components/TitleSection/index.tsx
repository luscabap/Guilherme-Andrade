type TitleSectionProps = {
  texto: string
}

export const TitleSection= ({ texto }: TitleSectionProps) => {
  return (
    <h2 className="hover:underline inline-block transition-all text-2xl text-colorContrast">
      {texto}
    </h2>
  )
}