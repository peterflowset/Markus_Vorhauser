import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().min(1, "Telefonnummer ist erforderlich"),
  message: z.string().optional(),
  locale: z.enum(["de", "it"]),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
