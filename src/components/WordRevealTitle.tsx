"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WordRevealTitleProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3";
    delay?: number;
    triggerOnScroll?: boolean;
}

export default function WordRevealTitle({
    text,
    className = "",
    as: Tag = "h2",
    delay = 0,
    triggerOnScroll = true,
}: WordRevealTitleProps) {
    const containerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const words = el.querySelectorAll(".reveal-word");

            gsap.fromTo(
                words,
                {
                    yPercent: 115,
                    opacity: 0,
                    rotateX: -15,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 0.85,
                    ease: "power3.out",
                    stagger: 0.055,
                    delay,
                    ...(triggerOnScroll
                        ? {
                            scrollTrigger: {
                                trigger: el,
                                start: "top 86%",
                                once: true,
                            },
                        }
                        : {}),
                },
            );
        }, el);

        return () => ctx.revert();
    }, [text, delay, triggerOnScroll]);

    const words = text.split(" ");

    return (
        <Tag ref={containerRef} className={`${className} perspective-[800px]`}>
            {words.map((word, idx) => (
                <span
                    key={`${word}-${idx}`}
                    className="inline-block overflow-hidden align-bottom mr-[0.26em] pb-[0.08em]"
                >
                    <span className="reveal-word inline-block will-change-transform">
                        {word}
                    </span>
                </span>
            ))}
        </Tag>
    );
}
