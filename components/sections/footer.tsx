import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const contactT = useTranslations("contact");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-1 text-left">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-80 mb-6"
            >
              <Image
                src="/logo-light.svg"
                alt="RA Markus Vorhauser"
                width={75}
                height={40}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-stone-500">
              {navT("home")} – {contactT("info.mainOffice")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-6">{t("navigation")}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">{navT("home")}</Link></li>
              <li><Link href="/leistungen" className="hover:text-white transition-colors">{navT("services")}</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-white transition-colors">{navT("about")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">{navT("contact")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-6">{t("contact")}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/20" />
                <a href="tel:+390473491053" className="hover:text-white transition-colors">+39 0473 49 10 53</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/20" />
                <a href="mailto:info@vorhauser.eu" className="hover:text-white transition-colors">info@vorhauser.eu</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/20 mt-0.5" />
                <span className="text-stone-500">Freiheitsstraße 132<br />39012 Meran, Italien</span>
              </li>
            </ul>
          </div>

          {/* External / Social */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-6">{t("imprint")}</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/datenschutz" className="flex items-center gap-2 hover:text-white transition-colors text-stone-500">
                  {t("privacy")}
                  <ArrowUpRight className="w-3 h-3 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="flex items-center gap-2 hover:text-white transition-colors text-stone-500">
                  {t("imprint")}
                  <ArrowUpRight className="w-3 h-3 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="flex items-center gap-2 hover:text-white transition-colors text-stone-500">
                  {t("cookiePolicy")}
                  <ArrowUpRight className="w-3 h-3 opacity-40" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-stone-600">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>&copy; {currentYear} Markus Vorhauser. {t("rights")}.</p>
            <p className="text-stone-500">P.IVA: 01652250216</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-50">{t("createdBy")} <a href="https://flowset.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">flowset.ai</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
