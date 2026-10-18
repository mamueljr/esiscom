import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';

/**
 * Formulario de contacto sin backend.
 *
 * Con `VITE_WEB3FORMS_KEY` definida, el envío va a Web3Forms y llega por correo.
 * Sin llave, el formulario NO finge un envío: arma el mensaje y abre WhatsApp,
 * que es el canal que la empresa ya atiende.
 */
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WHATSAPP_NUMBER = '526142541066';

const SERVICIOS = [
  'Reparación de equipo',
  'Soporte técnico IT',
  'Desarrollo de software',
  'Soporte remoto',
  'Todavía no lo sé',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

type Form = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  acepto: boolean;
};

const EMPTY: Form = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: '',
  acepto: false,
};

const inputClass =
  'w-full border border-white/15 bg-ink px-4 py-3 text-white placeholder:text-slate-600 transition-colors focus:border-primary-400 focus:outline-none';
const labelClass =
  'mb-2 block font-display text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [notice, setNotice] = useState('');

  const set = (key: keyof Form, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Form, string>> = {};
    if (form.nombre.trim().length < 2) next.nombre = 'Escribe tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Revisa tu correo.';
    if (form.mensaje.trim().length < 10)
      next.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
    if (!form.acepto) next.acepto = 'Necesitamos tu aceptación para contactarte.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () =>
    [
      `Hola ESISCOM, soy ${form.nombre.trim()}.`,
      form.servicio && `Servicio: ${form.servicio}.`,
      `Correo: ${form.email.trim()}.`,
      form.telefono.trim() && `Teléfono: ${form.telefono.trim()}.`,
      '',
      form.mensaje.trim(),
    ]
      .filter(Boolean)
      .join('\n');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === 'sending') return;
    if (!validate()) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    // Sin llave configurada: no simulamos un envío, pasamos a WhatsApp.
    if (!accessKey) {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`,
        '_blank',
        'noopener,noreferrer'
      );
      setNotice('Abrimos WhatsApp con tu mensaje listo para enviar.');
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nueva solicitud: ${form.servicio || 'contacto general'}`,
          from_name: 'Sitio ESISCOM',
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
          servicio: form.servicio,
          mensaje: form.mensaje.trim(),
          botcheck: false,
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || 'No se pudo enviar el formulario.');
      }
      setNotice('Recibimos tu solicitud. Te contactamos hoy mismo.');
      setStatus('sent');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex h-full flex-col justify-center border border-primary-400/40 bg-primary-400/5 p-8 sm:p-10">
        <p className="font-display text-xs font-bold tracking-[0.3em] text-primary-400">
          SOLICITUD ENVIADA
        </p>
        <h3 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
          Gracias, {form.nombre.trim() || 'bienvenido'}.
        </h3>
        <p className="mt-3 text-slate-300">{notice}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setForm(EMPTY);
              setStatus('idle');
              setNotice('');
            }}
            className="border border-white/25 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-primary-400 hover:text-primary-400"
          >
            Enviar otra
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-400 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-primary-300"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-white/15 bg-ink-soft p-6 sm:p-10"
    >
      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
        Cuéntanos qué necesitas
      </h3>
      <p className="mt-2 text-sm text-slate-400">
        Respondemos el mismo día hábil. Si es urgente, marca o escríbenos por WhatsApp.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-nombre" className={labelClass}>
            Nombre *
          </label>
          <input
            id="cf-nombre"
            name="nombre"
            value={form.nombre}
            onChange={(e) => set('nombre', e.target.value)}
            className={inputClass}
            placeholder="Tu nombre"
            autoComplete="name"
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? 'cf-nombre-error' : undefined}
          />
          {errors.nombre && (
            <p id="cf-nombre-error" className="mt-2 text-xs text-red-400">
              {errors.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Correo *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className={inputClass}
            placeholder="tu@correo.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
          />
          {errors.email && (
            <p id="cf-email-error" className="mt-2 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="cf-telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={(e) => set('telefono', e.target.value)}
            className={inputClass}
            placeholder="(614) 000-0000"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="cf-servicio" className={labelClass}>
            ¿Qué necesitas?
          </label>
          <select
            id="cf-servicio"
            name="servicio"
            value={form.servicio}
            onChange={(e) => set('servicio', e.target.value)}
            className={`${inputClass} appearance-none`}
          >
            <option value="">Selecciona una opción</option>
            {SERVICIOS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-mensaje" className={labelClass}>
            Mensaje *
          </label>
          <textarea
            id="cf-mensaje"
            name="mensaje"
            rows={5}
            value={form.mensaje}
            onChange={(e) => set('mensaje', e.target.value)}
            className={`${inputClass} resize-y`}
            placeholder="Ejemplo: laptop Lenovo no enciende desde ayer, necesito diagnóstico."
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={errors.mensaje ? 'cf-mensaje-error' : undefined}
          />
          {errors.mensaje && (
            <p id="cf-mensaje-error" className="mt-2 text-xs text-red-400">
              {errors.mensaje}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot anti-spam (Web3Forms lo reconoce por el name) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-slate-400">
          <input
            type="checkbox"
            checked={form.acepto}
            onChange={(e) => set('acepto', e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-primary-400"
            aria-invalid={Boolean(errors.acepto)}
            aria-describedby={errors.acepto ? 'cf-acepto-error' : undefined}
          />
          <span>
            Acepto el{' '}
            <a
              href="#aviso-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 underline underline-offset-2 hover:text-primary-300"
            >
              aviso de privacidad
            </a>{' '}
            y el uso de mis datos para atender esta solicitud.
          </span>
        </label>
        {errors.acepto && (
          <p id="cf-acepto-error" className="mt-2 text-xs text-red-400">
            {errors.acepto}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-300">
          No pudimos enviar el formulario. Escríbenos por WhatsApp o llama al (614) 254-1066.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex justify-center bg-primary-400 px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-primary-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
        </button>
        <p className="text-xs text-slate-500">
          Tus datos nunca se comparten con terceros.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
