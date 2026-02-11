import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { UeberUnsContent } from "./ueber-uns-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ueber-uns" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function UeberUnsPage() {
  return <UeberUnsContent />;
}
