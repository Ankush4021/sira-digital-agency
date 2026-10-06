import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";

import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import PrimaryButton from "../PrimaryButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Projects() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );


// The highlighter mark that sweeps in behind "With Purpose"
const marker = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.45, ease: "easeOut" },
  },
};

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay.current]
  );

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl px-6 text-center"
      >
        <span className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Featured Work
        </span>

        <h2 className="mt-5 text-4xl font-extrabold text-[var(--text-h)] md:text-5xl">
          Selected {" "}
                      <span className="relative inline-block">
                        <motion.span
                          variants={marker}
                          style={{ originX: 0 }}
                          className="absolute inset-x-0 bottom-1 -z-10 h-[38%] bg-(--accent-light)"
                        />
                        <span className="relative italic font-[family-name:var(--display)] font-normal text-(--accent)">
                         Projects
                        </span>
                      </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--text)]">
          Every project is crafted with a focus on clean design, user experience
          and business growth.
        </p>
      </motion.div>

      <div className="mx-auto flex max-w-7xl items-center gap-5 px-6">

        <button
          onClick={prev}
          className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/5 bg-[var(--accent-light)] shadow-lg backdrop-blur-xl transition hover:bg-[var(--accent)]"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.title}
                className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/5 bg-[var(--accent-light)] shadow-lg backdrop-blur-xl transition hover:bg-[var(--accent)]"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 flex justify-center"
      >
        <Link to="/ourwork">
          <PrimaryButton>Explore All Work</PrimaryButton>
        </Link>
      </motion.div>
    </section>
  );
}
