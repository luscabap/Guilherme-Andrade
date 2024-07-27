import { FormContactSchema } from "@/schemas/SchemaFormContact";
import { FormContactProps } from "@/types/FormContactProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export const useFormContact = () => {
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

  return {
    register,
    errors,
    onSubmit,
    handleSubmit
  }
}