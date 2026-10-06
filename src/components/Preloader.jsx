import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page ka actual load hone tak wait karega,
    // saath me minimum 0.7s dikhna bhi ensure karega
    // taaki flash na ho agar page bahut fast load ho jaye
    const minTime = new Promise((resolve) => setTimeout(resolve, 700));
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    Promise.all([minTime, pageLoad]).then(() => setLoading(false));
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-(--bg)"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-(--text-h)"
            >
              Sira <span className="text-(--accent)">Digital</span>
            </motion.span>

            {/* Logo */}
            <motion.img
              src="/logo.webp"
              alt="Sira Digital"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-25 lg:h-30 lg:w-auto w-auto md:h-16"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-3 text-sm uppercase tracking-[0.25em] text-(--text)"
            >
              Welcome
            </motion.p>

            {/* Loading bar */}
            <div className="mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-(--accent-light)">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-(--accent)"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}