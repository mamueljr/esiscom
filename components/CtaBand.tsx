import React from 'react';

const CtaBand: React.FC = () => {
  return (
    <section className="bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary-400 px-6 py-14 text-ink shadow-2xl shadow-black/30 sm:px-10 sm:py-16 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,#070b14_1px,transparent_1px),linear-gradient(to_bottom,#070b14_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_70%_at_100%_0%,black,transparent)]"
        ></div>
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h2 className="font-display text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-5xl lg:text-6xl">
              ¿FALLÓ TU EQUIPO HOY?
            </h2>
            <p className="mt-4 max-w-xl text-lg font-medium text-ink/80">
              Mándanos WhatsApp ahora y lo vemos hoy mismo. Diagnóstico rápido,
              precio cerrado, sin vueltas.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
            <a
              href="https://wa.me/526142541066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-ink px-10 py-5 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-ink-soft"
            >
              WhatsApp directo
            </a>
            <a
              href="tel:+526142541066"
              className="inline-flex items-center justify-center rounded-xl border-2 border-ink px-10 py-5 font-display text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-white"
            >
              (614) 254-1066
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
