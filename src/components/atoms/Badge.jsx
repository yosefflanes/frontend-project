// ==============================
// Untuk menampilkan Rating Class
// ==============================

const Badge = ({children, variant = "default", className = ""}) => {
    const variants = {
        default: "bg-secondary/5 text-secondary border border-gray-500", // Warna untuk kategori
        success: "bg-accent-btn text-white font-bold", // Warna untuk Top Rated
        purple: "bg-accent-purple text-white font-bold", // Warna untuk Recommended
        subtitle: "bg-subtitle text-white", // Warna untuk Regular
    };

    return (
        <span className={`px-3 py-1 rounded-full text-[10px] tracking-wide inline-block ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;