const Badge = ({children, variant = "default", className = ""}) => {
    const variants = {
        default: "bg-secondary/5 text-secondary",
        success: "bg-accent-btn text-white font-bold",
        purple: "bg-accent-purple text-white font-bold",
        subtitle: "bg-subtitle/10 text-subtitle",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-[10px] tracking-wide inline-block ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;