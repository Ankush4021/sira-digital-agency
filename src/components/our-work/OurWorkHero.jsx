import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import ourWorkHeroBg from "../../assets/media/ourWorkHeroBG.webp";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurWorkHero() {
  return (
    <section
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden"
      aria-label="Our work hero"
    >
      {/* Background image - slow, gentle zoom-in */}
      <motion.img
        src={ourWorkHeroBg}
        alt="Sira Digital portfolio and past project work"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Gradient overlays for depth + brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-(--accent)/30 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
        >
          Our Work
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white"
        >
         <span className="text-(--accent)">Real </span> Projects, <span className="text-(--accent)">Real </span> Results.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-white/80 leading-7 text-lg"
        >
          A look at the websites, brands, and content we've built for businesses across industries - no stock templates, just work made from scratch.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Link to="/contact">
            <PrimaryButton>Start Your Project</PrimaryButton>
          </Link>
          <Link to="/services">
            <SecondaryButton>Our Services</SecondaryButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}