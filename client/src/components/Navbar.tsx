/*
  NAVBAR — Swiss Design Tropical
  - Transparent over hero (white text), solid on scroll (navy text)
  - Sticky with backdrop blur on scroll
  - Mobile hamburger menu
*/
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_COLOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/databc_logo_v2_cropped_96517f82.png";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/databc_logo_v2_white_cropped_ac6a6986.png";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "BI & Dados", href: "#bi" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center group relative h-14 lg:h-16">
          <img
            src={LOGO_COLOR}
            alt="DataBC"
            className={`h-14 lg:h-16 w-auto object-contain absolute top-0 left-0 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={LOGO_WHITE}
            alt="DataBC"
            className={`h-14 lg:h-16 w-auto object-contain absolute top-0 left-0 transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Spacer to maintain width */}
          <img
            src={LOGO_COLOR}
            alt=""
            className="h-14 lg:h-16 w-auto object-contain invisible"
            aria-hidden="true"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-500 relative group ${
                scrolled ? "text-navy/70 hover:text-navy" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-coral transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contato"
            className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-500 ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-light"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Agendar demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-offwhite border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy/80 hover:text-navy py-2 border-b border-border/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-navy rounded-md mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Agendar demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
