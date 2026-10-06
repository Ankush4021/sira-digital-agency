import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/ourwork" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg"
          : "bg-black/10 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.webp" alt="" aria-hidden="true" className="h-15 max-w-full lg:h-20 lg:w-auto md:h-11 md:w-auto object-contain mx-0 rounded-full" />
          <span className="text-lg md:text-xl font-bold tracking-wide text-white mx-0">
            SIRA<span className="text-(--accent)"> Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-(--accent) transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="hidden md:block">
          <PrimaryButton>Free Consultation</PrimaryButton>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-white md:hidden cursor-pointer"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-125 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition-colors ${
                    isActive
                      ? "text-(--accent)"
                      : "text-white hover:text-(--accent)"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <PrimaryButton >Free Consultation</PrimaryButton>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;