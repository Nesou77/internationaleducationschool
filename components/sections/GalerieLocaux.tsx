"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

const photos = [
  {
    src: "/assets/cadre-ideal-1.webp",
    alt: "Salle de classe primaire avec tables colorées et chaises",
  },
  {
    src: "/assets/cadre-ideal-2.webp",
    alt: "Couloir avec fresques éducatives et affichages",
  },
  {
    src: "/assets/cadre-ideal-3.webp",
    alt: "Salle de classe secondaire moderne",
  },
  {
    src: "/assets/cadre-ideal-4.webp",
    alt: "Sanitaires décorés avec motifs ludiques",
  },
  {
    src: "/assets/cadre-ideal-5.webp",
    alt: "Terrain de sport avec équipements colorés",
  },

  // cadre-ideal-6.webp removed because duplicated

  {
    src: "/assets/cadre-ideal-7.webp",
    alt: "Aire de motricité couverte — piste colorée et vélos",
  },
  {
    src: "/assets/cadre-ideal-8.webp",
    alt: "Sanitaires décorés — ambiance ludique et colorée",
  },
];

const facts = [
  {
    label: "Encadrement de qualité",
    desc: "Une équipe pédagogique qualifiée, passionnée et à l'écoute",
  },
  {
    label: "Classes à effectif réduit",
    desc: "Un suivi personnalisé pour favoriser l'épanouissement et la réussite",
  },
  {
    label: "Activités artistiques & sportives",
    desc: "Pour révéler les talents et développer l'esprit d'équipe",
  },
  {
    label: "Infrastructures modernes",
    desc: "Des espaces d'apprentissage sécurisés, équipés et stimulants",
  },
];

