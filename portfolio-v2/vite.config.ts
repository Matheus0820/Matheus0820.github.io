import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import sitemapPlugin from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Matheus Ramos | Full Stack e Pesquisador Operacional',
        short_name: 'Matheus Ramos',
        description: 'Portfólio de Matheus Ramos: programador Full Stack e pesquisador operacional. Otimização de rotas, desenvolvimento web e Machine Learning.',
        theme_color: '#0ea5e9',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }),
    sitemapPlugin({
      hostname: 'https://matheus0820.github.io',
      dynamicRoutes: [
        '/#inicio',
        '/#sobre',
        '/#experiencia',
        '/#formacao',
        '/#projetos',
        '/#habilidades',
        '/#contato'
      ],
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString().split('T')[0],
      outDir: '../public',
      generateRobotsTxt: false
    })
  ],
  base: '/',
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
})