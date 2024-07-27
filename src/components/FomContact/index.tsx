import { FormContactSchema } from "@/schemas/FormContactSchema";
import { FormContactProps } from "@/types/FormContactProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import { z } from "zod";

export const FormContact = () => { 
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormContactProps>({ resolver: zodResolver(FormContactSchema) });

  type FieldEmail = z.infer<typeof FormContactSchema>

  const onSubmit: SubmitHandler<FieldEmail> = (e) => {
    console.log(e);
    reset({
      about: "",
      email: "",
      message: "",
      name: "",
      number: ""
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-4 text-colorDark">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">Digite o seu nome</label>
          <input 
            placeholder="Nome"
            {...register("name")}
            id="name"
            className="px-3 py-1 rounded-xl"
          />
          { errors?.name && <ErrorMessage errorText={errors!.name!.message!}/>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="labelEmail" className="text-lg">Digite o seu e-mail</label>
          <input 
            placeholder="E-mail"
            {...register("email")}
            id="labelEmail"
            className="px-3 py-1 rounded-xl"
          />
          { errors?.email && <ErrorMessage errorText={errors!.email!.message!}/>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="labelNumero" className="text-lg">Digite o seu número de celular</label>
          <input 
            placeholder="Número"
            {...register("number")}
            id="labelNumero"
            className="px-3 py-1 rounded-xl"
          />
          { errors?.number && <ErrorMessage errorText={errors!.number!.message!}/>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="labelAbout" className="text-lg">Digite o seu assunto</label>
          <input 
            placeholder="Assunto"
            {...register("about")}
            id="labelAbout"
            className="px-3 py-1 rounded-xl"
          />
          { errors?.about && <ErrorMessage errorText={errors!.about!.message!}/>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="labelMessage" className="text-lg">Digite a sua mensagem</label>
          <input
            placeholder="Mensagem"
            {...register("message")}
            id="labelMessage"
            className="px-3 py-1 rounded-xl"
          />
          { errors?.message && <ErrorMessage errorText={errors!.message!.message!}/>}
        </div>

      </div>
      <button type="submit" className="bg-colorPrimary inline-block px-4 py-2 rounded-xl">Enviar mensagem</button>
    </form>
  )
}