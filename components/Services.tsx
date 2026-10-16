import React from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-xs font-bold tracking-[0.3em] text-slate-500 mb-4">
            01 — LO QUE HACEMOS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink max-w-3xl leading-[1.05]">
            Tres frentes. <span className="bg-primary-400 px-2">Cero downtime.</span>
          </h2>
        </Reveal>

        <div className="mt-14 border-t-2 border-ink">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <a
                href="#contact"
                className="group grid md:grid-cols-12 gap-6 items-start py-10 border-b-2 border-ink px-2 sm:px-6 transition-colors duration-300 hover:bg-ink"
              >
                <span className="md:col-span-2 font-display text-5xl font-extrabold text-ink/15 group-hover:text-primary-400 transition-colors">
                  0{index + 1}
                </span>
                <span className="md:col-span-5">
                  <span className="block font-display text-2xl sm:text-3xl font-bold text-ink group-hover:text-white transition-colors">
                    {service.title}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold uppercase tracking-[0.14em] border border-ink/25 text-ink/70 px-3 py-1 group-hover:border-white/25 group-hover:text-slate-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="md:col-span-4 text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {service.description}
                </span>
                <span className="md:col-span-1 flex md:justify-end">
                  <span className="text-ink group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    {service.icon}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
