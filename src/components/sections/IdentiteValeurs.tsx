import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users, Globe, Star } from "lucide-react";

const valeurs = [
  { icon: Shield, titre: "Respect", desc: "De soi, d'autrui et de la diversité des cultures." },
  { icon: Heart, titre: "Bienveillance", desc: "Un climat sécurisant qui favorise la confiance." },
  { icon: Lightbulb, titre: "Autonomie", desc: "Apprendre à agir, réfléchir et décider par soi-même." },
  { icon: Users, titre: "Responsabilité", desc: "S'engager envers ses apprentissages et la communauté." },
  { icon: Globe, titre: "Ouverture culturelle", desc: "Le plurilinguisme comme richesse éducative." },
  { icon: Star, titre: "Excellence & Persévérance", desc: "L'exigence conjuguée à la valorisation des progrès." },
];

const temoignages = [
  { q: "Très belle expérience depuis le début de ma formation au sein de votre établissement. L'accueil est chaleureux et professionnel, et l'équipe est vraiment à l'écoute. La communication est fluide, claire et très agréable. On se sent rapidement en confiance et bien accompagnée. Une excellente première impression, je recommande vivement !", a: "Nadia", icon: "💬" },
  { q: "Un accueil chaleureux, une équipe à l'écoute et un vrai souci de bien accompagner chaque élève. On ressent le sérieux, la bienveillance et l'esprit d'équipe dès les premiers échanges. Bravo à toute l'équipe", a: "Karim", icon: "💬" },
  { q: "Le projet pédagogique de l'IES nous a convaincus dès la première réunion. On sent que chaque détail est pensé pour l'élève.", a: "Salma", icon: "💬" },
];

export default function IdentiteValeurs() {
  return (
    <section id="identite" className="py-28 md:py-40 zellige-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="reveal text-center mb-20">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Notre identité</p>
          <h2
            className="font-display text-foreground leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
          >
            Former des élèves prêts<br />pour le monde de demain
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            De la petite section au baccalauréat, un parcours scolaire continu, cohérent et bienveillant — respectueux du rythme et des besoins de chaque enfant.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valeurs.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.titre}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                  className="p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground text-sm mb-1.5">{v.titre}</h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT — identity + testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* IES identity card */}
            <div className="rounded-2xl bg-primary p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <img src="/assets/logo-ies.webp" alt="Logo IES" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-display text-2xl text-primary-foreground leading-none">IES</div>
                    <div className="font-sans text-xs text-primary-foreground/50 tracking-widest uppercase mt-1">
                      International Education School
                    </div>
                  </div>
                </div>
                <p className="font-sans text-primary-foreground/75 text-sm leading-relaxed mb-4">
                  L'IES forme des élèves épanouis, autonomes et responsables, capables de réussir dans un monde pluriculturel — en conciliant exigence académique et respect du développement de chaque enfant.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Trilingue", "Maternelle → Lycée", "2026-2027", "Fès"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/60 text-xs font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-5">
              <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Ce que disent les familles</p>
              {temoignages.map((t) => (
                <motion.blockquote
                  key={t.a}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative pl-5 border-l-2 border-accent/40 hover:border-accent transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{t.icon}</span>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground italic leading-relaxed">
                        « {t.q} »
                      </p>
                      <footer className="font-sans text-xs font-semibold text-foreground mt-2">— {t.a}</footer>
                    </div>
                  </div>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
