import React, { useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
import {
  CATALOGO,
  formatMXN,
  waLink,
  type Punto,
  type Servicio,
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

const ZONE_RANGE_WIDTH: Record<string, string> = {
  'zona-1': '24%',
  'zona-2': '54%',
  'zona-3': '82%',
  'fuera-de-zona': '100%',
};

/* ------------------------------------------------------------------ */
/* Íconos geométricos mínimos (mismo grosor 1.75)                     */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="m5 10.5 3.2 3.2L15 6.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MinusIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 10h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronLeftIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="m15 19-7-7 7-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Piezas de tarifa (ledgers Vantage sin tarjetas repetitivas)         */
/* ------------------------------------------------------------------ */

const PriceFigure: React.FC<{ servicio: Servicio; large?: boolean }> = ({
  servicio,
  large = false,
}) => (
  <div>
    {servicio.precioEtiqueta && (
      <p className="text-[14px] font-normal text-[var(--color-muted)]">
        {servicio.precioEtiqueta}
      </p>
    )}
    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span
        className={
          large
            ? 'v-num-statement text-[var(--color-ink)]'
            : 'v-num text-[26px] leading-none text-[var(--color-ink)] sm:text-[30px]'
        }
      >
        {servicio.precioTexto ?? formatMXN(servicio.precio ?? 0)}
      </span>
      {!servicio.precioTexto && servicio.precio !== null && (
        <span className="v-unit">MXN</span>
      )}
    </div>
    {servicio.precioSufijo && (
      <p className="mt-1.5 text-[14px] text-[var(--color-muted)]">
        {servicio.precioSufijo}
      </p>
    )}
    {servicio.precioDetalle && (
      <p className="mt-1 text-[14px] font-normal text-[var(--color-ink-2)]">
        {servicio.precioDetalle}
      </p>
    )}
  </div>
);

const FeaturedWorkshopColumn: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  const mensaje =
    servicio.mensajeWhatsApp ??
    `Hola ESISCOM, quiero cotizar ${servicio.nombre}.`;

  return (
    <article
      className={`flex h-full flex-col justify-between rounded-[var(--radius-card)] p-6 sm:p-8 ${
        servicio.destacado
          ? 'ticks bg-[var(--color-paper-2)]'
          : 'border border-[var(--color-rule)] bg-[var(--color-paper)]'
      }`}
    >
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-rule)] pb-5">
          <h3 className="text-[var(--color-ink)]">{servicio.nombre}</h3>
          {servicio.badge && (
            <span className="text-[14px] font-normal text-[var(--color-accent)]">
              {servicio.badge}
            </span>
          )}
        </div>

        <div className="mt-6">
          <PriceFigure servicio={servicio} large />
        </div>

        <ul className="mt-6 space-y-3 border-t border-[var(--color-rule)] pt-6 text-[16px] leading-relaxed text-[var(--color-ink-2)]">
          {servicio.incluye.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-muted)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {servicio.nota && (
          <p className="mt-5 text-[14px] leading-relaxed text-[var(--color-muted)]">
            {servicio.nota}
          </p>
        )}
      </div>

      <div className="mt-8 pt-4">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="v-btn v-btn--line v-btn--sm"
        >
          {servicio.ctaTexto ?? 'Cotizar este servicio'}
        </a>
      </div>
    </article>
  );
};

const TariffLedgerRow: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  const mensaje =
    servicio.mensajeWhatsApp ??
    `Hola ESISCOM, quiero cotizar ${servicio.nombre}.`;

  return (
    <article className="grid grid-cols-1 gap-6 py-8 md:grid-cols-12 md:items-start md:gap-[var(--gap-columns)]">
      <div className="min-w-0 md:col-span-4">
        <h3 className="text-[var(--color-ink)]">{servicio.nombre}</h3>
        {servicio.nota && (
          <p className="mt-2.5 max-w-[44ch] text-[14px] leading-relaxed text-[var(--color-muted)]">
            {servicio.nota}
          </p>
        )}
      </div>

      <div className="min-w-0 md:col-span-4">
        <ul className="space-y-2.5 text-[16px] leading-relaxed text-[var(--color-ink-2)]">
          {servicio.incluye.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-muted)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0 md:col-span-2">
        <PriceFigure servicio={servicio} />
      </div>

      <div className="flex items-center md:col-span-2 md:justify-end">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center whitespace-nowrap text-[14px] font-normal text-[var(--color-ink)] underline decoration-[var(--color-rule-2)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
        >
          {servicio.ctaTexto ?? 'Cotizar este servicio'}
        </a>
      </div>
    </article>
  );
};

