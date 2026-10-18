import React from 'react';
import Reveal from './Reveal';

const WHATSAPP = 'https://wa.me/526142541066';
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

const TALLER = [
  {
    nombre: 'Formateo Estándar',
    precio: '$600',
    incluye: [
      'Instalación limpia del sistema operativo',
      'Drivers oficiales del fabricante',
      'Programas básicos (navegadores, WinRAR, AnyDesk, Foxit Reader, LibreOffice)',
    ],
    nota: 'No incluye respaldo: el equipo se recibe sin archivos que conservar.',
  },
  {
    nombre: 'Formateo Pro + Respaldo',
    badge: 'El más elegido',
    precio: '$900',
    incluye: [
      'Todo lo del Estándar',
      'Respaldo y migración de documentos, fotos y descargas',
      'Verificación contigo antes de formatear',
      'Hasta 100 GB incluidos; cada 50 GB extra +$100',
    ],
  },
  {
    nombre: 'Renovación Total',
    precio: 'Mano de obra $1,450 + SSD 240 GB desde $980',
    incluye: [
      'Formateo Pro',
      'Limpieza física profunda (polvo en componentes y ventiladores)',
      'Pasta térmica nueva',
      'Instalación de SSD o memoria RAM',
    ],
    nota: 'Te cotizamos el componente antes de instalarlo. El arranque en segundos con SSD es la mejora que más notan nuestros clientes en equipos antiguos.',
  },
  {
    nombre: 'Limpieza de virus y optimización',
    precio: '$450',
    incluye: [
      'Eliminación de virus, malware y publicidad no deseada',
      'Sin borrar tus archivos ni tus programas',
    ],
    nota: 'Si el problema requiere reinstalar el sistema, te lo explicamos y se aplica el precio del formateo.',
  },
  {
    nombre: 'Mantenimiento preventivo',
    precio: '$350',
    incluye: [
      'Limpieza física interna, sopleteo y pasta térmica',
      'Evita sobrecalentamiento y ruido',
    ],
  },
  {
    nombre: 'Diagnóstico en taller',
    precio: '$200',
    incluye: ['Revisión técnica con informe'],
    nota: 'Se abona al costo de la reparación si decides continuar con nosotros.',
  },
];

const EXTERNO = [
  {
    nombre: 'Soporte en sitio',
    precio: '$500 (visita base)',
    incluye: [
      'Traslado dentro de la zona estándar',
      'Diagnóstico y hasta 60 min de trabajo: redes, carpetas compartidas, impresoras, periféricos, fallas generales',
    ],
  },
  {
    nombre: 'Hora adicional en sitio',
    precio: '$300 (bloques de 30 min = $150)',
    incluye: ['Empresas: mínimo 2 horas por visita'],
  },
  {
    nombre: 'Soporte remoto',
    precio: '$300 (hasta 45 min por AnyDesk)',
    incluye: [
      'Problemas de software y configuraciones',
      'Tiempo extra: $150 c/ 30 min',
    ],
  },
  {
    nombre: 'Formateo a domicilio',
    precio: '$1,300',
    incluye: ['Reinstalación del sistema en tu domicilio u oficina'],
    nota: 'Sin respaldo; si lo necesitas, te cotizamos según volumen de datos.',
  },
  {
    nombre: 'Diagnóstico sin reparación en sitio',
    precio: '$350',
    incluye: ['Traslado y revisión técnica'],
    nota: 'Si el equipo requiere pieza mayor y no se puede reparar en el momento.',
  },
];

const ZONAS = [
  { zona: 'Zona 1', dist: 'Hasta 4 km (10–12 min)', cargo: 'Sin cargo' },
  { zona: 'Zona 2', dist: 'De 4 a 10 km (12–25 min)', cargo: '+$150' },
  { zona: 'Zona 3', dist: 'De 10 a 15 km (25–35 min)', cargo: '+$250' },
  { zona: 'Fuera de zona', dist: 'Más de 15 km (más de 35 min)', cargo: 'Cotización aparte' },
];

const EMPRESAS = [
  {
    nombre: 'ESISCOM Care: plan mensual',
    precio: 'Cotización personalizada',
    incluye: [
      'Mantenimiento programado + soporte para equipos de oficina',
      'Respaldo automático de la información importante',
      'Soporte remoto incluido',
    ],
    cta: 'Solicita tu propuesta',
  },
  {
    nombre: 'Bolsa de 5 horas prepagadas',
    precio: '$1,500',
    incluye: [
      'Vigencia de 60 días',
      'Soporte remoto o en sitio',
      'Cada visita en sitio descuenta mínimo 1 hora',
    ],
  },
  {
    nombre: 'Revisión técnica de oficina',
    precio: 'Gratis',
    incluye: [
      'Revisión de equipos, red y respaldos',
      'Informe por escrito',
    ],
  },
];

const COMO_TRABAJAMOS = [
  'Garantía de 30 días sobre la mano de obra, en la misma falla atendida. No cubre virus nuevos, fallas de hardware ni mal uso del equipo.',
  'Respaldos: verificamos contigo la información antes de formatear. Te recomendamos conservar siempre una copia propia de lo irremplazable.',
  'Piezas y hardware: anticipo del 50% al aprobar la cotización.',
  'Licencias: la paquetería incluida es de uso libre. Las licencias comerciales de Windows y Office se cotizan por separado o las aporta el cliente.',
  'Equipos en taller: te avisamos cuando estén listos. Pasados 30 días naturales sin recogerlos, pueden generar un costo de resguardo.',
];

