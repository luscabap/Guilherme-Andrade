import { z } from "zod";

export const FormContactSchema = z.object({
  name: z.string()
    .min(1, { message: "Por favor, preencha o campo de nome" })
    .min(3, { message: "O nome deve conter pelo menos 3 letras" }),

  email: z.string()
    .min(1, { message: "Por favor, preencha o campo de e-mail"})
    .email("Por favor, digite um e-mail válido"),

  number: z.string()
    .min(1, { message: "Por favor, preencha o campo de número de celular" })
    .min(11, { message: "Por favor, preencha um número válido" }),
  
  about: z.string()
    .min(1, { message: "Por favor, preencha o campo de assunto" })
    .min(3, { message: "Por favor, escreva um assunto válido" }),

  message: z.string()
    .min(1, { message: "Por favor, preencha o campo de mensagem" })
    .min(5, { message: "Por favor, digite a mensagem sobre o seu assunto" })
})