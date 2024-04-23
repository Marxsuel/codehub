import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().nonempty("Email não cadastrado").email("Forneça um email válido"),
  password: z.string().nonempty("Senha incorreta"),
});
