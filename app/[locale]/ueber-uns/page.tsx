"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function UeberUnsPage() {
  const t = useTranslations("ueber-uns");

  const careerItems = t.raw("career.items") as Array<{ year: string; text: string }>;
  const qualificationItems = t.raw("qualifications.items") as string[];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                {t("title")}
              </h1>
              <p className="mt-4 text-lg text-accent font-medium">
                {t("subtitle")}
              </p>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                {t("intro")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="aspect-[4/5] w-full max-w-sm rounded-2xl bg-white shadow-xl overflow-hidden relative border border-stone-200">
                <Image
                  src="/vorhauser_compressed.jpg"
                  alt="Rechtsanwalt Markus Vorhauser"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12">
              {t("career.title")}
            </h2>
            <div className="space-y-8">
              {careerItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-12"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-accent font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="relative pb-8">
                    <div className="absolute top-2 -left-[25px] w-3 h-3 rounded-full bg-accent" />
                    {index < careerItems.length - 1 && (
                      <div className="absolute top-5 -left-[19px] w-0.5 h-full bg-stone-200" />
                    )}
                    <p className="text-stone-700 text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8">
                {t("qualifications.title")}
              </h2>
              <ul className="space-y-4">
                {qualificationItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                    <span className="text-stone-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-stone-200/50"
            >
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                {t("philosophy.title")}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                {t("philosophy.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
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
