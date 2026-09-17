"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
  User,
  School,
  BookOpen,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const CLASSES_ACTUELLES = [
  "TPS",
  "PS",
  "MS",
  "GS",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "1AC",
  "2AC",
  "3AC",
  "TC",
  "1BAC SEX",
  "1BAC SM",
  "1BAC ECO",
  "2BAC ECO",
  "2BAC PC",
];

const NIVEAUX_SOUHAITES = [
  "TPS",
  "PS",
  "MS",
  "GS",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "1AC",
  "2AC",
  "3AC",
  "TC",
  "1BAC SEX",
  "1BAC SM",
  "1BAC ECO",
  "2BAC ECO",
  "2BAC PC",
];

const infos = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 666 298 815",
    href: "tel:+212666298815",
  },
  {
    icon: Mail,
    label: "Email",
    value: "inter.educationschool@gmail.com",
    href: "mailto:inter.educationschool@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "International Education School, Fès, Maroc",
    href: "https://www.google.com/maps/dir//American+School+Fez,+E%D8%8C+85+Ain+chkf,+Fes+30000%E2%80%AD/@34.0043024,-5.0892645,13z/data=!4m18!1m8!3m7!1s0xd9f8b3ff6344765:0x2a1361965218349f!2sAmerican+School+Fez!8m2!3d34.0043024!4d-5.0130468!15sChdhbWVyaWNhbiBzY2hvb2wgZmV6IHlha1oZIhdhbWVyaWNhbiBzY2hvb2wgZmV6IHlha5IBEGVkdWNhdGlvbl9jZW50ZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjEwVms5VlpIcGFlbFpDVlRBNVJrNVdiR3hUTTA1UlVqRmthMUZZWXhBQuABAPoBBAgAECk!16s%2Fg%2F11vr558c2m!4m8!1m0!1m5!1m1!1s0xd9f8b3ff6344765:0x2a1361965218349f!2m2!1d-5.0130468!2d34.0043024!3e3?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D",
    external: true,
  },
  {
    icon: Clock,
    label: "Horaires d'accueil",
    value: "Lundi – Vendredi · 8h00 – 17h00",
  },
];

const avantages = [
  "Réponse sous 24h",
  "Visite de l'établissement sur rendez-vous",
  "Dossier d'inscription disponible sur demande",
  "Accompagnement personnalisé",
];

