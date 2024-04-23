import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z
      .string()
      .nonempty("O email é obrigatório.")
      .email("Forneça um email válido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "A senha precisa de pelo menos 8 caracteres.")
      .regex(/[A-Z]+/, "É necessário ter uma letra maiúscula")
      .regex(/[a-z]+/, "É necessário ter uma letra minúscula")
      .regex(/[0-9]+/, "É necessário ter pelo menos um número")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
        "É necessário ter pelo menos um caractere especial."
      ),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatório"),
    bio: z.string().nonempty("A bio é obrigatória.").max(300),
    contact: z.string().nonempty("O método para contato é obrigatório."),
    course_module: z.string().nonempty("Selecionar o módulo é obrigatório."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
