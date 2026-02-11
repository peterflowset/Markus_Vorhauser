import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Contact } from "@/components/sections/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function KontaktPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
