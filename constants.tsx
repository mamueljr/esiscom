import React from 'react';
import { NavItem, ServiceItem, Testimonial } from './types';
import { WrenchIcon, MonitorIcon, CodeIcon } from './components/Icons';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#intro' },
  { label: 'Servicios', href: '#services' },
  { label: 'Soporte Remoto', href: '#remote-support' },
  { label: 'Ubicación', href: '#contact' },
  { label: 'Contacto', href: '#contact' },
  { label: 'EManager', href: 'https://investigacioneducativafccf.net/esiscom/manager/login', external: true },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Reparación de Hardware',
    description: 'Diagnóstico a nivel componente para laptops, PCs e impresoras. Mantenimiento preventivo y correctivo con garantía, para que tu equipo vuelva a trabajar en horas, no en semanas.',
    icon: <WrenchIcon className="w-7 h-7" />,
    tags: ['Laptops', 'PCs', 'Impresoras', 'Preventivo'],
  },
  {
    title: 'Soporte Técnico IT',
    description: 'Asistencia remota y presencial para tu operación diaria: redes, servidores y seguridad informática administrados por gente que contesta y resuelve.',
    icon: <MonitorIcon className="w-7 h-7" />,
    tags: ['Redes', 'Servidores', 'Remoto', 'Seguridad'],
  },
  {
    title: 'Desarrollo de Software',
    description: 'Sistemas a la medida que eliminan trabajo manual: inventarios, automatización de procesos y aplicaciones web completas, entregadas con capacitación.',
    icon: <CodeIcon className="w-7 h-7" />,
    tags: ['Web apps', 'Inventarios', 'Automatización'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "El equipo de ESISCOM dio respuesta inmediata cuando nuestra red cayó. En menos de una hora restablecieron los servicios.",
    author: "María González",
    role: "Coordinadora TI, Electricos Marín"
  },
  {
    quote: "Su servicio de mantenimiento preventivo nos ha ahorrado paros costosos. Además, su comunicación es clara y profesional.",
    author: "Carlos Méndez",
    role: "Director General, Heladería Geronimos"
  },
  {
    quote: "Desarrollaron un sistema a la medida para gestionar inventario. Fue entregado a tiempo y con capacitación completa.",
    author: "Laura Rivera",
    role: "Administradora, Colegio Horizons"
  }
];
