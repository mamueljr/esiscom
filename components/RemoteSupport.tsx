import React from 'react';
import { DownloadIcon } from './Icons';
import Reveal from './Reveal';

const STEPS = [
  { cmd: 'descargar herramienta', desc: 'AnyDesk o RustDesk, la que prefieras.' },
  { cmd: 'ejecutar el programa', desc: 'Sin instalación complicada.' },
  { cmd: 'compartir tu ID', desc: 'Pásale el código a nuestro técnico.' },
];

const RemoteSupport: React.FC = () => {
  return (
    <section
      id="remote-support"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-white"
    >
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_80%_20%,black,transparent)]"></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-primary-400">
            <span aria-hidden="true" className="h-px w-10 bg-primary-400/70" />
            02 — SOPORTE REMOTO
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Tu problema, resuelto <span className="text-primary-400">en minutos.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Nos conectamos a tu equipo de forma segura y lo dejamos funcionando
            sin que salgas de tu oficina.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-2xl border border-white/15 bg-ink-soft shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 border-b border-white/15 bg-white/[0.03] px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
                <span className="h-3 w-3 rounded-full bg-[#febc2e]"></span>
                <span className="h-3 w-3 rounded-full bg-[#28c840]"></span>
                <span className="ml-3 font-mono text-xs text-slate-400">esiscom@soporte:~</span>
              </div>
              <div className="space-y-7 p-6 font-mono text-sm sm:p-8 sm:text-base">
                {STEPS.map((s, i) => (
                  <div key={s.cmd}>
                    <p className="text-slate-400">
                      <span className="font-bold text-primary-400">{`0${i + 1}`}</span>
                      {' $ '}
                      <span className="text-white">{s.cmd}</span>
                      <span className="animate-pulse">_</span>
                    </p>
                    <p className="mt-1 font-sans text-xs text-slate-400 sm:text-sm"># {s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel-sheen flex h-full flex-col justify-center rounded-2xl border border-primary-400/30 bg-primary-400/[0.04] p-6 sm:p-10">
              <h3 className="mb-2 font-display text-xl font-bold tracking-wide">
                DESCARGAS OFICIALES
              </h3>
              <p className="mb-8 text-sm text-slate-400">
                Herramientas seguras y gratuitas. Elige una y seguimos por teléfono o WhatsApp.
              </p>
              <div className="space-y-4">
                <a
                  href="https://anydesk.com/es/downloads/thank-you?dv=win_exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl bg-primary-400 px-6 py-4 font-display text-sm font-bold tracking-wide text-ink transition-colors hover:bg-primary-300"
                >
                  <span className="flex items-center">
                    <img
                      src="images/anydesk-logo.png"
                      width="32"
                      height="32"
                      loading="lazy"
                      decoding="async"
                      className="mr-4 h-8 w-8"
                      alt="AnyDesk"
                    />
                    ANYDESK — WINDOWS
                  </span>
                  <DownloadIcon className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href="https://github.com/rustdesk/rustdesk/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/25 px-6 py-4 font-display text-sm font-bold tracking-wide text-white transition-colors hover:border-primary-400 hover:text-primary-300"
                >
                  <span className="flex items-center">
                    <img
                      src="images/rustdesk-logo.png"
                      width="32"
                      height="32"
                      loading="lazy"
                      decoding="async"
                      className="mr-4 h-8 w-8"
                      alt="RustDesk"
                    />
                    RUSTDESK — OPEN SOURCE
                  </span>
                  <DownloadIcon className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
              <p className="mt-6 text-xs text-slate-400">
                Al descargar aceptas los términos de cada proveedor.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RemoteSupport;
