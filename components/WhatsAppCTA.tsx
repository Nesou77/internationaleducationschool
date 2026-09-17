"use client"

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/212666298815"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-cta fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[52px] h-[52px] md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center bg-[#25D366] shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_6px_22px_rgba(37,211,102,0.4)]"
      title="Contactez-nous sur WhatsApp"
      aria-label="Contacter IES sur WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-white" />
    </a>
  );
}
