import React from 'react';
import { WhatsAppIcon } from './Icons';

const PHONE = '526142541066';
const MESSAGE = 'Hola ESISCOM, necesito soporte técnico.';

/**
 * Botón flotante de WhatsApp.
 * Reemplaza al asistente de IA (ChatWidget), que dependía de una API key
 * expuesta en el cliente y quedaba inservible en el build de producción.
 */
const WhatsAppButton: React.FC = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105 focus-visible:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[4.25rem] whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-ink opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100"
      >
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
