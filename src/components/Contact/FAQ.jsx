import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Plus, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import faqs from "../../data/faqs";
import PrimaryButton from "../PrimaryButton";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_FAQ_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_FAQ_Template_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_FAQ_TEMPLATE_ID,
        {
          name: email ? email.split("@")[0] : "Website Visitor",
          email: email || "Not provided",
          time: new Date().toLocaleString("en-IN"),
          message: question,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setQuestion("");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          FAQ
        </span>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[var(--text-h)]">
          Questions? <span className="text-[var(--accent)]">We've got answers.</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={faq.question}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-white shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-[var(--text-h)]">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-[var(--accent)]"
                >
                  <Plus size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[var(--text)] leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Ask your own question */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 rounded-2xl bg-[var(--accent-light)] p-8 text-center"
      >
        <h3 className="text-xl font-bold text-[var(--text-h)]">
          Didn't find your answer?
        </h3>
        <p className="mt-2 text-sm text-[var(--text)]">
          Ask us directly - we'll get back to you and might even add it here.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 flex items-center justify-center gap-2 text-[var(--accent)] font-medium"
            >
              <CheckCircle2 size={20} />
              Thanks! We've received your question.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex flex-col gap-3 max-w-lg mx-auto"
            >
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-60"
                />
           
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email (optional, for reply)"
                disabled={status === "sending"}
                className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-60"
              />

                <PrimaryButton
                  type="submit"
                  className="w-full sm:w-auto shrink-0 gap-2"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </PrimaryButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {status === "error" && (
          <p className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-red-600">
            <XCircle size={16} /> Couldn't send. Please try again.
          </p>
        )}
      </motion.div>
    </section>
  );
}