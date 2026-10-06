// src/components/our-work/ProjectsGrid.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, ArrowLeft, X } from "lucide-react";
import { projects } from "../../data/projectsData";

// Granular categories ko broad group me map kar rahe hai
const getGroup = (category) => {
  if (["Logo Design", "Brand Identity"].includes(category)) return "Branding";
  if (["Event Poster", "Pamphlet Design"].includes(category)) return "Print & Posters";
  if (["Thumbnail Design"].includes(category)) return "Thumbnails";
  if (["Website Design"].includes(category)) return "Websites";
  return "Video & Motion";
};

const groupedProjects = projects.map((p) => ({ ...p, group: getGroup(p.category) }));

const categories = [...new Set(groupedProjects.map((p) => p.group))].map((group) => {
  const items = groupedProjects.filter((p) => p.group === group);
  return {
    name: group,
    count: items.length,
    cover: items[0].image,
  };
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);

  const filtered = activeCategory
    ? groupedProjects.filter((p) => p.group === activeCategory)
    : [];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <span className="inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
          Portfolio
        </span>
        <h2 className="mt-5 text-3xl font-bold text-(--text-h) md:text-4xl">
          Work we're <span className="text-(--accent)">proud of.</span>
        </h2>
        <p className="mt-4 leading-8 text-(--text)">
          {activeCategory
            ? `Browsing our ${activeCategory} work.`
            : "Pick a category to explore that side of our work."}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!activeCategory ? (
          // ---------- CATEGORY BOXES ----------
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-5 md:grid-cols-3"
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveCategory(cat.name)}
                className="group relative h-56 overflow-hidden rounded-3xl text-left shadow-md transition-shadow duration-500 hover:shadow-2xl md:h-64"
              >
                <img
                  src={cat.cover}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-colors duration-500 group-hover:from-black/90" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {cat.count} {cat.count === 1 ? "Project" : "Projects"}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white md:text-xl">
                      {cat.name}
                    </h3>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-(--accent) group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          // ---------- SELECTED CATEGORY WORK ----------
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setActiveCategory(null)}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-(--text) transition-colors hover:text-(--accent) cursor-pointer"
            >
              <ArrowLeft size={16} />
              All Categories
            </button>

            <motion.div
              layout
              className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => {
                  const isVideo = project.type === "video";
                  const isLogo = project.size === "logo";
                  const hasUrl = Boolean(project.url);
                  const Wrapper = hasUrl ? "a" : "button";

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Wrapper
                        {...(hasUrl
                          ? {
                              href: project.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : { onClick: () => setLightboxProject(project) })}
                        className="group relative block h-full w-full overflow-hidden rounded-3xl shadow-md transition-shadow duration-500 hover:shadow-2xl"
                      >
                        <div
                          className={`h-full w-full ${
                            isLogo ? "flex items-center justify-center bg-white p-6" : ""
                          }`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`transition duration-700 group-hover:scale-105 ${
                              isLogo
                                ? "max-h-full max-w-full object-contain"
                                : "h-full w-full object-cover"
                            }`}
                          loading="lazy" decoding="async" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                        {isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                              <Play size={22} className="ml-0.5 text-(--accent)" fill="currentColor" />
                            </div>
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="text-[10px] uppercase tracking-wider text-white/70">
                            {project.category}
                          </p>
                          <h3 className="mt-1 text-sm font-semibold leading-tight text-white">
                            {project.title}
                          </h3>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white">
                            {project.url ? project.cta : "View Full Image"}
                            <ArrowUpRight size={12} />
                          </span>
                        </div>
                      </Wrapper>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- LIGHTBOX ---------- */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] max-w-3xl flex-col items-center"
            >
              <img
                src={lightboxProject.image}
                alt={lightboxProject.title}
                className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
              loading="lazy" decoding="async" />
              <div className="mt-4 text-center">
                <p className="text-xs uppercase tracking-wider text-white/60">
                  {lightboxProject.category}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {lightboxProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}