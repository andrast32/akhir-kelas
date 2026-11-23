"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageSquareHeart,
  Loader2,
  ImagePlus,
  X,
  Heart,
  MessageCircle,
  Anchor,
} from "lucide-react";
import { supabase, StudentNote, NoteComment } from "@/lib/supabase";
import { CLASS_LIST } from "@/data/classes";
import WordRevealTitle from "./WordRevealTitle";

const THEME_STYLES: Record<StudentNote["card_theme"], string> = {
  cream: "bg-[#FBF6EA] border-[#C8B28E]",
  amber: "bg-[#F6E6C4] border-[#C2A36B]",
  sage: "bg-[#E7ECE0] border-[#A7B59A]",
};

const ROTATION_CLASSES = [
  "sm:-rotate-2",
  "sm:rotate-1",
  "sm:-rotate-1",
  "sm:rotate-2",
];

export default function StudentNotesWall() {
  const [notes, setNotes] = useState<StudentNote[]>([]);
  const [comments, setComments] = useState<Record<number, NoteComment[]>>({});
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [openComments, setOpenComments] = useState<Record<number, boolean>>({});
  const [commentTexts, setCommentTexts] = useState<Record<number, string>>({});
  const [sendingCommentId, setSendingCommentId] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState<string>(CLASS_LIST[0]);
  const [message, setMessage] = useState("");
  const [cardTheme, setCardTheme] =
    useState<StudentNote["card_theme"]>("cream");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedLikes = localStorage.getItem("liked_student_notes");
    if (savedLikes) {
      setLikedIds(JSON.parse(savedLikes));
    }

    const fetchAllData = async () => {
      const [notesRes, commentsRes] = await Promise.all([
        supabase
          .from("student_notes")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("note_comments")
          .select("*")
          .order("created_at", { ascending: true }),
      ]);

      if (notesRes.data) {
        setNotes(notesRes.data as StudentNote[]);
      }

      if (commentsRes.data) {
        const grouped: Record<number, NoteComment[]> = {};
        (commentsRes.data as NoteComment[]).forEach((c) => {
          if (!grouped[c.note_id]) grouped[c.note_id] = [];
          grouped[c.note_id].push(c);
        });
        setComments(grouped);
      }

      setLoading(false);
    };

    fetchAllData();

    const channel = supabase
      .channel("wall_realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "student_notes" },
        (payload) => {
          const newNote = payload.new as StudentNote;
          setNotes((prev) =>
            prev.some((n) => n.id === newNote.id) ? prev : [newNote, ...prev]
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "student_notes" },
        (payload) => {
          const updated = payload.new as StudentNote;
          setNotes((prev) =>
            prev.map((n) => (n.id === updated.id ? updated : n))
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "note_comments" },
        (payload) => {
          const newComment = payload.new as NoteComment;
          setComments((prev) => {
            const existing = prev[newComment.note_id] || [];
            if (existing.some((c) => c.id === newComment.id)) return prev;
            return {
              ...prev,
              [newComment.note_id]: [...existing, newComment],
            };
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      alert("Ukuran foto maksimal 3MB ya!");
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !className || !message.trim()) return;

    setSubmitting(true);
    let uploadedImageUrl: string | null = null;

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `${className.replace(/\s+/g, "_")}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("class-memories")
        .upload(filePath, imageFile);

      if (uploadError) {
        alert("Gagal mengunggah foto: " + uploadError.message);
        setSubmitting(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("class-memories")
        .getPublicUrl(filePath);

      uploadedImageUrl = publicUrlData.publicUrl;
    }

    const { data, error } = await supabase
      .from("student_notes")
      .insert([
        {
          student_name: studentName.trim(),
          class_name: className,
          message: message.trim(),
          card_theme: cardTheme,
          image_url: uploadedImageUrl,
          likes_count: 0,
        },
      ])
      .select()
      .single();

    if (!error && data) {
      setNotes((prev) =>
        prev.some((n) => n.id === data.id) ? prev : [data as StudentNote, ...prev]
      );
      setStudentName("");
      setMessage("");
      clearImage();
    } else {
      alert("Gagal mengirim pesan: " + (error?.message || "Cek database."));
    }

    setSubmitting(false);
  };

  const handleToggleLike = async (note: StudentNote) => {
    const isLiked = likedIds.includes(note.id);
    const previousCount = note.likes_count || 0;
    const newCount = isLiked ? Math.max(0, previousCount - 1) : previousCount + 1;

    const updatedLikedIds = isLiked
      ? likedIds.filter((id) => id !== note.id)
      : [...likedIds, note.id];

    setLikedIds(updatedLikedIds);
    localStorage.setItem("liked_student_notes", JSON.stringify(updatedLikedIds));

    setNotes((prev) =>
      prev.map((n) => (n.id === note.id ? { ...n, likes_count: newCount } : n))
    );

    const { error } = await supabase
      .from("student_notes")
      .update({ likes_count: newCount })
      .eq("id", note.id);

    if (error) {
      alert("Gagal menyimpan Like: " + error.message);
      setNotes((prev) =>
        prev.map((n) =>
          n.id === note.id ? { ...n, likes_count: previousCount } : n
        )
      );
    }
  };

  const handleAddComment = async (e: React.FormEvent, noteId: number) => {
    e.preventDefault();
    const text = commentTexts[noteId]?.trim();
    if (!text) return;

    setSendingCommentId(noteId);

    const { data, error } = await supabase
      .from("note_comments")
      .insert([
        {
          note_id: noteId,
          author_name: "Anonim",
          comment_text: text,
        },
      ])
      .select()
      .single();

    if (error) {
      alert("Gagal mengirim komentar: " + error.message);
    } else if (data) {
      setComments((prev) => {
        const existing = prev[noteId] || [];
        if (existing.some((c) => c.id === data.id)) return prev;
        return { ...prev, [noteId]: [...existing, data as NoteComment] };
      });
      setCommentTexts((prev) => ({
        ...prev,
        [noteId]: "",
      }));
    }

    setSendingCommentId(null);
  };

  return (
    <section
      id="catatan-murid"
      className="max-w-5xl mx-auto px-5 sm:px-6 py-20 md:py-24"
    >
      <div className="border-t-2 border-[#CBB692] pt-8 mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-[#991B1B] font-bold">
            <Anchor className="w-3.5 h-3.5" />
            <span>04 / Papan Kru &amp; Catatan Pelayaran</span>
          </span>
          <WordRevealTitle
            as="h2"
            text="Suara & Poster Kenangan"
            className="font-serif text-3xl md:text-5xl font-bold text-[#2B1E16] mt-2 leading-tight"
          />
        </div>
        <p className="text-[#5A4634] text-sm max-w-xs leading-relaxed">
          Semua catatan dan foto langsung tertempel di sini. Beri tanda
          suka atau tulis balasan secara anonim untuk rekan satu kelasmu.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#FBF6EA] p-5 sm:p-8 rounded-3xl shadow-xl shadow-[#2B1E16]/10 border-2 border-[#C8B28E] mb-16 relative"
      >
        <div className="washi-tape w-24 h-5 mx-auto -mt-8 sm:-mt-11 mb-5 rounded-xs rotate-1" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[11px] font-bold text-[#6D5640] uppercase tracking-wider mb-1.5">
              Nama / Panggilan
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Kuncen 8C"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-[#C8B28E] bg-[#F3E9D2]/50 text-sm text-[#2B1E16] focus:outline-none focus:ring-2 focus:ring-[#991B1B]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#6D5640] uppercase tracking-wider mb-1.5">
              Asal Kelas
            </label>
            <select
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-[#C8B28E] bg-[#F3E9D2]/50 text-sm text-[#2B1E16] focus:outline-none focus:ring-2 focus:ring-[#991B1B]"
            >
              {CLASS_LIST.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-[#6D5640] uppercase tracking-wider mb-1.5">
            Pesan &amp; Kesan Selama Pelayaran
          </label>
          <textarea
            rows={3}
            required
            placeholder="Tulis pesanmu di sini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-[#C8B28E] bg-[#F3E9D2]/50 text-sm text-[#2B1E16] focus:outline-none focus:ring-2 focus:ring-[#991B1B]"
          />
        </div>

        <div className="mb-5">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="photo-upload"
          />

          {!imagePreview ? (
            <label
              htmlFor="photo-upload"
              className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-[#B89F78] bg-[#F3E9D2]/45 text-[#5A4634] text-xs font-semibold hover:bg-[#EFE0C2] hover:border-[#991B1B] hover:text-[#991B1B] transition cursor-pointer"
            >
              <ImagePlus className="w-4 h-4" />
              <span>Tambah Foto Poster (Opsional, Maks. 3MB)</span>
            </label>
          ) : (
            <div className="relative inline-block">
              <img
                src={imagePreview}
                alt="Preview foto"
                className="h-32 w-auto rounded-xl object-cover border-2 border-[#C8B28E] shadow-sm"
              />
              <button
                type="button"
                onClick={clearImage}
                className="absolute -top-2 -right-2 bg-[#2B1E16] text-[#FBF6EA] p-1.5 rounded-full hover:bg-[#991B1B] transition cursor-pointer shadow"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#D8C5A5]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-medium text-[#6D5640]">
              Warna perkamen:
            </span>
            {(["cream", "amber", "sage"] as const).map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setCardTheme(theme)}
                className={`w-7 h-7 sm:w-6 sm:h-6 rounded-full border-2 transition cursor-pointer ${
                  theme === "cream"
                    ? "bg-[#FBF6EA] border-[#9C8265]"
                    : theme === "amber"
                    ? "bg-[#F6E6C4] border-[#B48A4E]"
                    : "bg-[#E7ECE0] border-[#7E916D]"
                } ${
                  cardTheme === theme
                    ? "ring-2 ring-offset-2 ring-[#2B1E16]"
                    : ""
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full bg-[#2B1E16] text-[#F3E9D2] text-sm font-semibold hover:bg-[#991B1B] disabled:opacity-60 transition-colors cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Mengunggah...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Tempelkan ke Papan</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.form>

      {loading ? (
        <div className="text-center py-12 text-[#6D5640] flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Memuat catatan...</span>
        </div>
      ) : notes.length === 0 ? (
        <div className="text-center py-14 bg-[#FBF6EA]/70 rounded-3xl border-2 border-dashed border-[#C8B28E]">
          <MessageSquareHeart className="w-8 h-8 text-[#8A7056] mx-auto mb-2" />
          <p className="text-[#423224] font-semibold">
            Belum ada catatan yang tertempel saat ini.
          </p>
          <p className="text-[#7A634E] text-sm mt-1">
            Jadilah yang pertama yang menulis kesan di atas!
          </p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-7 space-y-6 sm:space-y-7">
          <AnimatePresence initial={false}>
            {notes.map((note, idx) => {
              const isLiked = likedIds.includes(note.id);
              const noteComments = comments[note.id] || [];
              const isCommentOpen = !!openComments[note.id];
              const currentText = commentTexts[note.id] || "";
              const rotation = ROTATION_CLASSES[idx % ROTATION_CLASSES.length];

              return (
                <motion.article
                  key={note.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (idx % 3) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                    rotate: 0,
                    transition: { duration: 0.22, ease: "easeOut" },
                  }}
                  className={`relative break-inside-avoid p-5 rounded-xl border-2 shadow-md hover:shadow-xl hover:shadow-[#2B1E16]/15 transition-shadow ${
                    THEME_STYLES[note.card_theme] || THEME_STYLES.cream
                  } ${rotation}`}
                >
                  <div className="washi-tape w-16 h-3.5 mx-auto -mt-7 mb-3 rounded-xs opacity-90" />

                  {note.image_url && (
                    <div className="mb-3.5">
                      <div className="text-center border-b border-[#D8C5A5] pb-1 mb-2">
                        <span className="font-serif text-[10px] font-bold tracking-[0.25em] uppercase text-[#6D5640]">
                          CREW POSTER • {note.class_name}
                        </span>
                      </div>
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#E6D7BC] border border-[#B89F78] group">
                        <img
                          src={note.image_url}
                          alt={`Kenangan dari ${note.student_name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}

                  <p className="text-[#2B1E16] text-sm md:text-[15px] leading-relaxed whitespace-pre-line">
                    &ldquo;{note.message}&rdquo;
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#D8C5A5] flex items-center justify-between">
                    <div>
                      <p className="font-serif font-bold text-[#2B1E16] text-sm">
                        {note.student_name}
                      </p>
                      <p className="text-xs font-bold text-[#991B1B]">
                        {note.class_name}
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <motion.button
                        whileTap={{ scale: 1.3 }}
                        type="button"
                        onClick={() => handleToggleLike(note)}
                        className={`inline-flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold transition cursor-pointer ${
                          isLiked
                            ? "text-[#991B1B]"
                            : "text-[#6D5640] hover:text-[#991B1B]"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isLiked ? "fill-[#991B1B] text-[#991B1B]" : ""
                          }`}
                        />
                        <span>{note.likes_count || 0}</span>
                      </motion.button>

                      <button
                        type="button"
                        onClick={() =>
                          setOpenComments((prev) => ({
                            ...prev,
                            [note.id]: !prev[note.id],
                          }))
                        }
                        className="inline-flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold text-[#6D5640] hover:text-[#2B1E16] transition cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{noteComments.length}</span>
                      </button>
                    </div>
                  </div>

                  {(isCommentOpen || noteComments.length > 0) && (
                    <div className="mt-3 pt-3 border-t border-[#D8C5A5] space-y-2">
                      {noteComments.map((c) => (
                        <div
                          key={c.id}
                          className="bg-white/75 rounded-lg px-3 py-2 text-xs border border-[#D8C5A5]"
                        >
                          <span className="font-bold text-[#7A634E]">
                            Anonim:{" "}
                          </span>
                          <span className="text-[#2B1E16]">
                            {c.comment_text}
                          </span>
                        </div>
                      ))}

                      {isCommentOpen && (
                        <form
                          onSubmit={(e) => handleAddComment(e, note.id)}
                          className="flex gap-1.5 pt-1"
                        >
                          <input
                            type="text"
                            required
                            placeholder="Tulis komentar anonim..."
                            value={currentText}
                            onChange={(e) =>
                              setCommentTexts((prev) => ({
                                ...prev,
                                [note.id]: e.target.value,
                              }))
                            }
                            className="flex-1 px-3 py-2 sm:py-1.5 rounded-lg border border-[#C8B28E] bg-white text-xs text-[#2B1E16] focus:outline-none focus:ring-1 focus:ring-[#991B1B]"
                          />
                          <button
                            type="submit"
                            disabled={sendingCommentId === note.id}
                            className="px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#2B1E16] text-[#F3E9D2] text-xs font-semibold hover:bg-[#991B1B] disabled:opacity-50 cursor-pointer"
                          >
                            {sendingCommentId === note.id ? "..." : "Kirim"}
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}