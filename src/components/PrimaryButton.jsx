const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        cursor-pointer
        border
        border-[var(--accent)]
        bg-[var(--accent)]
        px-7
        py-2
        font-medium
        text-white
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:shadow-[0_12px_30px_rgba(96,56,155,.28)]
        active:translate-y-0
        disabled:opacity-60
        disabled:cursor-not-allowed
        disabled:hover:translate-y-0
        disabled:hover:shadow-none
        ${className}
      `}
    >
      {/* Hover Background */}
      <span
        className="
          absolute
          inset-0
          origin-left
          scale-x-0
          bg-[var(--text-h)]
          transition-transform
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:scale-x-100
        "
      />

      {/* Text */}
      <span className="relative z-10 transition-colors duration-300">
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;