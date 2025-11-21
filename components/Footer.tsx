import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-500 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
                <img 
                  src="images/logo.svg" 
                  alt="ESISCOM Logo" 
                  className="h-8 w-auto" 
                />
                <span className="font-bold text-xl">ESISCOM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soluciones tecnológicas integrales en Chihuahua. Más de 15 años de experiencia reparando equipos, desarrollando software y manteniendo operaciones críticas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#intro" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#remote-support" className="hover:text-white transition-colors">Soporte Remoto</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legales</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
            </ul>
            <div className="mt-6 flex space-x-4">
                {/* Social placeholders */}
                <a href="https://www.facebook.com/people/Esiscom/100091457924009/" target="_blank" rel="noreferrer" className="w-6 h-6 bg-slate-700 rounded hover:bg-primary-600 transition-colors cursor-pointer flex items-center justify-center text-xs">FB</a>
                <a href="https://www.instagram.com/esiscomti/" target="_blank" rel="noreferrer" className="w-6 h-6 bg-slate-700 rounded hover:bg-primary-600 transition-colors cursor-pointer flex items-center justify-center text-xs">IG</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ESISCOM. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;