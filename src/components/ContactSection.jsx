import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

// .env se aa rahe hai — VITE_ prefix zaroori hai Vite ke liye
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Parent — bachho ko stagger karega
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Har child isi pattern se fade-up hoga
const item = {
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

const services = ["Web Design", "Branding", "Video Editing"];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Company field template me nahi hai, message ke sath jod rahe hai
    const fullMessage = formData.company
      ? `Business Name: ${formData.company}\n\n${formData.message}`
      : formData.message;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || "Not specified",
          message: fullMessage,
        },
         {
            publicKey: EMAILJS_PUBLIC_KEY,
         }
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full " />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <motion.span
          variants={item}
          className="inline-flex rounded-full bg-[var(--accent-light)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          variants={item}
          className="mt-5 text-3xl md:text-4xl font-extrabold text-[var(--text-h)]"
        >
          Let's build something {" "}
          <span className="relative inline-block">
                        <motion.span
                          variants={marker}
                          style={{ originX: 0 }}
                          className="absolute inset-x-0 bottom-1 -z-10 h-[38%] bg-(--accent-light)"
                        />
                        <span className="relative italic font-[family-name:var(--display)] font-normal text-(--accent)">
                          worth talking about.
                        </span>
                      </span>
        </motion.h2>
        <motion.p variants={item} className="mt-4 text-[var(--text)]">
          From websites and branding to video editing and social media - tell us what you need, we'll take it from there.
        </motion.p>
      </motion.div>

      <div className="relative grid md:grid-cols-5 gap-10">
        {/* Contact Info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-2 rounded-3xl bg-[var(--accent-light)] p-8 flex flex-col justify-between"
        >
          <div className="space-y-7">
            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="text-[var(--accent)]" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text)]/70">Call Us</p>
                <a href="tel:+919690070133" className="font-medium text-[var(--text-h)] hover:text-[var(--accent)] transition-colors">
                  +91 96900 70133 <br />
                  +91 87559 06346
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <FaWhatsapp className="text-[var(--accent)]" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text)]/70">WhatsApp</p>
                
                 <a href="https://wa.me/919690070133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--text-h)] hover:text-[var(--accent)] transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="text-[var(--accent)]" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text)]/70">Email Us</p>
                <a href="mailto:support.siradigital@gmail.com" className="font-medium text-[var(--text-h)] hover:text-[var(--accent)] transition-colors">
                  support.siradigital@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="text-[var(--accent)]" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text)]/70">Based In</p>
                <p className="font-medium text-[var(--text-h)]">
                  Lane 2B, Mahalaxmi Puram, Mothrowala, Dehradun, Uttarakhand 248001, India
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="text-[var(--accent)]" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text)]/70">Working Hours</p>
                <p className="font-medium text-[var(--text-h)]">Mon - Sat, 10AM - 7PM</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={item}>
            <p className="text-xs uppercase tracking-wide text-[var(--text)]/70 mb-3 mt-4">Follow Us</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/siradigital.in?igsh=cWc0YzgxeTlwempq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--text-h)] shadow-sm hover:bg-[var(--accent)] hover:text-white transition-colors">
                <FaInstagram size={15} />
              </a>
              <a href="https://www.linkedin.com/company/sira-digital-in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--text-h)] shadow-sm hover:bg-[var(--accent)] hover:text-white transition-colors">
                <FaLinkedin size={15} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--text-h)] shadow-sm hover:bg-[var(--accent)] hover:text-white transition-colors">
                <FaTwitter size={15} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="md:col-span-3 rounded-3xl bg-white p-8 shadow-md space-y-5"
        >
          <motion.div variants={item} className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-h)] mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Sira Digital"
                className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-h)] mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="siradigital@gmail.com"
                className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-h)] mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[var(--text-h)] mb-2">
                Business Name <span className="text-[var(--text)]/50 font-normal">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your business or brand name"
                className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
          </motion.div>

          <motion.div variants={item}>
            <p className="block text-sm font-medium text-[var(--text-h)] mb-2">
              What do you need help with?
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setFormData({ ...formData, service: s })}
                  className={`px-4 py-2 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                    formData.service === s
                      ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                      : "border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--text-h)] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors resize-none"
            />
          </motion.div>

          <motion.div variants={item}>
            <PrimaryButton type="submit" className="w-full gap-2" disabled={status === "sending"}>
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </PrimaryButton>

            {status === "success" && (
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-green-600">
                <CheckCircle2 size={16} /> Message sent! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-red-600">
                <XCircle size={16} /> Something went wrong. Please try again or WhatsApp us.
              </p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}