import { motion } from "framer-motion";
import founder from "../../assets/founders/founders.webp";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// The highlighter mark that sweeps in behind "With Purpose"
const marker = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.45, ease: "easeOut" },
  },
};

const Founder = () => {
  return (
    <section className="py-20 lg:py-28 lg:max-w-full">
      <div className="mx-auto flex max-w-7xl flex-col justify-center items-center gap-20 px-10 lg:flex-row lg:gap-20">

        {/* ================= IMAGE ================= */}
        <div className="relative group">
          {/* Background accent — settles in a touch after the photo, slightly tilted */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-(--accent-light)"
          />

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-90 w-70 overflow-hidden rounded-3xl shadow-xl lg:h-107.5 lg:w-82.5"
          >
            <img
              src={founder}
              alt="Founder of SIRA Digital"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy" decoding="async" />
          </motion.div>

          {/* Floating name chip — arrives last, overlapping the photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="absolute -bottom-5 left-6 rounded-full bg-white px-5 py-2.5 shadow-lg lg:left-8"
          >
            <p className="text-sm font-semibold text-(--text-h)">
              Founder, <span className="text-(--accent)">SIRA Digital</span>
            </p>
          </motion.div>
        </div>

        {/* ================= CONTENT ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-xl"
        >

          {/* Small Label */}

          <motion.span
            variants={fadeUp}
            className="inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)"
          >
            Our Journey
          </motion.span>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-(--text-h) md:text-4xl lg:text-5xl"
          >
            Build{" "}
            <span className="relative inline-block">
              <motion.span
                variants={marker}
                style={{ originX: 0 }}
                className="absolute inset-x-0 bottom-1 -z-10 h-[38%] bg-(--accent-light)"
              />
              <span className="relative italic font-[family-name:var(--display)] font-normal text-(--accent)">
                With Purpose
              </span>
            </span>
            , Not Just Pixels.
          </motion.h2>

          {/* Story */}

          <motion.p
            variants={fadeUp}
            className="mt-7 text-[16px] leading-8 text-(--text) lg:text-lg"
          >
            SIRA Digital creates modern websites, creative visuals, and digital
            solutions that help businesses build trust and grow online.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[16px] leading-8 text-(--text) lg:text-lg"
          >
            We believe great work comes from clear communication, thoughtful design,
            and a genuine focus on delivering value.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-6 flex gap-4">
            <Link to="/ourwork">
              <PrimaryButton>View our work</PrimaryButton>
            </Link>

            <Link to="/about">
              <SecondaryButton>Learn More</SecondaryButton>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Founder;