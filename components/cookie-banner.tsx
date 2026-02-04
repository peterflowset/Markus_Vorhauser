"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export function CookieBanner() {
    const t = useTranslations("cookies");
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="glass rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8">
                            <div className="flex items-start gap-4">
                                <Cookie className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                                        {t("title")}
                                    </h3>
                                    <p className="text-sm text-stone-600 mb-4">
                                        {t("description")}{" "}
                                        <Link
                                            href="/cookie-policy"
                                            className="text-accent hover:underline font-medium"
                                        >
                                            {t("learnMore")}
                                        </Link>
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            onClick={handleAccept}
                                            size="sm"
                                            className="w-full sm:w-auto"
                                        >
                                            {t("accept")}
                                        </Button>
                                        <Button
                                            onClick={handleReject}
                                            variant="outline"
                                            size="sm"
                                            className="w-full sm:w-auto"
                                        >
                                            {t("reject")}
                                        </Button>
                                    </div>
                                </div>
                                <button
                                    onClick={handleReject}
                                    className="text-stone-400 hover:text-stone-600 transition-colors"
                                    aria-label={t("close")}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
