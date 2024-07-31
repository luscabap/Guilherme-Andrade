import { ButtonContact } from "../ButtonContact";
import { motion, AnimationType } from "framer-motion"

export const ModalWhatsapp = () => {
  const modalVariants = {
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0
    }
  }

  return (
    <motion.div 
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed right-2 bottom-24 bg-colorPrimary py-4 px-2 flex flex-col items-center justify-center gap-5 rounded-xl z-50 origin-bottom-right">
      <h5>Clique aqui para falar com um especialista!</h5>
      <ButtonContact />
    </motion.div>
  )
}