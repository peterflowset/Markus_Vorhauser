export type Locale = "de" | "it";

export interface LocalBusiness {
  name: string;
  description: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  telephone: string;
  email: string;
  url: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  locale: Locale;
}
