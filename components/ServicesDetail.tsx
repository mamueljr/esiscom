import React, { useEffect } from 'react';
import Reveal from './Reveal';
import { WrenchIcon, WhatsAppIcon } from './Icons';
import {
  CATALOGO,
  formatMXN,
  waLink,
  type Punto,
  type Servicio,
  type Zona,
} from '../services/servicesCatalog';

const PAGE_TITLE = 'Servicios y Precios | ESISCOM Chihuahua';
const META_DESCRIPTION =
  'Precios claros de soporte técnico en Chihuahua: formateo, respaldo, mantenimiento, soporte en sitio y remoto, y planes para empresas. Cotiza por WhatsApp.';

const NAV_ANCHORS = [
  { href: '#taller', label: 'Taller' },
  { href: '#soporte-externo', label: 'Soporte externo' },
  { href: '#zonas', label: 'Zonas' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
];

const HERO_BADGES = [
  { label: '30 días de garantía', Icon: ShieldCheckIcon },
  { label: 'Precios publicados', Icon: TagIcon },
  { label: 'Taller, domicilio y remoto', Icon: WrenchIcon },
  { label: 'Ingeniero a cargo', Icon: UserCheckIcon },
];

const POR_QUE_ICONS = [UserCheckIcon, TagIcon, ShieldCheckIcon];

/* ------------------------------------------------------------------ */
/* Íconos en línea (sin dependencias)                                  */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="9" className="fill-primary-400/15" />
      <path
        d="m6 10.3 2.6 2.6L14 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XMarkIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="9" className="fill-white/5" />
      <path
        d="m7 7 6 6m0-6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m15 19-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 3 5 6v5c0 4.4 2.9 7.8 7 10 4.1-2.2 7-5.6 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2.1 2.1 4.4-4.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 12.2V5a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-6.2 6.2a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1-.6-1.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" />
    </svg>
  );
}

function UserCheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 20c.5-3.2 2.5-5.2 5.5-5.2 1.1 0 2.1.3 2.9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m14.5 16.8 1.8 1.8 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 11v5m0-8.2v.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Componentes de la página                                            */
/* ------------------------------------------------------------------ */

const SectionHeading: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id, children }) => (
  <div>
    <span
      aria-hidden="true"
      className="mb-4 block h-1 w-12 rounded-full bg-primary-400"
    />
    <h2
      id={id}
      className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
    >
      {children}
    </h2>
  </div>
);

const PriceBlock: React.FC<{ servicio: Servicio }> = ({ servicio }) => (
  <div>
    {servicio.precioEtiqueta && (
      <p className="text-sm font-medium text-slate-400">
        {servicio.precioEtiqueta}
      </p>
    )}
    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className="font-display text-4xl font-extrabold leading-none tracking-tight text-primary-400 sm:text-5xl">
        {servicio.precioTexto ?? formatMXN(servicio.precio ?? 0)}
      </span>
      {!servicio.precioTexto && servicio.precio !== null && (
        <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary-400/90">
          MXN
        </span>
      )}
      {servicio.precioSufijo && (
        <span className="basis-full text-sm text-slate-400">
          {servicio.precioSufijo}
        </span>
      )}
    </div>
    {servicio.precioDetalle && (
      <p className="mt-2 text-sm font-medium text-slate-300">
        {servicio.precioDetalle}
      </p>
    )}
  </div>
);

