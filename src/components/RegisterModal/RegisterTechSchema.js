import { z } from "zod";

export const RegisterTechSchema = z
    .object({
        title: z.string().nonempty("O nome é obrigatório."),
        status: z.string().nonempty("Selecione o seu status.")
    })

