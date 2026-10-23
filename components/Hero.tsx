import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 20, prefix: '+', label: 'Años en Chihuahua' },
  { value: 3, prefix: '0', label: 'Hardware · Redes · Software' },
  { value: 6, prefix: '0', label: 'Días de atención semanal' },
];

function getOpenState(now: Date): { open: boolean; detail: string } {
  const utcH = now.getUTCHours();
  const utcD = now.getUTCDay();
  const h = (utcH - 6 + 24) % 24;
  const d = utcH < 6 ? (utcD + 6) % 7 : utcD;

  const isWeekday = d >= 1 && d <= 5;
  const open =
    (isWeekday && h >= 9 && h < 18) || (d === 6 && h >= 9 && h < 13);

  if (open) {
    const close = isWeekday ? '6 PM' : '1 PM';
    return { open: true, detail: `ABIERTO AHORA · CERRAMOS ${close}` };
  }
  let next = 'HOY 9 AM';
  if (d === 0 || (d === 6 && h >= 13) || (isWeekday && h >= 18)) {
    next = d === 5 || d === 6 ? 'LUN 9 AM' : 'MAÑANA 9 AM';
    if (d === 0) next = 'LUN 9 AM';
  } else if (isWeekday && h < 9) {
    next = 'HOY 9 AM';
  }
  return { open: false, detail: `CERRADO · ABRIMOS ${next}` };
}

const Stat: React.FC<{ value: number; prefix: string; label: string }> = ({
  value,
  prefix,
  label,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  // Arranca en el valor real: si el bloque ya es visible al cargar (o el usuario
  // pide menos movimiento) nunca se muestra una cifra falsa mientras anima.
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setN(0);
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const duration = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  const text = `${prefix}${n}`;
  return (
    <div
      ref={ref}
      className="flex items-baseline gap-4 border-b border-white/10 py-6 sm:border-b-0 sm:border-l sm:border-white/10 sm:px-8 sm:first:border-l-0 sm:first:pl-0"
    >
      <span className="font-display text-4xl font-extrabold tabular-nums text-white">{text}</span>
      <span className="text-sm uppercase tracking-wider text-slate-400">{label}</span>
    </div>
  );
};

const Hero: React.FC<{ onShowServices: () => void }> = ({ onShowServices }) => {
  const [openState] = useState(() => getOpenState(new Date()));

  return (
    <div id="intro" className="relative bg-ink overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15 grayscale"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink"></div>
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-primary-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-48 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-primary-400">
              <span aria-hidden="true" className="h-px w-10 bg-primary-400/70" />
              ESISCOM — CHIHUAHUA, MX
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              TU TECNOLOGÍA
              <br />
              BAJO <span className="text-primary-400">CONTROL.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Reparación de equipos, soporte IT y software a la medida para
              negocios que no pueden detenerse. Diagnóstico rápido, trato
              directo y resultados garantizados.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary-400 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-lg shadow-primary-400/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-300 hover:shadow-xl hover:shadow-primary-400/20"
              >
                Agendar diagnóstico
              </a>
              <a
                href="#remote-support"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-white/25 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-primary-400 hover:text-primary-300"
              >
                Soporte remoto →
              </a>
              <button
                onClick={onShowServices}
                className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-2 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-primary-300 transition-colors hover:text-white"
              >
                Ver precios
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                {openState.open && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    openState.open ? 'bg-primary-400' : 'bg-slate-500'
                  }`}
                ></span>
              </span>
              <span className="font-display text-[11px] font-bold tracking-[0.22em] text-slate-300">
                {openState.detail}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-primary-400/70"
              ></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-soft shadow-2xl shadow-black/40">
                <img
                  src="images/intro-image.jpg"
                  alt="Técnico trabajando en infraestructura"
                  className="h-[420px] w-full object-cover grayscale contrast-125 brightness-90"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-primary-500/25 mix-blend-color"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"></div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <span className="rounded-full bg-ink/80 px-4 py-2 font-display text-[11px] font-bold tracking-[0.22em] text-primary-300 backdrop-blur">
                    SOPORTE REAL · HARDWARE REAL
                  </span>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-primary-400/70"
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} prefix={s.prefix} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
