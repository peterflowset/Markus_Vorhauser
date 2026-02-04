"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const locales = [
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: "de" | "it") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-lg bg-stone-100 p-1">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => handleSwitch(loc.code)}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
            locale === loc.code
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-500 hover:text-stone-700"
          )}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}
