import React from 'react';
import { LocationIcon, PhoneIcon, MailIcon, ClockIcon } from './Icons';
import ContactForm from './ContactForm';

const ROWS = [
  {
    icon: <LocationIcon className="w-5 h-5 text-[var(--color-accent)]" />,
    title: 'Dirección',
    body: (
      <>
        Cipres #3712, Col. Satélite
        <br />
        Chihuahua, Chih., CP 31114
      </>
    ),
  },
  {
    icon: <PhoneIcon className="w-5 h-5 text-[var(--color-accent)]" />,
    title: 'Teléfono',
    body: (
      <a href="tel:+526143249716" className="v-num hover:text-[var(--color-accent)] transition-colors">
        (614) 324-9716
      </a>
    ),
  },
  {
    icon: <MailIcon className="w-5 h-5 text-[var(--color-accent)]" />,
    title: 'Correo',
    body: (
      <a href="mailto:contacto@esiscom.com" className="hover:text-[var(--color-accent)] transition-colors">
        contacto@esiscom.com
      </a>
    ),
  },
  {
    icon: <ClockIcon className="w-5 h-5 text-[var(--color-accent)]" />,
    title: 'Horario',
    body: (
      <>
        Lun a Vie: 9:00 am a 6:00 pm
        <br />
        Sáb: 9:00 am a 1:00 pm
      </>
    ),
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="v-section--band border-t border-[var(--color-rule)] scroll-mt-20">
      <div className="container">
        <div className="pb-8 border-b border-[var(--color-rule)]">
          <h2 className="text-[var(--color-ink)]">
            Hablemos.
          </h2>
          <p className="lead mt-4 text-[var(--color-ink-2)]">
            Cuéntanos qué pasa con tu equipo o proyecto de software y te respondemos el mismo día hábil. También puedes visitarnos en Cipres #3712.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[var(--gap-columns)] items-start">
          <div className="lg:col-span-7 min-w-0">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 min-w-0 space-y-6">
            <div className="ticks p-6 sm:p-8 bg-[var(--color-paper)] rounded-[var(--radius-card)]">
              <dl className="divide-y divide-[var(--color-rule)]">
                {ROWS.map((row) => (
                  <div key={row.title} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">{row.icon}</div>
                    <div className="min-w-0">
                      <dt className="text-[13px] text-[var(--color-muted)]">{row.title}</dt>
                      <dd className="mt-1 text-[16px] text-[var(--color-ink)]">{row.body}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <a
                href="https://wa.me/526143249716?text=Hola%20ESISCOM%2C%20necesito%20soporte%20t%C3%A9cnico."
                target="_blank"
                rel="noopener noreferrer"
                className="v-btn w-full mt-6"
              >
                Enviar WhatsApp
              </a>
            </div>

            <div className="ticks h-64 overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-paper)]">
              <iframe
                title="Ubicación ESISCOM"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6762461427656!2d-106.0922363!3d28.6694111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea4308e7bce6cd%3A0xadd80f9d7922d30d!2sESISCOM!5e0!3m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="[filter:grayscale(1)_invert(92%)_contrast(88%)]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
