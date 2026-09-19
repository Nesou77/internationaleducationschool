import Image from "next/image";
import { Award, ChevronDown } from "lucide-react";

const stats = [
  { val: "3 langues", label: "Arabe · Français · Anglais" },
  { val: "3 → 18 ans", label: "Maternelle au Lycée" },
  { val: "Montessori", label: "Pédagogie maternelle" },
];

/**
 * Server component: entrance animations are pure CSS (`.hero-fade`,
 * `.hero-logo` in globals.css) so the hero paints without waiting for
 * hydration / framer-motion. The <h1> (LCP element) is never hidden.
 */
export default function HeroAccueil() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-primary pt-24 md:pt-28"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 w-full h-[112%] -top-[6%]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(20_68%_20%/0.35),transparent_60%)]" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        {/* Floating logo — mobile: centered, desktop: right */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-center lg:justify-end">
            <Image
              src="/assets/logo-ies-full.webp"
              alt=""
              aria-hidden="true"
              width={512}
              height={443}
              priority
              sizes="(min-width: 1024px) 448px, (min-width: 768px) 416px, 224px"
              className="hero-logo w-56 h-56 md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 md:pb-36 text-left">
        <div
          className="hero-fade flex justify-start mb-8 md:mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-sans font-medium tracking-widest uppercase">
            <Award size={13} className="text-accent" />
            <span>Inscriptions ouvertes · 2026-2027</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </span>
        </div>

        <div
          className="hero-fade flex items-center justify-start gap-3 mb-6"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="font-sans text-xs tracking-widest uppercase text-accent">
            International Education School · Fès
          </span>
        </div>

        <h1
          className="relative z-20 font-display text-white text-left leading-[0.98] tracking-[-0.035em] mb-7 max-w-[900px] lg:max-w-[62%] [text-shadow:0_4px_32px_rgba(0,0,0,0.35)]"
          style={{ fontSize: "clamp(3.6rem, 7.5vw, 7.4rem)" }}
        >
          <span className="block">École privée</span>
          <span className="block">
            trilingue{" "}
            <span className="text-accent relative inline-block">à Fès</span>
          </span>
          <span className="block mt-2 md:mt-3 text-[0.62em] md:text-[0.58em] leading-[1.08] tracking-[-0.02em] text-white/90">
            de la maternelle au lycée
          </span>
        </h1>

        <p
          className="hero-fade font-sans text-white/75 text-lg md:text-xl text-left max-w-xl mb-10 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          L&apos;excellence au cœur de chaque parcours — un établissement
          trilingue{" "}
          <span className="text-white/95 font-medium">
            عربي · français · English
          </span>
          .
        </p>

        <div
          className="hero-fade flex flex-col sm:flex-row items-start justify-start gap-4"
          style={{ animationDelay: "0.25s" }}
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-lg bg-accent text-accent-foreground font-sans font-medium text-sm hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.02]"
          >
            S&apos;inscrire pour 2026-2027
          </a>

          <a
            href="#pedagogie"
            className="px-8 py-4 rounded-lg border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Découvrir le projet pédagogique
          </a>
        </div>

        <div
          className="hero-fade mt-14 flex flex-wrap justify-start gap-8"
          style={{ animationDelay: "0.3s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.val}
              className="flex items-center justify-start gap-3 text-left"
            >
              <div className="w-px h-8 bg-white/20 flex-shrink-0" />
              <div>
                <div className="font-display text-white text-lg leading-none">
                  {stat.val}
                </div>
                <div className="font-sans text-white/70 text-xs mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#marquee"
        className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/70 hover:text-white/80 transition-colors group"
        style={{ animationDelay: "0.4s" }}
        aria-label="Défiler vers le bas"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">
          Découvrir
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
