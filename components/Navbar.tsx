import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const linkClass =
  'px-3 py-2 text-[14px] font-normal whitespace-nowrap text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors duration-[var(--dur-short)]';

const Navbar: React.FC<{
  onShowServices: () => void;
  onShowSoftware: () => void;
}> = ({ onShowServices, onShowSoftware }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-[var(--z-sticky-nav)] border-b border-[var(--color-rule)] bg-[var(--color-paper)] transition-colors duration-[var(--dur-short)] ${
        scrolled ? 'border-[var(--color-rule-2)]' : ''
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16 gap-4">
          <div className="flex-shrink-0 flex items-center">
            <a href="#intro" aria-label="ESISCOM Inicio" className="flex items-center gap-3">
              <img
                src="images/logo.svg"
                alt=""
                width="32"
                height="32"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-normal text-[18px] tracking-tight text-[var(--color-ink)]">
                ESISCOM
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={linkClass}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onShowSoftware}
              className="v-btn v-btn--line v-btn--sm"
            >
              ESoft
            </button>
            <button
              type="button"
              onClick={onShowServices}
              className="v-btn v-btn--line v-btn--sm"
            >
              Precios
            </button>
            <a
              href="#contact"
              className="v-btn v-btn--sm"
            >
              Agendar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="menu-movil"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="menu-movil"
          className="lg:hidden bg-[var(--color-paper-2)] border-t border-[var(--color-rule)]"
        >
          <div className="container py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[15px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] border-b border-[var(--color-rule)]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onShowSoftware();
                }}
                className="v-btn v-btn--line w-full"
              >
                ESoft
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onShowServices();
                }}
                className="v-btn v-btn--line w-full"
              >
                Precios
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="v-btn w-full"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
