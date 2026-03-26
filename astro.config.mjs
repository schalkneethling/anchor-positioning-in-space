import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://anchor-positioning-in-space.schalkneethling.com',
  integrations: [
    starlight({
      title: 'Anchor Positioning in Space',
      description: 'A comprehensive guide to CSS Anchor Positioning',
      favicon: '/favicon.svg',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/schalkneethling/anchor-positioning-in-space',
        },
      ],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        },
        {
          tag: 'link',
          attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        },
        {
          tag: 'link',
          attrs: { rel: 'shortcut icon', href: '/favicon.ico' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        },
        {
          tag: 'meta',
          attrs: { name: 'apple-mobile-web-app-title', content: 'Anchor Positioning In Space' },
        },
        {
          tag: 'link',
          attrs: { rel: 'manifest', href: '/site.webmanifest' },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://anchor-positioning-in-space.schalkneethling.com/apis-social-share.png',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'website' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:site_name', content: 'Anchor Positioning in Space' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://anchor-positioning-in-space.schalkneethling.com/apis-social-share.png',
          },
        },
      ],
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
        {
          label: 'Playgrounds',
          items: [
            { label: 'position-area', link: '/playground/position-area/' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/schalkneethling/anchor-positioning-in-space/edit/main/',
      },
      lastUpdated: true,
      disable404Route: true,
    }),
  ],
});
