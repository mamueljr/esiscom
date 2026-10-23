import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const linkClass =
  'relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-primary-300 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary-400 after:transition-transform after:duration-300 hover:after:scale-x-100';

const Navbar: React.FC<{ onShowServices: () => void }> = ({ onShowServices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const handleBreakpoint = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', handleBreakpoint);
    return () => desktop.removeEventListener('change', handleBreakpoint);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'py-1 shadow-lg shadow-black/30' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#intro" className="flex items-center gap-3">
              <img
                src="images/logo.svg"
                alt="ESISCOM Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                ESISCOM
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-center space-x-2">
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
              <a
                href="#contact"
                className="ml-3 rounded-xl border border-white/25 px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-slate-200 transition-colors hover:border-primary-400 hover:text-primary-300"
              >
                Agendar
              </a>
              <button
                onClick={onShowServices}
                className="ml-2 rounded-xl bg-primary-400 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ink shadow-lg shadow-primary-400/10 transition-colors hover:bg-primary-300"
              >
                Precios
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-primary-300 focus:outline-none"
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
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-ink shadow-2xl shadow-black/60 xl:hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 hover:text-primary-300 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 rounded-xl border border-white/25 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-slate-200 transition-colors hover:border-primary-400 hover:text-primary-300"
            >
              Agendar
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onShowServices();
              }}
              className="mt-2 block w-full rounded-xl bg-primary-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-primary-300"
            >
              Precios
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
