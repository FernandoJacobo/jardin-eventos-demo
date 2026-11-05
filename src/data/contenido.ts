/**
 * Contenido de la página. PERSONALIZAR: textos, paquetes, precios, testimonios y preguntas.
 * FOTOS: reemplaza los archivos de src/assets/fotos por fotos reales del lugar (mismo nombre o cambia el import).
 */
import type { ImageMetadata } from 'astro';

import bodas from '@/assets/fotos/evento-bodas.jpg';
import xv from '@/assets/fotos/evento-xv.jpg';
import bautizos from '@/assets/fotos/evento-bautizos.jpg';
import corporativos from '@/assets/fotos/evento-corporativos.jpg';
import kiosco from '@/assets/fotos/galeria-kiosco.jpg';
import mesaImperial from '@/assets/fotos/galeria-mesa-imperial.jpg';
import sillas from '@/assets/fotos/galeria-sillas-novios.jpg';
import banquete from '@/assets/fotos/galeria-banquete.jpg';
import centroMesa from '@/assets/fotos/galeria-centro-mesa.jpg';
import salon from '@/assets/fotos/galeria-salon.jpg';
import letrero from '@/assets/fotos/galeria-letrero.jpg';
import bengalas from '@/assets/fotos/galeria-bengalas.jpg';
import pastel from '@/assets/fotos/galeria-pastel.jpg';

export type IconName = 'invitados' | 'salon' | 'valet' | 'banquete' | 'mobiliario';

export const cifras = [
  { valor: 300, sufijo: '', etiqueta: 'invitados de capacidad' },
  { valor: 4000, sufijo: ' m²', etiqueta: 'de jardín y salón' },
  { valor: 650, sufijo: '+', etiqueta: 'eventos celebrados' },
  { valor: 4.9, sufijo: '★', etiqueta: 'calificación promedio', decimales: 1 },
];

export const marquesina = ['Bodas', 'XV años', 'Bautizos', 'Primeras comuniones', 'Posadas', 'Cenas de gala', 'Aniversarios', 'Graduaciones'];

export const beneficios: { icono: IconName; titulo: string; texto: string }[] = [
  { icono: 'invitados', titulo: 'Hasta 300 invitados', texto: 'Espacios amplios para banquete, pista de baile y área de ceremonia.' },
  { icono: 'salon', titulo: 'Jardín y salón techado', texto: 'Celebra al aire libre con la tranquilidad de un salón listo por si llueve.' },
  { icono: 'valet', titulo: 'Estacionamiento con valet', texto: 'Capacidad para 120 autos y valet parking durante todo el evento.' },
  { icono: 'banquete', titulo: 'Banquete incluido', texto: 'Menú de tres tiempos preparado por nuestro chef, con degustación previa.' },
  { icono: 'mobiliario', titulo: 'Mobiliario incluido', texto: 'Mesas, sillas, mantelería, loza y cristalería en diferentes estilos.' },
];

export const eventos: { titulo: string; valor: string; texto: string; foto: ImageMetadata; alt: string }[] = [
  {
    titulo: 'Bodas',
    valor: 'Boda',
    texto: 'Ceremonia en el jardín, cóctel al atardecer y recepción bajo las estrellas.',
    foto: bodas,
    alt: 'Pareja de novios abrazados bajo el velo en un campo al atardecer',
  },
  {
    titulo: 'XV años',
    valor: 'XV años',
    texto: 'Entrada triunfal, vals y pista de baile con iluminación ambiental.',
    foto: xv,
    alt: 'Mesa elegante con candelabro de cristal, velas y arreglos florales',
  },
  {
    titulo: 'Bautizos y comuniones',
    valor: 'Bautizo o comunión',
    texto: 'Comidas familiares de día, con área infantil y menú para los pequeños.',
    foto: bautizos,
    alt: 'Arreglo de flores blancas y rosa pálido con follaje verde',
  },
  {
    titulo: 'Eventos corporativos',
    valor: 'Evento corporativo',
    texto: 'Posadas, convenciones y cenas de gala con audio, pantalla y factura.',
    foto: corporativos,
    alt: 'Salón montado con mesas redondas y pantallas para una conferencia',
  },
];

