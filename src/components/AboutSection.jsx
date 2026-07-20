import Card from "./Card";

// Import Icons
import { MdOutlineVerifiedUser } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { FiUsers, FiLayers } from "react-icons/fi";

// Import Images (Sesuai struktur folder Anda)
import sertifikasiImg from "../assets/sertifikasiImg.png";
import multiplatformImg from "../assets/multiplatform.png";

const AboutSection = () => {
  const bentoData = [
    {
      id: 1,
      icon: <MdOutlineVerifiedUser />,
      subtitle: "Sertifikasi Internasional",
      desc: "Setiap kursus yang Anda selesaikan dilengkapi dengan sertifikat digital yang dapat diverifikasi oleh institusi di seluruh dunia.",
      image: sertifikasiImg,
      className:
        "col-span-12 md:col-span-8 bg-white border border-black/20 shadow-xs",
      iconBg: "bg-[rgba(0,32,73,0.08)] text-primary",
      titleColor: "text-primary",
      descColor: "text-secondary",
    },
    {
      id: 2,
      icon: <SiSmartthings />,
      subtitle: "Adaptive Learning",
      desc: "AI kami membantu menyesuaikan kurikulum berdasarkan kecepatan belajar dan pemahaman Anda secara real-time.",
      className: "col-span-12 md:col-span-4 bg-primary text-white",
      iconBg: "bg-white/15 text-white",
      titleColor: "text-white",
      descColor: "text-slate-300",
    },
    {
      id: 3,
      icon: <FiUsers />,
      subtitle: "Community Support",
      desc: "Forum diskusi aktif bersama mentor dan sesama pelajar untuk memecahkan hambatan belajar bersama.",
      className: "col-span-12 md:col-span-4 bg-[rgba(134,160,205,0.18)] border border-black/20",
      iconBg: "bg-white text-primary shadow-xs",
      titleColor: "text-primary",
      descColor: "text-secondary",
    },
    {
      id: 4,
      icon: <FiLayers />,
      subtitle: "Akses Multi-Platform",
      desc: "Lanjutkan belajar Anda di mana saja. Aplikasi mobile kami mendukung akses offline untuk materi video dan teks.",
      image: multiplatformImg,
      className:
        "col-span-12 md:col-span-8 bg-white border border-black/20 shadow-xs",
      iconBg: "bg-purple-50 text-purple-600",
      titleColor: "text-primary",
      descColor: "text-secondary",
      reverse: true, // Membuat gambar berada di sebelah kiri teks pada layar desktop
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] px-6 md:px-10 py-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Mengapa Memilih EduPro?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm md:text-base">
            Kami mengutamakan kualitas konten dan pengalaman pengguna untuk
            memastikan setiap detik belajar Anda berarti.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-6 w-full">
          {bentoData.map((data) => (
            <Card
              key={data.id}
              icon={data.icon}
              subtitle={data.subtitle}
              desc={data.desc}
              image={data.image}
              className={data.className}
              iconBg={data.iconBg}
              titleColor={data.titleColor}
              descColor={data.descColor}
              reverse={data.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
