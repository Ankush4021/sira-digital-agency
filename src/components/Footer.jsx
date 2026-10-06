// components/Footer.jsx
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[var(--accent-light)] text-[var(--text)] px-6 py-12">

      {/* Sabse upar: 4 columns grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:text-left md:grid-cols-4">

          {/* Column 1: Logo + Brand Name + Short Text */}
          <div className="flex flex-col items-center justify-center text-center sm:items-start">
            <Link
              to="/"
              className="flex flex-col items-center sm:items-start group"
              aria-label="SIRA Digital home"
            >
              {/* Logo */}
              <img
                src="/logo.webp"
                alt="SIRA Digital logo"
                className="h-24 w-auto object-contain mb-2"
              />

              {/* Brand Name */}
              <span className="text-3xl font-bold tracking-tight  leading-none text-[var(--text-h)]">
                SIRA<span className="text-[var(--accent)]"> Digital</span>
              </span>
            </Link>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-[var(--text)] flex items-center max-w-xs text-center sm:text-left">
              Creative solutions for websites, graphics, and videos that help your brand grow.
            </p>
          </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[var(--accent)] font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm hover:text-[var(--accent)]">Home</Link>
            <Link to="/about" className="text-sm hover:text-[var(--accent)]">About</Link>
            <Link to="/services" className="text-sm hover:text-[var(--accent)]">Services</Link>
            <Link to="/ourwork" className="text-sm hover:text-[var(--accent)]">Our Work</Link>

            <Link to="/contact" className="text-sm hover:text-[var(--accent)]">Contact</Link>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center sm:items-start gap-4 px-12">
          <h3 className="mb-3 font-semibold text-[var(--accent)]">Contact Us</h3>

          <div className="flex flex-col gap-4 items-center lg:items-start text-sm text-[var(--text)]">

            {/* Address */}
            <a
              href="https://maps.google.com/?q=Lane+2B+Mahalaxmi+Puram+Mothrowala+Dehradun+Uttarakhand+248001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                Lane 2B, Mahalaxmi Puram, Mothrowala,
                Dehradun, Uttarakhand 248001, India
              </span>
            </a>

            {/* Phone 1 */}
            <a
              href="tel:+918755906346"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <Phone size={18} className="shrink-0" />
              <span>+91 87559 06346</span>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+919690070133"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <Phone size={18} className="shrink-0" />
              <span>+91 96900 70133</span>
            </a>

            {/* Email */}
            <a
              href="mailto:support.siradigital@gmail.com"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <Mail size={18} className="shrink-0" />
              <span>support.siradigital@gmail.com</span>
            </a>

          </div>
        </div>

        {/* Column 4: Social Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[var(--accent)] font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/siradigital.in?igsh=cWc0YzgxeTlwempq" target="_blank" rel="noopener noreferrer"
              className="hover:text-[var(--accent)]">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.linkedin.com/company/sira-digital-in/" target="_blank" rel="noopener noreferrer"
              className="hover:text-[var(--accent)]">
              <FaLinkedin size={22} />
            </a>
</div>
        </div>

      </div>

      {/* Neeche: Copyright line */}
      <div className="mt-10 border-t border-black/80 pt-6 text-center text-sm text-[var(--text)]">
        © 2026 SIRA Digital. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;