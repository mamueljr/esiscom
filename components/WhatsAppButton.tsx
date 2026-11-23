import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './Icons';

const PHONE = '526143249716';
const MESSAGE = 'Hola ESISCOM, necesito soporte técnico.';

/**
 * Botón flotante de WhatsApp.
 * Se oculta mientras la sección de contacto está en pantalla.
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
      className={`group fixed bottom-5 right-5 z-[var(--z-sticky)] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] border border-[var(--color-accent)] transition-transform transition-opacity duration-[var(--dur-short)] hover:bg-[var(--color-accent-hi)] sm:bottom-6 sm:right-6 ${
        suppressed ? 'pointer-events-none translate-y-3 opacity-0' : 'opacity-100'
      }`}
    >
      <WhatsAppIcon className="relative h-6 w-6" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[3.5rem] whitespace-nowrap rounded-[var(--radius-card)] bg-[var(--color-paper-3)] border border-[var(--color-rule-2)] px-3 py-1.5 text-[13px] text-[var(--color-ink)] opacity-0 transition-opacity duration-[var(--dur-short)] group-hover:opacity-100"
      >
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
