import React, { useState } from 'react';
import { APPS } from '../services/softwareCatalog';
import VantageCloud from './VantageCloud';

function getOpenState(now: Date): { open: boolean; detail: string } {
  const utcH = now.getUTCHours();
  const utcD = now.getUTCDay();
  const h = (utcH - 6 + 24) % 24;
  const d = utcH < 6 ? (utcD + 6) % 7 : utcD;

  const isWeekday = d >= 1 && d <= 5;
  const open =
    (isWeekday && h >= 9 && h < 18) || (d === 6 && h >= 9 && h < 13);

  if (open) {
    const close = isWeekday ? '6:00 pm' : '1:00 pm';
    return { open: true, detail: `Abierto ahora, cerramos ${close}` };
  }
  let next = 'hoy 9:00 am';
  if (d === 0 || (d === 6 && h >= 13) || (isWeekday && h >= 18)) {
    next = d === 5 || d === 6 ? 'lunes 9:00 am' : 'mañana 9:00 am';
    if (d === 0) next = 'lunes 9:00 am';
  } else if (isWeekday && h < 9) {
    next = 'hoy 9:00 am';
  }
  return { open: false, detail: `Cerrado, abrimos ${next}` };
}

const Hero: React.FC<{ onShowServices: () => void }> = ({ onShowServices }) => {
  const [openState] = useState(() => getOpenState(new Date()));

  return (
    <section
      id="intro"
      className="relative bg-[var(--color-paper)] text-[var(--color-ink)] pt-24 pb-12 lg:pt-24 lg:pb-12 min-h-[min(100dvh,900px)] flex items-center scroll-mt-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[var(--gap-columns)] items-center">
          {/* Left column: exact intro headline & copy preserved on plain Vantage ground */}
          <div className="lg:col-span-6 min-w-0">
            <div
              role="status"
              className="inline-flex items-center gap-2 mb-5 text-[14px] text-[var(--color-ink-2)]"
            >
              <span
                aria-hidden="true"
                className={`inline-block w-2 h-2 rounded-full ${
                  openState.open ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-muted)]'
                }`}
              />
              <span>{openState.detail}</span>
            </div>

            <h1 className="text-[var(--color-ink)]">
              Tu tecnología bajo control.
            </h1>

            <p className="lead mt-5 text-[var(--color-ink-2)]">
              Reparación de equipos, soporte IT y software a la medida para negocios que no pueden detenerse. Diagnóstico rápido, trato directo y resultados garantizados.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="v-btn">
                Agendar diagnóstico
              </a>
              <a href="#esoft-showcase" className="v-btn v-btn--line">
                Explorar ESoft
              </a>
              <a
                href="#remote-support"
                className="px-2 py-2 min-h-[44px] inline-flex items-center text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] underline underline-offset-4 whitespace-nowrap transition-colors"
              >
                Soporte remoto
              </a>
              <button
                type="button"
                onClick={onShowServices}
                className="px-2 py-2 min-h-[44px] inline-flex items-center text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] underline underline-offset-4 whitespace-nowrap transition-colors"
              >
                Ver precios
              </button>
            </div>
          </div>

          {/* Right column: Vantage point cloud + corner-ticked workshop photo & ESoft live panel */}
          <div className="lg:col-span-6 min-w-0">
            <div className="ticks relative p-4 sm:p-5 bg-[var(--color-paper-2)] rounded-[var(--radius-card)]">
              <VantageCloud className="absolute inset-0 w-full h-full pointer-events-none opacity-70" />
              <div className="relative z-10 space-y-4">
                <figure
                  className="aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-rule-2)] bg-[var(--color-paper)]"
                  data-slot="hero-workshop"
                  data-alt="Taller técnico de reparación de hardware y diagnóstico ESISCOM"
                >
                  <img
                    src="images/generated/workshop-bench.jpg"
                    width="1408"
                    height="768"
                    fetchPriority="high"
                    alt="Técnico de ESISCOM trabajando en diagnóstico de hardware"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </figure>

                {/* Vantage corner-ticked ESoft live systems ledger */}
                <div className="ticks bg-[var(--color-paper)] rounded-[var(--radius-card)] p-4">
                  <div className="flex items-center justify-between pb-2.5 border-b border-[var(--color-rule)] text-[13px] text-[var(--color-muted)]">
                    <span>ESISCOM Soft</span>
                    <span className="v-num text-[var(--color-accent)]">3 sistemas en línea</span>
                  </div>
                  <ul className="mt-2 divide-y divide-[var(--color-rule)] text-[14px]">
                    {APPS.map((app) => (
                      <li key={app.id} className="py-2 flex items-center justify-between gap-2">
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          {app.nombre}
                        </a>
                        <span className="text-[13px] text-[var(--color-muted)]">
                          {app.categoria.replace('Para ', '')}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 pt-2.5 border-t border-[var(--color-rule)] flex items-center justify-between text-[13px]">
                    <span className="v-num text-[var(--color-muted)]">+20 años en Chihuahua</span>
                    <a
                      href="#esoft-showcase"
                      className="text-[var(--color-accent)] hover:underline whitespace-nowrap"
                    >
                      Ver pantallas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