export default function GalerieLocaux() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const openLightbox = (index: number) => {
    setDirection(1);
    setLightbox(index);
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const prev = () => {
    setDirection(-1);

    setLightbox((current) =>
      current !== null
        ? (current - 1 + photos.length) % photos.length
        : null,
    );
  };

  const next = () => {
    setDirection(1);

    setLightbox((current) =>
      current !== null
        ? (current + 1) % photos.length
        : null,
    );
  };

  /* =========================================================
     KEYBOARD NAVIGATION + BODY SCROLL LOCK
  ========================================================== */
  useEffect(() => {
    if (lightbox === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1);

        setLightbox((current) =>
          current !== null
            ? (current - 1 + photos.length) % photos.length
            : null,
        );
      }

      if (event.key === "ArrowRight") {
        setDirection(1);

        setLightbox((current) =>
          current !== null
            ? (current + 1) % photos.length
            : null,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-24
          h-80
          w-80
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-96
          w-96
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* =====================================================
            HEADER — ORIGINAL DESIGN UNCHANGED
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-widest uppercase text-accent mb-3">
            Nos espaces
          </p>

          <h2
            className="font-display text-foreground leading-[1.05] tracking-[-0.02em] mb-4"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
            }}
          >
            Un cadre idéal pour s&apos;épanouir
          </h2>

          <p className="font-sans text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Des infrastructures modernes, sécurisées et stimulantes — conçues
            pour favoriser l&apos;apprentissage, la créativité et le bien-être
            de chaque élève.
          </p>
        </motion.div>

        {/* =====================================================
            ROW 1 — TWO FEATURED IMAGES
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:gap-5
            mb-3
            md:mb-5
          "
        >
          <GalleryCard
            photo={photos[0]}
            index={0}
            featured
            onClick={() => openLightbox(0)}
          />

          <GalleryCard
            photo={photos[1]}
            index={1}
            featured
            onClick={() => openLightbox(1)}
          />
        </div>

        {/* =====================================================
            ROWS 2 + 3

            Desktop:

            PHOTO 03 | PHOTO 04 | PHOTO 08
            PHOTO 05 | PHOTO 07 | PHOTO 08

            PHOTO 08 spans exactly TWO rows
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3

            gap-3
            md:gap-5

            md:auto-rows-[250px]
            lg:auto-rows-[290px]
            xl:auto-rows-[320px]
          "
        >
          {/* PHOTO 03 */}
          <GalleryCard
            photo={photos[2]}
            index={2}
            fill
            onClick={() => openLightbox(2)}
          />

          {/* PHOTO 04 */}
          <GalleryCard
            photo={photos[3]}
            index={3}
            fill
            onClick={() => openLightbox(3)}
          />

          {/* PHOTO 08 — PORTRAIT — SPANS EXACTLY 2 ROWS */}
          <div
            className="
              col-span-2
              md:col-span-1
              md:row-span-2
              md:col-start-3
              md:row-start-1

              aspect-[16/10]
              md:aspect-auto
            "
          >
            <GalleryCard
              photo={photos[6]}
              index={6}
              fill
              portrait
              onClick={() => openLightbox(6)}
            />
          </div>

          {/* PHOTO 05 */}
          <GalleryCard
            photo={photos[4]}
            index={4}
            fill
            onClick={() => openLightbox(4)}
          />

          {/* PHOTO 07 */}
          <GalleryCard
            photo={photos[5]}
            index={5}
            fill
            onClick={() => openLightbox(5)}
          />
        </div>

        {/* =====================================================
            KEY FACTS
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            mt-14
            md:mt-20

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            border
            border-border
            rounded-2xl
            overflow-hidden

            bg-card/50
          "
        >
          {facts.map((item, index) => (
            <div
              key={item.label}
              className={`
                relative
                group
                p-6
                md:p-7

                transition-colors
                duration-300

                hover:bg-card

                ${
                  index !== facts.length - 1
                    ? "lg:border-r lg:border-border"
                    : ""
                }

                ${
                  index < 2
                    ? "sm:border-b lg:border-b-0 border-border"
                    : ""
                }
              `}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span
                  className="
                    font-sans
                    text-[10px]
                    tracking-[0.18em]
                    uppercase
                    text-muted-foreground
                  "
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-accent

                    transition-transform
                    duration-300

                    group-hover:scale-150
                  "
                />
              </div>

              <h3
                className="
                  font-sans
                  text-sm
                  font-semibold
                  text-foreground
                  mb-2
                "
              >
                {item.label}
              </h3>

              <p
                className="
                  font-sans
                  text-xs
                  text-muted-foreground
                  leading-relaxed
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* =========================================================
          LIGHTBOX
      ========================================================== */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-0
              z-[100]

              flex
              items-center
              justify-center

              bg-black/90
              backdrop-blur-md

              p-4
              md:p-8
            "
            role="dialog"
            aria-modal="true"
            aria-label="Galerie photos IES"
            onClick={closeLightbox}
          >
            {/* Top toolbar */}
            <div
              className="
                absolute
                top-5
                left-5
                right-5

                md:top-7
                md:left-8
                md:right-8

                flex
                items-center
                justify-between

                z-20
              "
            >
              {/* Counter */}
              <div
                className="
                  px-4
                  py-2

                  rounded-full

                  bg-white/10
                  border
                  border-white/15
                  backdrop-blur-xl

                  font-sans
                  text-xs
                  text-white/70
                "
              >
                <span className="text-white font-medium">
                  {String(lightbox + 1).padStart(2, "0")}
                </span>

                <span className="mx-2 text-white/70">/</span>

                {String(photos.length).padStart(2, "0")}
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  closeLightbox();
                }}
                className="
                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-white/10
                  border
                  border-white/15
                  backdrop-blur-xl

                  text-white/70

                  hover:text-white
                  hover:bg-white/20

                  transition-all
                  duration-300
                "
                aria-label="Fermer la galerie"
              >
                <X size={21} />
              </button>
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              className="
                absolute
                left-3
                md:left-8

                top-1/2
                -translate-y-1/2

                z-20

                w-11
                h-11

                md:w-14
                md:h-14

                flex
                items-center
                justify-center

                rounded-full

                bg-white/10
                border
                border-white/15
                backdrop-blur-xl

                text-white/70

                hover:text-white
                hover:bg-white/20

                transition-all
                duration-300
              "
              aria-label="Photo précédente"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Current image */}
            <div
              className="
                w-full
                max-w-6xl

                flex
                flex-col
                items-center
                justify-center

                gap-5
              "
              onClick={(event) => event.stopPropagation()}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={lightbox}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 60 : -60,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -60 : 60,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={photos[lightbox].src}
                  alt={photos[lightbox].alt}
                  className="
                    max-h-[72vh]
                    max-w-[88vw]

                    object-contain

                    rounded-2xl
                    shadow-2xl
                  "
                />
              </AnimatePresence>

              <motion.p
                key={`caption-${lightbox}`}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  font-sans
                  text-sm
                  text-white/70
                  text-center
                  max-w-xl
                  px-12
                  leading-relaxed
                "
              >
                {photos[lightbox].alt}
              </motion.p>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              className="
                absolute
                right-3
                md:right-8

                top-1/2
                -translate-y-1/2

                z-20

                w-11
                h-11

                md:w-14
                md:h-14

                flex
                items-center
                justify-center

                rounded-full

                bg-white/10
                border
                border-white/15
                backdrop-blur-xl

                text-white/70

                hover:text-white
                hover:bg-white/20

                transition-all
                duration-300
              "
              aria-label="Photo suivante"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =============================================================
   GALLERY CARD
