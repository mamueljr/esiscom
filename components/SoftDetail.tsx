import React, { useEffect } from 'react';
import Reveal from './Reveal';
import { APPS, type SoftApp } from '../services/softwareCatalog';

const PAGE_TITLE = 'ESISCOM Soft — Software de ESISCOM | Chihuahua';
const META_DESCRIPTION =
  'Aplicaciones de ESISCOM para negocios: expediente médico, agenda y citas para salones de uñas y barberías. Sin instalar nada, hecho en Chihuahua.';

const HERO_BADGES = [
  { label: 'Sin instalar nada', Icon: CloudIcon },
  { label: 'Soporte local en Chihuahua', Icon: LocationPinIcon },
  { label: 'Acceso desde cualquier dispositivo', Icon: DeviceIcon },
  { label: 'Actualizaciones continuas', Icon: RefreshIcon },
];

/* ------------------------------------------------------------------ */
/* Íconos en línea (sin dependencias)                                  */
/* ------------------------------------------------------------------ */

function CloudIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4.5 16.5a4.5 4.5 0 0 1-.4-8.99 6 6 0 0 1 11.7-1.4A4.75 4.75 0 0 1 17.25 16.5H4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationPinIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DeviceIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RefreshIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 12a8 8 0 1 1-2.34-5.66M20 3.5V8h-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MedicalIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 20.25S3 15.47 3 8.25c0-2.485 2.1-4.5 4.688-4.5 1.935 0 3.597 1.126 4.312 2.733.715-1.607 2.377-2.733 4.313-2.733C18.9 3.75 21 5.765 21 8.25c0 7.22-9 12-9 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparklesIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScissorsIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20 4 8.12 15.88" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14.8 14.8 20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.12 8.12 12 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
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

function ArrowRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
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

function ExternalIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14 4h6v6m0-6-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"
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
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
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

const APP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  medical: MedicalIcon,
  nails: SparklesIcon,
  barber: ScissorsIcon,
};

/* ------------------------------------------------------------------ */
/* Componentes de la página                                            */
/* ------------------------------------------------------------------ */

const AppCard: React.FC<{ app: SoftApp }> = ({ app }) => {
  const Icon = APP_ICONS[app.id] ?? SparklesIcon;

  return (
    <article
      className={[
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-ink-soft p-6',
        'transition-[transform,border-color,box-shadow] duration-300 sm:p-8',
        'hover:-translate-y-1 hover:border-primary-400 hover:shadow-2xl hover:shadow-black/40',
        'focus-within:border-primary-400 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        app.destacada ? 'border-primary-400/70' : 'border-white/10',
      ].join(' ')}
    >
      {app.destacada && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary-400/10 blur-3xl"
        />
      )}

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-400/10 text-primary-400">
            <Icon className="h-6 w-6" />
          </div>
          {app.badge && (
            <span className="inline-flex w-fit items-center rounded-full bg-primary-400 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
              {app.badge}
            </span>
          )}
        </div>

        <p className="mt-6 font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          {app.categoria}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          {app.nombre}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          {app.descripcion}
        </p>

        <ul className="mt-6 grid gap-x-6 gap-y-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-2">
          {app.caracteristicas.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'inline-flex min-h-[2.75rem] w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5',
              'font-display text-sm font-bold uppercase tracking-[0.1em] transition-colors',
              app.destacada
                ? 'bg-primary-400 text-ink hover:bg-primary-300'
                : 'border border-white/20 bg-white/[0.03] text-white hover:border-primary-400 hover:text-primary-400',
            ].join(' ')}
          >
            Acceder
            <ExternalIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

const SoftDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
    script.id = 'esiscom-soft-softwareapplication';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ESISCOM Soft',
      url: 'https://esiscom.com/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: META_DESCRIPTION,
      provider: {
        '@type': 'Organization',
        name: 'ESISCOM',
        url: 'https://esiscom.com/',
        email: 'contacto@esiscom.com',
        telephone: '+526143249716',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chihuahua',
          addressCountry: 'MX',
        },
      },
      inLanguage: 'es-MX',
    });
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      if (meta) meta.setAttribute('content', previousDescription);
      script.remove();
    };
  }, []);

  return (
    <div id="software" className="min-h-screen bg-ink pb-24 text-white sm:pb-28">
      <a
        href="#contenido-software"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:bg-primary-400 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl px-1 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-primary-400 sm:px-2"
            aria-label="Volver al inicio"
          >
            <ChevronLeftIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
            <span className="hidden min-[360px]:inline">Volver</span>
          </button>

          <span className="min-w-0 flex-1 truncate text-center font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
            ESISCOM Soft
          </span>

          <div className="w-7 shrink-0 min-[360px]:w-20" aria-hidden="true" />
        </div>
      </header>

      <main
        id="contenido-software"
        tabIndex={-1}
        className="scroll-mt-24 focus:outline-none"
      >
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
                Software hecho en Chihuahua
              </p>

              <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Aplicaciones que hacen el trabajo{' '}
                <span className="text-primary-400">por ti</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Sistemas web listos para usar, sin instalar nada. Abre tu app
                desde cualquier dispositivo y concéntrate en tu negocio mientras
                ESISCOM Soft organiza la operación.
              </p>

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
            </Reveal>
          </div>
        </section>

        {/* Aplicaciones ----------------------------------------------- */}
        <section className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal>
            <div>
              <span
                aria-hidden="true"
                className="mb-4 block h-1 w-12 rounded-full bg-primary-400"
              />
              <h2
                id="aplicaciones-title"
                className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
              >
                Nuestras aplicaciones
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {APPS.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="rounded-2xl border border-primary-400/20 bg-primary-400/[0.06] p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              ¿Necesitas una función a tu medida o una app para otro tipo de
              negocio? Escríbenos y la desarrollamos para ti.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/526143249716?text=Hola%20ESISCOM%2C%20quiero%20una%20aplicaci%C3%B3n%20a%20la%20medida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary-400 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.1em] text-primary-400 transition-colors hover:bg-primary-400 hover:text-ink"
              >
                Solicitar una app a la medida
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1100px] px-4 py-8 text-center text-sm leading-relaxed text-slate-400 sm:px-6 lg:px-8">
          <span className="font-display tracking-[0.2em] text-slate-300">
            ESISCOM
          </span>{' '}
          — Chihuahua, MX · Software en la nube, sin instalaciones.
        </div>
      </footer>
    </div>
  );
};

export default SoftDetail;