/** Orden pensado para 3 columnas: cada columna queda con 1 foto vertical y 2 horizontales. */
export const galeria: { foto: ImageMetadata; alt: string }[] = [
  { foto: kiosco, alt: 'Kiosco blanco con columnas decorado con flores para una ceremonia en el jardín' },
  { foto: mesaImperial, alt: 'Mesa imperial con mantel blanco, centros de flores silvestres y copas de cristal' },
  { foto: sillas, alt: 'Dos sillas de novios decoradas con flores sobre el pasto' },
  { foto: banquete, alt: 'Mesa de banquete con arreglos de flores de colores, copas y velas' },
  { foto: centroMesa, alt: 'Centro de mesa con rosas en tonos durazno junto a una vela blanca' },
  { foto: salon, alt: 'Salón techado con mesas redondas vestidas en dorado y candelabros' },
  { foto: letrero, alt: 'Letrero de madera con la frase Mr & Mrs colgado de un árbol' },
  { foto: bengalas, alt: 'Invitados sosteniendo luces de bengala encendidas al anochecer' },
  { foto: pastel, alt: 'Pastel de tres pisos decorado con rosas naturales' },
];

export const paquetes = [
  {
    nombre: 'Esencial',
    descripcion: 'Lo indispensable para una celebración bonita y sin complicaciones.',
    precio: 65000,
    incluye: ['Renta del jardín por 6 horas', 'Mesas, sillas y mantelería básica', 'Banquete de dos tiempos', 'Meseros y capitán de servicio', 'Estacionamiento'],
    destacado: false,
  },
  {
    nombre: 'Clásico',
    descripcion: 'El favorito para bodas y XV años: todo incluido y con más horas.',
    precio: 95000,
    incluye: ['Jardín y salón techado por 7 horas', 'Mobiliario a elegir y mantelería fina', 'Banquete de tres tiempos y degustación', 'Pista de baile e iluminación ambiental', 'Coordinador del evento', 'Valet parking'],
    destacado: true,
  },
  {
    nombre: 'Premium',
    descripcion: 'Una experiencia completa, cuidada en cada detalle.',
    precio: 145000,
    incluye: ['Uso exclusivo del lugar por 8 horas', 'Mobiliario premium y centros de mesa', 'Banquete de cuatro tiempos y barra libre nacional', 'DJ, pista iluminada y pantalla', 'Montaje de ceremonia en el jardín', 'Coordinador y valet parking'],
    destacado: false,
  },
];

export const tiposEvento = ['Boda', 'XV años', 'Bautizo o comunión', 'Evento corporativo', 'Otro evento'];

export const testimonios = [
  {
    texto: 'Desde la primera visita nos sentimos en casa. El jardín se veía increíble de noche y la comida fue lo que más nos elogiaron los invitados.',
    nombre: 'Mariana y Rodrigo',
    detalle: 'Boda · 220 invitados',
  },
  {
    texto: 'Llovió justo antes del vals y en diez minutos el equipo pasó todo al salón. Mi hija ni se dio cuenta, solo disfrutó su fiesta.',
    nombre: 'Laura G.',
    detalle: 'XV años · 180 invitados',
  },
  {
    texto: 'Organizamos nuestra posada de fin de año y todo salió puntual: audio, cena y facturación sin pendientes. Ya apartamos para el próximo año.',
    nombre: 'Jorge T.',
    detalle: 'Evento corporativo · 140 invitados',
  },
];

export const preguntas = [
  {
    pregunta: '¿Cuánto anticipo necesito para apartar mi fecha?',
    respuesta: 'Apartas con el 30 % del total del paquete. El resto se cubre en pagos mensuales y debe quedar liquidado 15 días antes del evento. Aceptamos transferencia y tarjeta.',
  },
  {
    pregunta: '¿Qué pasa si necesito cancelar o cambiar la fecha?',
    respuesta: 'Puedes cambiar tu fecha una vez sin costo con al menos 90 días de aviso, sujeto a disponibilidad. En caso de cancelación, el anticipo no es reembolsable, pero puede abonarse a otro evento dentro de los siguientes 12 meses.',
  },
  {
    pregunta: '¿Hasta qué hora puede durar el evento?',
    respuesta: 'Los eventos pueden extenderse hasta las 2:00 a. m. Por reglamento municipal, la música en el jardín termina a las 0:00 y continúa en el salón techado. Las horas extra tienen costo adicional.',
  },
  {
    pregunta: '¿Qué servicios están incluidos?',
    respuesta: 'Todos los paquetes incluyen uso del espacio, mobiliario, mantelería, banquete, meseros, limpieza y estacionamiento. Según el paquete se suman coordinador, valet parking, iluminación, DJ y barra libre.',
  },
  {
    pregunta: '¿Puedo traer mis propios proveedores?',
    respuesta: 'Sí. Puedes traer fotógrafo, decoración, música en vivo o mesa de dulces. Para banquete y bebidas externas se aplica un derecho de descorche; te compartimos el reglamento para proveedores al reservar.',
  },
];
