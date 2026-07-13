const Card = ({
  icon,
  subtitle,
  desc,
  image,
  className = "",
  // Konfigurasi warna default (bisa dioverride dari luar)
  iconBg = "bg-primary text-white",
  titleColor = "text-primary",
  descColor = "text-secondary",
  reverse = false, // Jika true, gambar akan berada di sebelah kiri teks
}) => {
  return (
    <div
      className={`p-8 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between rounded-2xl gap-6 transition-all duration-300 ${className}`}
    >
      {/* Sisi Konten Teks */}
      <div className="flex-1 w-full flex flex-col gap-4">
        {icon && (
          <div
            className={`w-12 h-12 rounded-xl text-2xl flex items-center justify-center ${iconBg}`}
          >
            {icon}
          </div>
        )}

        <div className="space-y-2">
          {subtitle && (
            <h3
              className={`font-bold text-xl md:text-xl tracking-tight ${titleColor}`}
            >
              {subtitle}
            </h3>
          )}
          {desc && (
            <p className={`text-sm md:text-base leading-relaxed ${descColor}`}>
              {desc}
            </p>
          )}
        </div>
      </div>

      {/* Sisi Gambar (Hanya muncul jika prop image dikirim) */}
      {image && (
        <div className="w-full md:w-[48%] shrink-0">
          <img
            src={image}
            alt={subtitle || "Card Image"}
            className="w-full h-auto max-h-60 object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
