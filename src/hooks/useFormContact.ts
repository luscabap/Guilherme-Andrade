import { FormContactSchema } from "@/schemas/SchemaFormContact";
import { FormContactProps } from "@/types/FormContactProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react";

export const useFormContact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<FormContactProps>({ resolver: zodResolver(FormContactSchema) });

  type FieldEmail = z.infer<typeof FormContactSchema>

  
  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setModalSuccessIsOpen(false);
    }, 5000)
  }, [modalSuccessIsOpen])

  const onSubmit: SubmitHandler<FieldEmail> = (data) => { 
    const teamplateForm = {
      from_name: data.name,
      assunto: data.about,
      mensagem: data.message,
      email: data.email,
      celular: data.number
    }

    // emailjs.send(
    //   "service_l2jjfjs",
    //   "template_h0zgk77",
    //   teamplateForm,
    //   "6fOxpO_wb9HxKJrCM"
    // )
    // .then(
    //   success => console.log("E-mail enviado com sucesso!", success),
    //   error => console.log("Ooops, aconteceu um erro", error)
    // )
    
    setModalSuccessIsOpen(true)

    reset({
      about: "",
      email: "",
      message: "",
      name: "",
      number: ""
    })
  }

  return {
    register,
    errors,
    onSubmit,
    handleSubmit,
    modalSuccessIsOpen
  }
}