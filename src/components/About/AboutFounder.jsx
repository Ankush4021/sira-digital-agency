import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import stats from "../../data/stats";
import founders from "../../data/founder";
import founder from "../../assets/founders/founders.webp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Number ko count-up karta hai jab section view me aata hai
function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  // "150+", "98%", "24/7" jaise formats se numeric part alag karta hai
  const match = String(value).match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || numericTarget === null) return;
    const controls = animate(0, numericTarget, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [isInView, numericTarget]);

  return (
    <p ref={ref} className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
      {numericTarget === null ? value : `${display}${suffix}`}
    </p>
  );
}

export default function AboutFounder() {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-10 left-0 h-72 w-72 rounded-full bg-[var(--accent)] opacity-10 blur-[110px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-center gap-16"
      >
        {/* Photo */}
        <motion.div variants={item} className="relative shrink-0">
          <div className="absolute -inset-4 -z-10 rounded-[40px] bg-[var(--accent-light)]" />
          <div className="w-64 h-72 md:w-72 md:h-80 rounded-[32px] overflow-hidden shadow-xl">
            <img
              src={founder}
              alt="Founder of Sira Digital"
              className="w-full h-full object-cover"
            loading="lazy" decoding="async" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <motion.span
            variants={item}
            className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"
          >
            Our Story
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[var(--text-h)]"
          >
            From an idea to <span className="text-[var(--accent)]">an Agency.</span>
          </motion.h2>

          <motion.p variants={item} className="mt-6 text-[var(--text)] leading-7 max-w-xl">
            Sira Digital started with a simple idea - build things that just work, without the noise. What began as a one-person effort, taking on small design and editing projects, slowly grew into a proper agency built around one belief:{" "}
            <span className="font-semibold text-[var(--text-h)]">good work speaks for itself.</span>
          </motion.p>

          <motion.p variants={item} className="mt-4 text-[var(--text)] leading-7 max-w-xl">
            Today, we handle everything from websites and branding to video editing and social media - but the approach hasn't changed. We still treat every project like it's our first one: with full attention, honest communication, and zero shortcuts.
          </motion.p>
        </div>
      </motion.div>

      {/* Meet the Founders */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mt-24"
      >
        <motion.div variants={item} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            The People
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[var(--text-h)]">
            Meet the <span className="text-[var(--accent)]">Founders.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((f) => (
            <motion.div
              key={f.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white p-8 shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  loading="lazy" decoding="async" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-h)]">{f.name}</h3>
                  <p className="text-sm text-[var(--accent)] font-medium">{f.role}</p>
                </div>
              </div>

              <p className="mt-5 text-sm text-[var(--text)] leading-6">{f.bio}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {f.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={item}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl bg-white p-7 text-center shadow-md hover:shadow-xl transition-shadow duration-500"
          >
            {i !== 0 && (
              <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[var(--border)]" />
            )}
            <Counter value={stat.value} />
            <p className="mt-2 text-sm text-[var(--text)]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}