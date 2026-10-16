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
    <section id="remote-support" className="py-24 bg-ink text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_80%_20%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-xs font-bold tracking-[0.3em] text-primary-400 mb-4">
            02 — SOPORTE REMOTO
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-3xl">
            Tu problema, resuelto <span className="text-primary-400">en minutos.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-2xl">
            Nos conectamos a tu equipo de forma segura y lo dejamos funcionando
            sin que salgas de tu oficina.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="h-full border border-white/15 bg-ink-soft">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/15">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
                <span className="ml-3 font-mono text-xs text-slate-500">esiscom@soporte:~</span>
              </div>
              <div className="p-6 sm:p-8 font-mono text-sm sm:text-base space-y-7">
                {STEPS.map((s, i) => (
                  <div key={s.cmd}>
                    <p className="text-slate-500">
                      <span className="text-primary-400 font-bold">{`0${i + 1}`}</span>
                      {' $ '}
                      <span className="text-white">{s.cmd}</span>
                      <span className="animate-pulse">_</span>
                    </p>
                    <p className="mt-1 text-slate-500 text-xs sm:text-sm font-sans"># {s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full flex flex-col justify-center border border-primary-400/40 bg-primary-400/5 p-6 sm:p-10">
              <h3 className="font-display text-xl font-bold tracking-wide mb-2">
                DESCARGAS OFICIALES
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Herramientas seguras y gratuitas. Elige una y seguimos por teléfono o WhatsApp.
              </p>
              <div className="space-y-4">
                <a
                  href="https://anydesk.com/es/downloads/thank-you?dv=win_exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 bg-primary-400 text-ink font-display font-bold text-sm tracking-wide hover:bg-primary-300 transition-colors"
                >
                  <span className="flex items-center">
                    <img src="images/anydesk-logo.png" width="32" height="32" loading="lazy" decoding="async" className="w-8 h-8 mr-4" alt="AnyDesk" />
                    ANYDESK — WINDOWS
                  </span>
                  <DownloadIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://github.com/rustdesk/rustdesk/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 border border-white/25 text-white font-display font-bold text-sm tracking-wide hover:border-primary-400 hover:text-primary-400 transition-colors"
                >
                  <span className="flex items-center">
                    <img src="images/rustdesk-logo.png" width="32" height="32" loading="lazy" decoding="async" className="w-8 h-8 mr-4" alt="RustDesk" />
                    RUSTDESK — OPEN SOURCE
                  </span>
                  <DownloadIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-6">
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
