"use client"

import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function IESFooter() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src="/assets/logo-ies.webp" alt="Logo IES" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-display text-xl text-primary-foreground leading-none">IES</div>
                <div className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/40 mt-1">
                  International Education School
                </div>
              </div>
            </div>
            <p className="font-sans text-sm text-primary-foreground/55 leading-relaxed mb-6">
              Un établissement trilingue arabe · français · anglais, de la maternelle au lycée. Excellence, bienveillance et ouverture sur le monde.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/intereducationschool" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/IESFES" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-primary-foreground/8 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent/30 hover:border-accent/40 transition-all duration-200"
                >
                  <Icon size={15} className="text-primary-foreground/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-accent mb-5 font-semibold">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                ["Notre école", "#identite"],
                ["Pédagogie", "#pedagogie"],
                ["Cycles scolaires", "#cycles"],
                ["Trilinguisme", "#trilinguisme"],
                ["Parascolaire", "#parascolaire"],
                ["Nos locaux", "#galerie"],
                ["Événements", "#evenements"],
                ["Parents", "#parents"],
                ["Contact & Inscriptions", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="font-sans text-sm text-primary-foreground/50 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-200 overflow-hidden" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-accent mb-5 font-semibold">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, value: "+212 666 298 815" },
                { icon: Mail, value: "inter.educationschool@gmail.com" },
                { icon: MapPin, value: "E85 Lotissement Karaouiyine, Route Ain Chkef – Fès" },
                { icon: Clock, value: "Lun – Ven · 8h00 – 17h00" },
              ].map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-start gap-3">
                  <Icon size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm text-primary-foreground/55 leading-snug">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inscriptions */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-accent mb-5 font-semibold">Inscriptions</h4>
            <div className="p-5 rounded-2xl bg-accent/10 border border-accent/20 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-sans text-xs font-semibold text-accent">Inscriptions ouvertes</span>
              </div>
              <p className="font-display text-primary-foreground text-lg mb-1">2026-2027</p>
              <p className="font-sans text-xs text-primary-foreground/50 leading-relaxed">
                Dossiers disponibles sur demande. Contactez-nous pour planifier une visite.
              </p>
            </div>
            <a
              href="https://wa.me/212666298815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-accent-foreground font-sans font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-accent/20"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-primary-foreground/30">
            © 2026 IES — International Education School · Fès, Maroc. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-primary-foreground/20 tracking-widest">
            Excellence · التميز · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
