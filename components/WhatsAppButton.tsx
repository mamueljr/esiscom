import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './Icons';

const PHONE = '526142541066';
const MESSAGE = 'Hola ESISCOM, necesito soporte técnico.';

/**
 * Botón flotante de WhatsApp.
 * Reemplaza al asistente de IA (ChatWidget), que dependía de una API key
 * expuesta en el cliente y quedaba inservible en el build de producción.
 *
 * Se oculta mientras la sección de contacto está en pantalla: ahí ya hay un
 * botón de WhatsApp propio y el flotante tapaba los campos del formulario.
 */
const WhatsAppButton: React.FC = () => {
  const [suppressed, setSuppressed] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contact');
    if (!contact) return;
    const obs = new IntersectionObserver(
      ([entry]) => setSuppressed(entry.isIntersecting),
      { threshold: 0.12 }
    );
    obs.observe(contact);
    return () => obs.disconnect();
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      aria-hidden={suppressed}
      tabIndex={suppressed ? -1 : 0}
      className={`group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/40 transition-all duration-200 hover:scale-105 focus-visible:scale-105 sm:bottom-6 sm:right-6 ${
        suppressed ? 'pointer-events-none translate-y-3 opacity-0' : 'opacity-100'
      }`}
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