type FormData = {
  parentNom: string;
  telephone: string;
  enfantNom: string;
  classeActuelle: string;
  niveauSouhaite: string;
  etablissementActuel: string;
};

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactInscriptions() {
  const [form, setForm] = useState<FormData>({
    parentNom: "",
    telephone: "",
    enfantNom: "",
    classeActuelle: "",
    niveauSouhaite: "",
    etablissementActuel: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `📋 *FICHE DE PRÉINSCRIPTION IES 2026-2027*`,
      ``,
      `👤 *Parent :* ${form.parentNom}`,
      `📞 *Téléphone :* ${form.telephone}`,
      `👦 *Enfant :* ${form.enfantNom}`,
      `📚 *Classe actuelle :* ${form.classeActuelle}`,
      `🎯 *Niveau souhaité 2026-2027 :* ${form.niveauSouhaite}`,
      form.etablissementActuel ? `🏫 *Établissement actuel :* ${form.etablissementActuel}` : "",
    ].filter(Boolean).join("\n");

    return encodeURIComponent(lines);
  };

  const buildEmailBody = () => {
    return encodeURIComponent(
      `FICHE DE PRÉINSCRIPTION IES 2026-2027\n\n` +
      `Nom et Prénom du parent : ${form.parentNom}\n` +
      `Téléphone : ${form.telephone}\n` +
      `Nom et Prénom de l'enfant : ${form.enfantNom}\n` +
      `Classe actuelle : ${form.classeActuelle}\n` +
      `Niveau souhaité 2026-2027 : ${form.niveauSouhaite}\n` +
      (form.etablissementActuel ? `Établissement actuel : ${form.etablissementActuel}\n` : "") +
      `\nEnvoyé depuis le site IES.`
    );
  };

  const isValid =
    form.parentNom &&
    form.telephone &&
    form.enfantNom &&
    form.classeActuelle &&
    form.niveauSouhaite &&
    form.etablissementActuel;

  const handleWhatsApp = () => {
    if (!isValid) return;
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/212666298815?text=${msg}`, "_blank");
    setStatus("sent");
  };

  const handleEmail = () => {
    if (!isValid) return;
    const subject = encodeURIComponent(`Préinscription IES 2026-2027 — ${form.enfantNom}`);
    const body = buildEmailBody();
    window.open(`mailto:inter.educationschool@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setStatus("sent");
  };

  const resetForm = () => {
    setStatus("idle");
    setForm({
      parentNom: "",
      telephone: "",
      enfantNom: "",
      classeActuelle: "",
      niveauSouhaite: "",
      etablissementActuel: "",
    });
  };

  const inputClass =
    "w-full bg-card border border-border/60 rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10 transition-all duration-200";
  const selectClass = `${inputClass} appearance-none cursor-pointer pr-10`;
  const labelClass =
    "block font-sans text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5";
  const helperClass = "mt-2 font-sans text-[11px] leading-relaxed text-muted-foreground/75";

  return (
    <section id="contact" className="py-28 md:py-40 bg-primary zellige-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — keep copy unchanged */}
        <div className="reveal text-center mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">
            Inscriptions 2026-2027
          </p>
          <h2
            className="font-display text-primary-foreground leading-[1.02] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Rejoignez la communauté IES
          </h2>
          <p className="font-sans text-primary-foreground/55 max-w-xl mx-auto leading-relaxed">
            Remplissez la fiche ci-dessous — votre demande nous parviendra directement par WhatsApp ou par email.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* LEFT — Fiche de préinscription */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border border-border/40">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-sans text-xs font-semibold text-accent tracking-widest uppercase">
                  Fiche de préinscription 2026-2027
                </span>
              </div>

              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-7">
                Merci de l'intérêt que vous portez à notre établissement. Remplissez ce formulaire — notre équipe vous contactera dans les meilleurs délais pour vous accompagner dans toutes les étapes de l'inscription.
              </p>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                    <CheckCircle size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display text-foreground text-xl text-center">Demande envoyée !</h3>
                  <p className="font-sans text-muted-foreground text-sm text-center max-w-xs">
                    Notre équipe vous contactera très prochainement. À bientôt à l'IES !
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-2 px-6 py-2.5 rounded-xl border border-border text-sm font-sans text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200"
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Parent */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} htmlFor="parentNom">
                        <span className="flex items-center gap-1.5">
                          <User size={11} /> Nom et Prénom du parent *
                        </span>
                      </label>
                      <input
                        id="parentNom"
                        name="parentNom"
                        value={form.parentNom}
                        onChange={handleChange}
                        placeholder="Nom et Prénom du parent"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="telephone">
                        <span className="flex items-center gap-1.5">
                          <Phone size={11} /> Numéro de téléphone *
                        </span>
                      </label>
                      <input
                        id="telephone"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="Ex : 06 12 34 56 78"
                        className={inputClass}
                        type="tel"
                      />
                    </div>
                  </div>

                  {/* Enfant + établissement actuel */}
                  <div
                    className="grid sm:grid-cols-2 gap-4"
                    role="group"
                    aria-label="Informations de l'enfant"
                  >
                    <div>
                      <label className={labelClass} htmlFor="enfantNom">
                        <span className="flex items-center gap-1.5">
                          <User size={11} /> Nom et Prénom de l'enfant *
                        </span>
                      </label>
                      <input
                        id="enfantNom"
                        name="enfantNom"
                        value={form.enfantNom}
                        onChange={handleChange}
                        placeholder="Nom et Prénom de l'enfant"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="etablissementActuel">
                        <span className="flex items-center gap-1.5">
                          <School size={11} /> Établissement actuel *
                        </span>
                      </label>
                      <input
                        id="etablissementActuel"
                        name="etablissementActuel"
                        value={form.etablissementActuel}
                        onChange={handleChange}
                        placeholder="Nom de l'école actuelle"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Classe actuelle + niveau souhaité */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} htmlFor="classeActuelle">
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={11} /> Classe actuelle *
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          id="classeActuelle"
                          name="classeActuelle"
                          value={form.classeActuelle}
                          onChange={handleChange}
                          className={selectClass}
                          aria-describedby="classe-actuelle-help"
                        >
                          <option value="">Sélectionner la classe actuelle…</option>
                          {CLASSES_ACTUELLES.map((classe) => (
                            <option key={classe} value={classe}>{classe}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                        />
                      </div>
                      <p id="classe-actuelle-help" className={helperClass}>
                        Sélectionnez la classe suivie actuellement par votre enfant.
                      </p>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="niveauSouhaite">
                        <span className="flex items-center gap-1.5">
                          <GraduationCap size={11} /> Niveau souhaité 2026-2027 *
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          id="niveauSouhaite"
                          name="niveauSouhaite"
                          value={form.niveauSouhaite}
                          onChange={handleChange}
                          className={selectClass}
                          aria-describedby="niveau-souhaite-help"
                        >
                          <option value="">Sélectionner le niveau demandé…</option>
                          {NIVEAUX_SOUHAITES.map((niveau) => (
                            <option key={niveau} value={niveau}>{niveau}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                        />
                      </div>
                      <p id="niveau-souhaite-help" className={helperClass}>
                        Sélectionnez le niveau demandé pour l’année 2026-2027.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border/60 pt-5">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <p className="font-sans text-[11px] text-muted-foreground/60">* Champs obligatoires</p>
                      <p className="hidden sm:block font-sans text-[11px] text-muted-foreground/60">
                        Choisissez votre mode d'envoi
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        onClick={handleWhatsApp}
                        disabled={!isValid}
                        className="flex items-center justify-center gap-3 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-500/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <MessageCircle size={18} />
                        Envoyer par WhatsApp
                      </button>

                      <button
                        onClick={handleEmail}
                        disabled={!isValid}
                        className="flex items-center justify-center gap-3 py-4 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-accent/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <Send size={16} />
                        Envoyer par Email
                      </button>
                    </div>

                    {!isValid && (
                      <p className="font-sans text-[11px] text-accent/70 text-center mt-3">
                        Veuillez remplir tous les champs obligatoires pour envoyer votre demande.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT — Informations utiles */}
          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Registration overview */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-sans text-xs font-semibold text-accent tracking-widest uppercase">
                  Inscriptions ouvertes
                </span>
              </div>

              <h3 className="font-display text-primary-foreground text-2xl leading-tight mb-3">
                Année scolaire 2026-2027
              </h3>
              <p className="font-sans text-primary-foreground/60 text-sm leading-relaxed mb-6">
                Notre équipe vous accompagne de la première prise de contact jusqu'à la constitution du dossier d'inscription.
              </p>

              <div className="space-y-3">
                {avantages.map((avantage) => (
                  <div key={avantage} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={13} className="text-accent" />
                    </div>
                    <span className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
                      {avantage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values image */}
            <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-lg">
              <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[4/3]">
                <img
                  src="/assets/detail-valeurs.webp"
                  alt="Les valeurs de l'IES, école privée à Fès"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent px-5 pt-12 pb-5">
                <h3 className="font-display text-primary-foreground text-lg leading-snug">
                  Un cadre où chaque élève peut apprendre, grandir et s'épanouir.
                </h3>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Full-width contact help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="font-sans text-xs font-semibold text-accent tracking-widest uppercase mb-2">
              Besoin d'aide ?
            </p>

            <h3 className="font-display text-primary-foreground text-2xl mb-3">
              Contactez directement l'IES
            </h3>

            <p className="font-sans text-sm text-primary-foreground/55 leading-relaxed">
              Notre équipe reste disponible pour répondre à vos questions et vous accompagner
              dans votre démarche d'inscription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {infos.map((info) => {
              const Icon = info.icon;
              const isEmail = info.label === "Email";

              const content = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-accent" />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="font-sans text-[10px] text-primary-foreground/40 uppercase tracking-widest mb-1.5">
                      {info.label}
                    </p>

                    <p
                      className={`font-sans text-sm sm:text-[15px] text-primary-foreground/85 font-medium leading-relaxed ${
                        isEmail ? "break-all" : "break-words"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.external ? "_blank" : undefined}
                  rel={info.external ? "noopener noreferrer" : undefined}
                  aria-label={`${info.label} : ${info.value}`}
                  className="
                    group flex items-start gap-4
                    rounded-xl border border-primary-foreground/10
                    bg-primary-foreground/[0.04]
                    p-4 sm:p-5
                    hover:bg-primary-foreground/[0.08]
                    hover:border-accent/30
                    transition-all duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                  "
                >
                  {content}
                </a>
              ) : (
                <div
                  key={info.label}
                  className="
                    flex items-start gap-4
                    rounded-xl border border-primary-foreground/10
                    bg-primary-foreground/[0.04]
                    p-4 sm:p-5
                  "
                >
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
