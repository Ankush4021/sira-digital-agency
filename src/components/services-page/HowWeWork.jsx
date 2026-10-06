import { motion } from "framer-motion";
import process from "../../data/process";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function HowWeWork() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
          How We Work
        </span>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-(--text-h)">
          A process built for{" "}
          <span className="text-(--accent)">clarity, not chaos.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative grid md:grid-cols-4 gap-10"
      >
        {/* Connecting line - desktop only */}
        <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-(--border)" />

        {process.map((item) => (
          <motion.div key={item.step} variants={fadeUp} className="relative text-center">
            <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
              <span className="text-lg font-bold text-(--accent)">{item.step}</span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-(--text-h)">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-(--text) leading-6">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}