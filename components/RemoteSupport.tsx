import React from 'react';
import { DownloadIcon } from './Icons';

const RemoteSupport: React.FC = () => {
  return (
    <section id="remote-support" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Soporte Remoto Inmediato
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              ¿Problemas técnicos urgentes? Nuestro equipo puede conectarse a tu computadora de manera segura para diagnosticar y resolver problemas en minutos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center font-bold text-sm">1</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Descarga la herramienta</h4>
                  <p className="text-slate-400 text-sm mt-1">Elige AnyDesk o RustDesk según tu preferencia.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center font-bold text-sm">2</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Ejecuta el programa</h4>
                  <p className="text-slate-400 text-sm mt-1">No requiere instalación compleja.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center font-bold text-sm">3</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Comparte tu ID</h4>
                  <p className="text-slate-400 text-sm mt-1">Proporciona el código de acceso a nuestro técnico.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center">Descargas Oficiales</h3>
            <div className="space-y-4">
              <a 
                href="https://anydesk.com/es/downloads/thank-you?dv=win_exe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-between px-6 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all font-semibold"
              >
                <span className="flex items-center">
                    <img src="images/anydesk-logo.png" className="w-8 h-8 mr-4" alt="AnyDesk Logo"/>
                    AnyDesk (Windows)
                </span>
                <DownloadIcon className="w-5 h-5 text-slate-400 group-hover:text-primary-600" />
              </a>
              
              <a 
                href="https://github.com/rustdesk/rustdesk/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-between px-6 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 transition-all font-semibold"
              >
                <span className="flex items-center">
                    <img src="images/rustdesk-logo.png" className="w-8 h-8 mr-4" alt="RustDesk Logo"/>
                    RustDesk (Open Source)
                </span>
                <DownloadIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
            <p className="text-center text-xs text-slate-400 mt-6">
              Al descargar, aceptas los términos de servicio de los proveedores respectivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSupport;