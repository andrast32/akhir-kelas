"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Calendar, ArrowUpRight, Compass } from "lucide-react";
import { MEMORIES, MemoryItem } from "@/data/memories";
import { CLASS_LIST } from "@/data/classes";
import WordRevealTitle from "./WordRevealTitle";

export default function MemoryGallery() {
  const [selectedClass, setSelectedClass] = useState<string>("Semua Kelas");
  const [activePhoto, setActivePhoto] = useState<MemoryItem | null>(null);

  const filterTabs = ["Semua Kelas", ...CLASS_LIST];

  const filteredMemories =
    selectedClass === "Semua Kelas"
      ? MEMORIES
      : MEMORIES.filter((m) => m.className === selectedClass);

  return (
    <section id="galeri" className="max-w-5xl mx-auto px-5 sm:px-6 py-20 md:py-24">
      <div className="border-t-2 border-[#CBB692] pt-8 mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-[#991B1B] font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>02 / Arsip seluruh kelas</span>
          </span>
          <WordRevealTitle
            as="h2"
            text="Potret Momen di Tiap Kelas"
            className="font-serif text-3xl md:text-5xl font-bold text-[#2B1E16] mt-2 leading-tight"
          />
        </div>
        <p className="text-[#5A4634] text-sm max-w-xs leading-relaxed">
          Pilih kelasmu untuk menyaring arsip foto, lalu klik poster untuk
          membaca kisah di baliknya.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
        {filterTabs.map((cls) => {
          const active = selectedClass === cls;
          return (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`relative px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                active
                  ? "text-[#F3E9D2]"
                  : "bg-[#FBF6EA]/90 text-[#5A4634] border border-[#C8B28E] hover:border-[#2B1E16]"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="galleryFilterPill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#2B1E16] -z-10"
                />
              )}
              {cls}
            </button>
          );
        })}
      </div>

      {filteredMemories.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-[#FBF6EA]/70 rounded-3xl border-2 border-dashed border-[#C8B28E]"
        >
          <p className="text-[#6D5640] text-sm">
            Arsip foto untuk kru kelas{" "}
            <span className="font-bold text-[#2B1E16]">{selectedClass}</span>{" "}
            segera menyusul!
          </p>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9"
        >
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  rotate: 0,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setActivePhoto(item)}
                className={`group relative cursor-pointer bg-[#FBF6EA] p-4 pb-6 rounded-xl shadow-lg shadow-[#2B1E16]/10 hover:shadow-2xl hover:shadow-[#2B1E16]/20 border-2 border-[#C8B28E] transition-shadow ${item.rotationClass}`}
              >
                <div
                  className={`washi-tape absolute w-20 h-4 rounded-xs z-10 ${item.tapeClass}`}
                />

                <div className="text-center border-b border-[#D8C5A5] pb-1.5 mb-2.5">
                  <span className="font-serif text-[11px] font-bold tracking-[0.26em] uppercase text-[#6D5640]">
                    MEMORY LOG • {item.className}
                  </span>
                </div>

                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#E6D7BC] border border-[#B89F78] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-[#2B1E16]/85 text-[#F3E9D2] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="mt-3.5 px-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8A7056] mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#2B1E16] group-hover:text-[#991B1B] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-hand text-lg text-[#5A4634] mt-1 leading-snug line-clamp-2">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-[#1B120C]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FBF6EA] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C8B28E] max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-[4/3] bg-[#2B1E16]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-3 right-3 bg-[#2B1E16]/85 text-[#F3E9D2] p-2.5 rounded-full hover:bg-[#991B1B] transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#991B1B] font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>
                    Kru Kelas {activePhoto.className} • {activePhoto.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1E16] mt-1">
                  {activePhoto.title}
                </h3>
                <p className="text-[#423224] mt-4 leading-relaxed bg-[#F3E9D2]/80 border-l-4 border-[#991B1B] p-4 rounded-r-xl text-sm md:text-base">
                  &ldquo;{activePhoto.teacherStory}&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}