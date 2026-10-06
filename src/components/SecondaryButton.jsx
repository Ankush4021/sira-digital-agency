const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-white/70
        backdrop-blur-md

        px-7
        py-2

        font-medium
        text-[var(--text-h)]

        cursor-pointer
        select-none

        transition-all
        duration-500
        ease-out

        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(139,92,246,0.15)]

        active:translate-y-0
        active:scale-[0.98]
      "
    >
      {/* Background Hover Effect */}
      <span
        className="
          absolute
          inset-0
          -z-10
          scale-x-0
          origin-left
          bg-[var(--accent-light)]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* Shine Effect */}
      <span
        className="
          absolute
          top-0
          -left-full
          h-full
          w-1/2
          -skew-x-12
          bg-white/40
          transition-all
          duration-700
          group-hover:left-[130%]
        "
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;