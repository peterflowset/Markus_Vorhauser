import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Cookie, Check, X } from "lucide-react";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "cookiePolicy" });

    return {
        title: t("title"),
        description: t("intro"),
    };
}

export default function CookiePolicyPage() {
    const t = useTranslations("cookiePolicy");

    const technicalCookies = [
        {
            name: "NEXT_LOCALE",
            purpose: t("cookies.technical.locale.purpose"),
            duration: t("cookies.technical.locale.duration"),
            type: t("cookies.technical.locale.type"),
        },
        {
            name: "cookie-consent",
            purpose: t("cookies.technical.consent.purpose"),
            duration: t("cookies.technical.consent.duration"),
            type: t("cookies.technical.consent.type"),
        },
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Cookie className="w-8 h-8 text-accent" />
                        <h1 className="text-4xl font-bold text-stone-900">
                            {t("title")}
                        </h1>
                    </div>
                    <p className="text-lg text-stone-600">{t("intro")}</p>
                </div>

                <div className="prose prose-stone max-w-none">
                    {/* What are Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">
                            {t("whatAreCookies.title")}
                        </h2>
                        <p className="text-stone-600">{t("whatAreCookies.text")}</p>
                    </section>

                    {/* Cookie Categories */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">
                            {t("categories.title")}
                        </h2>

                        {/* Technical Cookies */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-stone-900 mb-3 flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-600" />
                                {t("categories.technical.title")}
                            </h3>
                            <p className="text-stone-600 mb-4">
                                {t("categories.technical.description")}
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-stone-200 rounded-lg">
                                    <thead className="bg-stone-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-stone-900">
                                                {t("cookies.table.name")}
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-stone-900">
                                                {t("cookies.table.purpose")}
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-stone-900">
                                                {t("cookies.table.duration")}
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-stone-900">
                                                {t("cookies.table.type")}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-200">
                                        {technicalCookies.map((cookie, index) => (
                                            <tr key={index} className="bg-white">
                                                <td className="px-4 py-3 text-sm font-mono text-stone-900">
                                                    {cookie.name}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-stone-600">
                                                    {cookie.purpose}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-stone-600">
                                                    {cookie.duration}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-stone-600">
                                                    {cookie.type}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Analytical Cookies */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-stone-900 mb-3 flex items-center gap-2">
                                <X className="w-5 h-5 text-stone-400" />
                                {t("categories.analytical.title")}
                            </h3>
                            <p className="text-stone-600">
                                {t("categories.analytical.description")}
                            </p>
                        </div>

                        {/* Profiling Cookies */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-stone-900 mb-3 flex items-center gap-2">
                                <X className="w-5 h-5 text-stone-400" />
                                {t("categories.profiling.title")}
                            </h3>
                            <p className="text-stone-600">
                                {t("categories.profiling.description")}
                            </p>
                        </div>
                    </section>

                    {/* User Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">
                            {t("rights.title")}
                        </h2>
                        <p className="text-stone-600 mb-4">{t("rights.text")}</p>
                        <ul className="list-disc list-inside space-y-2 text-stone-600">
                            <li>{t("rights.items.0")}</li>
                            <li>{t("rights.items.1")}</li>
                            <li>{t("rights.items.2")}</li>
                        </ul>
                    </section>

                    {/* Contact */}
                    <section className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">
                            {t("contact.title")}
                        </h2>
                        <p className="text-stone-600">{t("contact.text")}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
