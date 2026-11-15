import { z } from "zod";

export const contactCategories = [
  "Website",
  "Aplicação web",
  "Software e sistemas",
  "Plataforma digital",
  "Gestão e manutenção",
  "Produto ou parceria",
  "Outro assunto",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Indique o seu nome.").max(120, "O nome é demasiado longo."),
  email: z
    .string()
    .trim()
    .email("Indique um endereço de email válido.")
    .max(254, "O endereço de email é demasiado longo."),
  category: z.enum(contactCategories, { message: "Seleccione um assunto." }),
  message: z
    .string()
    .trim()
    .min(20, "A mensagem deve ter pelo menos 20 caracteres.")
    .max(2000, "A mensagem não pode exceder 2.000 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;