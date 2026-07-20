// =============================
// PEMBUNGKUS TEKS JUDUL TUNGGAL
// =============================

const Heading = ({children, level = 1, className = ""}) => {
    if (level === 1) return <h1 className={`text-2xl font-bold text-primary ${className}`}>{children}</h1>
    if (level === 3) return <h3 className={`text-base font-bold text-primary leading-snug ${className}`}>{children}</h3>
    return <h2 className={`text-xl font-bold text-primary ${className}`}>{children}</h2>
}

export default Heading;