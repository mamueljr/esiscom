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
    <section className="py-24 bg-ink text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-bold tracking-[0.3em] text-primary-400 mb-4">
            04 — CÓMO TRABAJAMOS
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-3xl">
          Sin sorpresas. <span className="text-primary-400">Sin letras chicas.</span>
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-ink p-8 hover:bg-ink-soft transition-colors group">
              <p className="font-display text-5xl font-extrabold text-primary-400/90 group-hover:text-primary-400">
                {s.n}
              </p>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
