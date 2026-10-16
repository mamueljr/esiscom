import React from 'react';
import { TESTIMONIALS } from '../constants';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-xs font-bold tracking-[0.3em] text-slate-500 mb-4">
            03 — CLIENTES
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05]">
            Negocios que <span className="bg-primary-400 px-2">no se detienen.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-ink/15 border border-ink/15 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 80} className="h-full">
              <figure className="h-full bg-white p-8 sm:p-10 flex flex-col hover:bg-ink group transition-colors duration-300">
                <span className="font-display text-6xl font-extrabold text-primary-400 leading-none">
                  &ldquo;
                </span>
                <span className="mt-1 text-sm tracking-[0.3em] text-primary-500 font-bold">
                  ★★★★★
                </span>
                <blockquote className="mt-2 flex-1 font-display text-lg font-semibold leading-snug text-ink group-hover:text-white transition-colors">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-ink/15 group-hover:border-white/15 transition-colors">
                  <p className="font-bold text-ink group-hover:text-white transition-colors">
                    {t.author}
                  </p>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