const POR_QUE = [
  'Más de 20 años atendiendo hogares y empresas en Chihuahua.',
  'Precios publicados, sin cobros sorpresa.',
  'Ingeniero en Sistemas Computacionales a cargo del servicio.',
];

const ServiceCard: React.FC<{
  s: { nombre: string; precio: string; incluye: string[]; nota?: string; badge?: string };
}> = ({ s }) => (
  <div className="bg-ink-soft border border-white/10 rounded-xl p-6 sm:p-8">
    <div className="flex flex-wrap items-center gap-3">
      <h3 className="font-display text-xl font-bold">{s.nombre}</h3>
      {s.badge && (
        <span className="bg-primary-400 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
          {s.badge}
        </span>
      )}
    </div>
    <p className="mt-1 text-2xl font-extrabold text-primary-400">{s.precio}</p>
    <ul className="mt-4 space-y-2 text-slate-300 text-sm sm:text-base">
      {s.incluye.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-primary-400 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {s.nota && <p className="mt-4 text-xs text-slate-500 italic">{s.nota}</p>}
  </div>
);

const ServicesDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div id="servicios-detalle" className="min-h-screen bg-ink text-white pb-16">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary-400 focus:text-ink focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 bg-ink/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-2">
          <button
            onClick={onBack}
            className="group flex shrink-0 items-center gap-2 text-slate-300 hover:text-primary-400 transition-colors"
            aria-label="Volver al inicio"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-display text-sm font-semibold tracking-[0.1em]">Volver</span>
          </button>
          <h1 className="min-w-0 flex-1 truncate text-center font-display text-base sm:text-3xl font-extrabold tracking-tight">
            Servicios y Precios
          </h1>
          <div className="w-14 shrink-0 sm:w-20" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Reveal>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Soporte técnico y soluciones de cómputo en Chihuahua. Tu computadora
            funcionando bien, sin vueltas ni sorpresas.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Atendemos a hogares y pequeñas empresas en taller, a domicilio y por
            acceso remoto. Precios claros desde el inicio y 30 días de garantía en
            nuestro trabajo.
          </p>
          <a
            href={wa('Hola ESISCOM, quiero cotizar un servicio')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center px-7 py-3 bg-primary-400 hover:bg-primary-300 text-ink font-display text-sm font-bold uppercase tracking-[0.12em] transition-colors"
          >
            Cotiza por WhatsApp
          </a>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            Servicios en taller
          </h2>
          <div className="space-y-6">
            {TALLER.map((s) => (
              <ServiceCard key={s.nombre} s={s} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            Soporte técnico externo (hogar y oficinas)
          </h2>
          <div className="space-y-6">
            {EXTERNO.map((s) => (
              <ServiceCard key={s.nombre} s={s} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h3 className="font-display text-lg font-bold mb-4 text-slate-200">Zonas de cobertura</h3>
          <div className="bg-ink-soft border border-white/10 rounded-xl overflow-x-auto">
            <table className="w-full min-w-[500px] text-slate-300 text-left">
              <thead>
                <tr className="bg-white/5 text-white text-sm">
                  <th className="px-4 py-3">Zona</th>
                  <th className="px-4 py-3">Distancia / tiempo</th>
                  <th className="px-4 py-3">Cargo</th>
                </tr>
              </thead>
              <tbody>
                {ZONAS.map((z) => (
                  <tr key={z.zona} className="border-t border-white/10 text-sm">
                    <td className="px-4 py-3 font-semibold">{z.zona}</td>
                    <td className="px-4 py-3">{z.dist}</td>
                    <td className="px-4 py-3 text-primary-400 font-bold">{z.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            Para empresas
          </h2>
          <div className="space-y-6">
            {EMPRESAS.map((s) => (
              <div key={s.nombre} className="bg-ink-soft border border-white/10 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{s.nombre}</h3>
                    <p className="mt-1 text-2xl font-extrabold text-primary-400">{s.precio}</p>
                  </div>
                  {s.cta && (
                    <a
                      href={wa(`Hola ESISCOM, quiero información sobre ${s.nombre}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center justify-center px-6 py-3 border-2 border-primary-400 text-primary-400 font-display text-sm font-bold uppercase tracking-[0.1em] hover:bg-primary-400 hover:text-ink transition-colors"
                    >
                      {s.cta}
                    </a>
                  )}
                </div>
                <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
                  {s.incluye.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            Cómo trabajamos
          </h2>
          <ul className="space-y-4 text-slate-300 leading-relaxed">
            {COMO_TRABAJAMOS.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={400}>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            Por qué ESISCOM
          </h2>
          <ul className="space-y-3 text-slate-300 leading-relaxed">
            {POR_QUE.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary-400 mt-1 text-lg">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={wa('Hola ESISCOM, quiero más información')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 border-2 border-primary-400 text-primary-400 font-display text-sm font-bold uppercase tracking-[0.12em] hover:bg-primary-400 hover:text-ink transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </Reveal>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xs text-slate-500">
          <span className="font-display tracking-[0.2em]">ESISCOM</span>{' '}
          — Chihuahua, MX · Precios vigentes al momento de la cotización.
        </div>
      </footer>
    </div>
  );
};

export default ServicesDetail;
