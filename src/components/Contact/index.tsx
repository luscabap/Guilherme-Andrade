import { motion } from "framer-motion";
import { FormContact } from "../FomContact";
import { TitleSection } from "../TitleSection";

export const Contact = () => {
  return (
    <motion.div
      id="contato"
      className="flex flex-col gap-4 my-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
    >
      <TitleSection texto="Contato" />
      <p className="text-colorDark italic">
        Envie-nos um e-mail sobre a sua solicitação
      </p>
      <FormContact />
    </motion.div>
  );
};
