import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PrimaryButton from "../PrimaryButton";
import services from "../../data/Servicesdata";

const fadeSide = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServiceBreakdown() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Intro heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-h)">
            A Closer Look at{" "}
            <span className="text-(--accent)">Our Services.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-(--text)">
            Every service is handled end-to-end - no half measures, no
            outsourcing, just work we're proud to put our name on.
          </p>
        </motion.div>

        {/* Services list */}
        <div className="flex flex-col gap-28">
          {services.map((service, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  fromLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image panel */}
                <motion.div
                  variants={fadeSide(fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full md:w-1/2 shrink-0"
                >
                  <div className="absolute -inset-4 -z-10 rounded-[40px] bg-(--accent-light)" />
                  <div className="h-64 md:h-80 w-full overflow-hidden rounded-[32px] shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title + " services by Sira Digital, Dehradun"}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-5 -left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-lg font-bold text-(--accent)">
                      {service.number}
                    </span>
                  </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  variants={fadeSide(!fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full md:w-1/2"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-(--text-h)">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-(--text) leading-7">
                    {service.description}
                  </p>

                  {/* 4-part elaborated feature grid */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature.title}
                        variants={fadeUp}
                        className="rounded-2xl bg-white p-4 shadow-md hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-(--accent)"
                          />
                          <h4 className="text-(--text-h) text-sm font-semibold">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-xs text-(--text) leading-5">
                          {feature.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <Link to="/contact" className="mt-8 inline-block">
                    <PrimaryButton>Get Started</PrimaryButton>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}