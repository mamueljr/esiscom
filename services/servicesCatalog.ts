/**
 * Catálogo único de servicios y precios de ESISCOM.
 *
 * Los importes son números para poder reutilizarlos después en un cotizador.
 * El texto visible se arma en la página de Servicios y Precios.
 */

export interface Servicio {
  id: string;
  nombre: string;
  precio: number | null;
  precioTexto?: string;
  precioEtiqueta?: string;
  precioSufijo?: string;
  precioDetalle?: string;
  incluye: string[];
  nota?: string;
  badge?: string;
  destacado?: boolean;
  ancha?: boolean;
  ctaTexto?: string;
  mensajeWhatsApp?: string;
}

export interface Zona {
  id: string;
  nombre: string;
  distancia: string;
  tiempo: string;
  cargo: string;
}

export interface PlanCare {
  nombre: string;
  subtitulo: string;
  incluye: string[];
  noIncluye: string[];
  nota: string;
  ctaTexto: string;
  mensajeWhatsApp: string;
}

export interface Punto {
  titulo: string;
  texto: string;
}

export interface Catalogo {
  taller: Servicio[];
  externo: Servicio[];
  zonas: Zona[];
  care: PlanCare;
  bolsa: Servicio;
  revision: Servicio;
  comoTrabajamos: Punto[];
  porQue: Punto[];
}

