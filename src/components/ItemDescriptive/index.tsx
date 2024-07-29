import { IconBaseProps } from "react-icons"

type ItemDescriptiveProps = {
  icon: IconBaseProps,
  title: string,
  description: string,
  primary: boolean
}

export const ItemDescriptive = ({ description, icon, title, primary }: ItemDescriptiveProps) => {
  return (
    <div className="bg-colorLight rounded-lg px-2 pt-2 pb-4 min-h-52 flex flex-col items-center justify-center gap-3">
      <div className={`flex items-center justify-center gap-2 
      ${primary ? "flex-row" : "flex-row-reverse"}`}>
        <h4 className="text-colorPrimary text-lg underline">{title}</h4>
        <>{icon}</>
      </div>
      <p className="text-colorDark indent-4 text-justify">{description}</p>
    </div>
  )
}