"use client"
import { m as motion } from "framer-motion";
import { Calendar, Users, Microscope, MapPin, Star } from "lucide-react";

const evenements = [
  {
    img: null,
    date: "Tout au long de l'année",
    titre: "Journées thématiques",
    desc: "Disciplines croisées autour d'un thème fédérateur — science, culture, citoyenneté, arts.",
    icon: Calendar,
    featured: false,
  },
  {
    img: null,
    date: "Trimestre 2",
    titre: "Projets artistiques & scientifiques",
    desc: "Expositions et présentations des travaux d'élèves — le fruit de mois de créativité et de rigueur.",
    icon: Microscope,
    featured: false,
  },
  {
    img: null,
    date: "Programmées par cycle",
    titre: "Sorties pédagogiques",
    desc: "Des sorties qui prolongent les apprentissages hors les murs de l'école, ancrées dans le territoire.",
    icon: MapPin,
    featured: false,
  },
];

export default function EvenementsAgenda() {
  return (
    <section id="evenements" className="py-28 md:py-40 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Agenda 2026-2027</p>
          <h2
            className="font-display text-foreground leading-[1.02] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Les temps forts de l'année
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Une année scolaire rythmée par des événements qui valorisent le travail des élèves et rassemblent la communauté.
          </p>
        </div>

        {/* Vision banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 backdrop-blur-sm"
        >
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-3">Notre vision</p>
            <h3 className="font-display text-foreground text-xl md:text-2xl leading-relaxed mb-4">
              Chaque événement reflète notre engagement : une expertise pédagogique reconnue, une équipe enseignante dévouée, et une communauté éducative unie autour de chaque élève.
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-sans text-xs font-medium">Expertise pédagogique</span>
              <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-sans text-xs font-medium">Équipe engagée</span>
              <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-sans text-xs font-medium">Communauté unie</span>
            </div>
          </div>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {evenements.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.titre}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-400"
              >
                {/* Image or color bar */}
                {e.img ? (
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
                    <img
                      src={e.img}
                      alt={e.titre}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <Calendar size={12} className="text-white/70" />
                      <span className="font-sans text-white/80 text-xs">{e.date}</span>
                    </div>
                    {e.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-accent/90 text-accent-foreground text-[10px] font-sans font-semibold tracking-wide">
                          À ne pas manquer
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-1.5 bg-gradient-to-r from-accent/60 to-accent/20" />
                )}

                {/* Content */}
                <div className="p-6">
                  {!e.img && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon size={13} className="text-accent" />
                      </div>
                      <span className="font-sans text-xs text-accent font-medium">{e.date}</span>
                    </div>
                  )}
                  <h3 className="font-display text-foreground text-lg mb-2">{e.titre}</h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
