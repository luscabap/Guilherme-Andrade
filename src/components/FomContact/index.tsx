import { useFormContact } from "@/hooks/useFormContact";
import { ErrorMessage } from "../ErrorMessage";
import { IoIosSend } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { ModalSuccess } from "../ModalSuccess";
import { useThemeContext } from "@/hooks/useThemeContext";


export const FormContact = () => { 
  const { errors, handleSubmit, onSubmit, register, modalSuccessIsOpen } = useFormContact()
  const { darkTheme } = useThemeContext()

  return (  
    <div className="relative">
      { modalSuccessIsOpen && <ModalSuccess /> }
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-4 text-colorDark">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <MdOutlineAccountCircle />
              <label htmlFor="name" className="text-lg">Digite o seu nome</label>
            </div>
            <input 
              placeholder="Nome"
              {...register("name")}
              id="name"
              className={`px-3 py-1 rounded-xl border-colorSecondary border-solid ${darkTheme ? "" : "border-2"} `}
            />
            { errors?.name && <ErrorMessage errorText={errors!.name!.message!}/>}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <MdAlternateEmail />
              <label htmlFor="labelEmail" className="text-lg">Digite o seu e-mail</label>
            </div>
            <input 
              placeholder="E-mail"
              {...register("email")}
              id="labelEmail"
              className={`px-3 py-1 rounded-xl border-colorSecondary border-solid ${darkTheme ? "" : "border-2"} `}
            />
            { errors?.email && <ErrorMessage errorText={errors!.email!.message!}/>}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <CiPhone />
              <label htmlFor="labelNumero" className="text-lg">Digite o seu número de celular</label>
            </div>
            <input 
              placeholder="Número"
              {...register("number")}
              id="labelNumero"
              className={`px-3 py-1 rounded-xl border-colorSecondary border-solid ${darkTheme ? "" : "border-2"} `}
            />
            { errors?.number && <ErrorMessage errorText={errors!.number!.message!}/>}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <BiMessageSquareEdit />
              <label htmlFor="labelAbout" className="text-lg">Digite o seu assunto</label>
            </div>
            <input 
              placeholder="Assunto"
              {...register("about")}
              id="labelAbout"
              className={`px-3 py-1 rounded-xl border-colorSecondary border-solid ${darkTheme ? "" : "border-2"} `}
            />
            { errors?.about && <ErrorMessage errorText={errors!.about!.message!}/>}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <MdOutlineMessage />
              <label htmlFor="labelMessage" className="text-lg">Digite a sua mensagem</label>
            </div>
            <input
              placeholder="Mensagem"
              {...register("message")}
              id="labelMessage"
              className={`px-3 py-1 rounded-xl h-40 border-colorSecondary border-solid ${darkTheme ? "" : "border-2"}`}
            />
            { errors?.message && <ErrorMessage errorText={errors!.message!.message!}/>}
          </div>

        </div>
        <div className="inline-flex items-center justify-center bg-colorPrimary px-4 py-2 rounded-xl">
          <button type="submit" className="w-full">
            Enviar mensagem 
          </button>
          <IoIosSend />
        </div>
      </form>
    </div>
  )
}