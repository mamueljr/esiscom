import React from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC<{ onShowServices: () => void }> = ({ onShowServices }) => {
  return (
    <section id="services" className="scroll-mt-20 bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-primary-700">
            <span aria-hidden="true" className="h-px w-10 bg-primary-400" />
            01 — LO QUE HACEMOS
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Tres frentes.{' '}
            <span className="text-primary-700">Cero downtime.</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm shadow-ink/5">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <button
                type="button"
                onClick={onShowServices}
                className="group grid w-full cursor-pointer items-start gap-6 px-5 py-10 text-left transition-colors duration-300 hover:bg-ink sm:px-8 md:grid-cols-12"
              >
                <span className="font-display text-5xl font-extrabold text-ink/10 transition-colors group-hover:text-primary-400 md:col-span-2">
                  0{index + 1}
                </span>
                <span className="md:col-span-5">
                  <span className="block font-display text-2xl font-bold text-ink transition-colors group-hover:text-white sm:text-3xl">
                    {service.title}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60 transition-colors group-hover:border-white/20 group-hover:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300 md:col-span-4">
                  {service.description}
                </span>
                <span className="flex md:col-span-1 md:justify-end">
                  <span className="text-ink transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-400">
                    {service.icon}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onShowServices}
            className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-primary-700"
          >
            Ver precios y servicios
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
