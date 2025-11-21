import React from 'react';
import { NavItem, ServiceItem, Testimonial } from './types';
import { WrenchIcon, MonitorIcon, CodeIcon } from './components/Icons';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#intro' },
  { label: 'Servicios', href: '#services' },
  { label: 'Soporte Remoto', href: '#remote-support' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Reparaciones de Hardware',
    description: 'Diagnóstico y reparación a nivel componente para laptops, PCs de escritorio e impresoras. Mantenimiento preventivo y correctivo garantizado.',
    icon: <WrenchIcon className="w-8 h-8 text-white" />,
  },
  {
    title: 'Soporte Técnico IT',
    description: 'Asistencia técnica inmediata remota y presencial. Administración de redes, servidores y seguridad informática para tu empresa.',
    icon: <MonitorIcon className="w-8 h-8 text-white" />,
  },
  {
    title: 'Desarrollo de Software',
    description: 'Soluciones digitales a la medida. Desde automatización de procesos hasta aplicaciones web completas para optimizar tu negocio.',
    icon: <CodeIcon className="w-8 h-8 text-white" />,
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
