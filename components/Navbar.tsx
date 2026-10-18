import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const linkClass =
  'px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-300 hover:text-primary-400 transition-colors';

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

  return (
    <nav
      className={`fixed w-full z-50 bg-ink/85 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-3'
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
          <div className="hidden md:block">
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
                className="ml-3 border border-white/25 hover:border-primary-400 text-slate-200 hover:text-primary-400 px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors"
              >
                Agendar
              </a>
              <button
                onClick={onShowServices}
                className="ml-2 bg-primary-400 hover:bg-primary-300 text-ink px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors"
              >
                Precios
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-primary-400 focus:outline-none"
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
        <div id="menu-movil" className="md:hidden bg-ink border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 hover:text-primary-400 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 border border-white/25 text-slate-200 text-center px-4 py-3 text-sm font-bold uppercase tracking-[0.14em]"
            >
              Agendar
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onShowServices();
              }}
              className="block w-full mt-2 bg-primary-400 text-ink text-center px-4 py-3 text-sm font-bold uppercase tracking-[0.14em]"
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
