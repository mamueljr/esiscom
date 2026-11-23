import React, { useState } from 'react';
import { APPS } from '../services/softwareCatalog';

const SCREEN_BY_ID: Record<string, { src: string; alt: string }> = {
  medical: {
    src: 'images/screens/medical/screen-home-desktop.png',
    alt: 'Interfaz de ESISCOM Medical para consultorios médicos',
  },
  nails: {
    src: 'images/screens/nails/screen-home-desktop.png',
    alt: 'Interfaz de ESISCOM Nails para salones de uñas',
  },
  barber: {
    src: 'images/screens/barber/screen-home-desktop.png',
    alt: 'Interfaz de ESISCOM Barber para barberías',
  },
};

const SoftwareShowcase: React.FC<{ onShowSoftware: () => void }> = ({ onShowSoftware }) => {
  const [activeId, setActiveId] = useState(APPS[0].id);
  const activeApp = APPS.find((a) => a.id === activeId) ?? APPS[0];
  const screen = SCREEN_BY_ID[activeApp.id] ?? SCREEN_BY_ID.medical;

  return (
    <section id="esoft-showcase" className="v-section--band border-y border-[var(--color-rule)] scroll-mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-[var(--color-ink)]">
              Sistemas web propios, listos para operar.
            </h2>
            <p className="lead mt-4 text-[var(--color-ink-2)]">
              Software desarrollado en Chihuahua para consultorios, salones de uñas y barberías, sin instalar nada.
            </p>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="v-seg" role="tablist" aria-label="Sistemas ESISCOM Soft">
              {APPS.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  role="tab"
                  id={`tab-${app.id}`}
                  aria-selected={activeId === app.id}
                  aria-controls={`panel-${app.id}`}
                  onClick={() => setActiveId(app.id)}
                >
                  {app.nombre.replace('ESISCOM ', '')}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          id={`panel-${activeApp.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeApp.id}`}
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[var(--gap-columns)] items-center"
        >
          <div className="lg:col-span-7 min-w-0">
            <figure
              className="ticks aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-paper)]"
              data-slot={`esoft-${activeApp.id}`}
              data-kind="product"
              data-alt={screen.alt}
            >
              <img
                src={screen.src}
                width="2880"
                height="1800"
                loading="lazy"
                alt={screen.alt}
                className="w-full h-full object-cover object-top"
              />
            </figure>
          </div>

          <div className="lg:col-span-5 min-w-0">
            <p className="text-[14px] text-[var(--color-muted)]">
              {activeApp.categoria}
            </p>
            <h3 className="mt-2 text-[var(--color-ink)]">
              {activeApp.nombre}
            </h3>
            <p className="mt-4 text-[var(--color-ink-2)] leading-relaxed">
              {activeApp.descripcion}
            </p>

            <ul className="mt-6 border-t border-[var(--color-rule)] divide-y divide-[var(--color-rule)]">
              {activeApp.caracteristicas.slice(0, 4).map((feat) => (
                <li key={feat} className="py-2.5 text-[15px] text-[var(--color-ink-2)]">
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={activeApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="v-btn"
              >
                Abrir {activeApp.nombre.replace('ESISCOM ', '')}
              </a>
              <button
                type="button"
                onClick={onShowSoftware}
                className="v-btn v-btn--line"
              >
                Ver todo ESoft
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
