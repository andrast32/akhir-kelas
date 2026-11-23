"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/assets/music/Memories.mp3";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio(AUDIO_SRC);
        audio.loop = true;
        audio.volume = 0.4;
        audioRef.current = audio;

        const startOnFirstInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current
                    .play()
                    .then(() => {
                        setIsPlaying(true);
                        cleanup();
                    })
                    .catch(() => {});
            }
        };

        const cleanup = () => {
            document.removeEventListener("click", startOnFirstInteraction);
            document.removeEventListener("touchstart", startOnFirstInteraction);
        };

        document.addEventListener("click", startOnFirstInteraction);
        document.addEventListener("touchstart", startOnFirstInteraction);

        return () => {
            cleanup();
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {});
        }
    };

    return (
        <motion.button
            type="button"
            onClick={togglePlay}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-40 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#FBF6EA]/95 backdrop-blur-md border border-[#C6B18E] shadow-lg shadow-[#2B1E16]/10 text-[#2B1E16] text-xs font-medium cursor-pointer"
        >
            <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#991B1B] text-[#FBF6EA]">
                {isPlaying ? (
                    <Volume2 className="w-3.5 h-3.5" />
                ) : (
                    <VolumeX className="w-3.5 h-3.5" />
                )}
            </div>

            <div className="flex flex-col items-start text-left pr-1">
                <span className="text-[11px] font-bold text-[#2B1E16] leading-none">
                    Memories • BGM
                </span>
                <span className="text-[10px] text-[#7A634E] mt-0.5 leading-none">
                    {isPlaying ? "Sedang diputar" : "Klik untuk putar"}
                </span>
            </div>

            {isPlaying && (
                <div className="flex items-end gap-0.5 h-3 ml-0.5">
                    {[0, 1, 2].map((bar) => (
                        <motion.span
                            key={bar}
                            animate={{
                                height: ["30%", "100%", "40%", "85%", "30%"],
                            }}
                            transition={{
                                duration: 1.1,
                                repeat: Infinity,
                                delay: bar * 0.2,
                                ease: "easeInOut",
                            }}
                            className="w-0.5 bg-[#991B1B] rounded-full"
                        />
                    ))}
                </div>
            )}
        </motion.button>
    );
}
