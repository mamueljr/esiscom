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

const Row: React.FC = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="px-8 font-display text-sm font-bold tracking-[0.2em] whitespace-nowrap">
          {item}
        </span>
        <span className="text-xs">◆</span>
      </span>
    ))}
  </div>
);

const Clients: React.FC = () => {
  return (
    <div className="bg-primary-400 text-ink overflow-hidden py-4 border-y-4 border-ink">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default Clients;
