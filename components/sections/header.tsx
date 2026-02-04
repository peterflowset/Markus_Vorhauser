"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import Image from "next/image";

const navItems = [
  { href: "/", labelKey: "home" },
  { href: "/leistungen", labelKey: "services" },
  { href: "/ueber-uns", labelKey: "about" },
  { href: "/kontakt", labelKey: "contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "glass border-b border-white/10 shadow-glass py-2"
            : isHome
              ? "bg-transparent py-4"
              : "bg-stone-50/80 backdrop-blur-md py-4 border-b border-stone-200"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={isHome && !isScrolled ? "/logo-light.svg" : "/logo-dark.svg"}
                alt="RA Markus Vorhauser"
                width={75}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === item.href
                      ? (isHome && !isScrolled ? "text-white bg-white/10" : "text-accent bg-accent/5")
                      : (isHome && !isScrolled ? "text-white/70 hover:text-white hover:bg-white/10" : "text-stone-600 hover:text-stone-900 hover:bg-stone-100")
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <div className={cn(
                "ml-4 pl-4 border-l",
                isHome && !isScrolled ? "border-white/20" : "border-stone-200"
              )}>
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                isHome && !isScrolled ? "text-white hover:bg-white/10" : "text-stone-600 hover:bg-stone-100"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-4 text-base font-medium rounded-lg transition-all",
                    pathname === item.href
                      ? "text-accent bg-accent/5"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <div className="pt-6 mt-6 border-t border-stone-200 flex justify-between items-center px-4">
                <span className="text-sm text-stone-500">{t("language")}</span>
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
