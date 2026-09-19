"use client"
import { m as motion } from "framer-motion";
import { MessageCircle, BarChart2, CalendarDays, PartyPopper } from "lucide-react";

const blocs = [
  {
    icon: MessageCircle,
    titre: "Communication régulière",
    texte: "Échanges fréquents entre l'école et les familles tout au long de l'année scolaire — carnets, messages, entretiens individuels.",
    stat: "Tout au long de l'année",
  },
  {
    icon: BarChart2,
    titre: "Bilans périodiques",
    texte: "Points d'étape clairs et réguliers sur les progrès de chaque élève, avec des indicateurs concrets et lisibles.",
    stat: "3 bilans / an",
  },
  {
    icon: CalendarDays,
    titre: "Réunions pédagogiques",
    texte: "Des rencontres organisées pour présenter le projet pédagogique et les attentes de chaque niveau de scolarité.",
    stat: "Par trimestre",
  },
  {
    icon: PartyPopper,
    titre: "Participation active",
    texte: "Les familles sont invitées à s'associer à la vie de l'établissement à travers ses différents temps forts.",
    stat: "Événements & projets",
  },
];

export default function SuiviParents() {
  return (
    <section id="parents" className="py-28 md:py-40 zellige-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Partenariat école-famille</p>
          <h2
            className="font-display text-foreground leading-[1.02] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Les parents, partenaires essentiels
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
            L'IES considère les familles comme des acteurs clés de la réussite scolaire de leurs enfants. Une relation de confiance, construite tout au long de l'année.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blocs.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.titre}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={19} className="text-accent" />
                </div>

                {/* Stat badge */}
                <div className="inline-block px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-sans font-medium tracking-wide mb-4">
                  {b.stat}
                </div>

                <h3 className="font-sans font-semibold text-foreground text-sm mb-2">{b.titre}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{b.texte}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          className="mt-10 p-8 rounded-2xl bg-primary border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-primary-foreground text-xl mb-1">
              Une école ouverte aux familles
            </h3>
            <p className="font-sans text-primary-foreground/70 text-sm">
              Venez nous rencontrer lors de nos journées portes ouvertes ou prenez rendez-vous à tout moment.
            </p>
          </div>
          <a
            href="https://wa.me/212666298815"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-sans font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-accent/20"
          >
            Prendre contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
