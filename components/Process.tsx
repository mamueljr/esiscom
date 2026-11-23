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
        <h2 className="text-[var(--color-ink)]">
          Sin sorpresas. Sin letras chicas.
        </h2>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-rule)]">
          {COMMITMENTS.map((s, idx) => (
            <li
              key={s.title}
              className="py-8 sm:pr-6 border-b lg:border-b-0 border-[var(--color-rule)]"
            >
              <span className="v-num text-[14px] text-[var(--color-accent)]">
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-[20px] font-normal text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] text-[var(--color-ink-2)] leading-relaxed">
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
