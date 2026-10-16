import React from 'react';

const CtaBand: React.FC = () => {
  return (
    <section className="bg-primary-400 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex-1">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.0]">
            ¿FALLÓ TU EQUIPO HOY?
          </h2>
          <p className="mt-4 text-lg font-medium text-ink/80 max-w-xl">
            Mándanos WhatsApp ahora y lo vemos hoy mismo. Diagnóstico rápido,
            precio cerrado, sin vueltas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
          <a
            href="https://wa.me/526142541066"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-10 py-5 bg-ink text-white font-display text-sm font-bold uppercase tracking-[0.12em] hover:bg-slate-900 transition-colors"
          >
            WhatsApp directo
          </a>
          <a
            href="tel:+526142541066"
            className="inline-flex justify-center items-center px-10 py-5 border-2 border-ink font-display text-sm font-bold uppercase tracking-[0.12em] hover:bg-ink hover:text-white transition-colors"
          >
            (614) 254-1066
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
