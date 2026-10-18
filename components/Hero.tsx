import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 20, prefix: '+', label: 'Años en Chihuahua' },
  { value: 3, prefix: '0', pad: true, label: 'Hardware · Redes · Software' },
  { value: 6, prefix: '0', pad: true, label: 'Días de atención semanal' },
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

const Stat: React.FC<{ value: number; prefix: string; pad?: boolean; label: string }> = ({
  value,
  prefix,
  pad,
  label,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const text = pad ? `${prefix}${n}` : `${prefix}${n}`;
  return (
    <div ref={ref} className="flex items-baseline gap-4 py-6 sm:px-8 first:pl-0 border-b sm:border-b-0 border-white/10">
      <span className="font-display text-4xl font-extrabold text-white tabular-nums">{text}</span>
      <span className="text-sm text-slate-400 uppercase tracking-wider">{label}</span>
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
            <p className="font-display text-xs font-bold tracking-[0.3em] text-primary-400 mb-6">
              ESISCOM — CHIHUAHUA, MX
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              TU TECNOLOGÍA
              <br />
              BAJO <span className="text-primary-400">CONTROL.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
              Reparación de equipos, soporte IT y software a la medida para
              negocios que no pueden detenerse. Diagnóstico rápido, trato
              directo y resultados garantizados.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-primary-400 hover:bg-primary-300 text-ink font-display text-sm font-bold uppercase tracking-[0.12em] transition-colors"
              >
                Agendar diagnóstico
              </a>
              <a
                href="#remote-support"
                className="inline-flex justify-center items-center px-8 py-4 border border-white/25 hover:border-primary-400 text-white hover:text-primary-400 font-display text-sm font-bold uppercase tracking-[0.12em] transition-colors"
              >
                Soporte remoto →
              </a>
              <button
                onClick={onShowServices}
                className="inline-flex justify-center items-center px-8 py-4 border border-white/25 hover:border-primary-400 text-white hover:text-primary-400 font-display text-sm font-bold uppercase tracking-[0.12em] transition-colors"
              >
                Ver precios
              </button>
            </div>
            <div className="mt-6 inline-flex items-center gap-2.5 border border-white/15 bg-white/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                {openState.open && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
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
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-4 border-l-4 border-primary-400"></div>
              <div className="relative overflow-hidden bg-ink-soft">
                <img
                  src="images/intro-image.jpg"
                  alt="Técnico trabajando en infraestructura"
                  className="w-full h-[420px] object-cover grayscale contrast-125 brightness-90"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-primary-400/25 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-ink/80 backdrop-blur px-4 py-2 font-display text-[11px] font-bold tracking-[0.22em] text-primary-400">
                    SOPORTE REAL · HARDWARE REAL
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-4 border-r-4 border-primary-400"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-white/10">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} prefix={s.prefix} pad={s.pad} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
