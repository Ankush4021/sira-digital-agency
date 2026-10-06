import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    initials: "WD",
    title: "Web Design & Development",
    description:
      "Custom-coded business sites, landing pages and portfolios - plus your Google Business listing set up properly.",
    rotate: -3,
  },
  {
    initials: "VE",
    title: "Video Editing",
    description:
      "Reels, YouTube edits and ad creatives, cut with pacing and sound that actually holds attention.",
    rotate: 2,
  },
  {
    initials: "GD",
    title: "Graphic Design",
    description:
      "Logos, brand identity, social posts and print-ready posters - one consistent look, everywhere.",
    rotate: -2,
  },
  {
    initials: "CW",
    title: "Content Writing",
    description:
      "Storytelling, copywriting and blog writing that people actually stop to read.",
    rotate: 3,
  },
];

const headingFade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Cards slide in from alternating sides and settle at their resting tilt
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const marker = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.45, ease: "easeOut" },
  },
};

const card = {
  hidden: (i) => ({
    opacity: 0,
    y: 40,
    x: i % 2 === 0 ? -50 : 50,
    rotate: 0,
  }),
  show: (i) => ({
    opacity: 1,
    y: 0,
    x: 0,
    rotate: services[i].rotate,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  }),
};

export default function OurServices() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          variants={headingFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
            Services
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-(--text-h) md:text-4xl lg:text-5xl">
            Our services, {" "} 
              <span className="relative inline-block">
                  <motion.span
                      variants={marker}
                            style={{ originX: 0 }}
                            className="absolute inset-x-0 bottom-1 -z-10 h-[38%] bg-(--accent-light)"
                  />
                <span className="relative italic font-[family-name:var(--display)] font-normal text-(--accent)">
                 on paper
                </span>
              </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-(--text)">
            Four things we do well enough to put our name on - no bloated
            packages, no fluff.
          </p>
        </motion.div>

        {/* Card stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-x-8 gap-y-14 pt-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} custom={i} variants={card}>
              <Link to="/services" className="block">
                <motion.div
                  whileHover={{ rotate: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-(--text)/10
                    bg-white
                    p-6
                    pt-8

                    shadow-[5px_5px_0_0_rgba(15,23,42,0.06),10px_10px_0_0_rgba(15,23,42,0.03)]

                    transition-shadow
                    duration-300

                    hover:shadow-[8px_12px_0_0_rgba(15,23,42,0.09)]
                  "
                >
                  {/* Ink fill — rises from the bottom and fills the card in the brand color */}
                  <span
                    className="
                      absolute
                      inset-0
                      origin-bottom
                      scale-y-0
                      bg-(--accent)

                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.65,0,0.35,1)]

                      group-hover:scale-y-100
                    "
                  />

                  {/* Stamp / seal — the signature detail, stays above the fill */}
                  <span
                    className="
                      relative
                      z-10
                      -mt-1
                      -ml-1
                      mb-3
                      flex
                      h-11
                      w-11
                      rotate-[-8deg]
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-(--accent)
                      bg-white
                      text-xs
                      font-bold
                      tracking-wide
                      text-(--accent)

                      transition-colors
                      duration-500

                      group-hover:border-white
                    "
                  >
                    {service.initials}
                  </span>

                  <h3
                    className="
                      relative
                      z-10
                      text-xl
                      font-bold
                      text-(--text-h)

                      transition-colors
                      duration-500

                      group-hover:text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
                      relative
                      z-10
                      my-3
                      border-t
                      border-dashed
                      border-(--text)/20

                      transition-colors
                      duration-500

                      group-hover:border-white/40
                    "
                  />

                  <p
                    className="
                      relative
                      z-10
                      text-sm
                      leading-6
                      text-(--text)

                      transition-colors
                      duration-500

                      group-hover:text-white/90
                    "
                  >
                    {service.description}
                  </p>

                  <span
                    className="
                      relative
                      z-10
                      mt-4
                      inline-flex
                      items-center
                      gap-1
                      text-sm
                      font-semibold
                      text-(--accent)

                      transition-colors
                      duration-500

                      group-hover:text-white
                    "
                  >
                    View service
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