export const WHATSAPP_NUMBER = '526142541066';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const waLink = (texto: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(texto)}`;

export const formatMXN = (valor: number) =>
  `$${valor.toLocaleString('es-MX')}`;

export const CATALOGO: Catalogo = {
  taller: [
    {
      id: 'formateo-estandar',
      nombre: 'Formateo Estándar',
      precio: 600,
      incluye: [
        'Instalación limpia del sistema operativo',
        'Drivers oficiales del fabricante',
        'Programas básicos (navegadores, WinRAR, AnyDesk, Foxit Reader, LibreOffice)',
      ],
      nota: 'No incluye respaldo: el equipo se recibe sin archivos que conservar.',
    },
    {
      id: 'formateo-pro',
      nombre: 'Formateo Pro + Respaldo',
      badge: 'El más elegido',
      precio: 900,
      incluye: [
        'Todo lo del Estándar',
        'Respaldo y migración de documentos, fotos y descargas',
        'Verificación contigo antes de formatear',
        'Hasta 100 GB incluidos; cada 50 GB extra +$100',
      ],
      destacado: true,
    },
    {
      id: 'renovacion-total',
      nombre: 'Renovación Total',
      badge: 'Mejor valor',
      precio: 1450,
      precioEtiqueta: 'Mano de obra',
      precioDetalle: '+ SSD 240 GB desde $980',
      incluye: [
        'Formateo Pro',
        'Limpieza física profunda (polvo en componentes y ventiladores)',
        'Pasta térmica nueva',
        'Instalación de SSD o memoria RAM',
      ],
      nota: 'Te cotizamos el componente antes de instalarlo. El arranque en segundos con SSD es la mejora que más notan nuestros clientes en equipos antiguos.',
      destacado: true,
      ancha: true,
    },
    {
      id: 'limpieza-virus',
      nombre: 'Limpieza de virus y optimización',
      precio: 450,
      incluye: [
        'Eliminación de virus, malware y publicidad no deseada',
        'Sin borrar tus archivos ni tus programas',
      ],
      nota: 'Si el problema requiere reinstalar el sistema, te lo explicamos y se aplica el precio del formateo.',
    },
    {
      id: 'mantenimiento-preventivo',
      nombre: 'Mantenimiento preventivo',
      precio: 350,
      incluye: [
        'Limpieza física interna, sopleteo y pasta térmica',
        'Evita sobrecalentamiento y ruido',
      ],
    },
    {
      id: 'diagnostico-taller',
      nombre: 'Diagnóstico en taller',
      precio: 200,
      incluye: ['Revisión técnica con informe'],
      nota: 'Se abona al costo de la reparación si decides continuar con nosotros.',
      ancha: true,
    },
  ],

  externo: [
    {
      id: 'soporte-sitio',
      nombre: 'Soporte en sitio',
      precio: 500,
      precioSufijo: 'Visita base',
      incluye: [
        'Traslado dentro de la zona estándar',
        'Diagnóstico y hasta 60 min de trabajo: redes, carpetas compartidas, impresoras, periféricos, fallas generales',
      ],
    },
    {
      id: 'hora-adicional',
      nombre: 'Hora adicional en sitio',
      precio: 300,
      precioSufijo: 'Por hora',
      precioDetalle: 'Bloques de 30 min = $150',
      incluye: ['Trabajo adicional después del tiempo incluido en la visita base'],
      nota: 'Visitas a empresas: mínimo 2 horas ($800 dentro de la zona estándar, más cargo por zona si aplica).',
    },
    {
      id: 'soporte-remoto',
      nombre: 'Soporte remoto',
      precio: 300,
      precioSufijo: 'Hasta 45 min por AnyDesk',
      incluye: [
        'Problemas de software y configuraciones',
        'Tiempo extra: $150 cada 30 min',
      ],
    },
    {
      id: 'formateo-domicilio',
      nombre: 'Formateo a domicilio',
      precio: 1300,
      incluye: ['Reinstalación del sistema en tu domicilio u oficina'],
      nota: 'Sin respaldo; si lo necesitas, te cotizamos según volumen de datos.',
    },
    {
      id: 'diagnostico-sitio',
      nombre: 'Diagnóstico sin reparación en sitio',
      precio: 350,
      incluye: ['Traslado y revisión técnica'],
      nota: 'Si el equipo requiere pieza mayor y no se puede reparar en el momento.',
      ancha: true,
    },
  ],

  zonas: [
    {
      id: 'zona-1',
      nombre: 'Zona 1',
      distancia: 'Hasta 4 km',
      tiempo: '10 a 12 min',
      cargo: 'Sin cargo',
    },
    {
      id: 'zona-2',
      nombre: 'Zona 2',
      distancia: 'De 4 a 10 km',
      tiempo: '12 a 25 min',
      cargo: '+$150',
    },
    {
      id: 'zona-3',
      nombre: 'Zona 3',
      distancia: 'De 10 a 15 km',
      tiempo: '25 a 35 min',
      cargo: '+$250',
    },
    {
      id: 'fuera-de-zona',
      nombre: 'Fuera de zona',
      distancia: 'Más de 15 km',
      tiempo: 'Más de 35 min',
      cargo: 'Cotización aparte',
    },
  ],

  care: {
    nombre: 'ESISCOM Care',
    subtitulo:
      'Plan mensual para oficinas. Cotización personalizada según el número de equipos.',
    incluye: [
      'Mantenimiento programado mensual',
      'Soporte remoto con una bolsa mensual de solicitudes',
      'Visitas en sitio con un tope mensual',
      'Respaldo automático de carpetas clave con verificación mensual',
      'Seguimiento e historial por equipo',
    ],
    noIncluye: [
      'Equipos nuevos ni migraciones de datos',
      'Refacciones y licencias',
      'Reparaciones de hardware',
      'Proyectos de redes o servidores',
    ],
    nota: 'No ofrecemos atención ilimitada ni disponibilidad inmediata: acordamos por escrito el alcance y los límites.',
    ctaTexto: 'Solicitar propuesta',
    mensajeWhatsApp:
      'Hola ESISCOM, quiero solicitar una propuesta para ESISCOM Care.',
  },

  bolsa: {
    id: 'bolsa-horas',
    nombre: 'Bolsa de horas',
    precio: 1500,
    precioEtiqueta: '6 horas prepagadas',
    precioDetalle: 'Ahorras $300 frente a la tarifa normal',
    incluye: [
      'Vigencia de 60 días',
      'Soporte remoto o en sitio',
      'Cada visita en sitio descuenta mínimo 1 hora',
    ],
    mensajeWhatsApp: 'Hola ESISCOM, quiero cotizar la bolsa de horas.',
  },

  revision: {
    id: 'revision-oficina',
    nombre: 'Revisión técnica de oficina',
    precio: 0,
    precioTexto: 'Gratis',
    incluye: [
      'Revisión de equipos, red y respaldos',
      'Informe por escrito',
    ],
    nota: 'Para empresas con 5 o más equipos, dentro de las zonas 1 a 3. Incluye informe por escrito y no genera compromiso.',
    mensajeWhatsApp:
      'Hola ESISCOM, quiero agendar la revisión técnica de oficina.',
  },

  comoTrabajamos: [
    {
      titulo: 'Garantía de 30 días sobre la mano de obra',
      texto:
        'En la misma falla atendida. No cubre virus nuevos, fallas de hardware ni mal uso del equipo.',
    },
    {
      titulo: 'Respaldos verificados contigo',
      texto:
        'Verificamos la información antes de formatear. Te recomendamos conservar siempre una copia propia de lo irremplazable.',
    },
    {
      titulo: 'Piezas y hardware',
      texto: 'Anticipo del 50% al aprobar la cotización.',
    },
    {
      titulo: 'Licencias de Windows y Office',
      texto:
        'La paquetería incluida es de uso libre. Las licencias comerciales de Windows y Office se cotizan por separado o las aporta el cliente.',
    },
    {
      titulo: 'Equipos en taller',
      texto:
        'Te avisamos cuando estén listos. Pasados 30 días naturales sin recogerlos, pueden generar un costo de resguardo.',
    },
  ],

  porQue: [
    {
      titulo: 'Ingeniero a cargo',
      texto:
        'Ingeniero en Sistemas Computacionales con maestría, a cargo del servicio.',
    },
    {
      titulo: 'Precios claros',
      texto: 'Precios publicados, sin cobros sorpresa.',
    },
    {
      titulo: 'Garantía de 30 días',
      texto:
        'Sobre la mano de obra, en la misma falla atendida.',
    },
  ],
};
