import React from 'react';
import { TESTIMONIALS } from '../constants';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-primary-700">
            <span aria-hidden="true" className="h-px w-10 bg-primary-400" />
            03 — CLIENTES
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Negocios que{' '}
            <span className="text-primary-700">no se detienen.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 80} className="h-full">
              <figure className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-2xl hover:shadow-ink/20 sm:p-10">
                <span className="font-display text-6xl font-extrabold leading-none text-primary-400">
                  &ldquo;
                </span>
                <span className="mt-1 text-sm font-bold tracking-[0.3em] text-primary-700 transition-colors group-hover:text-primary-300">
                  ★★★★★
                </span>
                <blockquote className="mt-2 flex-1 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-white">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/15 pt-6 transition-colors group-hover:border-white/15">
                  <p className="font-bold text-ink transition-colors group-hover:text-white">
                    {t.author}
                  </p>
                  <p className="text-sm text-slate-500 transition-colors group-hover:text-slate-400">
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
