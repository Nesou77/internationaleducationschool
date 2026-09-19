"use client"
import { m as motion } from "framer-motion";

const langues = [
  {
    symbol: "ع",
    langue: "العربية",
    label: "Arabe",
    desc: "Langue d'ancrage culturel et identitaire, enseignée à tous les niveaux. L'arabe est valorisé comme vecteur d'identité, pas seulement comme matière.",
    heures: "Tous niveaux",
    dir: "rtl",
    accent: true,
  },
  {
    symbol: "Fr",
    langue: "Français",
    label: "Français",
    desc: "Langue d'enseignement structurante, support principal des disciplines. Le français est la colonne vertébrale des apprentissages académiques à l'IES.",
    heures: "Langue principale",
    dir: "ltr",
    accent: false,
  },
  {
    symbol: "En",
    langue: "English",
    label: "Anglais",
    desc: "Enseignement renforcé dès la maternelle, 7h/semaine au primaire. La pratique authentique est au cœur de l'apprentissage — conversations, projets, lectures.",
    heures: "7h / semaine au primaire",
    dir: "ltr",
    accent: false,
  },
];

export default function TrilingualismeFort() {
  return (
    <section id="trilinguisme" className="py-28 md:py-40 bg-primary zellige-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Notre atout distinctif</p>
          <h2
            className="font-display text-primary-foreground leading-[1.02] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Trois langues, un seul monde.
          </h2>
          <p className="font-sans text-primary-foreground/70 max-w-xl mx-auto text-base leading-relaxed">
            Le trilinguisme est un axe fondateur de l'IES — une ouverture sur le monde, une richesse pour toute la vie.
          </p>
        </div>

        {/* Language cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {langues.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                l.accent
                  ? "bg-accent border-accent/60 text-accent-foreground"
                  : "bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground"
              }`}
            >
              {/* Symbol */}
              <div
                className={`text-6xl font-display mb-5 leading-none ${
                  l.accent ? "text-accent-foreground" : "text-accent"
                }`}
                dir={l.dir}
              >
                {l.symbol}
              </div>

              {/* Language name */}
              <h3
                className={`font-display text-2xl mb-1 ${
                  l.accent ? "text-accent-foreground" : "text-primary-foreground"
                }`}
                dir={l.dir}
              >
                {l.langue}
              </h3>

              {/* Hours badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-widest uppercase mb-5 ${
                l.accent ? "bg-accent-foreground/15 text-accent-foreground/80" : "bg-accent/20 text-accent"
              }`}>
                {l.heures}
              </div>

              {/* Description */}
              <p
                className={`font-sans text-sm leading-relaxed ${
                  l.accent ? "text-accent-foreground/80" : "text-primary-foreground/70"
                }`}
              >
                {l.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
        >
          <div>
            <h3 className="font-display text-primary-foreground text-xl mb-1">
              Des situations de communication authentiques
            </h3>
            <p className="font-sans text-primary-foreground/70 text-sm">
              Les langues sont mises en pratique dans des contextes réels, au-delà du seul apprentissage formel.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            {["عربي", "Français", "English"].map((lang, i) => (
              <div key={lang} className="flex items-center gap-4">
                <span className={`font-display text-lg ${i === 0 ? "text-accent" : "text-primary-foreground/70"}`}>
                  {lang}
                </span>
                {i < 2 && <div className="w-px h-5 bg-primary-foreground/20" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Signature line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-display text-primary-foreground/70 tracking-widest text-sm mt-12"
        >
          Excellence · التميز · Excellence
        </motion.p>
      </div>
    </section>
  );
}
