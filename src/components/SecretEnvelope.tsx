"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollText, Sparkles } from "lucide-react";
import WordRevealTitle from "./WordRevealTitle";

const MESSAGE_LINES = [
  {
    text: "Nilai di rapor hanyalah jejak singgah di satu pelabuhan kecil, sementara rasa ingin tahu dan keberanian kalian untuk terus mencoba adalah kompas yang akan menuntun kalian seumur hidup.",
    gapAfter: true,
  },
  {
    text: "Jika semesta masih mempertemukan kita di ruang kelas berikutnya, mari kita kembali berlayar dan belajar bersama.",
    gapAfter: false,
  },
  {
    text: "Namun jika kelak angin membawa kita ke kelas yang berbeda, ingatlah bahwa pintu ruang diskusi saya tidak pernah tertutup untuk kalian.",
    gapAfter: false,
  },
  {
    text: "Hubungi saya kapan pun kalian butuh teman curhat atau bertukar pikiran.",
    gapAfter: true,
  },
  {
    text: "Maafkan saya jika selama di kelas terkadang materi atau tugas dari saya membuat kepala kalian terasa penuh dan pusing.",
    gapAfter: false,
  },
  {
    text: "Semua itu semata-mata karena saya percaya pada potensi besar di dalam diri kalian.",
    gapAfter: false,
  },
  {
    text: "Teruslah melangkah, semoga kelak kalian tumbuh menjadi sosok yang sukses dan meraih apa pun yang sedang kalian impikan.",
    gapAfter: false,
  },
];

export default function SecretEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  let wordCounter = 0;

  return (
    <section
      id="amplop"
      className="max-w-3xl mx-auto px-5 sm:px-6 py-14 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-br from-[#EFE0C2] via-[#F8EED8] to-[#E6D0A7] border-2 border-[#C2A87E] rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-xl shadow-[#2B1E16]/10"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-2"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#991B1B] font-bold">
                03 / Pesan Rahasia untuk semua kru
              </span>

              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.06 }}
                transition={{ duration: 0.45 }}
                className="wax-seal w-16 h-16 text-[#FBF6EA] rounded-full flex items-center justify-center mx-auto my-5"
              >
                <ScrollText className="w-7 h-7" />
              </motion.div>

              <WordRevealTitle
                as="h3"
                text="Ada Satu Pesan Penutup Untuk Kalian"
                className="font-serif text-2xl md:text-3xl font-bold text-[#2B1E16]"
              />

              <p className="text-[#5A4634] text-sm mt-3 max-w-md mx-auto leading-relaxed">
                Pecahkan segel di bawah ini untuk membaca pesan br
                sebelum kalian melanjutkan kelas di semester berikutnya.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(true)}
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#991B1B] text-[#FBF6EA] font-semibold text-sm hover:bg-[#7F1D1D] transition-colors shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pecahkan Segel &amp; Buka Gulungan</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-left bg-[#FBF6EA] p-5 sm:p-6 md:p-9 rounded-2xl border-2 border-[#C8B28E] shadow-inner"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  <ScrollText className="w-4 h-4" />
                  <span>Pesan Terbuka</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-[#7A634E] hover:text-[#2B1E16] font-semibold cursor-pointer"
                >
                  Gulung kembali
                </button>
              </div>

              <WordRevealTitle
                as="h3"
                triggerOnScroll={false}
                delay={0.1}
                text="Jangan Takut Salah Arah Saat Belajar"
                className="font-serif text-xl sm:text-2xl font-bold text-[#2B1E16] mb-4"
              />

              <p className="text-[#423224] leading-relaxed text-sm md:text-base">
                {MESSAGE_LINES.map((line, lineIdx) => {
                  const words = line.text.split(" ");
                  return (
                    <span key={lineIdx}>
                      {words.map((word, wIdx) => {
                        const delay = 0.45 + wordCounter * 0.032;
                        wordCounter += 1;
                        return (
                          <motion.span
                            key={`${lineIdx}-${wIdx}`}
                            initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                              duration: 0.35,
                              delay,
                              ease: "easeOut",
                            }}
                            className="inline-block mr-[0.26em]"
                          >
                            {word}
                          </motion.span>
                        );
                      })}
                      {lineIdx < MESSAGE_LINES.length - 1 && (
                        <>
                          <br />
                          {line.gapAfter && <br />}
                        </>
                      )}
                    </span>
                  );
                })}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}