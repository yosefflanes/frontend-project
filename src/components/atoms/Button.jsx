// ===============
// TOMBOL PAGINASI
// ===============

const Button = ({ children, onClick, disabled, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 border border-gray-200 text-xs font-bold rounded-xl text-white bg-[#1976D2] hover:bg-blue-400 transition-colors disabled:opacity-40 disabled:text-subtitle disabled:cursor-not-allowed enabled:cursor-pointer disabled:bg-gray-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
