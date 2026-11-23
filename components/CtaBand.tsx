import React from 'react';

const CtaBand: React.FC = () => {
  return (
    <section className="v-section">
      <div className="container">
        <div className="ticks p-8 sm:p-12 bg-[var(--color-paper-2)] rounded-[var(--radius-card)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="min-w-0">
            <h2 className="text-[var(--color-ink)]">
              ¿Falló tu equipo hoy?
            </h2>
            <p className="lead mt-4 text-[var(--color-ink-2)]">
              Mándanos WhatsApp ahora y lo vemos hoy mismo. Diagnóstico rápido, precio cerrado, sin vueltas.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/526143249716"
              target="_blank"
              rel="noopener noreferrer"
              className="v-btn"
            >
              WhatsApp directo
            </a>
            <a
              href="tel:+526143249716"
              className="v-btn v-btn--line v-num"
            >
              (614) 324-9716
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
