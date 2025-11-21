import React from 'react';
import { LocationIcon, PhoneIcon, MailIcon, ClockIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Contacto y Ubicación</h2>
          <p className="mt-4 text-xl text-slate-500">
            Visítanos o contáctanos. Estamos listos para resolver tus necesidades tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Información Directa</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <LocationIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Dirección</h4>
                    <p className="text-slate-600">Cipres #3712, Col. Satelite<br/>Chihuahua, Chih., México • CP 31114</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Teléfono</h4>
                    <a href="tel:+526142541066" className="text-slate-600 hover:text-primary-600 transition-colors">(614) 254-1066</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Email</h4>
                    <a href="mailto:contacto@esiscom.com" className="text-slate-600 hover:text-primary-600 transition-colors">contacto@esiscom.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Horario</h4>
                    <p className="text-slate-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/526142541066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
            <iframe
              title="Ubicación ESISCOM"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6762461427656!2d-106.0922363!3d28.6694111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea4308e7bce6cd%3A0xadd80f9d7922d30d!2sESISCOM!5e0!3m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;