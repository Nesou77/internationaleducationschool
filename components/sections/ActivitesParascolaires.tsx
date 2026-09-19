"use client"
import { m as motion } from "framer-motion";
import { Drama, Palette, Music, Bot, Dumbbell, Calculator } from "lucide-react";

const activites = [
  {
    icon: Drama,
    titre: "Théâtre",
    desc: "Expression orale, confiance en soi et créativité sur scène.",
    color: "bg-rose-500/10 text-rose-600 border-rose-200/60",
    iconColor: "text-rose-500",
  },
  {
    icon: Palette,
    titre: "Arts plastiques",
    desc: "Ateliers de création artistique pour l'expression personnelle.",
    color: "bg-violet-500/10 text-violet-600 border-violet-200/60",
    iconColor: "text-violet-500",
  },
  {
    icon: Music,
    titre: "Musique",
    desc: "Sensibilité artistique, écoute et initiation instrumentale.",
    color: "bg-blue-500/10 text-blue-600 border-blue-200/60",
    iconColor: "text-blue-500",
  },
  {
    icon: Bot,
    titre: "Robotique",
    desc: "Programmation, logique et manipulation par la construction.",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
    iconColor: "text-emerald-500",
  },
  {
    icon: Dumbbell,
    titre: "Sport",
    desc: "Motricité, esprit d'équipe et activités physiques variées.",
    color: "bg-orange-500/10 text-orange-600 border-orange-200/60",
    iconColor: "text-orange-500",
  },
  {
    icon: Calculator,
    titre: "Calcul mental",
    desc: "Agilité numérique, concentration et défis hebdomadaires.",
    color: "bg-amber-500/10 text-amber-600 border-amber-200/60",
    iconColor: "text-amber-500",
  },
];

export default function ActivitesParascolaires() {
  return (
    <section id="parascolaire" className="py-28 md:py-40 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Vie scolaire</p>
          <h2
            className="font-display text-foreground leading-[1.02] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Au-delà des cours
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Six ateliers parascolaires pour révéler les talents de chaque élève et enrichir son parcours.
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activites.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.titre}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-7 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-400"
              >
                {/* Icon chip */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${a.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} className={a.iconColor} />
                </div>

                <h3 className="font-display text-foreground text-xl mb-2">{a.titre}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{a.desc}</p>

                {/* Bottom accent line */}
                <div className="mt-5 h-px bg-border group-hover:bg-accent/30 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-sans text-xs text-muted-foreground mt-10"
        >
          Ateliers proposés selon les niveaux et les cycles — programme détaillé disponible sur demande.
        </motion.p>
      </div>
    </section>
  );
}
