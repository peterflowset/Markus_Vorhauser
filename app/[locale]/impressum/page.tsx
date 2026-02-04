"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ImpressumPage() {
  const t = useTranslations("impressum");

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-12">
              {t("title")}
            </h1>

            <div className="space-y-12">
              {/* Owner */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("owner.title")}
                </h2>
                <p className="text-stone-700 text-lg">
                  {t("owner.name")}<br />
                  {t("owner.profession")}
                </p>
              </div>

              {/* Addresses */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-8 border border-stone-200/50">
                  <h2 className="text-xl font-semibold text-stone-900 mb-4">
                    {t("address.title")}
                  </h2>
                  <p className="text-stone-700">
                    {t("address.street")}<br />
                    {t("address.city")}<br />
                    {t("address.country")}
                  </p>
                </div>

                <div className="glass rounded-2xl p-8 border border-stone-200/50">
                  <h2 className="text-xl font-semibold text-stone-900 mb-4">
                    {t("branch.title")}
                  </h2>
                  <p className="text-stone-700">
                    {t("branch.street")}<br />
                    {t("branch.city")}<br />
                    {t("branch.country")}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("contact.title")}
                </h2>
                <div className="space-y-2 text-stone-700">
                  <p>
                    <span className="font-medium">{t("contact.phone")}:</span>{" "}
                    <a href="tel:+390473491053" className="hover:text-accent transition-colors">
                      +39 0473 49 10 53
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">{t("contact.email")}:</span>{" "}
                    <a href="mailto:info@vorhauser.eu" className="hover:text-accent transition-colors">
                      info@vorhauser.eu
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">{t("contact.pec")}:</span>{" "}
                    <a href="mailto:markus.vorhauser@legal.email.it" className="hover:text-accent transition-colors">
                      markus.vorhauser@legal.email.it
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("legal.title")}
                </h2>
                <div className="space-y-2 text-stone-700">
                  <p>
                    <span className="font-medium">{t("legal.taxCode")}:</span> VRHMKS68E04F132A
                  </p>
                  <p>
                    <span className="font-medium">{t("legal.vatNumber")}:</span> 01652250216
                  </p>
                  <p>
                    <span className="font-medium">{t("legal.sdiCode")}:</span> ZRBGBN7
                  </p>
                  <p>
                    <span className="font-medium">{t("legal.reaNumber")}:</span> {t("legal.reaValue")}
                  </p>
                  <p className="mt-4">
                    <span className="font-medium">{t("legal.chamber")}</span><br />
                    {t("legal.chamberSince")}
                  </p>
                  <p className="mt-4">
                    <a
                      href="https://www.ordineavvocatibolzano.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {t("legal.chamberLink")}
                    </a>
                  </p>
                </div>
              </div>

              {/* Insurance */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("insurance.title")}
                </h2>
                <p className="text-stone-700 mb-4">
                  {t("insurance.text")}
                </p>
                <p className="text-sm text-stone-600">
                  {t("insurance.lawReference")}
                </p>
              </div>

              {/* Professional Conduct */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("conduct.title")}
                </h2>
                <p className="text-stone-700 mb-3">
                  {t("conduct.text")}
                </p>
                <a
                  href="https://www.consiglionazionaleforense.it/web/cnf/codice-deontologico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-flex items-center gap-1"
                >
                  {t("conduct.link")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Supervisory */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("supervisory.title")}
                </h2>
                <p className="text-stone-700 mb-3">
                  {t("supervisory.text")}
                </p>
                <a
                  href="https://www.ordineavvocatibolzano.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  www.ordineavvocatibolzano.it
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
