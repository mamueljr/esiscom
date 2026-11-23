import React from 'react';
import { DownloadIcon } from './Icons';

const STEPS = [
  { title: 'Descargar herramienta', desc: 'AnyDesk o RustDesk, la que prefieras.' },
  { title: 'Ejecutar el programa', desc: 'Sin instalación complicada.' },
  { title: 'Compartir tu ID', desc: 'Pásale el código a nuestro técnico.' },
];

const RemoteSupport: React.FC = () => {
  return (
    <section id="remote-support" className="v-section--band border-y border-[var(--color-rule)] scroll-mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[var(--gap-columns)] items-start">
          <div className="lg:col-span-6 min-w-0">
            <h2 className="text-[var(--color-ink)]">
              Soporte remoto en minutos.
            </h2>
            <p className="lead mt-4 text-[var(--color-ink-2)]">
              Nos conectamos a tu equipo de forma segura y lo dejamos funcionando sin que salgas de tu oficina.
            </p>

            <ol className="mt-8 border-t border-[var(--color-rule)] divide-y divide-[var(--color-rule)]">
              {STEPS.map((s, i) => (
                <li key={s.title} className="py-5 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 v-num text-[15px] text-[var(--color-accent)]">
                    0{i + 1}
                  </span>
                  <div className="col-span-10 min-w-0">
                    <h3 className="text-[18px] font-normal text-[var(--color-ink)]">{s.title}</h3>
                    <p className="mt-1 text-[15px] text-[var(--color-ink-2)]">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 min-w-0 space-y-6">
            <figure
              className="space-y-2"
            >
              <div
                className="ticks aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-card)]"
                data-slot="remote-infra"
                data-alt="Técnicos trabajando en racks de servidores y cableado de red"
              >
                <img
                  src="images/hallmark/data-center-cua-cmc-telecom-2-1920.jpg"
                  width="1920"
                  height="1278"
                  alt="Técnicos de infraestructura revisando racks de servidores"
                  style={{ objectPosition: '30% 50%' }}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-[13px] text-[var(--color-muted)]">
                Infraestructura de red y servidores, fotografía de{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Data_Center_c%E1%BB%A7a_CMC_Telecom_(2).jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--color-ink)]"
                >
                  Daoducquan
                </a>{' '}
                (CC BY-SA 4.0)
              </figcaption>
            </figure>

            <div className="ticks p-6 bg-[var(--color-paper)] rounded-[var(--radius-card)]">
              <h3 className="text-[20px] font-normal text-[var(--color-ink)]">
                Descargas oficiales
              </h3>
              <p className="mt-2 text-[14px] text-[var(--color-ink-2)]">
                Herramientas seguras y gratuitas. Elige una y seguimos por teléfono o WhatsApp.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://anydesk.com/es/downloads/thank-you?dv=win_exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v-btn justify-between"
                >
                  <span className="flex items-center gap-3">
                    <img src="images/anydesk-logo.png" width="24" height="24" loading="lazy" decoding="async" className="w-6 h-6" alt="" />
                    <span>AnyDesk Windows</span>
                  </span>
                  <DownloadIcon className="w-4 h-4 shrink-0" />
                </a>
                <a
                  href="https://github.com/rustdesk/rustdesk/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v-btn v-btn--line justify-between"
                >
                  <span className="flex items-center gap-3">
                    <img src="images/rustdesk-logo.png" width="24" height="24" loading="lazy" decoding="async" className="w-6 h-6" alt="" />
                    <span>RustDesk Open Source</span>
                  </span>
                  <DownloadIcon className="w-4 h-4 shrink-0" />
                </a>
              </div>
              <p className="mt-4 text-[13px] text-[var(--color-muted)]">
                Al descargar aceptas los términos de cada proveedor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSupport;
