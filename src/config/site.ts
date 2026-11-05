/**
 * Configuración central del jardín.
 * PERSONALIZAR: para adaptar el sitio a otro jardín de eventos, edita este archivo y src/data/contenido.ts.
 * Todos los datos son ficticios.
 */
export const site = {
  name: 'Jardín Aurora',
  tagline: 'Jardín de eventos',
  description:
    'Jardín Aurora: jardín y salón techado para bodas, XV años, bautizos y eventos corporativos de hasta 300 invitados. Banquete y mobiliario incluidos. Consulta disponibilidad por WhatsApp.',
  url: 'https://jardin-eventos-demo.pages.dev',

  /** PERSONALIZAR: WhatsApp con lada de país (52) + 10 dígitos, sin espacios ni "+". Número ficticio. */
  whatsapp: '525500000000',
  /** Teléfono visible (ficticio) */
  telefono: '+52 55 0000 0000',

  capacidad: 300,
  direccion: {
    calle: 'Camino Real de los Fresnos km 2.5',
    colonia: 'Col. Las Jacarandas',
    ciudad: 'Ciudad de ejemplo',
    estado: 'Estado de ejemplo',
    cp: '00000',
  },
  /** PERSONALIZAR: enlace de Google Maps del lugar real */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=jard%C3%ADn+de+eventos',
  horarios: [
    { dias: 'Martes a viernes', horas: '10:00 a 19:00' },
    { dias: 'Sábado', horas: '10:00 a 15:00' },
  ],
  /** PERSONALIZAR: redes sociales reales */
  redes: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
  },
  avisoPrivacidad: '#',
  credito: { texto: 'Sitio de ejemplo diseñado por JacoboDev', url: 'https://jacobodev.pages.dev/' },
} as const;

/** Arma el enlace de WhatsApp con el texto codificado. */
export function waLink(texto: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
}