const ServiceCard: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  const mensaje =
    servicio.mensajeWhatsApp ??
    `Hola ESISCOM, quiero cotizar ${servicio.nombre}.`;

  return (
    <article
      className={[
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-ink-soft p-6',
        'transition-[transform,border-color,box-shadow] duration-300 sm:p-8',
        'hover:-translate-y-1 hover:border-primary-400 hover:shadow-2xl hover:shadow-black/40',
        'focus-within:border-primary-400 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        servicio.ancha ? 'md:col-span-2' : '',
        servicio.destacado ? 'border-primary-400/70' : 'border-white/10',
      ].join(' ')}
    >
      {servicio.destacado && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary-400/10 blur-3xl"
        />
      )}

      <div className="relative flex h-full flex-col">
        {servicio.badge && (
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary-400 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
            {servicio.badge}
          </span>
        )}

        <div
          className={
            servicio.ancha
              ? 'md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8'
              : ''
          }
        >
          <div>
            <h3 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
              {servicio.nombre}
            </h3>
            <div className="mt-4">
              <PriceBlock servicio={servicio} />
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <ul className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {servicio.incluye.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {servicio.nota && (
              <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
                {servicio.nota}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-bold text-primary-400 transition-colors hover:text-primary-300"
          >
            {servicio.ctaTexto ?? 'Cotizar este servicio'}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </article>
  );
};

const ZoneCard: React.FC<{ zona: Zona }> = ({ zona }) => (
  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-soft p-6 transition-colors duration-200 hover:border-primary-400/60">
    <span className="inline-flex w-fit items-center rounded-full border border-primary-400/30 bg-primary-400/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-400">
      {zona.nombre}
    </span>

    <dl className="mt-6 space-y-4 text-sm leading-relaxed">
      <div className="flex items-start justify-between gap-4">
        <dt className="text-slate-400">Distancia</dt>
        <dd className="text-right font-medium text-slate-200">
          {zona.distancia}
        </dd>
      </div>
      <div className="flex items-start justify-between gap-4">
        <dt className="text-slate-400">Tiempo</dt>
        <dd className="text-right font-medium text-slate-200">{zona.tiempo}</dd>
      </div>
    </dl>

    <p className="mt-6 border-t border-white/10 pt-4 font-display text-lg font-extrabold text-primary-400">
      {zona.cargo}
    </p>
  </article>
);

const AccordionItem: React.FC<{ punto: Punto; index: number }> = ({
  punto,
  index,
}) => (
  <details className="group" open={index === 0}>
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-4 text-left transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
      <span className="flex items-start gap-4">
        <span className="mt-0.5 font-display text-xs font-bold tracking-[0.16em] text-primary-400">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-display text-base font-bold text-white sm:text-lg">
          {punto.titulo}
        </span>
      </span>
      <ChevronDownIcon className="h-5 w-5 shrink-0 text-primary-400 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
    </summary>
    <div className="px-6 pb-6 pl-14 text-sm leading-relaxed text-slate-400 sm:text-base">
      {punto.texto}
    </div>
  </details>
);

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

const ServicesDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const previousDescription = meta?.getAttribute('content') ?? '';

    document.title = PAGE_TITLE;
    if (meta) meta.setAttribute('content', META_DESCRIPTION);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'esiscom-servicios-localbusiness';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'ESISCOM',
      areaServed: { '@type': 'City', name: 'Chihuahua, México' },
    });
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      if (meta) meta.setAttribute('content', previousDescription);
      script.remove();
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === '#servicios-detalle') return;

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
      ? 'auto'
      : 'smooth';

    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior, block: 'start' });
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      id="servicios-detalle"
      className="min-h-screen bg-ink pb-24 text-white sm:pb-28"
    >
      <a
        href="#contenido-servicios"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:bg-primary-400 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl px-1 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-primary-300 sm:px-2"
            aria-label="Volver al inicio"
          >
            <ChevronLeftIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
            <span className="hidden min-[360px]:inline">Volver</span>
          </button>

          <span className="min-w-0 flex-1 truncate text-center font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
            Servicios y Precios
          </span>

          <div className="w-7 shrink-0 min-[360px]:w-20" aria-hidden="true" />
        </div>
      </header>

      <main id="contenido-servicios" tabIndex={-1} className="scroll-mt-24 focus:outline-none">
        {/* Hero ------------------------------------------------------- */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid opacity-25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-primary-400/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-[1100px] px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-primary-400">
                Soporte técnico en Chihuahua
              </p>

              <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tu computadora funcionando bien, sin vueltas ni{' '}
                <span className="text-primary-400">sorpresas</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Atendemos a hogares y pequeñas empresas en taller, a domicilio y
                por acceso remoto. Precios claros desde el inicio y 30 días de
                garantía en nuestro trabajo.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={waLink('Hola ESISCOM, quiero cotizar un servicio')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-400 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-primary-300"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Cotiza por WhatsApp
                </a>
                <a
                  href="#empresas"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-primary-400 hover:text-primary-300"
                >
                  Ver planes para empresas
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {HERO_BADGES.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex min-h-[3.5rem] items-center gap-2 rounded-2xl border border-white/10 bg-ink-soft/80 px-3 py-3 text-xs font-medium leading-snug text-slate-300 sm:px-4 sm:text-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary-400" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex max-w-3xl items-start gap-2 pr-16 text-sm leading-relaxed text-slate-400 sm:pr-0">
                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>
                  Precios en pesos mexicanos (MXN). Si requieres factura, se
                  agrega IVA.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Navegación rápida ----------------------------------------- */}
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Navegación rápida por secciones"
            className="border-b border-white/10"
          >
            <ul className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 py-4 sm:mx-0 sm:flex-wrap sm:px-0">
              {NAV_ANCHORS.map((item) => (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-white/15 bg-ink-soft px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-primary-400 hover:text-primary-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16 py-12 sm:space-y-24 sm:py-16">
            {/* Taller ------------------------------------------------ */}
            <section
              id="taller"
              aria-labelledby="taller-title"
              className="scroll-mt-24"
            >
              <Reveal>
                <SectionHeading id="taller-title">
                  Servicios en taller
                </SectionHeading>
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {CATALOGO.taller.map((servicio) => (
                  <ServiceCard key={servicio.id} servicio={servicio} />
                ))}
              </div>
            </section>

            {/* Soporte externo --------------------------------------- */}
            <section
              id="soporte-externo"
              aria-labelledby="soporte-externo-title"
              className="scroll-mt-24"
            >
              <Reveal>
                <SectionHeading
                  id="soporte-externo-title"
                >
                  Soporte técnico externo
                </SectionHeading>
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {CATALOGO.externo.map((servicio) => (
                  <ServiceCard key={servicio.id} servicio={servicio} />
                ))}
              </div>
            </section>

            {/* Zonas -------------------------------------------------- */}
            <section
              id="zonas"
              aria-labelledby="zonas-title"
              className="scroll-mt-24"
            >
              <Reveal>
                <SectionHeading id="zonas-title">
                  Zonas de cobertura
                </SectionHeading>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {CATALOGO.zonas.map((zona) => (
                  <ZoneCard key={zona.id} zona={zona} />
                ))}
              </div>
            </section>

            {/* Empresas ----------------------------------------------- */}
            <section
              id="empresas"
              aria-labelledby="empresas-title"
              className="scroll-mt-24"
            >
              <Reveal>
                <SectionHeading
                  id="empresas-title"
                >
                  Para empresas
                </SectionHeading>
              </Reveal>

              <Reveal className="mt-8">
                <article className="overflow-hidden rounded-[20px] border-2 border-primary-400/60 bg-ink-soft">
                  <div className="border-b border-white/10 bg-primary-400/[0.04] p-6 sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <span className="inline-flex items-center rounded-full border border-primary-400/30 bg-primary-400/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-400">
                          Plan mensual
                        </span>
                        <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                          {CATALOGO.care.nombre}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                          {CATALOGO.care.subtitulo}
                        </p>
                      </div>

                      <a
                        href={waLink(CATALOGO.care.mensajeWhatsApp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-primary-400 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-primary-300"
                      >
                        {CATALOGO.care.ctaTexto}
                        <ArrowRightIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-ink/40 p-6">
                      <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-400">
                        Incluye
                      </h4>
                      <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
                        {CATALOGO.care.incluye.map((item) => (
                          <li key={item} className="flex items-start gap-4">
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-ink/40 p-6">
                      <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
                        No incluye
                      </h4>
                      <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-400">
                        {CATALOGO.care.noIncluye.map((item) => (
                          <li key={item} className="flex items-start gap-4">
                            <XMarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-6 sm:p-8">
                    <p className="flex items-start gap-4 rounded-2xl border border-primary-400/20 bg-primary-400/[0.06] p-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                      <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                      <span>{CATALOGO.care.nota}</span>
                    </p>
                  </div>
                </article>
              </Reveal>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <ServiceCard servicio={CATALOGO.bolsa} />
                <ServiceCard servicio={CATALOGO.revision} />
              </div>
            </section>

            {/* Cómo trabajamos ---------------------------------------- */}
            <section
              id="como-trabajamos"
              aria-labelledby="como-trabajamos-title"
              className="scroll-mt-24"
            >
              <Reveal>
                <SectionHeading id="como-trabajamos-title">
                  Cómo trabajamos
                </SectionHeading>
              </Reveal>

              <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
                {CATALOGO.comoTrabajamos.map((punto, index) => (
                  <AccordionItem
                    key={punto.titulo}
                    punto={punto}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Por qué ESISCOM ---------------------------------------- */}
            <section aria-labelledby="por-que-title" className="scroll-mt-24">
              <Reveal>
                <SectionHeading id="por-que-title">
                  Por qué ESISCOM
                </SectionHeading>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {CATALOGO.porQue.map((punto, index) => {
                  const Icon = POR_QUE_ICONS[index] ?? ShieldCheckIcon;
                  return (
                    <article
                      key={punto.titulo}
                      className="rounded-2xl border border-white/10 bg-ink-soft p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-400/10 text-primary-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-base font-bold text-white">
                        {punto.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {punto.texto}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-8">
                <a
                  href={waLink('Hola ESISCOM, quiero más información')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary-400 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.1em] text-primary-400 transition-colors hover:bg-primary-400 hover:text-ink"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1100px] px-4 py-8 text-center text-sm leading-relaxed text-slate-400 sm:px-6 lg:px-8">
          <span className="font-display tracking-[0.2em] text-slate-300">
            ESISCOM
          </span>{' '}
          — Chihuahua, MX · Precios vigentes al momento de la cotización.
        </div>
      </footer>
    </div>
  );
};

export default ServicesDetail;
