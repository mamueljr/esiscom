import React from 'react';
import { LocationIcon, PhoneIcon, MailIcon, ClockIcon } from './Icons';
import Reveal from './Reveal';
import ContactForm from './ContactForm';

const ROWS = [
  {
    icon: <LocationIcon className="w-6 h-6 text-primary-400" />,
    title: 'Dirección',
    body: (
      <>
        Cipres #3712, Col. Satélite
        <br />
        Chihuahua, Chih. · CP 31114
      </>
    ),
  },
  {
    icon: <PhoneIcon className="w-6 h-6 text-primary-400" />,
    title: 'Teléfono',
    body: <a href="tel:+526142541066" className="hover:text-primary-300 transition-colors">(614) 254-1066</a>,
  },
  {
    icon: <MailIcon className="w-6 h-6 text-primary-400" />,
    title: 'Email',
    body: (
      <a href="mailto:contacto@esiscom.com" className="hover:text-primary-300 transition-colors">
        contacto@esiscom.com
      </a>
    ),
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-primary-400" />,
    title: 'Horario',
    body: (
      <>
        Lun–Vie: 9:00 AM – 6:00 PM
        <br />
        Sáb: 9:00 AM – 1:00 PM
      </>
    ),
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/10 bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-display text-xs font-bold tracking-[0.3em] text-primary-400">
            <span aria-hidden="true" className="h-px w-10 bg-primary-400/70" />
            05 — CONTACTO
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Hablemos<span className="text-primary-400">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Cuéntanos qué pasa con tu equipo y te respondemos el mismo día hábil. También puedes
            visitarnos en Cipres #3712.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="panel-sheen flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-ink-soft p-8 sm:p-10">
              <div className="space-y-8">
                {ROWS.map((row) => (
                  <div key={row.title} className="flex items-start">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-400/10 text-primary-400">
                      {row.icon}
                    </div>
                    <div className="ml-5">
                      <h4 className="font-display text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                        {row.title}
                      </h4>
                      <div className="mt-1 text-lg text-white">{row.body}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/526142541066?text=Hola%20ESISCOM%2C%20necesito%20soporte%20t%C3%A9cnico."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center rounded-xl bg-primary-400 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-primary-300"
              >
                Enviar WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8">
          <div className="h-72 overflow-hidden rounded-2xl border border-white/10 sm:h-80">
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
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
