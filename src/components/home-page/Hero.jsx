import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroBGVideo from "../../assets/media/HeroBGVideo-compressed.mp4";
import heroPoster from "../../assets/media/hero-poster.webp";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.35, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slightly more elegant than a plain fade — soft blur resolving into focus
const headingReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Sira Digital hero">

      {/* Background Video - slow, gentle zoom-in */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        poster={heroPoster}
        preload="metadata"
        aria-hidden="true"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HeroBGVideo} type="video/mp4" />
      </motion.video>

      {/* Gradient overlays for depth + brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-(--accent)/30 via-transparent to-transparent" /> */}

      {/* Content — replays every time this section re-enters the viewport, same as the other sections */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-10 flex h-full flex-col items-center justify-center"
      >

        {/* Heading */}
        <motion.h1
          variants={headingReveal}
          className="px-6 text-center text-4xl font-bold text-white/90 sm:text-5xl md:text-6xl lg:px-28 lg:text-7xl [text-shadow:_0_4px_24px_rgb(0_0_0_/_80%)]"
        >
          Creative Solutions That {" "}
          <span className="font-[family-name:var(--display)] italic font-normal text-(--accent)">
           Make Your Brand
          </span>{" "}
          Impossible to Ignore
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="mt-6 max-w-3xl px-6 text-center text-lg leading-8 text-white/80 md:text-xl"
        >
          We design modern websites, create eye-catching graphics, and produce
          high-quality videos that help businesses attract customers, build
          trust, and grow online.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link to="/contact">
            <PrimaryButton>
              Get Started
            </PrimaryButton>
          </Link>

          <Link to="/ourwork">
            <SecondaryButton>
              View Our Work
            </SecondaryButton>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;