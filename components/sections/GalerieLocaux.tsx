"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos: { src: string; alt: string }[] = [
  { src: "/assets/cadre-ideal-1.webp", alt: "Salle de classe primaire avec tables colorées et chaises" },
  { src: "/assets/cadre-ideal-2.webp", alt: "Couloir avec fresques éducatives et affichages" },
  { src: "/assets/cadre-ideal-3.webp", alt: "Salle de classe secondaire moderne" },
  { src: "/assets/cadre-ideal-4.webp", alt: "Sanitaires décorés avec motifs ludiques" },
  { src: "/assets/cadre-ideal-5.webp", alt: "Terrain de sport avec équipements colorés" },
  { src: "/assets/cadre-ideal-6.webp", alt: "Salle de classe maternelle colorée — tables et chaises" },
  { src: "/assets/cadre-ideal-7.webp", alt: "Aire de motricité couverte — piste colorée et vélos" },
  { src: "/assets/cadre-ideal-8.webp", alt: "Sanitaires décorés — ambiance ludique et colorée" },
];

export default function GalerieLocaux() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <section id="galerie" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
          >
            Un cadre idéal pour s'épanouir
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Des infrastructures modernes, sécurisées et stimulantes — conçues pour favoriser l'apprentissage, la créativité et le bien-être de chaque élève.
          </p>
        </motion.div>

        {/* Masonry-style grid — toutes les 15 photos */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.07, ease: "easeOut" }}
              className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>

        {/* Key facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Encadrement de qualité", desc: "Une équipe pédagogique qualifiée, passionnée et à l'écoute" },
            { label: "Classes à effectif réduit", desc: "Un suivi personnalisé pour favoriser l'épanouissement et la réussite" },
            { label: "Activités artistiques & sportives", desc: "Pour révéler les talents et développer l'esprit d'équipe" },
            { label: "Infrastructures modernes", desc: "Des espaces d'apprentissage sécurisés, équipés et stimulants" },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mb-3" />
              <p className="font-sans text-sm font-semibold text-foreground mb-1.5">{item.label}</p>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={36} />
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50">
              {lightbox + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
