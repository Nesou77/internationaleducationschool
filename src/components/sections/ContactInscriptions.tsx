import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Send, User, Hash, BookOpen, GraduationCap, ChevronDown } from "lucide-react";

const infos = [
  { icon: Phone, label: "Téléphone", value: "+212 666 298 815" },
  { icon: Mail, label: "Email", value: "inter.educationschool@gmail.com" },
  { icon: MapPin, label: "Adresse", value: "E85 Lotissement Karaouiyine, Route Ain Chkef – Fès" },
  { icon: Clock, label: "Horaires d'accueil", value: "Lundi – Vendredi · 8h00 – 17h00" },
];

const niveauxActuels = [
  "TPS", "PS", "MS", "GS",
  "C1", "C2", "C3", "C4", "C5", "C6",
  "1AC", "2AC", "3AC",
  "TC", "1BAC SEX", "1BAC SM", "1BAC ECO",
  "2BAC ECO", "2BAC PC",
];

const niveauxSouhaites = [
  "TPS", "PS", "MS", "GS",
  "C1", "C2", "C3", "C4", "C5", "C6",
  "1AC", "2AC", "3AC",
  "TC", "1BAC SEX", "1BAC SM", "1BAC ECO",
  "2BAC ECO", "2BAC PC",
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

  const isValid = form.parentNom && form.telephone && form.enfantNom && form.classeActuelle && form.niveauSouhaite && form.etablissementActuel;

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

  const inputClass = "w-full bg-card border border-border/60 rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10 transition-all duration-200";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;
  const labelClass = "block font-sans text-[11px] font-semibold text-primary-foreground/50 uppercase tracking-widest mb-1.5";

  return (
    <section id="contact" className="py-28 md:py-40 bg-primary zellige-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
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

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Fiche de préinscription (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-5"
          >
            {/* Form card */}
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/40">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
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
                  <p className="font-display text-foreground text-xl text-center">Demande envoyée !</p>
                  <p className="font-sans text-muted-foreground text-sm text-center max-w-xs">
                    Notre équipe vous contactera très prochainement. À bientôt à l'IES !
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ parentNom: "", telephone: "", enfantNom: "", classeActuelle: "", niveauSouhaite: "", etablissementActuel: "" }); }}
                    className="mt-2 px-6 py-2.5 rounded-xl border border-border text-sm font-sans text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200"
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Parent */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-1.5"><User size={10} /> Nom et Prénom du parent *</span>
                      </label>
                      <input
                        name="parentNom"
                        value={form.parentNom}
                        onChange={handleChange}
                        placeholder="Nom et Prénom du parent"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-1.5"><Phone size={10} /> Numéro de téléphone *</span>
                      </label>
                      <input
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="Ex : 06 12 34 56 78"
                        className={inputClass}
                        type="tel"
                      />
                    </div>
                  </div>

                  {/* Enfant */}
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5"><User size={10} /> Nom et Prénom de l'enfant *</span>
                    </label>
                    <input
                      name="enfantNom"
                      value={form.enfantNom}
                      onChange={handleChange}
                      placeholder="Nom et Prénom de l'enfant"
                      className={inputClass}
                    />
                  </div>

                  {/* Niveaux */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-1.5"><BookOpen size={10} /> Classe actuelle *</span>
                      </label>
                      <div className="relative">
                        <select name="classeActuelle" value={form.classeActuelle} onChange={handleChange} className={selectClass}>
                          <option value="">Sélectionner…</option>
                          {niveauxActuels.map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-1.5"><GraduationCap size={10} /> Niveau souhaité 2026-2027 *</span>
                      </label>
                      <div className="relative">
                        <select name="niveauSouhaite" value={form.niveauSouhaite} onChange={handleChange} className={selectClass}>
                          <option value="">Sélectionner…</option>
                          {niveauxSouhaites.map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Établissement actuel */}
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-1.5"><Hash size={10} /> Établissement actuel *</span>
                      </label>
                      <input
                        name="etablissementActuel"
                        value={form.etablissementActuel}
                        onChange={handleChange}
                        placeholder="Nom de l'école actuelle"
                        className={inputClass}
                      />
                    </div>

                  {/* Required note */}
                  <p className="font-sans text-[11px] text-muted-foreground/50">* Champs obligatoires</p>

                  {/* Submit buttons */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {/* WhatsApp */}
                    <button
                      onClick={handleWhatsApp}
                      disabled={!isValid}
                      className="flex items-center justify-center gap-3 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-500/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <MessageCircle size={18} />
                      Envoyer par WhatsApp
                    </button>
                    {/* Email */}
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
                    <p className="font-sans text-[11px] text-accent/70 text-center">
                      Veuillez remplir tous les champs obligatoires pour envoyer votre demande.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT — Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Intro text */}
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6">
              <p className="font-display text-primary-foreground text-lg mb-3 leading-snug">
                Nous sommes impatients de vous accueillir
              </p>
              <p className="font-sans text-primary-foreground/55 text-sm leading-relaxed">
                Un environnement scolaire où chaque élève est encouragé à apprendre, à s'épanouir et à construire son avenir avec confiance.
              </p>
            </div>

            {/* Contact info card */}
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 space-y-5">
              {infos.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-sans text-[10px] text-primary-foreground/40 uppercase tracking-widest mb-0.5">{info.label}</p>
                      <p className="font-sans text-sm text-primary-foreground/85 font-medium leading-snug">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Avantages */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-sans text-xs font-semibold text-accent tracking-widest uppercase">
                  Inscriptions ouvertes
                </span>
              </div>
              <p className="font-display text-primary-foreground text-lg mb-4">
                Année scolaire 2026-2027
              </p>
              <ul className="space-y-2.5">
                {[
                  "Réponse sous 24h",
                  "Visite de l'établissement sur rendez-vous",
                  "Dossier d'inscription disponible sur demande",
                  "Accompagnement personnalisé",
                ].map((a) => (
                  <li key={a} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-accent flex-shrink-0" />
                    <span className="font-sans text-xs text-primary-foreground/65">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values image */}
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
              <img
                src="/assets/detail-valeurs.webp"
                alt="Les valeurs de l'IES"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/212666298815"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110"
        title="Contactez-nous sur WhatsApp"
      >
        <img src="/assets/whatsapp-button.webp" alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
      </a>
    </section>
  );
}
