import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import RemoteSupport from './components/RemoteSupport';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ServicesDetail from './components/ServicesDetail';

type View = 'home' | 'services';

const App: React.FC = () => {
  const [view, setView] = useState<View>(() =>
    window.location.hash === '#servicios-detalle' ? 'services' : 'home'
  );

  useEffect(() => {
    const onHashChange = () => {
      setView(window.location.hash === '#servicios-detalle' ? 'services' : 'home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goTo = (next: View) => {
    setView(next);
    window.history.pushState(null, '', next === 'services' ? '#servicios-detalle' : '#intro');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  if (view === 'services') {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-ink">
        <ServicesDetail onBack={() => goTo('home')} />
        <ChatWidget />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-ink">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary-400 focus:text-ink focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
      >
        Saltar al contenido
      </a>
      <Navbar onShowServices={() => goTo('services')} />
      <main className="flex-grow">
        <Hero onShowServices={() => goTo('services')} />
        <Clients />
        <Services onShowServices={() => goTo('services')} />
        <RemoteSupport />
        <Testimonials />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer onShowServices={() => goTo('services')} />
      <ChatWidget />
    </div>
  );
};

export default App;
