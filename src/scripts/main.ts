/**
 * Interacciones del sitio: header, menú móvil, animaciones, contadores, lightbox y formulario → WhatsApp.
 * El número de WhatsApp se configura en src/config/site.ts.
 */
import { site, waLink } from '@/config/site';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header: sólido al hacer scroll ---------- */
const header = document.querySelector<HTMLElement>('[data-header]')!;
const actualizarHeader = () => header.classList.toggle('is-scrolled', scrollY > 40);
actualizarHeader();
addEventListener('scroll', actualizarHeader, { passive: true });

/* ---------- Menú móvil ---------- */
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle')!;
const nav = document.getElementById('menu')!;

function abrirMenu(abierto: boolean) {
  nav.classList.toggle('open', abierto);
  header.classList.toggle('menu-open', abierto);
  toggle.setAttribute('aria-expanded', String(abierto));
  toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
}
toggle.addEventListener('click', () => abrirMenu(!nav.classList.contains('open')));
nav.addEventListener('click', (e) => {
  if ((e.target as Element).closest('a')) abrirMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    abrirMenu(false);
    toggle.focus();
  }
});

/* ---------- Contadores de cifras ---------- */
function animarContador(el: HTMLElement) {
  const final = Number(el.dataset.count);
  const decimales = Number(el.dataset.decimals) || 0;
  const formato = (n: number) => n.toLocaleString('es-MX', { minimumFractionDigits: decimales, maximumFractionDigits: decimales });
  const duracion = 1600;
  const inicio = performance.now();
  const paso = (t: number) => {
    const p = Math.min((t - inicio) / duracion, 1);
    const suave = 1 - Math.pow(1 - p, 3);
    el.textContent = formato(final * suave);
    if (p < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

/* ---------- Animaciones de aparición ---------- */
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (!reduceMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        entry.target.querySelectorAll<HTMLElement>('[data-count]').forEach(animarContador);
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Galería con lightbox ---------- */
const lightbox = document.getElementById('lightbox') as HTMLDialogElement;
const lbImg = lightbox.querySelector('img')!;
const lbCaption = lightbox.querySelector('figcaption')!;
const fotos = [...document.querySelectorAll<HTMLButtonElement>('.g-item')];
let actual = 0;

function mostrarFoto(i: number) {
  actual = (i + fotos.length) % fotos.length;
  const btn = fotos[actual];
  const alt = btn.querySelector('img')!.alt;
  lbImg.src = btn.dataset.full!;
  lbImg.alt = alt;
  lbCaption.textContent = `${alt} (${actual + 1} de ${fotos.length})`;
}

fotos.forEach((btn, i) =>
  btn.addEventListener('click', () => {
    mostrarFoto(i);
    lightbox.showModal(); // <dialog> ya cierra con Esc y mantiene el foco dentro
  }),
);
lightbox.querySelector('.lb-close')!.addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lb-prev')!.addEventListener('click', () => mostrarFoto(actual - 1));
lightbox.querySelector('.lb-next')!.addEventListener('click', () => mostrarFoto(actual + 1));
// Clic fuera de la foto (en el fondo oscuro) cierra
lightbox.addEventListener('click', (e) => {
  const t = e.target as Element;
  if (t === lightbox || t.tagName === 'FIGURE') lightbox.close();
});
lightbox.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') mostrarFoto(actual - 1);
  if (e.key === 'ArrowRight') mostrarFoto(actual + 1);
});
// Al cerrar, regresa el foco a la miniatura abierta
lightbox.addEventListener('close', () => fotos[actual].focus());

/* ---------- Formulario de disponibilidad → WhatsApp ---------- */
const form = document.getElementById('form-fecha') as HTMLFormElement;
const campoFecha = form.elements.namedItem('fecha') as HTMLInputElement;
const campoTipo = form.elements.namedItem('tipo') as HTMLSelectElement;

/** Fecha de hoy en formato AAAA-MM-DD según la hora local (no UTC). */
function hoyISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
campoFecha.min = hoyISO(); // bloquea fechas pasadas en el selector

/** "2027-03-13" → "sábado 13 de marzo de 2027" */
function fechaLarga(iso: string) {
  const [a, m, d] = iso.split('-').map(Number);
  return new Date(a, m - 1, d).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
}

// Texto que se usa en el mensaje según la opción del select
const TIPOS: Record<string, string> = {
  Boda: 'una boda',
  'XV años': 'unos XV años',
  'Bautizo o comunión': 'un bautizo o comunión',
  'Evento corporativo': 'un evento corporativo',
  'Otro evento': 'un evento',
};

// Los enlaces "Consultar fecha" de cada tipo de evento preseleccionan el select
document.querySelectorAll<HTMLElement>('[data-evento]').forEach((a) =>
  a.addEventListener('click', () => {
    campoTipo.value = a.dataset.evento!;
  }),
);

const reglas: Record<string, (v: string) => string> = {
  nombre: (v) => (v.trim().length >= 2 ? '' : 'Escribe tu nombre.'),
  tipo: (v) => (v ? '' : 'Selecciona el tipo de evento.'),
  fecha: (v) => {
    if (!v) return 'Elige la fecha de tu evento.';
    if (v < hoyISO()) return 'La fecha no puede ser anterior a hoy.';
    return '';
  },
  invitados: (v) => {
    const n = Number(v);
    if (!v || !Number.isInteger(n)) return 'Indica un número aproximado de invitados.';
    if (n < 10 || n > site.capacidad) return `Recibimos eventos de 10 a ${site.capacidad} invitados.`;
    return '';
  },
};

type Campo = HTMLInputElement | HTMLSelectElement;

function validarCampo(input: Campo) {
  const regla = reglas[input.name];
  if (!regla) return true;
  const msg = regla(input.value);
  document.getElementById(`e-${input.name}`)!.textContent = msg;
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}

// Revalida en vivo los campos que ya marcaron error
form.addEventListener('input', (e) => {
  const t = e.target as Campo;
  if (t.getAttribute('aria-invalid') === 'true') validarCampo(t);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const campos = Object.keys(reglas).map((n) => form.elements.namedItem(n) as Campo);
  const invalidos = campos.filter((c) => !validarCampo(c));
  if (invalidos.length) {
    invalidos[0].focus();
    return;
  }

  const datos = Object.fromEntries(new FormData(form)) as Record<string, string>;
  let texto = `Hola, quiero cotizar ${TIPOS[datos.tipo] ?? 'un evento'} para el ${fechaLarga(datos.fecha)}, aprox. ${datos.invitados} invitados. Mi nombre es ${datos.nombre.trim()}.`;
  if (datos.mensaje.trim()) texto += `\n\n${datos.mensaje.trim()}`;

  window.open(waLink(texto), '_blank', 'noopener');
});

/* ---------- Ocultar el botón flotante sobre el formulario, el CTA final y el footer ---------- */
const waFloat = document.querySelector<HTMLElement>('.wa-float')!;
if ('IntersectionObserver' in window) {
  const visibles = new Set<Element>();
  const ioWa = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? visibles.add(en.target) : visibles.delete(en.target)));
    waFloat.classList.toggle('is-hidden', visibles.size > 0);
  });
  ioWa.observe(form);
  ioWa.observe(document.querySelector('.site-footer')!);
  ioWa.observe(document.querySelector('.cta-final')!);
}
