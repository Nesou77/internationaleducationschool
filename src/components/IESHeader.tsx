import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre école", href: "#identite" },
  { label: "Pédagogie", href: "#pedagogie" },
  { label: "Cycles", href: "#cycles" },
  { label: "Trilinguisme", href: "#trilinguisme" },
  { label: "Parascolaire", href: "#parascolaire" },
  { label: "Nos locaux", href: "#galerie" },
  { label: "Événements", href: "#evenements" },
  { label: "Parents", href: "#parents" },
  { label: "Contact", href: "#contact" },
];

export default function IESHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/92 backdrop-blur-lg border-b border-border/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNav("#accueil")}
            className="flex items-center gap-3 group"
            aria-label="IES — Accueil"
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img
                src="/assets/logo-ies.webp"
                alt="Logo IES"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                IES
              </span>
              <span
                className={`font-sans text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-white/60"
                }`}
              >
                International Education School
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-3 py-1.5 text-[13px] font-sans font-medium rounded-md transition-all duration-200 ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                } ${activeSection === link.href ? (scrolled ? "text-foreground" : "text-white") : ""}`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="px-5 py-2.5 text-sm font-sans font-semibold rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 hover:scale-[1.03] shadow-md shadow-accent/20"
            >
              Inscription 2026-2027
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu — full overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-card shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-2.5">
                <img src="/assets/logo-ies.webp" alt="Logo IES" className="w-8 h-8 object-contain" />
                <span className="font-display text-foreground text-lg">IES</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-sans font-medium text-foreground/75 hover:text-foreground hover:bg-muted rounded-xl transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="px-4 pb-6 pt-2 border-t border-border">
              <button
                onClick={() => handleNav("#contact")}
                className="w-full py-3.5 text-sm font-sans font-semibold rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Inscription 2026-2027
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
