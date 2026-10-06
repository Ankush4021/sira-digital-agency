import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { features } from "../../data/whyChooseData";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// The highlighter mark that sweeps in behind "With Purpose"
const marker = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.45, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-[460px]
          w-[460px]
          -translate-x-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.06]
          blur-[130px]
        "
      />

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[var(--text-h)] md:text-5xl">
            Built Like an Agency, {" "}
                        <span className="relative inline-block">
                          <motion.span
                            variants={marker}
                            style={{ originX: 0 }}
                            className="absolute inset-x-0 bottom-1 -z-10 h-[38%] bg-(--accent-light)"
                          />
                          <span className="relative italic font-[family-name:var(--display)] font-normal text-(--accent)">
                           Design for Growth
                          </span>
                        </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--text)]">
            From strategy and design to development and ongoing support,
            every website is crafted to help your business stand out,
            build trust and grow with confidence.
          </p>

        </motion.div>

        {/* Feature Grid */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
            className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(15,23,42,.08)]
                "
            >

              {/* Card Top */}

              <div className="flex items-start justify-between">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-3xl
                    bg-[var(--accent-light)]
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <feature.icon
                    size={28}
                    className="text-[var(--accent)]"
                  />
                </div>

                <span className="text-sm font-semibold tracking-[0.15em] text-[var(--accent)] opacity-40">
                  {feature.id}
                </span>

              </div>

              {/* Content */}

            <div>

                <h3 className="mb-3 mt-3 text-[22px] leading-tight  font-bold text-[var(--text-h)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {feature.title}
                </h3>

                <p className="leading-7 text-[var(--text)]">
                  {feature.text}
                </p>

                <div
                  className="
                    mt-6
                    h-[2px]
                    w-12
                    rounded-full
                    bg-[var(--accent)]
                    opacity-20
                    transition-all
                    duration-500
                    group-hover:w-24
                    group-hover:opacity-100
                  "
                />

              </div>

            </motion.div>

          ))}
        </div>

      </div>

    </section>
  );
}