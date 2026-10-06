import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CTASection({
  tag = "Let's Work Together",
  title = "Ready to Build Something",
  highlight = "Your Customers Will Love?",
  description = "Whether you're launching a new business or giving your existing website a fresh identity, we'll help you create a fast, beautiful and conversion-focused digital experience.",
  as: HeadingTag = "h3",
  children,
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto max-w-6xl rounded-3xl bg-[var(--accent-light)] px-6 py-14 text-center md:px-14"
    >
      <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] shadow-sm">
        {tag}
      </span>

      <HeadingTag className="mt-6 text-3xl font-bold leading-tight text-[var(--text-h)] md:text-4xl">
        {title}
        <span className="block text-[var(--accent)]">{highlight}</span>
      </HeadingTag>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--text)]">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        {children}
      </div>

      <Link to="/contact">
        <PrimaryButton>Start a Project</PrimaryButton>
      </Link>
    </motion.section>
  );
}