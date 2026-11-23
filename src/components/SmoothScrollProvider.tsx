"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        window.lenis = lenis;
        lenis.on("scroll", ScrollTrigger.update);

        const tickerCallback = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest(
                'a[href^="#"]',
            ) as HTMLAnchorElement | null;
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const targetEl = document.querySelector(href) as HTMLElement | null;
            if (targetEl) {
                e.preventDefault();
                lenis.scrollTo(targetEl, {
                    offset: -20,
                    duration: 1.4,
                });
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            gsap.ticker.remove(tickerCallback);
            lenis.destroy();
            delete window.lenis;
        };
    }, []);

    return <>{children}</>;
}
