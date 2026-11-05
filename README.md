# Jardín Aurora · demo de jardín de eventos

Landing page de ejemplo (marca ficticia) para jardines de eventos: bodas, XV años, bautizos y eventos corporativos.
Hecha con [Astro](https://astro.build) 7, sin frameworks de UI: CSS propio y un script en TypeScript.
Sitio de ejemplo diseñado por JacoboDev · https://jacobodev.pages.dev/

## Comandos

```bash
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # genera dist/ (sitio estático)
npm run preview   # sirve dist/
npm run deploy    # build + wrangler pages deploy dist --project-name jardin-eventos-demo
```

## Personalizar

| Qué | Dónde |
| --- | --- |
| Número de WhatsApp, nombre, dirección, horarios, redes, URL | `src/config/site.ts` (`whatsapp: "52XXXXXXXXXX"`) |
| Cifras, beneficios, eventos, galería, paquetes y precios, testimonios, FAQ | `src/data/contenido.ts` |
| Fotos | `src/assets/fotos/` (Astro genera AVIF/WebP y tamaños automáticamente) |
| Colores | `src/styles/global.css` → `:root` |
| Tipografías | `astro.config.mjs` → `fonts` |
| Mapa real | `src/components/Ubicacion.astro` (sustituir el placeholder por el iframe de Google Maps) |

El formulario no usa backend: valida los campos y abre `https://wa.me/<número>?text=...` con el mensaje armado (`src/scripts/main.ts`).

## Créditos

- Fotos: [Unsplash](https://unsplash.com/license) (licencia libre de uso comercial). IDs (`https://images.unsplash.com/photo-<id>`):
  1469371670807-013ccf25f16a (hero), 1546032996-6dfacbacbf3f, 1502635385003-ee1e6a1a742d, 1563241527-3004b7be0ffd,
  1511578314322-379afb476865, 1510076857177-7470076d4098, 1519225421980-715cb0215aed, 1522673607200-164d1b6ce486,
  1523438885200-e635ba2c371e, 1525772764200-be829a350797, 1511795409834-ef04bbd61622, 1519167758481-83f550bb49b3,
  1535254973040-607b474cb50d, 1507504031003-b417219a0fde, 1467810563316-b5476525c0f9.
- Tipografías: Cormorant Garamond y Jost (SIL Open Font License), vía Fontsource.
- Nombre, dirección, teléfono, cifras, precios y testimonios son ficticios.
