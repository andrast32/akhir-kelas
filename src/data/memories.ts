import { ClassName } from "./classes";

export interface MemoryItem {
    id: string;
    title: string;
    date: string;
    className: ClassName;
    image: string;
    caption: string;
    teacherStory: string;
    rotationClass: string;
    tapeClass: string;
}

export const MEMORIES: MemoryItem[] = [
    {
        id: "7c-1",
        title: "Pertemuan 1 — 7C",
        date: "Juli 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-1.jpg",
        caption: "Hari pertama berlayar ketika semua masih malu-malu bertanya.",
        teacherStory:
            "Sebagai kelas baru, suasana pertemuan pertama terasa penuh rasa penasaran sekaligus canggung. Banyak yang masih ragu mengangkat tangan, tapi tatapan ingin tahu kalian sudah terlihat sejak menit pertama.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "8a-1",
        title: "Pertemuan 1 — 8A",
        date: "Juli 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-1.jpg",
        caption: "Kaget sekaligus senang saat tahu kita kembali satu dek lagi.",
        teacherStory:
            "Awalnya kita mengira pelayaran bersama sudah selesai di kelas 7. Begitu masuk pintu kelas 8A, suasana langsung cair oleh senyum kaget dan obrolan seru yang langsung menyambung lagi.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "8c-1",
        title: "Pertemuan 1 — 8C",
        date: "Juli 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-1.jpg",
        caption: "Hari ketika kita mengira tidak akan belajar bersama lagi.",
        teacherStory:
            "Reuni tak terduga di semester baru. Kalian menyambut dengan energi yang jauh lebih dewasa dibanding tahun lalu, membuat pertemuan perdana terasa seperti pulang ke kru lama.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "8e-1",
        title: "Pertemuan 1 — 8E",
        date: "Juli 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-1.jpg",
        caption:
            "Sempat mengira berpisah kelas, ternyata kompas mempertemukan lagi.",
        teacherStory:
            "Tidak menyangka jadwal kembali mempertemukan kita di 8E. Dari yang tadinya mengira tidak akan diajar lagi, pertemuan pertama langsung dipenuhi candaan khas kalian yang tidak pernah berubah.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "9b-1",
        title: "Pertemuan 1 — 9B",
        date: "Juli 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-1.jpg",
        caption:
            "Hari pertama masuk kelas bilingual dengan sedikit rasa deg-degan.",
        teacherStory:
            "Jujur ada sedikit rasa gugup di awal karena kelas ini dikenal berisi murid-murid berprestasi dan penuh talenta. Namun sambutan hangat dan antusiasme kalian langsung membuat suasana kelas hidup.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "9c-1",
        title: "Pertemuan 1 — 9C",
        date: "Juli 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-1.jpg",
        caption: "Hari ketika kita mengira tidak akan belajar bersama lagi.",
        teacherStory:
            "Di tahun terakhir kalian di jenjang ini, ternyata semesta masih memberi kesempatan bagi kita untuk berlayar bersama lagi. Pertemuan perdana yang penuh rasa syukur dan semangat baru.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },

    {
        id: "7c-2",
        title: "Pertemuan 2 — 7C",
        date: "Juli 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-2.jpg",
        caption:
            "Mulai berani bersuara dan saling bantu saat mencoba hal baru.",
        teacherStory:
            "Rasa canggung di pertemuan pertama perlahan hilang. Di pertemuan kedua ini kalian sudah mulai berani bertanya, berdiskusi dengan teman sebangku, dan tidak takut salah saat mencoba.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "8a-2",
        title: "Pertemuan 2 — 8A",
        date: "Juli 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-2.jpg",
        caption: "Ritme belajar langsung ngebut dengan kekompakan kru lama.",
        teacherStory:
            "Karena sudah saling mengenal gaya belajar masing-masing, pertemuan kedua berjalan sangat efektif. Diskusi kelas mulai ramai dengan ide-ide kritis dari kalian.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "8c-2",
        title: "Pertemuan 2 — 8C",
        date: "Juli 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-2.jpg",
        caption:
            "Mulai masuk ke tantangan materi dengan tawa di sela seriusnya.",
        teacherStory:
            "Kalian selalu punya cara membuat materi yang berat terasa ringan. Di pertemuan kedua ini terlihat jelas kekompakan kalian saat saling membantu teman yang masih bingung.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "8e-2",
        title: "Pertemuan 2 — 8E",
        date: "Juli 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-2.jpg",
        caption:
            "Kelas paling ekspresif yang selalu bikin suasana tidak pernah sepi.",
        teacherStory:
            "Di pertemuan kedua, karakter asli 8E langsung keluar sepenuhnya—aktif, penuh pertanyaan tak terduga, tapi tetap fokus menuntaskan tantangan yang diberikan.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "9b-2",
        title: "Pertemuan 2 — 9B",
        date: "Juli 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-2.jpg",
        caption:
            "Rasa canggung berubah jadi diskusi tajam dan kolaborasi seru.",
        teacherStory:
            "Kekhawatiran di hari pertama berganti menjadi rasa kagum. Cara kalian merespons materi dengan cepat dan saling berargumen secara sehat membuat saya ikut tertantang memberikan yang terbaik.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "9c-2",
        title: "Pertemuan 2 — 9C",
        date: "Juli 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-2.jpg",
        caption: "Menikmati setiap proses belajar di babak akhir bersama.",
        teacherStory:
            "Di pertemuan kedua ini terasa sekali kedewasaan kalian sebagai kakak tingkat. Kalian serius saat mengerjakan tugas, namun tetap hangat menjaga kebersamaan satu kelas.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },

    {
        id: "7c-3",
        title: "Pertemuan 3 — 7C",
        date: "Agustus 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-3.jpg",
        caption:
            "Mulai akrab dan suasana kelas jauh lebih hidup dari sebelumnya.",
        teacherStory:
            "Di pertemuan ketiga ini tawa mulai pecah di sela penjelasan materi. Kalian sudah mulai menemukan ritme belajar bersama dan tidak lagi canggung berinteraksi di depan kelas.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "8a-3",
        title: "Pertemuan 3 — 8A",
        date: "Agustus 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-3.jpg",
        caption:
            "Tanya jawab seru yang selalu bikin jam pelajaran terasa singkat.",
        teacherStory:
            "8A tidak pernah kehabisan pertanyaan menarik. Di pertemuan ketiga ini, rasa ingin tahu kalian memancing diskusi yang jauh lebih dalam dari sekadar materi di buku.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "8c-3",
        title: "Pertemuan 3 — 8C",
        date: "Agustus 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-3.jpg",
        caption:
            "Diskusi kelas yang penuh celetukan cerdas dan rasa penasaran.",
        teacherStory:
            "Pertemuan ketiga berjalan sangat dinamis. Banyak sudut pandang segar muncul dari bangku-bangku 8C yang bikin diskusi kelas makin seru.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "8e-3",
        title: "Pertemuan 3 — 8E",
        date: "Agustus 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-3.jpg",
        caption: "Rasa ingin tahu tinggi yang memicu eksperimen seru di kelas.",
        teacherStory:
            "8E selalu berani mencoba cara-cara di luar kebiasaan. Di pertemuan ketiga ini semangat eksplorasi kalian bikin proses belajar terasa hidup.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "9b-3",
        title: "Pertemuan 3 — 9B",
        date: "Agustus 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-3.jpg",
        caption:
            "Kecepatan berpikir dan rasa ingin tahu kelas bilingual mulai terasa.",
        teacherStory:
            "Di pertemuan ketiga saya menyadari bahwa 9B bukan hanya cepat memahami teori, tapi juga kritis mempertanyakan penerapannya di dunia nyata.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "9c-3",
        title: "Pertemuan 3 — 9C",
        date: "Agustus 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-3.jpg",
        caption:
            "Obrolan dan diskusi dewasa yang bikin suasana kelas makin hangat.",
        teacherStory:
            "Pertemuan ketiga berjalan dengan alur yang sangat nyaman. Kalian sudah tahu cara mengelola waktu belajar sambil tetap menjaga keakraban satu sama lain.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },

    {
        id: "7c-4",
        title: "Pertemuan 4 — 7C",
        date: "Agustus 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-4.jpg",
        caption:
            "Eksplorasi praktik pertama yang bikin semua sibuk berdiskusi.",
        teacherStory:
            "Melihat kalian begitu antusias mencoba langkah demi langkah praktik pertama menjadi momen yang berkesan. Meskipun ada beberapa yang sempat bingung, semangat saling mengajari antar teman luar biasa.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "8a-4",
        title: "Pertemuan 4 — 8A",
        date: "Agustus 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-4.jpg",
        caption: "Praktik kolaborasi yang berjalan mulus tanpa banyak drama.",
        teacherStory:
            "Senang melihat kedewasaan kalian di kelas 8. Saat diberi studi kasus, kalian langsung membagi peran dengan rapi dan saling melengkapi kekurangan teman satu tim.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "8c-4",
        title: "Pertemuan 4 — 8C",
        date: "Agustus 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-4.jpg",
        caption: "Saling bahu-membahu menuntaskan latihan praktik bersama.",
        teacherStory:
            "Hal yang paling saya sukai dari 8C adalah solidaritasnya. Tidak ada yang dibiarkan tertinggal sendirian ketika ada materi yang perlu dipahami bersama.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "8e-4",
        title: "Pertemuan 4 — 8E",
        date: "Agustus 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-4.jpg",
        caption: "Kerja sama solid saat menaklukkan latihan praktik bersama.",
        teacherStory:
            "Meski awalnya ramai berdiskusi, begitu mulai mengerjakan praktik kalian langsung kompak saling bantu sampai semua kelompok selesai tepat waktu.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "9b-4",
        title: "Pertemuan 4 — 9B",
        date: "Agustus 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-4.jpg",
        caption:
            "Eksplorasi proyek dengan standar ketelitian yang mengesankan.",
        teacherStory:
            "Kalian selalu berusaha memberikan hasil di atas ekspektasi. Di pertemuan keempat ini terlihat jelas bagaimana setiap anggota kelompok saling memacu kreativitas.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "9c-4",
        title: "Pertemuan 4 — 9C",
        date: "Agustus 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-4.jpg",
        caption: "Kolaborasi tim yang solid tanpa perlu banyak arahan ulang.",
        teacherStory:
            "Senang melihat kemandirian kru 9C. Di pertemuan keempat ini kalian langsung bergerak cepat menyelesaikan tantangan praktik dengan hasil yang rapi.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },

    {
        id: "7c-5",
        title: "Pertemuan 5 — 7C",
        date: "September 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-5.jpg",
        caption: "Kerja kelompok perdana dengan ide-ide polos tapi kreatif.",
        teacherStory:
            "Pertemuan kelima menjadi ajang pembuktian kekompakan tim kalian. Pembagian tugasnya masih belajar, namun antusiasme setiap anggota kelompok patut diacungi jempol.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "8a-5",
        title: "Pertemuan 5 — 8A",
        date: "September 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-5.jpg",
        caption:
            "Suasana tengah semester yang penuh fokus sekaligus candaan ringan.",
        teacherStory:
            "Kalian tahu persis kapan harus serius menyimak dan kapan waktunya mencairkan suasana. Keseimbangan itu yang selalu bikin saya senang mengajar di kelas 8A.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "8c-5",
        title: "Pertemuan 5 — 8C",
        date: "September 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-5.jpg",
        caption:
            "Kerja tim di tengah semester dengan pembagian peran yang rapi.",
        teacherStory:
            "Di pertemuan kelima kalian membuktikan bahwa suasana santai tetap bisa menghasilkan pekerjaan yang rapi dan tepat waktu.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "8e-5",
        title: "Pertemuan 5 — 8E",
        date: "September 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-5.jpg",
        caption:
            "Tengah semester yang penuh warna dan semangat pantang menyerah.",
        teacherStory:
            "Pertemuan kelima menjadi bukti bahwa di balik gaya santai kalian, 8E punya tekad kuat untuk memahami setiap materi dengan baik.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "9b-5",
        title: "Pertemuan 5 — 9B",
        date: "September 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-5.jpg",
        caption:
            "Di balik prestasi, ternyata 9B juga punya selera humor yang seru.",
        teacherStory:
            "Pertemuan kelima mengajarkan saya bahwa kelas berprestasi bukan berarti kaku. Candaan cerdas kalian di tengah sesi belajar bikin suasana kelas sangat menyenangkan.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "9c-5",
        title: "Pertemuan 5 — 9C",
        date: "September 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-5.jpg",
        caption: "Tengah semester yang penuh fokus dan saling menyemangati.",
        teacherStory:
            "Di tengah padatnya persiapan kelas 9, kalian tetap hadir dengan semangat positif di setiap pertemuan dan saling mengingatkan untuk tidak menunda tugas.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },

    {
        id: "7c-6",
        title: "Pertemuan 6 — 7C",
        date: "September 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-6.jpg",
        caption:
            "Fokus penuh saat menghadapi tantangan latihan di tengah semester.",
        teacherStory:
            "Dari kelas yang awalnya ramai bertanya hal mendasar, di pertemuan keenam ini kalian mulai mandiri memecahkan soal dan tantangan latihan dengan lebih percaya diri.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "8a-6",
        title: "Pertemuan 6 — 8A",
        date: "September 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-6.jpg",
        caption:
            "Mencoba pendekatan baru dan tetap percaya diri meski sempat keliru.",
        teacherStory:
            "Di pertemuan keenam ada beberapa tantangan yang cukup menguras pikiran, tapi kalian tidak mudah menyerah dan terus mencoba sampai menemukan solusinya.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "8c-6",
        title: "Pertemuan 6 — 8C",
        date: "September 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-6.jpg",
        caption: "Momen serius memecahkan tantangan baru di papan tulis.",
        teacherStory:
            "Ketika dihadapkan pada persoalan yang butuh ketelitian, 8C langsung memasang mode fokus penuh sampai semuanya terjawab tuntas.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "8e-6",
        title: "Pertemuan 6 — 8E",
        date: "September 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-6.jpg",
        caption: "Saling bertukar ide tanpa ragu di depan teman-teman sekelas.",
        teacherStory:
            "Keberanian kalian mengemukakan pendapat di pertemuan keenam patut diapresiasi. Suasana kelas terasa terbuka dan menyenangkan untuk semua.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "9b-6",
        title: "Pertemuan 6 — 9B",
        date: "September 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-6.jpg",
        caption:
            "Tantangan studi kasus yang ditaklukkan dengan analisis tajam.",
        teacherStory:
            "Ketika diberikan tantangan yang lebih kompleks, 9B justru terlihat semakin bersemangat membedah masalah sampai ke akarnya.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "9c-6",
        title: "Pertemuan 6 — 9C",
        date: "September 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-6.jpg",
        caption:
            "Momen bertukar pikiran yang membuka banyak sudut pandang baru.",
        teacherStory:
            "Pertemuan keenam diisi dengan diskusi terbuka yang hangat. Saya selalu menghargai kejujuran dan cara berpikir kritis kalian di kelas.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },

    {
        id: "7c-7",
        title: "Pertemuan 7 — 7C",
        date: "Oktober 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-7.jpg",
        caption:
            "Presentasi mini pertama dengan wajah tegang tapi tetap berani.",
        teacherStory:
            "Berdiri di depan teman sekelas bukan hal mudah di kelas 7, tapi kalian berhasil melewatinya dengan baik. Tepuk tangan dukungan dari teman-teman sekelas bikin suasana makin hangat.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "8a-7",
        title: "Pertemuan 7 — 8A",
        date: "Oktober 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-7.jpg",
        caption: "Sesi presentasi penuh argumen cerdas dan saling menghargai.",
        teacherStory:
            "Setiap kelompok tampil dengan ciri khasnya masing-masing. Sesi tanya jawab antar kelompok berjalan hidup namun tetap santun dan suportif.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "8c-7",
        title: "Pertemuan 7 — 8C",
        date: "Oktober 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-7.jpg",
        caption:
            "Presentasi kreatif yang mengundang tepuk tangan satu ruangan.",
        teacherStory:
            "Cara kalian membawakan hasil diskusi di pertemuan ketujuh terasa sangat natural dan percaya diri. Kalian benar-benar menikmati proses belajarnya.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "8e-7",
        title: "Pertemuan 7 — 8E",
        date: "Oktober 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-7.jpg",
        caption:
            "Unjuk hasil karya kelompok dengan gaya khas 8E yang percaya diri.",
        teacherStory:
            "Setiap kelompok tampil penuh percaya diri dan tidak canggung menjawab pertanyaan dari teman maupun guru. Perkembangan yang sangat membanggakan!",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "9b-7",
        title: "Pertemuan 7 — 9B",
        date: "Oktober 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-7.jpg",
        caption:
            "Presentasi kelas bilingual yang komunikatif dan penuh wawasan.",
        teacherStory:
            "Cara kalian mempresentasikan gagasan di pertemuan ketujuh terlihat sangat matang dan terstruktur. Diskusi yang muncul benar-benar berbobot.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "9c-7",
        title: "Pertemuan 7 — 9C",
        date: "Oktober 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-7.jpg",
        caption:
            "Presentasi kelompok penuh percaya diri dari kakak tingkat 9C.",
        teacherStory:
            "Pengalaman dari tahun-tahun sebelumnya terlihat jelas saat kalian tampil di depan kelas. Penyampaiannya tenang, jelas, dan mudah dipahami.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },

    {
        id: "7c-8",
        title: "Pertemuan 8 — 7C",
        date: "Oktober 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-8.jpg",
        caption: "Makin kompak dan tanggap setiap kali diberi tantangan baru.",
        teacherStory:
            "Perubahan dari pertemuan pertama hingga kedelapan terasa sangat nyata. Kalian sudah jauh lebih teratur, cepat menangkap instruksi, dan tetap ceria sepanjang jam pelajaran.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "8a-8",
        title: "Pertemuan 8 — 8A",
        date: "Oktober 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-8.jpg",
        caption: "Energi positif yang tidak pernah padam menjelang akhir bab.",
        teacherStory:
            "Meskipun jadwal pelajaran semakin padat, semangat kalian di pertemuan kedelapan tetap terjaga. Kalian selalu berhasil membawa energi baik ke dalam kelas.",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },
    {
        id: "8c-8",
        title: "Pertemuan 8 — 8C",
        date: "Oktober 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-8.jpg",
        caption: "Tawa lepas di sela evaluasi materi sebelum babak akhir.",
        teacherStory:
            "Pertemuan kedelapan menjadi pengingat betapa berharganya kebersamaan kita. Kesempatan kedua bertemu di kelas 8 ini benar-benar jadi kenangan manis.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "8e-8",
        title: "Pertemuan 8 — 8E",
        date: "Oktober 2026",
        className: "8 E",
        image: "/assets/images/8e/momen-8.jpg",
        caption:
            "Fokus merampungkan tantangan lanjutan dengan tawa kebersamaan.",
        teacherStory:
            "Di pertemuan kedelapan ini kekompakan 8E semakin terasa. Kalian sudah jauh lebih sigap dan saling menjaga ritme kerja tim.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 left-6 -rotate-3",
    },
    {
        id: "9b-8",
        title: "Pertemuan 8 — 9B",
        date: "Oktober 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-8.jpg",
        caption: "Saling mendukung di tengah padatnya agenda kelas akhir.",
        teacherStory:
            "Sebagai kelas 9 dengan segudang kesibukan, kalian tetap menjaga kekompakan dan saling membantu agar semua tugas terselesaikan dengan baik.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "9c-8",
        title: "Pertemuan 8 — 9C",
        date: "Oktober 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-8.jpg",
        caption: "Menjaga kebersamaan di sisa-sisa perjalanan semester ini.",
        teacherStory:
            "Setiap momen di pertemuan kedelapan terasa semakin berharga karena kita sadar waktu bersama di kelas ini tidak akan terulang dengan formasi yang sama.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 -rotate-2",
    },

    {
        id: "7c-9",
        title: "Pertemuan 9 — 7C",
        date: "November 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-9.jpg",
        caption: "Menuntaskan proyek penutup dengan kerja sama satu kru penuh.",
        teacherStory:
            "Menjelang akhir pelayaran semester, kalian menunjukkan hasil karya terbaik. Semua sibuk merapikan bagian masing-masing demi hasil yang maksimal.",
        rotationClass: "sm:-rotate-3",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "8a-9",
        title: "Pertemuan 9 — 8A",
        date: "November 2026",
        className: "8 A",
        image: "/assets/images/8a/momen-9.jpg",
        caption: "Menyelesaikan misi akhir dengan kekompakan maksimal.",
        teacherStory:
            "Pertemuan kesembilan diisi dengan penyelesaian tugas akhir. Melihat kalian bekerja sama dengan solid membuat saya bangga melihat perkembangan kalian sejak kelas 7.",
        rotationClass: "sm:rotate-1",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "8c-9",
        title: "Pertemuan 9 — 8C",
        date: "November 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-9.jpg",
        caption:
            "Finishing tugas akhir dengan semangat gotong royong satu kru.",
        teacherStory:
            "Semua bergerak cepat merampungkan proyek akhir semester. Kekompakan 8C di pertemuan kesembilan ini patut dibanggakan.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "9b-9",
        title: "Pertemuan 9 — 9B",
        date: "November 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-9.jpg",
        caption: "Karya penutup yang membuktikan kualitas dan dedikasi kru 9B.",
        teacherStory:
            "Pertemuan kesembilan menjadi puncak kolaborasi kalian. Hasil akhir yang kalian sajikan menunjukkan dedikasi dan kerja keras yang luar biasa.",
        rotationClass: "sm:-rotate-1",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "9c-9",
        title: "Pertemuan 9 — 9C",
        date: "November 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-9.jpg",
        caption:
            "Menuntaskan misi akhir dengan penuh tanggung jawab dan kekompakan.",
        teacherStory:
            "Di pertemuan kesembilan kalian menyelesaikan seluruh rangkaian tugas akhir dengan tuntas. Terima kasih sudah menjaga komitmen hingga akhir.",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },

    {
        id: "7c-10",
        title: "Pertemuan 10 — 7C",
        date: "November 2026",
        className: "7 C",
        image: "/assets/images/7c/momen-10.jpg",
        caption:
            "Pelabuhan terakhir semester ini bersama kru 7C yang luar biasa.",
        teacherStory:
            "Sepuluh pertemuan berlalu begitu cepat. Terima kasih 7C sudah menjadi awal petualangan yang menyenangkan, terus pertahankan rasa ingin tahu dan semangat belajar kalian!",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-1/2 -translate-x-1/2 rotate-2",
    },
    {
        id: "8c-10",
        title: "Pertemuan 10 — 8C",
        date: "November 2026",
        className: "8 C",
        image: "/assets/images/8c/momen-10.jpg",
        caption: "Penutup pelayaran 8C yang hangat dan penuh rasa syukur.",
        teacherStory:
            "Berawal dari mengira tak akan bertemu lagi, hingga akhirnya genap 10 pertemuan kita lalui bersama. Sukses terus untuk 8C di petualangan berikutnya!",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 right-6 rotate-6",
    },
    {
        id: "9b-10",
        title: "Pertemuan 10 — 9B",
        date: "November 2026",
        className: "9 B",
        image: "/assets/images/9b/momen-10.jpg",
        caption: "Dari rasa gugup di awal hingga bangga di akhir pelayaran 9B.",
        teacherStory:
            "Terima kasih 9B sudah mematahkan rasa gugup saya di hari pertama dan menggantinya dengan pengalaman mengajar yang luar biasa berkesan. Teruslah melesat tinggi!",
        rotationClass: "sm:rotate-2",
        tapeClass: "-top-2.5 left-6 rotate-6",
    },
    {
        id: "9c-10",
        title: "Pertemuan 10 — 9C",
        date: "November 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-10.jpg",
        caption:
            "Pelabuhan terakhir bersama 9C sebelum melangkah ke jenjang baru.",
        teacherStory:
            "Kesempatan berlayar bersama lagi di kelas 9 ini adalah hadiah penutup yang indah. Sukses untuk kelulusan dan masa depan kalian semua, kru hebat 9C!",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
    {
        id: "9c-11",
        title: "Pertemuan 11 pt 2 — 9C",
        date: "November 2026",
        className: "9 C",
        image: "/assets/images/9c/momen-12.jpg",
        caption:
            "Pelabuhan terakhir bersama 9C sebelum melangkah ke jenjang baru.",
        teacherStory:
            "Kesempatan berlayar bersama lagi di kelas 9 ini adalah hadiah penutup yang indah. Sukses untuk kelulusan dan masa depan kalian semua, kru hebat 9C!",
        rotationClass: "sm:-rotate-2",
        tapeClass: "-top-2.5 right-6 -rotate-6",
    },
];