const ExternalScheduleRow: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  const mensaje =
    servicio.mensajeWhatsApp ??
    `Hola ESISCOM, quiero cotizar ${servicio.nombre}.`;

  return (
    <article className="py-7 first:pt-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-[var(--color-ink)]">{servicio.nombre}</h3>
        <div className="shrink-0 sm:text-right">
          <div className="flex flex-wrap items-baseline gap-x-2 sm:justify-end">
            <span className="v-num text-[26px] leading-none text-[var(--color-ink)] sm:text-[30px]">
              {servicio.precioTexto ?? formatMXN(servicio.precio ?? 0)}
            </span>
            {!servicio.precioTexto && servicio.precio !== null && (
              <span className="v-unit">MXN</span>
            )}
          </div>
          {servicio.precioSufijo && (
            <p className="mt-1 text-[14px] text-[var(--color-muted)]">
              {servicio.precioSufijo}
            </p>
          )}
          {servicio.precioDetalle && (
            <p className="mt-0.5 text-[14px] text-[var(--color-ink-2)]">
              {servicio.precioDetalle}
            </p>
          )}
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-[16px] leading-relaxed text-[var(--color-ink-2)]">
        {servicio.incluye.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-muted)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        {servicio.nota ? (
          <p className="max-w-[56ch] text-[14px] leading-relaxed text-[var(--color-muted)]">
            {servicio.nota}
          </p>
        ) : (
          <span />
        )}
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap text-[14px] font-normal text-[var(--color-ink)] underline decoration-[var(--color-rule-2)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
        >
          {servicio.ctaTexto ?? 'Cotizar este servicio'}
        </a>
      </div>
    </article>
  );
};

