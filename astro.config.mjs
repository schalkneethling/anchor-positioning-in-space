import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://anchorpositioning.space',
  integrations: [
    starlight({
      title: 'Anchor Positioning in Space',
      description: 'A comprehensive guide to CSS Anchor Positioning',
      social: {
        github: 'https://github.com/schalkneethling/anchor-positioning-in-space',
      },
      customCss: ['./src/styles/space-theme.css'],
      sidebar: [
        {
          label: 'The Series',
          items: [
            { label: 'Part 1: The Fundamentals', slug: 'parts/fundamentals' },
            { label: 'Part 2: Precise Control', slug: 'parts/precise-control' },
            { label: 'Part 3: Fallbacks', slug: 'parts/fallbacks' },
            { label: 'Part 4: Scoping and Visibility', slug: 'parts/scoping-visibility' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/schalkneethling/anchor-positioning-in-space/edit/main/',
      },
      lastUpdated: true,
    }),
  ],
});
