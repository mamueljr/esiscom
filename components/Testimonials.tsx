import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="v-section">
      <div className="container">
        <h2 className="text-[var(--color-ink)]">
          Negocios que no se detienen.
        </h2>

        <div className="mt-12 border-t border-[var(--color-rule)] divide-y divide-[var(--color-rule)]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-[var(--gap-columns)] items-baseline"
            >
              <blockquote className="lg:col-span-8 text-[20px] sm:text-[22px] font-light leading-snug text-[var(--color-ink)]">
                “{t.quote}”
              </blockquote>
              <figcaption className="lg:col-span-4 lg:text-right">
                <p className="text-[15px] font-normal text-[var(--color-ink)]">
                  {t.author}
                </p>
                <p className="text-[14px] text-[var(--color-muted)]">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