const AccordionItem: React.FC<{ punto: Punto; index: number }> = ({
  punto,
  index,
}) => (
  <details className="group" open={index === 0}>
    <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)] [&::-webkit-details-marker]:hidden">
      <span className="flex items-baseline gap-4">
        <span className="v-num text-[14px] text-[var(--color-muted)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-[18px] font-normal text-[var(--color-ink)] sm:text-[20px]">
          {punto.titulo}
        </span>
      </span>
      <ChevronDownIcon className="v-details-chevron h-5 w-5 shrink-0 text-[var(--color-muted)] group-open:text-[var(--color-accent)]" />
    </summary>
    <div className="pb-6 pl-9 text-[16px] leading-relaxed text-[var(--color-ink-2)]">
      <p className="max-w-[60ch]">{punto.texto}</p>
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

  const tallerPaquetes = CATALOGO.taller.slice(0, 3);
  const tallerBase = CATALOGO.taller.slice(3);

  return (
    <div
      id="servicios-detalle"
      className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]"
    >
      <a
        href="#contenido-servicios"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[var(--z-toast)] focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-[14px] focus:text-[var(--color-accent-ink)]"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-[var(--z-sticky-nav)] border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
        <div className="container flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap text-[14px] font-normal text-[var(--color-ink-2)] transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)]"
            aria-label="Volver al inicio"
          >
            <ChevronLeftIcon className="h-4 w-4 shrink-0" />
            <span>Volver</span>
          </button>

          <nav
            aria-label="Navegación rápida por secciones"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ANCHORS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap px-3 text-[14px] font-normal text-[var(--color-ink-2)] transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <img
              src="images/logo.svg"
              alt=""
              width="24"
              height="24"
              className="h-6 w-auto brightness-0 invert"
            />
            <span className="text-[15px] font-normal text-[var(--color-ink)]">
              ESISCOM
            </span>
          </div>
        </div>
      </header>

      <main id="contenido-servicios" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
        {/* Hero ------------------------------------------------------- */}
        <section
          data-hide-wa-fab
          className="v-pricing-hero border-b border-[var(--color-rule)]"
        >
          <div className="container">
            <div className="v-pricing-hero__layout">
              <div className="v-pricing-hero__copy min-w-0">
                <h1 className="v-pricing-hero__title text-[var(--color-ink)]">
                  Soporte técnico con precios publicados.
                </h1>

                <p className="lead mt-6 text-[var(--color-ink-2)]">
                  Taller, domicilio y acceso remoto en Chihuahua con 30 días de garantía.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={waLink('Hola ESISCOM, quiero cotizar un servicio')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn"
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    <span>Cotiza por WhatsApp</span>
                  </a>
                  <a href="#empresas" className="v-btn v-btn--line">
                    Planes empresas
                  </a>
                </div>

                <p className="mt-6 max-w-[46ch] text-[14px] text-[var(--color-muted)]">
                  Precios en pesos mexicanos (MXN). Si requieres factura, se agrega IVA.
                </p>
              </div>

              <div className="v-pricing-hero__media min-w-0">
                <figure className="ticks v-pricing-hero__stage">
                  <img
                    src="images/hero-bg.jpg"
                    width="960"
                    height="540"
                    fetchPriority="high"
                    alt="Técnico de ESISCOM revisando conexiones de red y equipo en rack"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: '58% 42%' }}
                  />
                </figure>
              </div>

              <div className="v-pricing-hero__strip ticks grid grid-cols-3 gap-2 px-3 py-4 sm:gap-6 sm:px-6">
                <a
                  href="#taller"
                  className="group min-w-0 transition-colors duration-[var(--dur-short)]"
                >
                  <span className="block whitespace-nowrap text-[12px] text-[var(--color-muted)] sm:text-[13px]">
                    Diagnóstico
                  </span>
                  <span className="mt-1 inline-flex items-baseline gap-1 whitespace-nowrap text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:gap-1.5">
                    <span className="v-num text-[16px] sm:text-[24px]">$200</span>
                    <span className="text-[11px] text-[var(--color-muted)] sm:text-[14px]">MXN</span>
                  </span>
                </a>

                <a
                  href="#soporte-externo"
                  className="group min-w-0 border-l border-[var(--color-rule)] pl-2.5 transition-colors duration-[var(--dur-short)] sm:pl-6"
                >
                  <span className="block whitespace-nowrap text-[12px] text-[var(--color-muted)] sm:text-[13px]">
                    Remoto
                  </span>
                  <span className="mt-1 inline-flex items-baseline gap-1 whitespace-nowrap text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:gap-1.5">
                    <span className="v-num text-[16px] sm:text-[24px]">$300</span>
                    <span className="text-[11px] text-[var(--color-muted)] sm:text-[14px]">MXN</span>
                  </span>
                </a>

                <a
                  href="#empresas"
                  className="group min-w-0 border-l border-[var(--color-rule)] pl-2.5 transition-colors duration-[var(--dur-short)] sm:pl-6"
                >
                  <span className="block whitespace-nowrap text-[12px] text-[var(--color-muted)] sm:text-[13px]">
                    Bolsa 6 h
                  </span>
                  <span className="mt-1 inline-flex items-baseline gap-1 whitespace-nowrap text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:gap-1.5">
                    <span className="v-num text-[16px] sm:text-[24px]">$1,500</span>
                    <span className="text-[11px] text-[var(--color-muted)] sm:text-[14px]">MXN</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Navegación móvil ------------------------------------------- */}
        <nav
          aria-label="Secciones de precios"
          className="border-b border-[var(--color-rule)] bg-[var(--color-paper)] lg:hidden"
        >
          <div className="container">
            <ul className="scrollbar-hide flex gap-2 overflow-x-auto py-3">
              {NAV_ANCHORS.map((item) => (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-[var(--radius-pill)] border border-[var(--color-rule-2)] px-4 text-[14px] text-[var(--color-ink-2)] transition-colors duration-[var(--dur-short)] hover:border-[var(--color-ink-2)] hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Taller ----------------------------------------------------- */}
        <section
          id="taller"
          aria-labelledby="taller-title"
          className="v-section scroll-mt-20"
        >
          <div className="container">
            <div className="grid grid-cols-1 items-end gap-6 pb-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 id="taller-title" className="text-[var(--color-ink)]">
                  Servicios en taller
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <p className="text-[16px] text-[var(--color-ink-2)] lg:ml-auto lg:max-w-[40ch]">
                  Diagnóstico, formateo, respaldo verificado y mejora de hardware en Col. Satélite.
                </p>
              </div>
            </div>

            {/* Escalera de formateo y renovación en orden: Estándar -> Pro -> Renovación */}
            <div className="grid grid-cols-1 gap-[var(--gap-columns)] lg:grid-cols-3">
              {tallerPaquetes.map((servicio) => (
                <FeaturedWorkshopColumn key={servicio.id} servicio={servicio} />
              ))}
            </div>

            {/* Tabla / ledger de servicios rápidos en taller */}
            <div className="mt-14 border-y border-[var(--color-rule)] divide-y divide-[var(--color-rule)]">
              {tallerBase.map((servicio) => (
                <TariffLedgerRow key={servicio.id} servicio={servicio} />
              ))}
            </div>
          </div>
        </section>

        {/* Soporte técnico externo ------------------------------------ */}
        <section
          id="soporte-externo"
          aria-labelledby="soporte-externo-title"
          className="v-section scroll-mt-20 border-t border-[var(--color-rule)]"
        >
          <div className="container">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-[var(--gap-columns)]">
              <div className="min-w-0 lg:sticky lg:top-24 lg:col-span-5">
                <h2 id="soporte-externo-title" className="text-[var(--color-ink)]">
                  Soporte técnico externo
                </h2>
                <p className="lead mt-4 text-[var(--color-ink-2)]">
                  Atención en tu domicilio, oficina o conexión remota por AnyDesk.
                </p>

                <figure className="mt-8">
                  <div className="ticks v-photo aspect-[16/10] w-full">
                    <img
                      src="images/generated/workshop-bench.jpg"
                      width="1408"
                      height="768"
                      loading="lazy"
                      alt="Diagnóstico de equipo portátil con multímetro y juego de herramientas de precisión"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: '50% 100%' }}
                    />
                  </div>
                  <figcaption className="mt-3 text-[14px] text-[var(--color-muted)]">
                    Redes, impresoras, carpetas compartidas y resolución de fallas en sitio.
                  </figcaption>
                </figure>
              </div>

              <div className="min-w-0 divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)] pt-7 lg:col-span-7 lg:border-t-0 lg:pt-0">
                {CATALOGO.externo.map((servicio) => (
                  <ExternalScheduleRow key={servicio.id} servicio={servicio} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zonas de cobertura ----------------------------------------- */}
        <section
          id="zonas"
          aria-labelledby="zonas-title"
          className="v-section scroll-mt-20"
        >
          <div className="container">
            <div className="grid grid-cols-1 items-end gap-6 pb-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 id="zonas-title" className="text-[var(--color-ink)]">
                  Zonas de cobertura
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <p className="text-[16px] text-[var(--color-ink-2)] lg:ml-auto lg:max-w-[40ch]">
                  Cargo de traslado calculado por distancia radial desde nuestro taller en Chihuahua.
                </p>
              </div>
            </div>

            <div className="border-y border-[var(--color-rule)]">
              <div className="hidden grid-cols-12 gap-[var(--gap-columns)] border-b border-[var(--color-rule-2)] py-4 text-[14px] text-[var(--color-muted)] md:grid">
                <span className="col-span-3">Zona</span>
                <span className="col-span-4">Distancia</span>
                <span className="col-span-3">Tiempo</span>
                <span className="col-span-2 text-right">Cargo</span>
              </div>

              <ul className="divide-y divide-[var(--color-rule)]">
                {CATALOGO.zonas.map((zona) => {
                  const isFree = zona.id === 'zona-1';
                  return (
                    <li
                      key={zona.id}
                      className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:items-center md:gap-[var(--gap-columns)]"
                    >
                      <div className="md:col-span-3">
                        <span className="text-[20px] font-normal text-[var(--color-ink)]">
                          {zona.nombre}
                        </span>
                      </div>

                      <div className="md:col-span-4">
                        <div className="flex items-center justify-between gap-4 text-[15px] text-[var(--color-ink-2)] md:block">
                          <span className="text-[14px] text-[var(--color-muted)] md:hidden">
                            Distancia
                          </span>
                          <span className="v-num">{zona.distancia}</span>
                        </div>
                        <div className="v-range-track mt-2" aria-hidden="true">
                          <div
                            className={`v-range-fill ${isFree ? 'v-range-fill--accent' : ''}`}
                            style={{ width: ZONE_RANGE_WIDTH[zona.id] ?? '50%' }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 text-[15px] text-[var(--color-ink-2)] md:col-span-3 md:block">
                        <span className="text-[14px] text-[var(--color-muted)] md:hidden">
                          Tiempo
                        </span>
                        <span className="v-num">{zona.tiempo}</span>
                      </div>

                      <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                        <span className="text-[14px] text-[var(--color-muted)] md:hidden">
                          Cargo
                        </span>
                        <span
                          className={`v-num text-[20px] font-normal ${
                            isFree ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink)]'
                          }`}
                        >
                          {zona.cargo}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Para empresas ---------------------------------------------- */}
        <section
          id="empresas"
          aria-labelledby="empresas-title"
          className="v-section--band scroll-mt-20 border-y border-[var(--color-rule)]"
        >
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-10 pb-12 lg:grid-cols-12 lg:gap-[var(--gap-columns)]">
              <div className="min-w-0 lg:col-span-7">
                <h2 id="empresas-title" className="text-[var(--color-ink)]">
                  Para empresas
                </h2>
                <h3 className="mt-6 text-[var(--color-ink)]">
                  {CATALOGO.care.nombre}
                </h3>
                <p className="lead mt-3 text-[var(--color-ink-2)]">
                  {CATALOGO.care.subtitulo}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={waLink(CATALOGO.care.mensajeWhatsApp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn"
                  >
                    {CATALOGO.care.ctaTexto}
                  </a>
                </div>
              </div>

              <div className="min-w-0 lg:col-span-5">
                <figure className="ticks v-photo aspect-[4/3] w-full">
                  <img
                    src="images/generated/server-support.jpg"
                    width="1408"
                    height="768"
                    loading="lazy"
                    alt="Rack de servidores y cableado estructurado de oficina administrado por ESISCOM"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: '50% 50%', transform: 'scale(1.22)' }}
                  />
                </figure>
              </div>
            </div>

            {/* Alcance de ESISCOM Care: división por líneas finas, cero cajas anidadas */}
            <div className="grid grid-cols-1 gap-10 border-t border-[var(--color-rule)] pt-10 md:grid-cols-2 md:gap-0">
              <div className="min-w-0 md:pr-10">
                <h4 className="text-[16px] font-normal text-[var(--color-ink)]">
                  Incluye
                </h4>
                <ul className="mt-5 space-y-3.5 text-[16px] leading-relaxed text-[var(--color-ink-2)]">
                  {CATALOGO.care.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-muted)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 border-t border-[var(--color-rule)] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <h4 className="text-[16px] font-normal text-[var(--color-muted)]">
                  No incluye
                </h4>
                <ul className="mt-5 space-y-3.5 text-[16px] leading-relaxed text-[var(--color-muted)]">
                  {CATALOGO.care.noIncluye.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <MinusIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-muted)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 max-w-[70ch] border-t border-[var(--color-rule)] pt-6 text-[15px] leading-relaxed text-[var(--color-ink-2)]">
              {CATALOGO.care.nota}
            </p>

            {/* Bolsa de horas y Revisión técnica de oficina */}
            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[var(--color-rule-2)] pt-12 md:grid-cols-2 md:gap-0">
              {[CATALOGO.bolsa, CATALOGO.revision].map((servicio, idx) => {
                const mensaje =
                  servicio.mensajeWhatsApp ??
                  `Hola ESISCOM, quiero cotizar ${servicio.nombre}.`;
                return (
                  <article
                    key={servicio.id}
                    className={`flex min-w-0 flex-col justify-between ${
                      idx === 0
                        ? 'md:pr-10'
                        : 'border-t border-[var(--color-rule)] pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0'
                    }`}
                  >
                    <div>
                      <h3 className="text-[var(--color-ink)]">
                        {servicio.nombre}
                      </h3>
                      <div className="mt-4">
                        <PriceFigure servicio={servicio} large />
                      </div>
                      <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-[var(--color-ink-2)]">
                        {servicio.incluye.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-muted)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {servicio.nota && (
                        <p className="mt-5 max-w-[52ch] text-[14px] leading-relaxed text-[var(--color-muted)]">
                          {servicio.nota}
                        </p>
                      )}
                    </div>

                    <div className="mt-7">
                      <a
                        href={waLink(mensaje)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="v-btn v-btn--line v-btn--sm"
                      >
                        {servicio.ctaTexto ?? 'Cotizar este servicio'}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos -------------------------------------------- */}
        <section
          id="como-trabajamos"
          aria-labelledby="como-trabajamos-title"
          className="v-section scroll-mt-20"
        >
          <div className="container">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-[var(--gap-columns)]">
              <div className="min-w-0 lg:col-span-5">
                <h2 id="como-trabajamos-title" className="text-[var(--color-ink)]">
                  Cómo trabajamos
                </h2>
                <p className="lead mt-4 text-[var(--color-ink-2)]">
                  Condiciones claras sobre garantía, respaldos, piezas y resguardo en taller.
                </p>
              </div>

              <div className="min-w-0 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)] lg:col-span-7">
                {CATALOGO.comoTrabajamos.map((punto, index) => (
                  <AccordionItem
                    key={punto.titulo}
                    punto={punto}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué ESISCOM y cierre directo --------------------------- */}
        <section
          data-hide-wa-fab
          aria-labelledby="por-que-title"
          className="v-section border-t border-[var(--color-rule)]"
        >
          <div className="container">
            <div className="grid grid-cols-1 items-end gap-6 pb-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 id="por-que-title" className="text-[var(--color-ink)]">
                  Por qué ESISCOM
                </h2>
              </div>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <a
                  href={waLink('Hola ESISCOM, quiero más información')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v-btn"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span>Escríbenos por WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-rule)] pt-10 md:grid-cols-3 md:gap-0">
              {CATALOGO.porQue.map((punto, index) => (
                <article
                  key={punto.titulo}
                  className={`min-w-0 ${
                    index === 0
                      ? 'md:pr-8'
                      : 'border-t border-[var(--color-rule)] pt-6 md:border-l md:border-t-0 md:px-8 md:pt-0'
                  } ${index === CATALOGO.porQue.length - 1 ? 'md:pr-0' : ''}`}
                >
                  <h3 className="text-[var(--color-ink)]">{punto.titulo}</h3>
                  <p className="mt-3 max-w-[36ch] text-[16px] leading-relaxed text-[var(--color-ink-2)]">
                    {punto.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-14 text-[var(--color-ink)]">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <img
                  src="images/logo.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="h-6 w-auto brightness-0 invert"
                />
                <span className="text-[16px] font-normal text-[var(--color-ink)]">
                  ESISCOM
                </span>
              </div>
              <p className="mt-3 text-[15px] text-[var(--color-ink-2)]">
                Chihuahua, MX. Precios vigentes al momento de la cotización.
              </p>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="v-btn v-btn--line v-btn--sm w-fit"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesDetail;
