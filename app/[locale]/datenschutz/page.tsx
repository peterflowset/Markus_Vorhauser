"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function DatenschutzPage() {
  const t = useTranslations("datenschutz");

  const collectionItems = t.raw("collection.items") as string[];
  const purposeItems = t.raw("purpose.items") as string[];
  const rightsItems = t.raw("rights.items") as string[];

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-8">
              {t("title")}
            </h1>

            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              {t("intro")}
            </p>

            <div className="space-y-12">
              {/* Controller */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("controller.title")}
                </h2>
                <p className="text-stone-700 mb-4">{t("controller.text")}</p>
                <div className="glass rounded-xl p-6 border border-stone-200/50">
                  <p className="text-stone-700">
                    RA Markus Vorhauser<br />
                    Freiheitsstraße 132<br />
                    39012 Meran (BZ), Italien<br />
                    E-Mail: info@vorhauser.eu
                  </p>
                </div>
              </div>

              {/* Collection */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("collection.title")}
                </h2>
                <p className="text-stone-700 mb-4">{t("collection.text")}</p>
                <ul className="space-y-2">
                  {collectionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purpose */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("purpose.title")}
                </h2>
                <p className="text-stone-700 mb-4">{t("purpose.text")}</p>
                <ul className="space-y-2">
                  {purposeItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Basis */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("legal.title")}
                </h2>
                <p className="text-stone-700">{t("legal.text")}</p>
              </div>

              {/* Storage */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("storage.title")}
                </h2>
                <p className="text-stone-700">{t("storage.text")}</p>
              </div>

              {/* Rights */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("rights.title")}
                </h2>
                <p className="text-stone-700 mb-4">{t("rights.text")}</p>
                <ul className="space-y-2">
                  {rightsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("confidentiality.title")}
                </h2>
                <p className="text-stone-700">{t("confidentiality.text")}</p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("cookies.title")}
                </h2>
                <p className="text-stone-700 mb-3">{t("cookies.text")}</p>
                <Link href="/cookie-policy" className="text-accent hover:underline font-medium">
                  {t("cookies.link")}
                </Link>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("hosting.title")}
                </h2>
                <p className="text-stone-700 mb-4">{t("hosting.text")}</p>
                <div className="glass rounded-xl p-6 border border-stone-200/50">
                  <p className="text-stone-700">
                    <span className="font-medium">{t("hosting.provider")}:</span> Vercel Inc.<br />
                    <span className="font-medium">{t("hosting.location")}:</span> {t("hosting.locationValue")}<br />
                    <span className="font-medium">{t("hosting.dpa")}:</span> {t("hosting.dpaValue")}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("contact.title")}
                </h2>
                <p className="text-stone-700 mb-4">{t("contact.text")}</p>
                <div className="glass rounded-xl p-6 border border-stone-200/50">
                  <p className="text-stone-700">
                    RA Markus Vorhauser<br />
                    E-Mail: info@vorhauser.eu<br />
                    Tel: +39 0473 49 10 53
                  </p>
                </div>
              </div>

              {/* Authority */}
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">
                  {t("authority.title")}
                </h2>
                <p className="text-stone-700 mb-3">{t("authority.text")}</p>
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  www.garanteprivacy.it
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
