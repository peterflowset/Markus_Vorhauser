"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useState, useEffect } from "react";

const backgroundImages = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
];

export function Hero() {
  const t = useTranslations("hero");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Images with Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Kanzlei Vorhauser Backdrop"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/80 via-stone-900/20 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-12 pb-24 lg:pb-32 text-left flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance drop-shadow-lg leading-[1.1]">
            {t("title")}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-stone-200 max-w-xl text-balance drop-shadow-md font-medium leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-start gap-4">
            <Button size="lg" asChild className="bg-white text-stone-900 hover:bg-stone-100 border-none shadow-2xl px-10 h-14 text-base font-semibold transition-all hover:scale-105 active:scale-95">
              <Link href="/kontakt">
                {t("cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white/30 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white px-10 h-14 text-base transition-all">
              <Link href="/leistungen">{t("secondary")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom Left Corner Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-8 z-30 flex flex-row-reverse items-center gap-4 group cursor-pointer"
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white/80 transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/40 group-hover:text-white/80 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
