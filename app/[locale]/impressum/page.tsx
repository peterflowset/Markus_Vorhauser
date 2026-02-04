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
                  <p className="mt-4">
                    <span className="font-medium">{t("legal.chamber")}</span><br />
                    {t("legal.chamberSince")}
                  </p>
                </div>
              </div>

              {/* Insurance */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("insurance.title")}
                </h2>
                <p className="text-stone-700">
                  {t("insurance.text")}
                </p>
              </div>

              {/* Supervisory */}
              <div className="glass rounded-2xl p-8 border border-stone-200/50">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  {t("supervisory.title")}
                </h2>
                <p className="text-stone-700">
                  {t("supervisory.text")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
