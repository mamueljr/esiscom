import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-ink">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary-400 focus:text-ink focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Clients />
        <Services />
        <RemoteSupport />
        <Testimonials />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
