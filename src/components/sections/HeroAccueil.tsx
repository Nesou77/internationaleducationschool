"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

export default function HeroAccueil() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.08);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden bg-primary"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 w-full h-[112%] -top-[6%]"
        style={{ transform: `translateY(${offsetY}px)`, willChange: "transform" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(20_68%_20%/0.35),transparent_60%)]" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        {/* Animated logo — floating */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            src="/assets/logo-ies-full.webp"
            alt="Logo IES — International Education School Privé Fès"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -18, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              opacity: { duration: 0.9, delay: 0.1 },
              scale: { duration: 0.9, delay: 0.1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-56 h-56 md:w-[26rem] md:h-[26rem] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Multi-layer scrim for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/10 pointer-events-none" />

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-sans font-medium tracking-widest uppercase">
          <Award size={13} className="text-accent" />
          Inscriptions ouvertes · 2026-2027
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </span>
      </motion.div>

      {/* Main content — lower third */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 md:pb-36">
        {/* Eyebrow line */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="font-sans text-xs tracking-widest uppercase text-accent/90">
            International Education School · Fès
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white leading-[1.0] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)" }}
        >
          L'excellence<br />
          <span style={{ color: "hsl(20 68% 65%)" }}>au cœur</span><br />
          de chaque parcours
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="font-sans text-white/75 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Un établissement trilingue{" "}
          <span className="text-white/95 font-medium">عربي · français · English</span>{" "}
          — de la maternelle au lycée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button
            onClick={() => handleScroll("#contact")}
            className="group px-8 py-4 rounded-lg bg-accent text-accent-foreground font-sans font-medium text-sm hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.02]"
          >
            S'inscrire pour 2026-2027
          </button>
          <button
            onClick={() => handleScroll("#pedagogie")}
            className="px-8 py-4 rounded-lg border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Découvrir le projet pédagogique
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 flex flex-wrap gap-8"
        >
          {[
            { val: "3 langues", label: "Arabe · Français · Anglais" },
            { val: "3 → 18 ans", label: "Maternelle au Lycée" },
            { val: "Montessori", label: "Pédagogie maternelle" },
          ].map((s) => (
            <div key={s.val} className="flex items-center gap-3">
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="font-display text-white text-lg leading-none">{s.val}</div>
                <div className="font-sans text-white/50 text-xs mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScroll("#marquee")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">Découvrir</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