============================================================= */

type GalleryCardProps = {
  photo: {
    src: string;
    alt: string;
  };
  index: number;
  featured?: boolean;
  portrait?: boolean;
  fill?: boolean;
  onClick: () => void;
};

function GalleryCard({
  photo,
  index,
  featured = false,
  portrait = false,
  fill = false,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className={`
        relative
        block

        w-full

        overflow-hidden
        rounded-2xl

        bg-muted

        text-left

        group

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background

        ${fill ? "h-full" : ""}

        ${
          featured
            ? "aspect-[4/3] md:aspect-[16/10]"
            : !fill
              ? "aspect-[4/3]"
              : ""
        }
      `}
      aria-label={`Voir la photo ${index + 1} : ${photo.alt}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        className={`
          absolute
          inset-0

          w-full
          h-full

          transition-transform
          duration-700
          ease-out

          group-hover:scale-[1.05]

          ${
            portrait
              ? "object-cover md:object-cover"
              : "object-cover"
          }
        `}
      />

      {/* Subtle gradient */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/30
          via-transparent
          to-transparent

          pointer-events-none
        "
      />

      {/* Hover overlay */}
      <div
        className="
          absolute
          inset-0

          bg-black/0

          group-hover:bg-black/20

          transition-colors
          duration-500

          pointer-events-none
        "
      />

      {/* Number */}
      <div
        className="
          absolute
          top-3
          left-3

          md:top-4
          md:left-4

          px-2.5
          py-1

          rounded-full

          bg-black/20
          border
          border-white/15

          backdrop-blur-md

          font-sans
          text-[9px]
          md:text-[10px]

          tracking-widest

          text-white/75
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Expand button */}
      <div
        className="
          absolute
          top-3
          right-3

          md:top-4
          md:right-4

          w-9
          h-9

          md:w-10
          md:h-10

          rounded-full

          flex
          items-center
          justify-center

          bg-white/10
          border
          border-white/20

          backdrop-blur-lg

          text-white

          opacity-0
          scale-90
          translate-y-1

          group-hover:opacity-100
          group-hover:scale-100
          group-hover:translate-y-0

          transition-all
          duration-300
        "
      >
        <Expand size={16} />
      </div>

      {/* Hover label */}
      <div
        className="
          absolute
          left-4
          right-4
          bottom-4

          md:left-5
          md:right-5
          md:bottom-5

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            hidden
            md:block

            font-sans
            text-[11px]
            font-medium

            text-white

            opacity-0
            translate-y-2

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all
            duration-300
          "
        >
          Voir la photo
        </span>

        <span
          className="
            ml-auto
            w-0
            group-hover:w-8
            h-px
            bg-accent

            transition-all
            duration-500
          "
        />
      </div>
    </motion.button>
  );
}