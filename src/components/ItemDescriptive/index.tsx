import { useThemeContext } from "@/hooks/useThemeContext"
import { IconBaseProps } from "react-icons"

type ItemDescriptiveProps = {
  icon: IconBaseProps,
  title: string,
  description: string,
  primary: boolean
}

export const ItemDescriptive = ({ description, icon, title, primary }: ItemDescriptiveProps) => {
  const { darkTheme } = useThemeContext()

  return (
    <div className={` ${darkTheme ? "bg-colorLight" : "bg-colorSecondary "} rounded-lg px-8 pt-4 pb-4 min-h-80 flex flex-col items-center justify-start gap-3 shadow-2xl`}>
      <div className={`flex items-center justify-center gap-2 
      ${primary ? "flex-row" : "flex-row-reverse"}`}>
        <h4 className={` ${darkTheme ? "text-colorPrimary" : "text-colorDark"} text-lg underline`}>
          {title}
        </h4>
        <>{icon}</>
      </div>
      <p className="text-colorDark indent-4 text-justify">{description}</p>
    </div>
  )
}