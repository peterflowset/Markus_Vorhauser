"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scale, Building2, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { icon: Scale, titleKey: "inheritance", descriptionKey: "inheritanceDesc" },
  { icon: Building2, titleKey: "property", descriptionKey: "propertyDesc" },
  { icon: Users, titleKey: "family", descriptionKey: "familyDesc" },
  { icon: Briefcase, titleKey: "civil", descriptionKey: "civilDesc" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 sm:py-32 bg-white scroll-mt-16">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative p-8 rounded-2xl",
                "glass border border-stone-200/50",
                "hover:shadow-glass-hover hover:-translate-y-1",
                "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              )}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
