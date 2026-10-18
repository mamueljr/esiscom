import React from 'react';

/**
 * Aviso de Privacidad — base conforme a la LFPDPPP (México).
 * Conviene que un abogado lo revise antes de usarlo como documento definitivo.
 * Al agregar analítica o cookies de marketing hay que actualizar la sección 9.
 */

const UPDATED = '18 de octubre de 2026';

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const SECTIONS: Section[] = [
  {
    title: '1. Responsable de tus datos personales',
    paragraphs: [
      'ESISCOM (en adelante, "la empresa") es responsable del tratamiento de los datos personales que recaba a través de este sitio, del teléfono, de WhatsApp, del correo electrónico y de la atención directa en sus instalaciones.',
      'Domicilio: Cipres #3712, Col. Satélite, Chihuahua, Chih., C.P. 31114, México.',
      'Correo de contacto: contacto@esiscom.com · Teléfono: (614) 254-1066.',
    ],
  },
  {
    title: '2. Datos personales que recabamos',
    paragraphs: ['Dependiendo de cómo nos contactes, podemos recabar:'],
    bullets: [
      'Datos de identificación y contacto: nombre, correo electrónico y teléfono.',
      'Datos del servicio: tipo de equipo, fallas reportadas y la descripción del problema que nos compartes.',
      'Datos de facturación, únicamente si solicitas comprobante fiscal: RFC, razón social y domicilio fiscal.',
    ],
  },
  {
    title: '3. Finalidades del tratamiento',
    paragraphs: ['Usamos tus datos para las siguientes finalidades primarias, necesarias para el servicio:'],
    bullets: [
      'Atender solicitudes de información, cotización y contacto.',
      'Prestar el servicio de reparación, soporte técnico y desarrollo de software.',
      'Dar seguimiento, entregar el equipo y hacer válida la garantía.',
      'Emitir comprobantes fiscales cuando corresponda.',
      'Avisarte del estatus de tu equipo o de tu solicitud.',
    ],
  },
  {
    title: '4. Finalidades secundarias',
    paragraphs: [
      'De manera adicional, y solo si no te opones, podemos usar tu correo o teléfono para enviarte información sobre servicios, promociones y contenido relacionado. Puedes negarte a estas finalidades desde el momento en que nos proporcionas tus datos o en cualquier momento posterior escribiendo a contacto@esiscom.com. Negarte no afecta la prestación del servicio que solicitaste.',
    ],
  },
  {
    title: '5. Cómo obtenemos los datos y consentimiento',
    paragraphs: [
      'Obtenemos tus datos cuando los proporcionas de forma directa: al enviar el formulario de este sitio, al escribirnos por WhatsApp o correo, al llamarnos o al entregar un equipo en el taller.',
      'Al enviar una solicitud, aceptas el tratamiento de tus datos conforme a este aviso. Puedes revocar tu consentimiento en cualquier momento, sin efectos retroactivos, mediante la solicitud descrita en la sección 7.',
    ],
  },
  {
    title: '6. Transferencias de datos',
    paragraphs: [
      'No transferimos tus datos personales a terceros sin tu consentimiento, salvo las excepciones previstas por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (por ejemplo, requerimientos de autoridad competente).',
      'Los proveedores tecnológicos que nos apoyan —servicio de correo, hospedaje del sitio y mensajería— tratan los datos únicamente por cuenta de la empresa y para las finalidades descritas en este aviso.',
    ],
  },
  {
    title: '7. Tus derechos ARCO y revocación del consentimiento',
    paragraphs: [
      'Tienes derecho a Acceder a tus datos, Rectificarlos cuando sean inexactos, Cancelarlos cuando ya no sean necesarios y Oponerte a su tratamiento. También puedes revocar tu consentimiento o limitar el uso o divulgación de tus datos.',
      'Para ejercer cualquiera de estos derechos envía una solicitud a contacto@esiscom.com indicando: tu nombre completo, un medio para comunicarnos la respuesta, el derecho que deseas ejercer y una descripción clara de lo que solicitas. Si la solicitud se realiza por otra persona, deberá acreditar su representación.',
      'Responderemos en un plazo máximo de 20 días hábiles contados desde la recepción de la solicitud. Si la solicitud procede, se hará efectiva dentro de los 15 días hábiles siguientes.',
    ],
  },
  {
    title: '8. Seguridad y conservación',
    paragraphs: [
      'Aplicamos medidas administrativas, técnicas y físicas razonables para proteger tus datos contra daño, pérdida o acceso no autorizado. Ningún sistema es completamente infalible, pero limitamos el acceso a la información a las personas que la necesitan para atenderte.',
      'Conservamos tus datos mientras exista una relación de servicio o mientras una obligación legal o fiscal nos exija conservarlos.',
    ],
  },
  {
    title: '9. Cookies y servicios de terceros',
    paragraphs: [
      'Este sitio no utiliza cookies publicitarias ni de perfilamiento. La aceptación del formulario no depende de ellas.',
      'El sitio carga tipografías de Google Fonts y un mapa de Google Maps embebido. Estos servicios son operados por Google y pueden registrar tu dirección IP y datos técnicos de tu navegador; su tratamiento se rige por los propios avisos de privacidad de Google.',
      'Si el sitio consulta información técnica de tu equipo para orientar un diagnóstico, esa información se usa únicamente para ese fin.',
    ],
  },
  {
    title: '10. Menores de edad',
    paragraphs: [
      'Nuestros servicios están dirigidos a personas mayores de 18 años. No recabamos intencionalmente datos de menores de edad; si detectamos que se recibieron, procederemos a su eliminación.',
    ],
  },
  {
    title: '11. Cambios a este aviso de privacidad',
    paragraphs: [
      'Este aviso puede actualizarse por cambios legales, operativos o en nuestros servicios. La versión vigente estará siempre disponible en esta misma página, con la fecha de su última actualización.',
    ],
  },
  {
    title: '12. Autoridad en materia de protección de datos',
    paragraphs: [
      'Si consideras que tus derechos han sido vulnerados, puedes acudir a la autoridad federal competente en materia de protección de datos personales.',
    ],
  },
];

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="min-h-screen bg-ink pb-16 text-white">
    <a
      href="#intro"
      className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:bg-primary-400 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
    >
      Saltar al contenido
    </a>

    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="group flex shrink-0 items-center gap-2 text-slate-300 transition-colors hover:text-primary-400"
          aria-label="Volver al inicio"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-display text-sm font-semibold tracking-[0.1em]">Volver</span>
        </button>
        <h1 className="min-w-0 flex-1 truncate text-center font-display text-base font-extrabold tracking-tight sm:text-xl">
          Aviso de Privacidad
        </h1>
        <div className="w-14 shrink-0 sm:w-20" />
      </div>
    </header>

    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="font-display text-xs font-bold tracking-[0.3em] text-primary-400">
        ESISCOM — CHIHUAHUA, MX
      </p>
      <p className="mt-4 text-slate-300">
        Este aviso explica qué datos personales recabamos, para qué los usamos y cómo puedes ejercer
        tus derechos. Aplica a este sitio web y a los canales de atención de ESISCOM.
      </p>
      <p className="mt-2 text-sm text-slate-500">Última actualización: {UPDATED}.</p>

      <div className="mt-10 space-y-10">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-lg font-bold text-white sm:text-xl">{s.title}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-3 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-300 sm:text-base">
                    <span className="mt-1 text-primary-400">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="text-sm text-slate-400">
          Dudas sobre este aviso:{' '}
          <a href="mailto:contacto@esiscom.com" className="text-primary-400 hover:text-primary-300">
            contacto@esiscom.com
          </a>{' '}
          ·{' '}
          <a href="tel:+526142541066" className="text-primary-400 hover:text-primary-300">
            (614) 254-1066
          </a>
        </p>
        <button
          onClick={onBack}
          className="mt-6 border border-white/25 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-primary-400 hover:text-primary-400"
        >
          Volver al sitio
        </button>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
