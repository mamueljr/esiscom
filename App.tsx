import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoftwareShowcase from './components/SoftwareShowcase';
import Services from './components/Services';
import RemoteSupport from './components/RemoteSupport';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServicesDetail from './components/ServicesDetail';
import SoftDetail from './components/SoftDetail';
import PrivacyPolicy from './components/PrivacyPolicy';

type View = 'home' | 'services' | 'software' | 'privacy';

const HASH_BY_VIEW: Record<View, string> = {
  home: '#intro',
  services: '#servicios-detalle',
  software: '#software',
  privacy: '#aviso-de-privacidad',
};

// Anclas internas de la página de Servicios y Precios. Se reconocen para que
// los chips de navegación no se interpreten como "volver al inicio".
const SERVICE_HASHES = new Set([
  '#servicios-detalle',
  '#contenido-servicios',
  '#taller',
  '#soporte-externo',
  '#zonas',
  '#empresas',
  '#como-trabamos',
]);

const viewFromHash = (): View => {
  if (SERVICE_HASHES.has(window.location.hash)) return 'services';
  return (
    (Object.keys(HASH_BY_VIEW) as View[]).find(
      (v) => HASH_BY_VIEW[v] === window.location.hash
    ) ?? 'home'
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>(viewFromHash);
  const viewRef = useRef<View>(view);

  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  useEffect(() => {
    const onHashChange = () => {
      const next = viewFromHash();
      if (next !== viewRef.current) {
        const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        toTop();
        requestAnimationFrame(() => requestAnimationFrame(toTop));
      }
      setView(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goTo = (next: View) => {
    setView(next);
    window.history.pushState(null, '', HASH_BY_VIEW[next]);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  if (view === 'services') {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
        <ServicesDetail onBack={() => goTo('home')} />
        <WhatsAppButton />
      </div>
    );
  }

  if (view === 'software') {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
        <SoftDetail onBack={() => goTo('home')} />
        <WhatsAppButton />
      </div>
    );
  }

  if (view === 'privacy') {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
        <PrivacyPolicy onBack={() => goTo('home')} />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-ink)] focus:px-4 focus:py-2 focus:text-sm"
      >
        Saltar al contenido
      </a>
      <Navbar
        onShowServices={() => goTo('services')}
        onShowSoftware={() => goTo('software')}
      />
      <main className="flex-grow">
        <Hero onShowServices={() => goTo('services')} />
        <SoftwareShowcase onShowSoftware={() => goTo('software')} />
        <Services onShowServices={() => goTo('services')} />
        <RemoteSupport />
        <Testimonials />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer
        onShowServices={() => goTo('services')}
        onShowSoftware={() => goTo('software')}
      />
      <WhatsAppButton />
    </div>
  );
};

export default App;
