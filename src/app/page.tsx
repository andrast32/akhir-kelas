import HeroLetter from "@/components/HeroLetter";
import MemoryGallery from "@/components/MemoryGallery";
import SecretEnvelope from "@/components/SecretEnvelope";
import StudentNotesWall from "@/components/StudentNotesWall";
import MobileBottomNav from "@/components/MobileBottomNav";
import MusicPlayer from "@/components/MusicPlayer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <MusicPlayer />
      <HeroLetter />
      <SecretEnvelope />
      <StudentNotesWall />
      <MemoryGallery />

      <footer className="max-w-5xl mx-auto px-6 pt-10 pb-28 md:pb-12 border-t-2 border-[#CBB692] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6D5640]">
        <span className="font-serif italic text-sm font-semibold text-[#2B1E16]">
          eat sleep coding • 2026
        </span>
        <span>Dibuat dengan penuh rasa bangga untuk semua siswa</span>
      </footer>

      <MobileBottomNav />
    </main>
  );
}