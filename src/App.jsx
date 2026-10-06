import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Testimonials from "./components/Testimonials";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import WhatsAppButton from "./components/WhatsAppButton";
import Preloader from "./components/Preloader";
import SEO from "./components/SEO";
import NotFound from "./pages/NotFound";

// One shared transition for every route — edit this and it changes site-wide
const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const location = useLocation();

  return (
    <>

      <SEO path={location.pathname} />

      <Preloader />

      <WhatsAppButton />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          <Routes location={location}>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/ourwork" element={<OurWork />} />

            <Route path="/projects" element={<Navigate to="/ourwork" replace />} />

            <Route path="/blogs" element={<Blog />} />

            <Route path="/blogs/:id" element={<BlogPost />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Testimonials />
     <Footer />
    </>
  );
}

export default App;