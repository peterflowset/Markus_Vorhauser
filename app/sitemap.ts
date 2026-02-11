import type { MetadataRoute } from "next";

const BASE_URL = "https://www.vorhauser.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["de", "it"];
  const pages = [
    { path: "", changeFrequency: "monthly" as const, priority: 1.0 },
    { path: "/leistungen", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/ueber-uns", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/kontakt", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/cookie-policy", changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );
}
