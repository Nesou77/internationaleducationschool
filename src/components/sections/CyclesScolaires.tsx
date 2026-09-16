"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cycles = [
  {
    img: "/assets/cycle-maternelle.webp",
    titre: "Maternelle",
    ages: "3 – 6 ans",
    tag: "Montessori",
    points: ["Pédagogie Montessori", "Éveil sensoriel", "Trilinguisme oral", "Vie pratique & autonomie"],
    color: "from-amber-900/80",
  },
  {
    img: "/assets/cycle-primaire.webp",
    titre: "Primaire",
    ages: "6 – 11 ans",
    tag: "Fondamentaux",
    points: ["Fondamentaux renforcés", "7h d'anglais / semaine", "Robotique & théâtre", "Projets interdisciplinaires"],
    color: "from-primary/80",
  },
  {
    img: "/assets/cycle-college.webp",
    titre: "Collège",
    ages: "11 – 15 ans",
    tag: "Esprit critique",
    points: ["Esprit critique & analyse", "Méthodologie solide", "Orientation progressive", "Préparation aux examens"],
    color: "from-stone-900/80",
  },
  {
    img: "/assets/cycle-lycee.webp",
    titre: "Lycée",
    ages: "15 – 18 ans",
    tag: "Baccalauréat",
    points: ["Préparation au bac", "Études supérieures", "Autonomie & projet perso", "Accompagnement individuel"],
    color: "from-zinc-900/80",
  },
];

export default function CyclesScolaires() {
  return (
    <section id="cycles" className="py-28 md:py-40 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Nos cycles</p>
          <h2
            className="font-display text-foreground leading-[1.02] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Un parcours continu, de 3 à 18 ans
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Chaque cycle est pensé pour accompagner l'élève à son rythme, avec des méthodes adaptées à chaque âge.
          </p>
        </div>

        {/* Cycle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cycles.map((c, i) => (
            <motion.div
              key={c.titre}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ minHeight: 420 }}
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.titre}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Gradient scrim */}
              <div className={`absolute inset-0 bg-gradient-to-t ${c.color} via-black/40 to-transparent transition-opacity duration-300`} />

              {/* Top tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-accent-foreground text-[10px] font-sans font-semibold tracking-widest uppercase">
                  {c.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-white text-2xl leading-tight mb-0.5">{c.titre}</h3>
                <p className="font-sans text-white/60 text-xs mb-4 tracking-wide">{c.ages}</p>
                <ul className="space-y-1.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-white/85 text-xs font-sans">
                      <ArrowRight size={11} className="mt-0.5 flex-shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 p-6 rounded-2xl bg-card border border-border/60 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display text-foreground text-lg mb-1">Un seul établissement, un parcours complet</p>
            <p className="font-sans text-muted-foreground text-sm">Pas de rupture entre les cycles — une progression harmonieuse de 3 à 18 ans.</p>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            {["3", "6", "11", "15", "18"].map((age, i) => (
              <div key={age} className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <span className="font-sans text-xs font-semibold text-accent">{age}</span>
                </div>
                {i < 4 && <div className="w-4 h-px bg-border" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
