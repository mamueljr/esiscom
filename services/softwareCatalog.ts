/**
 * Catálogo de aplicaciones de ESISCOM Soft.
 *
 * Agregar una app nueva = agregar un objeto a `APPS`. La interfaz de la página
 * de Software se genera sola a partir de este arreglo.
 */

export interface SoftApp {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  url: string;
  caracteristicas: string[];
  badge?: string;
  destacada?: boolean;
}

export const APPS: SoftApp[] = [
  {
    id: 'medical',
    nombre: 'ESISCOM Medical',
    categoria: 'Para consultorios médicos',
    descripcion:
      'Expediente clínico electrónico con signos vitales, diagnósticos CIE-10, recetas en PDF, agenda y cobros. Todo en un solo lugar, sin instalar nada.',
    url: 'https://esiscom.com/medical/',
    caracteristicas: [
      'Expediente clínico por paciente',
      'Signos vitales y notas de consulta',
      'Diagnósticos con clave CIE-10',
      'Recetas en PDF listas para imprimir',
      'Agenda de citas',
      'Control de cobros',
    ],
    badge: 'Salud',
    destacada: true,
  },
  {
    id: 'nails',
    nombre: 'ESISCOM Nails',
    categoria: 'Para salones de uñas',
    descripcion:
      'Agenda de citas, recordatorios por mensaje y reservas en línea para tus clientas. Con catálogo de servicios y control de ingresos.',
    url: 'https://app.esiscom.com/nails/',
    caracteristicas: [
      'Agenda de citas',
      'Recordatorios por mensaje',
      'Tus clientas agendan en línea',
      'Catálogo de servicios',
      'Control de ingresos',
    ],
    badge: 'Cuidado personal',
  },
  {
    id: 'barber',
    nombre: 'ESISCOM Barber',
    categoria: 'Para barberías',
    descripcion:
      'La misma experiencia ESISCOM para barberías: agenda, recordatorios de citas, reservas en línea, catálogo de servicios y control de ingresos.',
    url: 'https://app.esiscom.com/barber/',
    caracteristicas: [
      'Agenda de citas',
      'Recordatorios por mensaje',
      'Tus clientes agendan en línea',
      'Catálogo de servicios',
      'Control de ingresos',
    ],
    badge: 'Cuidado personal',
  },
];
