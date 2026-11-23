import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC<{ onShowServices: () => void }> = ({ onShowServices }) => {
  return (
    <section id="services" className="v-section scroll-mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-[var(--color-ink)]">
              Tres frentes técnicos, cero paros.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <button
              type="button"
              onClick={onShowServices}
              className="v-btn v-btn--line"
            >
              Ver catálogo y precios
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-rule)]">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start py-9 border-b border-[var(--color-rule)] px-2 sm:px-4"
            >
              <span className="md:col-span-1 v-num text-[15px] text-[var(--color-muted)]">
                0{index + 1}
              </span>
              <div className="md:col-span-4 min-w-0">
                <h3 className="text-[22px] sm:text-[26px] font-normal text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[13px] border border-[var(--color-rule)] text-[var(--color-ink-2)] px-2.5 py-1 rounded-[var(--radius-card)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="md:col-span-5 text-[var(--color-ink-2)] leading-relaxed">
                {service.description}
              </p>
              <div className="md:col-span-2 flex md:justify-end">
                <button
                  type="button"
                  onClick={onShowServices}
                  className="v-btn v-btn--line v-btn--sm"
                >
                  Ver precios
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
