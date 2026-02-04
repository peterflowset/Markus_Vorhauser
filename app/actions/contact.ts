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
    const webhookUrl = "https://n8n-peter-kass-u51163.vm.elestio.app/webhook/0e903cc9-1fc4-4336-bd3b-899a70e6a9ab";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message || "",
        locale: data.locale,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`);
    }

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
