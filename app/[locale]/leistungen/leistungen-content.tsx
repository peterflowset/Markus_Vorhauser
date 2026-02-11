"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scale, Building2, Users, Briefcase, Gavel, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const services = [
  { icon: Scale, key: "inheritance" },
  { icon: Building2, key: "property" },
  { icon: Users, key: "family" },
  { icon: Briefcase, key: "civil" },
  { icon: Gavel, key: "criminal" },
];

export function LeistungenContent() {
  const t = useTranslations("leistungen");

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-accent font-medium">
              {t("subtitle")}
            </p>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              {t("intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                      {t(`${service.key}.title`)}
                    </h2>
                  </div>
                  <p className="text-stone-600 text-lg leading-relaxed mb-6">
                    {t(`${service.key}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {(t.raw(`${service.key}.items`) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        <span className="text-stone-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200/50 shadow-sm ${index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                >
                  <Image
                    src={
                      service.key === "inheritance" ? "/erbrecht.jpg" :
                        service.key === "property" ? "/immobilienrecht.jpg" :
                          service.key === "family" ? "/hero-1.jpg" :
                            service.key === "civil" ? "/hero-2.jpg" :
                              "/hero-3.jpg"
                    }
                    alt={t(`${service.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              {t("cta")}
            </h2>
            <Button size="lg" asChild>
              <Link href="/kontakt">
                {t("cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
