import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Nuestra Especialidad</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Servicios Integrales IT
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Cubrimos todo el espectro tecnológico, desde el hardware físico hasta el software que impulsa tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="relative group bg-slate-50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-xl shadow-lg mb-6 group-hover:bg-primary-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a href="#contact" className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center">
                    Solicitar cotización
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;