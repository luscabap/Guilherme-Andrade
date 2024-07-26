type TitleSectionProps = {
  texto: string
}

export const TitleSection= ({ texto }: TitleSectionProps) => {
  return (
    <h2 className="bg-colorContrast">
      {texto}
    </h2>
  )
}