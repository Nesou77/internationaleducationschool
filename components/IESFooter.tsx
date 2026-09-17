import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function IESFooter() {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/intereducationschool",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/IESFES",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
  ];

  const navigationLinks = [
    ["Notre école", "#identite"],
    ["Pédagogie", "#pedagogie"],
    ["Cycles scolaires", "#cycles"],
    ["Trilinguisme", "#trilinguisme"],
    ["Nos locaux", "#galerie"],
    ["Événements", "#evenements"],
    ["Contact & Inscriptions", "#contact"],
  ];

  const contactItems = [
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
      value: "International Education School , Fès, Maroc",
      href: "https://www.google.com/maps/dir//American+School+Fez,+E%D8%8C+85+Ain+chkf,+Fes+30000%E2%80%AD/@34.0043024,-5.0892645,13z/data=!4m18!1m8!3m7!1s0xd9f8b3ff6344765:0x2a1361965218349f!2sAmerican+School+Fez!8m2!3d34.0043024!4d-5.0130468!15sChdhbWVyaWNhbiBzY2hvb2wgZmV6IHlha1oZIhdhbWVyaWNhbiBzY2hvb2wgZmV6IHlha5IBEGVkdWNhdGlvbl9jZW50ZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjEwVms5VlpIcGFlbFpDVlRBNVJrNVdiR3hUTTA1UlVqRmthMUZZWXhBQuABAPoBBAgAECk!16s%2Fg%2F11vr558c2m!4m8!1m0!1m5!1m1!1s0xd9f8b3ff6344765:0x2a1361965218349f!2m2!1d-5.0130468!2d34.0043024!3e3?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const focusClasses =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-14 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              aria-label="IES International Education School - Accueil"
              className={`inline-flex items-center gap-3 mb-5 rounded-lg ${focusClasses}`}
            >
              <div className="w-14 h-14 md:w-[60px] md:h-[60px] flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/logo-ies.webp"
                  alt="IES International Education School Fès"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="font-display text-2xl text-primary-foreground leading-none">
                  IES
                </div>

                <div className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/50 mt-1.5 leading-relaxed">
                  International Education School
                </div>
              </div>
            </a>

            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed mb-6 max-w-sm">
              Un établissement trilingue arabe · français · anglais, de
              la maternelle au lycée. Excellence, bienveillance et
              ouverture sur le monde.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={`${label} de IES`}
                  className={`
                    w-10 h-10 rounded-xl
                    bg-primary-foreground/[0.08]
                    border border-primary-foreground/10
                    flex items-center justify-center
                    text-primary-foreground/65
                    hover:text-primary-foreground
                    hover:bg-accent/25
                    hover:border-accent/40
                    hover:-translate-y-0.5
                    transition-all duration-200
                    ${focusClasses}
                  `}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-[10px] tracking-widest uppercase text-accent mb-5 font-semibold">
              Navigation
            </h3>

            <nav aria-label="Navigation du pied de page">
              <ul className="space-y-2.5">
                {navigationLinks.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={`
                        w-fit
                        font-sans text-sm
                        text-primary-foreground/55
                        hover:text-primary-foreground
                        hover:translate-x-1
                        transition-all duration-200
                        flex items-center gap-1.5 group
                        rounded-sm
                        ${focusClasses}
                      `}
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-200 overflow-hidden" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[10px] tracking-widest uppercase text-accent mb-5 font-semibold">
              Contact
            </h3>

            <ul className="space-y-4">
              {contactItems.map(
                ({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={
                          label === "Adresse" ? "_blank" : undefined
                        }
                        rel={
                          label === "Adresse"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`
                          group flex items-start gap-3
                          w-fit rounded-md
                          ${focusClasses}
                        `}
                      >
                        <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon
                            size={14}
                            className="text-accent"
                          />
                        </div>

                        <div>
                          <span className="block font-sans text-[10px] uppercase tracking-wider text-primary-foreground/40 mb-0.5">
                            {label}
                          </span>

                          <span className="font-sans text-sm text-primary-foreground/65 group-hover:text-primary-foreground transition-colors leading-snug break-words">
                            {value}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon
                            size={14}
                            className="text-accent"
                          />
                        </div>

                        <div>
                          <span className="block font-sans text-[10px] uppercase tracking-wider text-primary-foreground/40 mb-0.5">
                            {label}
                          </span>

                          <span className="font-sans text-sm text-primary-foreground/65 leading-snug">
                            {value}
                          </span>
                        </div>
                      </div>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Inscriptions */}
          <div>
            <h3 className="font-sans text-[10px] tracking-widest uppercase text-accent mb-5 font-semibold">
              Inscriptions
            </h3>

            <div className="p-5 rounded-2xl bg-accent/10 border border-accent/20 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />

                <span className="font-sans text-[11px] font-semibold text-accent uppercase tracking-wider">
                  Inscriptions ouvertes
                </span>
              </div>

              <h4 className="font-display text-primary-foreground text-xl mb-2">
                Année scolaire 2026–2027
              </h4>

              <p className="font-sans text-xs text-primary-foreground/60 leading-relaxed">
                Dossiers disponibles sur demande. Contactez-nous pour
                organiser une visite de l'établissement.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col gap-1.5">
            <p className="font-sans text-xs text-primary-foreground/50 leading-relaxed">
              © 2026 IES — International Education School · Fès, Maroc. Tous droits réservés.
            </p>

            <p className="font-sans text-[11px] text-primary-foreground/35 leading-relaxed">
              Site conçu et développé par{" "}
              <a
                href="https://h24service.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/55 hover:text-accent transition-colors"
              >
                H24 Service
              </a>
              {" "}· Avec la contribution technique de{" "}
              <a
                href="https://www.sounez.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/55 hover:text-accent transition-colors"
              >
                Sounez
              </a>
            </p>
          </div>

          <p className="font-sans text-xs text-primary-foreground/40 tracking-widest whitespace-nowrap">
            Excellence · التميز · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}