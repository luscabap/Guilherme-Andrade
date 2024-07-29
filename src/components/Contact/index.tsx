import { useFormContact } from "@/hooks/useFormContact";
import { FormContact } from "../FomContact";
import { TitleSection } from "../TitleSection";
import { ModalSuccess } from "../ModalSuccess";

export const Contact = () => {
  return (
    <div id="contato" className="flex flex-col gap-4 my-4">
      <TitleSection texto="Contato" />
      <p className="text-colorDark italic">
        Envie-nos um e-mail sobre a sua solicitação
      </p>
      <FormContact />
    </div>
  );
};
