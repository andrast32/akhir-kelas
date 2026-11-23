"use client";

import { motion } from "framer-motion";
import { Compass, Images, ScrollText, MessageSquareHeart } from "lucide-react";

const NAV_ITEMS = [
    { label: "Logbook", href: "#surat", icon: Compass },
    { label: "Arsip", href: "#galeri", icon: Images },
    { label: "Gulungan", href: "#amplop", icon: ScrollText },
    { label: "Kru", href: "#catatan-murid", icon: MessageSquareHeart },
];

export default function MobileBottomNav() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href) as HTMLElement | null;
        if (!el) return;

        if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -16, duration: 1.35 });
        } else {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden w-[92%] max-w-sm"
        >
            <div className="bg-[#2B1E16]/95 backdrop-blur-md text-[#F3E9D2] px-3 py-2 rounded-full shadow-2xl shadow-black/35 border border-[#7C6248] flex items-center justify-around">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.href}
                            type="button"
                            onClick={() => handleScroll(item.href)}
                            className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-full text-[11px] font-medium text-[#E5D5B7] active:scale-90 active:text-amber-300 transition cursor-pointer"
                        >
                            <Icon className="w-4 h-4 text-amber-400" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
