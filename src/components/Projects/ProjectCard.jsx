import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      className="group block h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-white transition-all duration-500 hover:border-[var(--accent)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      <div className="space-y-4 p-6">
        <span className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold text-[var(--text-h)]">
          {project.title}
        </h3>

        <p className="text-[15px] leading-7 text-[var(--text)]">
          {project.description}
        </p>

        <div className="flex items-center gap-2 font-medium text-[var(--accent)]">
          View Project
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </div>
      </div>
    </motion.a>
  );
}