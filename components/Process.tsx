import React from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico honesto',
    desc: 'Revisamos tu equipo y te decimos la falla real. Si no conviene reparar, te lo decimos.',
  },
  {
    n: '02',
    title: 'Cotización cerrada',
    desc: 'Precio fijo antes de tocar nada. Sin sorpresas ni letras chicas en la factura.',
  },
  {
    n: '03',
    title: 'Reparación garantizada',
    desc: 'Piezas de calidad y trabajo por escrito. Probamos todo antes de entregar.',
  },
  {
    n: '04',
    title: 'Entrega y seguimiento',
    desc: 'Te explicamos qué se hizo y damos seguimiento post-servicio.',
  },
];

const Process: React.FC = () => {
  return (
    <section className="border-t border-white/10 bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 flex items-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-primary-400">
          <span aria-hidden="true" className="h-px w-10 bg-primary-400/70" />
          04 — CÓMO TRABAJAMOS
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Sin sorpresas. <span className="text-primary-400">Sin letras chicas.</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="panel-sheen group rounded-2xl border border-white/10 bg-ink-soft/60 p-8 transition-colors hover:border-primary-400/50 hover:bg-ink-soft"
            >
              <p className="font-display text-5xl font-extrabold text-primary-400/80 transition-colors group-hover:text-primary-300">
                {s.n}
              </p>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
