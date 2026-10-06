import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "../data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// naam se initials nikalne ke liye
const getInitials = (name) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2);

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
      >
        <div>
          <span className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Client Words
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-[var(--text-h)]">
            What people <span className="text-[var(--accent)]">say about us.</span>
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-h)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-h)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Slider row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-hidden "
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="snap-start shrink-0 w-[340px] rounded-3xl bg-white p-8 shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden"
          >
            <Quote className="text-[var(--accent-light)] fill-[var(--accent-light)]" size={40} />

            <p className="mt-4 text-[var(--text)] leading-7">{t.quote}</p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                {getInitials(t.name)}
              </div>
              <div>
                <p className="font-semibold text-[var(--text-h)]">{t.name}</p>
                <p className="text-sm text-[var(--accent)]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}