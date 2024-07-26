import { IconBaseProps } from "react-icons"
import { ClipboardButton } from "../ClipboardButton"

type InfoButtonProps = {
  data: string,
  icon: IconBaseProps,
  dataToClipboard: string,
  primario: boolean,
}


export const InfoButton = ({ data, dataToClipboard, icon, primario }: InfoButtonProps) => {
  return (
    <div className={`${primario ? "flex-row" : "flex-row-reverse"}  relative inline-flex items-center justify-start gap-2 px-2`}>
      <>{icon}</>
      <p>{data}</p>
      <div className={`absolute bottom-8 ${primario ? "right-0" : "left-0"}`}>
        <ClipboardButton dataToClipboard={dataToClipboard}/>
      </div>
    </div>
  )
}