import React from 'react';

const Footer: React.FC<{
  onShowServices: () => void;
  onShowSoftware: () => void;
}> = ({ onShowServices, onShowSoftware }) => {
  return (
    <footer className="bg-[var(--color-paper)] text-[var(--color-ink)] border-t border-[var(--color-rule)] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="images/logo.svg"
                alt=""
                width="30"
                height="30"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-[18px] font-normal tracking-tight text-[var(--color-ink)]">
                ESISCOM
              </span>
            </div>
            <p className="text-[15px] text-[var(--color-ink-2)] leading-relaxed max-w-sm">
              Reparación, redes y software en Chihuahua. Más de 20 años manteniendo operaciones críticas en marcha.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/people/Esiscom/100091457924009/"
                target="_blank"
                rel="noreferrer"
                aria-label="ESISCOM en Facebook"
                className="v-btn v-btn--line v-btn--sm"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/esiscomti/"
                target="_blank"
                rel="noreferrer"
                aria-label="ESISCOM en Instagram"
                className="v-btn v-btn--line v-btn--sm"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="md:col-span-4 min-w-0">
            <h3 className="text-[14px] font-normal text-[var(--color-muted)] mb-4">
              Mapa del sitio
            </h3>
            <ul className="space-y-1 text-[15px]">
              {[
                { label: 'Inicio', href: '#intro' },
                { label: 'Servicios', href: '#services' },
                { label: 'Soporte Remoto', href: '#remote-support' },
                { label: 'Contacto', href: '#contact' },
                { label: 'Aviso de privacidad', href: '#aviso-de-privacidad' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="min-h-[36px] inline-flex items-center text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onShowServices}
                  className="min-h-[44px] inline-flex items-center text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Precios y servicios
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onShowSoftware}
                  className="min-h-[44px] inline-flex items-center text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  ESISCOM Soft
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 min-w-0">
            <h3 className="text-[14px] font-normal text-[var(--color-muted)] mb-4">
              Directo
            </h3>
            <ul className="space-y-2.5 text-[15px] text-[var(--color-ink-2)]">
              <li>
                <a href="tel:+526143249716" className="v-num hover:text-[var(--color-ink)] transition-colors">
                  (614) 324-9716
                </a>
              </li>
              <li>
                <a href="mailto:contacto@esiscom.com" className="hover:text-[var(--color-ink)] transition-colors">
                  contacto@esiscom.com
                </a>
              </li>
              <li className="text-[var(--color-muted)]">Chihuahua, MX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-rule)] pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-[var(--color-muted)]">
          <span>&copy; {new Date().getFullYear()} ESISCOM. Todos los derechos reservados.</span>
          <span>Cipres #3712, Col. Satélite, Chihuahua</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
