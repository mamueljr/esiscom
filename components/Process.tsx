import React from 'react';

const COMMITMENTS = [
  {
    title: 'Diagnóstico honesto',
    desc: 'Revisamos tu equipo y te decimos la falla real. Si no conviene reparar, te lo decimos.',
  },
  {
    title: 'Cotización cerrada',
    desc: 'Precio fijo antes de tocar nada. Sin sorpresas ni letras chicas en la factura.',
  },
  {
    title: 'Reparación garantizada',
    desc: 'Piezas de calidad y trabajo por escrito. Probamos todo antes de entregar.',
  },
  {
    title: 'Entrega y seguimiento',
    desc: 'Te explicamos qué se hizo y damos seguimiento post-servicio.',
  },
];

const Process: React.FC = () => {
  return (
    <section className="v-section--band border-y border-[var(--color-rule)]">
      <div className="container">
        <div className="pb-8 border-b border-[var(--color-rule)]">
          <h2 className="text-[var(--color-ink)]">
            Sin sorpresas. Sin letras chicas.
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMMITMENTS.map((s, idx) => (
            <li
              key={s.title}
              className="ticks p-6 bg-[var(--color-paper)] rounded-[var(--radius-card)] flex flex-col"
            >
              <span className="v-num text-[14px] text-[var(--color-accent)]">
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-[19px] font-normal text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
