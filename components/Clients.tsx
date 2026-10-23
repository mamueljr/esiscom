import React from 'react';

const ITEMS = [
  'ELÉCTRICOS MARÍN',
  'HELADERÍA GERÓNIMOS',
  'COLEGIO HORIZONS',
  'REPARACIÓN DE EQUIPOS',
  'REDES Y SERVIDORES',
  'SOFTWARE A MEDIDA',
  'SOPORTE REMOTO',
];

const Row: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-8 font-display text-sm font-bold tracking-[0.2em]">
          {item}
        </span>
        <span aria-hidden="true" className="text-xs text-ink/40">
          ◆
        </span>
      </span>
    ))}
  </div>
);

const Clients: React.FC = () => {
  return (
    <div
      aria-label="Clientes y especialidades de ESISCOM"
      className="overflow-hidden border-y border-primary-500/30 bg-primary-400 py-4 text-ink"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
};

export default Clients;
