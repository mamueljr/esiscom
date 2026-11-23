import React, { useState } from 'react';
import VantageCloud from './VantageCloud';

const STATS = [
  { value: '+20', unit: 'años', label: 'Chihuahua' },
  { value: '03', unit: 'áreas', label: 'IT y software' },
  { value: '06', unit: 'días', label: 'Por semana' },
];

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
      className="relative bg-[var(--color-paper)] pt-24 pb-12 lg:pt-24 lg:pb-12 min-h-[min(100dvh,900px)] flex items-center scroll-mt-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[var(--gap-columns)] items-center">
          {/* Left column: plain ground, display head, single-sentence lead, actions, tabular figures */}
          <div className="lg:col-span-5 min-w-0">
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
              Tecnología y software bajo control.
            </h1>

            <p className="lead mt-5 text-[var(--color-ink-2)]">
              Reparación de equipos, soporte IT y sistemas web para negocios en Chihuahua.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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

            {/* Tabular figures inside Vantage corner ticks */}
            <dl className="ticks mt-6 grid grid-cols-3 gap-4 p-4 bg-[var(--color-paper-2)]">
              {STATS.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dt className="text-[13px] text-[var(--color-muted)]">
                    {s.label}
                  </dt>
                  <dd className="v-num text-[24px] sm:text-[28px] text-[var(--color-ink)] mt-1 leading-none">
                    {s.value}
                    <span className="v-unit ml-1">{s.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column: Vantage live point cloud framing real captured ESoft Medical screen */}
          <div className="lg:col-span-7 min-w-0">
            <div className="ticks relative p-4 sm:p-6 bg-[var(--color-paper-2)] rounded-[var(--radius-card)]">
              <VantageCloud className="absolute inset-0 w-full h-full pointer-events-none opacity-75" />
              <div className="relative z-10">
                <figure
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-rule-2)] bg-[var(--color-paper)]"
                  data-slot="hero-product"
                  data-kind="product"
                  data-alt="Captura del sistema ESISCOM Medical para consultorios médicos"
                >
                  <img
                    src="images/screens/medical/screen-home-desktop.png"
                    width="2880"
                    height="1800"
                    fetchPriority="high"
                    alt="Interfaz de ESISCOM Medical para gestión de consultorios médicos"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
