import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="intro" className="relative bg-secondary-500 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Make sure to add 'hero-bg.jpg' to your public/images folder */}
        <img 
          src="images/hero-bg.jpg" 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          onError={(e) => {
            // Fallback if image is missing during development
            (e.target as HTMLImageElement).src = 'https://picsum.photos/1920/1080?grayscale';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 via-secondary-500/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-400/30 bg-primary-400/10 text-primary-300 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2"></span>
            +15 años impulsando tecnología en Chihuahua
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Soluciones Tecnológicas <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              Confiables y Estratégicas
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mb-10 mx-auto md:mx-0">
            Reparación de equipos, soporte técnico especializado y desarrollo de software a la medida. 
            Mantenemos tus procesos críticos siempre operativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-600/30"
            >
              Agenda una llamada
            </a>
            <a 
              href="#services" 
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-200 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Ver Servicios
            </a>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="hidden md:block w-1/3 pl-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 transform rotate-3 hover:rotate-0 transition-all duration-500">
            <div className="absolute inset-0 bg-primary-600/20 mix-blend-color"></div>
            {/* Make sure to add 'intro-image.jpg' to your public/images folder */}
            <img 
              src="images/intro-image.jpg" 
              alt="Coding and hardware repair" 
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/600/800';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;