"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { ContactForm } from "./contact-form";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Kanzleisitz Meran */}
            <div className="glass rounded-2xl p-8 border border-stone-200/50">
              <h3 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                {t("info.mainOffice")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-stone-600">
                      Freiheitsstraße 132<br />
                      39012 Meran (BZ)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{t("info.phone")}</p>
                    <a
                      href="tel:+390473491053"
                      className="text-stone-600 hover:text-accent transition-colors"
                    >
                      +39 0473 49 10 53
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{t("info.email")}</p>
                    <a
                      href="mailto:info@vorhauser.eu"
                      className="text-stone-600 hover:text-accent transition-colors"
                    >
                      info@vorhauser.eu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{t("info.pec")}</p>
                    <a
                      href="mailto:markus.vorhauser@legal.email.it"
                      className="text-stone-600 hover:text-accent transition-colors text-sm"
                    >
                      markus.vorhauser@legal.email.it
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Zweigstelle Glurns */}
            <div className="glass rounded-2xl p-8 border border-stone-200/50">
              <h3 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                {t("info.branchOffice")}
              </h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-stone-600">
                    Laubengasse 18<br />
                    39020 Glurns (BZ)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
