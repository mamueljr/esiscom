import React from 'react';

const Footer: React.FC<{ onShowServices: () => void }> = ({ onShowServices }) => {
  return (
    <footer className="bg-black text-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="images/logo.svg"
                alt="ESISCOM Logo"
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="font-display font-extrabold text-xl tracking-tight">ESISCOM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Reparación, redes y software en Chihuahua. Más de 20 años
              manteniendo operaciones críticas en marcha.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/people/Esiscom/100091457924009/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-xs font-display font-bold text-slate-300 hover:bg-primary-400 hover:text-ink hover:border-primary-400 transition-colors"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/esiscomti/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-xs font-display font-bold text-slate-300 hover:bg-primary-400 hover:text-ink hover:border-primary-400 transition-colors"
              >
                IG
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-xs font-bold tracking-[0.24em] text-slate-500 uppercase mb-5">
              Mapa del sitio
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Inicio', href: '#intro' },
                { label: 'Servicios', href: '#services' },
                { label: 'Soporte Remoto', href: '#remote-support' },
                { label: 'Contacto', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-300 hover:text-primary-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onShowServices}
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                >
                  Precios y servicios
                </button>
              </li>
              <li>
                <a
                  href="https://investigacioneducativafccf.net/esiscom/manager/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                >
                  EManager ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-[0.24em] text-slate-500 uppercase mb-5">
              Directo
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="tel:+526142541066" className="hover:text-primary-400 transition-colors">
                  (614) 254-1066
                </a>
              </li>
              <li>
                <a href="mailto:contacto@esiscom.com" className="hover:text-primary-400 transition-colors">
                  contacto@esiscom.com
                </a>
              </li>
              <li className="text-slate-500">Chihuahua, MX</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} ESISCOM. Todos los derechos reservados.</span>
          <span className="font-display tracking-[0.2em]">HARDWARE · REDES · SOFTWARE</span>
        </div>
      </div>

      <div aria-hidden="true" className="select-none pointer-events-none -mb-6 sm:-mb-10">
        <p className="font-display font-extrabold text-center leading-none tracking-tight text-white/[0.06] text-[22vw]">
          ESISCOM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
