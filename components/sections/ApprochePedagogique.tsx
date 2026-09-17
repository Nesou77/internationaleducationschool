"use client"
import { motion } from "framer-motion";
import { Zap, FolderOpen, Monitor } from "lucide-react";

const blocs = [
  {
    icon: Zap,
    titre: "Pédagogie active & différenciée",
    texte: "L'élève est acteur de ses apprentissages. À travers la manipulation, l'expérimentation et la recherche, chaque notion est vécue avant d'être formalisée. Les parcours et supports sont adaptés au rythme et au profil de chaque élève — aucun enfant n'est laissé derrière.",
    tag: "Active Learning",
    stat: { val: "100%", label: "Élèves accompagnés" },
  },
  {
    icon: FolderOpen,
    titre: "Apprentissage par projets",
    texte: "Des projets interdisciplinaires donnent du sens aux apprentissages et développent la persévérance. Les élèves croisent les disciplines, collaborent, présentent leurs travaux — et comprennent pourquoi ils apprennent ce qu'ils apprennent.",
    tag: "Project-Based",
    stat: { val: "3 cycles", label: "Projets par an" },
  },
  {
    icon: Monitor,
    titre: "Numérique raisonné",
    texte: "Les outils numériques sont intégrés avec discernement, comme supports d'apprentissage et non comme finalité. La technologie est au service de l'humain — jamais l'inverse. L'IES forme des élèves capables d'utiliser le numérique avec esprit critique.",
    tag: "EdTech",
    stat: { val: "Dès 6 ans", label: "Initiation robotique" },
  },
];

export default function ApprochePedagogique() {
  return (
    <section id="pedagogie" className="py-28 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-20">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Notre approche</p>
          <h2
            className="font-display text-foreground leading-[1.02] tracking-[-0.03em] max-w-2xl mx-auto mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Une pédagogie pensée<br />pour chaque élève
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Méthodes actives, projets interdisciplinaires et numérique raisonné — au service du développement de chaque enfant.
          </p>
        </div>

        {/* Blocs */}
        <div className="space-y-6">
          {blocs.map((b, i) => {
            const Icon = b.icon;
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={b.titre}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-border/60 bg-card hover:shadow-xl hover:border-accent/20 transition-all duration-500 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Accent sidebar */}
                <div className={`md:col-span-1 flex flex-col items-center justify-center p-8 bg-primary ${isEven ? "md:order-last" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/40 text-center mb-6">{b.tag}</span>
                  <div className="text-center">
                    <div className="font-display text-2xl text-accent leading-none mb-1">{b.stat.val}</div>
                    <div className="font-sans text-xs text-primary-foreground/50">{b.stat.label}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-4 p-8 md:p-10 flex flex-col justify-center">
                  <h3
                    className="font-display text-foreground leading-tight mb-4"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
                  >
                    {b.titre}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-base max-w-2xl">
                    {b.texte}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
