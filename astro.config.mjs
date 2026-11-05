// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  build: { inlineStylesheets: 'always' },
  // Tipografías auto-alojadas en el build (Fontsource, licencia OFL)
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-serif',
      weights: [500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Jost',
      cssVariable: '--font-sans',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
