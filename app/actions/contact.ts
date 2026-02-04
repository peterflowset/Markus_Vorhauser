"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    locale: formData.get("locale"),
  };

  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validierung fehlgeschlagen",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data: ContactFormValues = validatedFields.data;

  try {
    // TODO: Implement actual email sending or database storage
    // For now, just log and simulate success
    console.log("Contact form submission:", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        data.locale === "de"
          ? "Vielen Dank! Wir melden uns in Kürze bei Ihnen."
          : "Grazie! Vi contatteremo a breve.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message:
        data.locale === "de"
          ? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
          : "Si è verificato un errore. Riprova.",
    };
  }
}
