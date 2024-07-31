import { ButtonContact } from "../ButtonContact"

export const ModalWhatsapp = () => {
  return (
    <div className="absolute right-2 bottom-24 bg-colorPrimary py-4 px-2 flex flex-col items-center justify-center gap-5 rounded-xl">
      <h5>Clique aqui para falar com um especialista!</h5>
      <ButtonContact />
    </div>
  )
}