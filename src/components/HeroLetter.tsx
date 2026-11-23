"use client";

import { motion } from "framer-motion";
import { Compass, Anchor, ArrowDownRight } from "lucide-react";
import WordRevealTitle from "./WordRevealTitle";

const LETTER_BLOCKS = [
  {
    isHeading: true,
    lines: ["Halo seluruh kru,"],
  },
  {
    isHeading: false,
    lines: [
      "Tidak terasa pelayaran kita selama satu semester penuh telah sampai di dermaga akhir. Dari hari pertama yang masih ragu melangkah, diskusi kelas yang riuh, hingga tantangan tugas yang akhirnya berhasil kalian taklukkan bersama.",
    ],
  },
  {
    isHeading: false,
    lines: [
      "Semester depan, mungkin angin tidak akan membawa kita ke ruang kelas yang sama. Karena itu,",
      "saya menyimpan catatan perjalanan ini agar kalian selalu ingat bahwa setiap proses kecil yang kalian lewati di sini sangat berarti.",
    ],
  },
];

export default function HeroLetter() {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -20, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  let wordCounter = 0;

  return (
    <section
      id="surat"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center px-5 sm:px-6 pt-16 pb-20 md:py-24 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between border-b-2 border-[#CBB692] pb-3.5 mb-8 md:mb-12 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#6D5640] font-semibold"
      >
        <span className="inline-flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#991B1B]" />
          <span>01 / Sebuah perjalanan menuju hacker nasa</span>
        </span>
        <span>Murid murid hebat • 2026</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#991B1B]/10 border border-[#991B1B]/25 text-[#991B1B] text-xs font-bold mb-5">
            <Anchor className="w-3.5 h-3.5" />
            <span>Catatan Perjalanan</span>
          </div>

          <WordRevealTitle
            as="h1"
            triggerOnScroll={false}
            delay={0.15}
            text="Terima kasih sudah berlayar bersama di satu semester ini."
            className="font-serif text-[2.1rem] sm:text-5xl md:text-[3.35rem] font-bold text-[#2B1E16] leading-[1.15] tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-5 text-[#5A4634] text-sm sm:text-base md:text-lg leading-relaxed max-w-md"
          >
            Setiap ruang kelas adalah pulau tempat kita singgah, belajar, dan
            bertumbuh sebelum kompas Log Pose mengarahkan kalian ke petualangan
            berikutnya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("#galeri")}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2B1E16] text-[#F3E9D2] text-sm font-semibold hover:bg-[#991B1B] transition-colors shadow-md cursor-pointer"
            >
              <span>Buka Arsip Foto</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </motion.button>

            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("#catatan-murid")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#B89F78] bg-[#FBF6EA]/80 text-[#2B1E16] text-sm font-semibold hover:bg-[#EBDDC0] transition-colors cursor-pointer"
            >
              Tulis Catatan
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:col-span-6 bg-[#FBF6EA] border-2 border-[#C8B28E] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-[#2B1E16]/10 relative mt-4 lg:mt-0"
        >
          <div className="washi-tape w-24 h-5 mx-auto -mt-8 sm:-mt-11 mb-5 sm:mb-6 rounded-xs -rotate-2" />

          <div className="space-y-3.5 sm:space-y-4 text-[#423224] leading-relaxed text-sm sm:text-[15px] md:text-base">
            {LETTER_BLOCKS.map((block, bIdx) => (
              <p
                key={bIdx}
                className={
                  block.isHeading
                    ? "font-serif italic text-lg sm:text-xl font-semibold text-[#2B1E16]"
                    : undefined
                }
              >
                {block.lines.map((line, lIdx) => {
                  const words = line.split(" ");
                  return (
                    <span key={lIdx}>
                      {words.map((word, wIdx) => {
                        const delay = 0.5 + wordCounter * 0.032;
                        wordCounter += 1;
                        return (
                          <motion.span
                            key={`${bIdx}-${lIdx}-${wIdx}`}
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
                      {lIdx < block.lines.length - 1 && <br />}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          <div className="mt-7 pt-5 border-t border-[#D6C3A3] flex items-center justify-between">
            <div>
              <p className="font-serif italic text-lg text-[#2B1E16] font-semibold">
                Sampai jumpa di ketidak sengajaan berikutnya,
              </p>
              <br />
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#7A634E] mt-0.5 font-semibold">
                Indra
              </p>
            </div>

            <div
              className="wax-seal w-15 h-15 rounded-full flex items-center justify-center text-[#FBF6EA] font-serif font-bold text-sm select-none shrink-0"
              title="Segel Logbook 2026"
            >
              code
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}