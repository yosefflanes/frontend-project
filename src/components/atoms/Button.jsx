const Button = ({children, onClick, disabled, className = ""}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`px-4 py-2 border border-gray-200 text-xs font-bold rounded-xl text-primary bg-white hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:hover:bg-white cursor-pointer ${className}`}>
            {children}
        </button>
    );
}

export default Button;