import { FormContact } from "../FomContact"
import { TitleSection } from "../TitleSection"

export const Contact = () => {
  return (
    <div id="contato" className="flex flex-col gap-4 my-4">
      <TitleSection texto="Contato"/>
      <FormContact />
    </div>
  )
}