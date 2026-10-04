# Portfolio Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply SEO, sitemap, PWA, and accessibility improvements to the React+TypeScript+Tailwind portfolio

**Architecture:** Add meta tags, Open Graph, JSON-LD, sitemap generation, PWA manifest, and accessibility fixes to the existing Vite + React project. All changes are additive and non-breaking.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Vite 5, vite-plugin-pwa, vite-plugin-sitemap

**Spec:** Portfolio improvements discussed in conversation

## Global Constraints

- Maintain existing design and component structure
- No breaking changes to existing functionality
- Follow existing code patterns (TypeScript, functional components)
- Keep bundle size minimal
- Support dark/light mode
- Respect `prefers-reduced-motion`

## Review Focus

1. **SEO meta tags** - All pages have unique title, description, OG tags, Twitter cards, JSON-LD Person schema
2. **Sitemap.xml** - Generated at build time with all routes, valid XML
3. **PWA manifest** - Valid manifest.json, service worker registered, works offline
4. **Accessibility** - WCAG AA contrast, keyboard navigation, ARIA labels, lang attribute
5. **Performance** - BlackHole SVG optimized, fonts preloaded, no layout shift

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Interfaces:**
- Produces: New devDependencies for PWA and sitemap plugins

- [ ] **Step 1: Add PWA and sitemap plugins to package.json**

```json
{
  "devDependencies": {
    "vite-plugin-pwa": "^0.20.0",
    "vite-plugin-sitemap": "^0.7.1"
  }
}
```

- [ ] **Step 2: Run npm install**

```bash
cd portfolio-v2 && npm install
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add vite-plugin-pwa and vite-plugin-sitemap"
```

---

### Task 2: Update Vite Config for PWA and Sitemap

**Files:**
- Modify: `vite.config.ts`

**Interfaces:**
- Consumes: Installed plugins from Task 1
- Produces: Configured PWA manifest and sitemap generation

- [ ] **Step 1: Update vite.config.ts with PWA and sitemap plugins**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { createSitemap } from 'vite-plugin-sitemap'

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
    createSitemap({
      hostname: 'https://matheus0820.github.io',
      routes: [
        '/',
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
      lastmod: new Date().toISOString().split('T')[0]
    })
  ],
  base: '/',
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
})
```

- [ ] **Step 2: Run build to verify config works**

```bash
cd portfolio-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add vite.config.ts
git commit -m "feat: configure PWA manifest and sitemap generation"
```

---

### Task 3: Enhance SEO Meta Tags in index.html

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: personalInfo from portfolio.ts
- Produces: Complete SEO meta tags, Open Graph, Twitter Cards, JSON-LD

- [ ] **Step 1: Update index.html with comprehensive SEO tags**

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico?v=2" sizes="48x48" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="Matheus Ramos | Full Stack e Pesquisador Operacional" />
    <meta name="description" content="Portfólio de Matheus Ramos: programador Full Stack e pesquisador operacional. Otimização de rotas com Google OR-Tools, desenvolvimento web com Python/Django/React, Machine Learning." />
    <meta name="keywords" content="Full Stack, Python, Django, React, TypeScript, Google OR-Tools, Otimização de Rotas, VRP, CVRPTW, Machine Learning, Pesquisa Operacional, Desenvolvimento Web" />
    <meta name="author" content="Matheus Ramos Ferreira da Silva" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0ea5e9" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="https://matheus0820.github.io/" />
    <meta property="og:title" content="Matheus Ramos | Full Stack e Pesquisador Operacional" />
    <meta property="og:description" content="Portfólio de Matheus Ramos: programador Full Stack e pesquisador operacional. Otimização de rotas, desenvolvimento web e Machine Learning." />
    <meta property="og:image" content="https://matheus0820.github.io/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="profile:first_name" content="Matheus" />
    <meta property="profile:last_name" content="Ramos Ferreira da Silva" />
    <meta property="profile:username" content="Matheus0820" />
    <meta property="profile:gender" content="male" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://matheus0820.github.io/" />
    <meta name="twitter:title" content="Matheus Ramos | Full Stack e Pesquisador Operacional" />
    <meta name="twitter:description" content="Portfólio de Matheus Ramos: programador Full Stack e pesquisador operacional. Otimização de rotas, desenvolvimento web e Machine Learning." />
    <meta name="twitter:image" content="https://matheus0820.github.io/og-image.png" />
    <meta name="twitter:creator" content="@Matheus0820" />
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Matheus Ramos Ferreira da Silva",
      "url": "https://matheus0820.github.io/",
      "image": "https://matheus0820.github.io/apple-touch-icon.png",
      "sameAs": [
        "https://github.com/Matheus0820",
        "https://www.linkedin.com/in/matheus-ramos-ferreira-da-silva-b40987226",
        "http://lattes.cnpq.br/3863511228005347"
      ],
      "jobTitle": "Programador Full Stack & Pesquisador Operacional",
      "worksFor": {
        "@type": "Organization",
        "name": "ECT/UFRN - PRH-25 ANP"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Universidade Federal do Rio Grande do Norte"
      },
      "knowsAbout": [
        "Python",
        "Django",
        "React",
        "TypeScript",
        "Google OR-Tools",
        "Vehicle Routing Problem",
        "Machine Learning",
        "Pesquisa Operacional"
      ],
      "email": "mailto:mr7052954@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Natal",
        "addressRegion": "RN",
        "addressCountry": "BR"
      }
    }
    </script>
    
    <title>Matheus Ramos | Full Stack e Pesquisador Operacional</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Space+Grotesk:wght@400;500;600;700&display=swap">
    <script>
      try {
        var t = localStorage.getItem('theme');
        var dark = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', dark);
      } catch (e) {}
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Run build to verify**

```bash
cd portfolio-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add comprehensive SEO meta tags, Open Graph, Twitter Cards, JSON-LD"
```

---

### Task 4: Accessibility Improvements

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Skills.tsx`
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Experience.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: Existing components
- Produces: Improved accessibility (ARIA, contrast, keyboard nav)

- [ ] **Step 1: Add focus-visible improvements and skip link to index.css**

```css
/* Add to @layer base */
.skip-link {
  @apply absolute -top-10 left-4 z-50 bg-primary-600 text-white px-4 py-2 rounded-md transition-transform focus:top-4;
}

@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
  }
}

/* Ensure minimum contrast ratios */
.text-dark-600 { color: #4b5563; } /* WCAG AA on white */
.dark .text-dark-300 { color: #d1d5db; } /* WCAG AA on dark-950 */
```

- [ ] **Step 2: Add skip link to Hero.tsx**

```tsx
// Add at top of Hero component return
<a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
```

- [ ] **Step 3: Add main landmark and ARIA labels to App.tsx**

```tsx
// In App.tsx, wrap main with proper landmarks
<main id="main-content" role="main">
```

- [ ] **Step 4: Add aria-labels to navigation and social links in Header.tsx, Footer.tsx**

- [ ] **Step 5: Ensure form labels are properly associated in Contact.tsx** (already done)

- [ ] **Step 6: Run build and test accessibility**

```bash
cd portfolio-v2 && npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/index.css src/components/Hero.tsx src/App.tsx src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat: improve accessibility - skip link, ARIA labels, focus styles, landmarks"
```

---

### Task 5: Optimize BlackHole SVG Performance

**Files:**
- Modify: `src/components/BlackHole.tsx`

**Interfaces:**
- Consumes: Existing BlackHole component
- Produces: Optimized SVG with will-change, reduced complexity

- [ ] **Step 1: Add performance optimizations to BlackHole.tsx**

```tsx
// Add to SVG element
<svg 
  viewBox="0 0 400 400" 
  className={className} 
  aria-hidden="true" 
  focusable="false"
  style={{ 
    willChange: glow ? 'transform, opacity' : 'auto',
    contentVisibility: 'auto',
    contain: 'paint'
  }}
>
```

- [ ] **Step 2: Simplify filter for reduced motion**

```tsx
// Wrap filter in condition or use CSS prefers-reduced-motion
{!glow && (
  <filter id={id('soft')} x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="7" />
  </filter>
)}
```

- [ ] **Step 3: Run build and verify**

```bash
cd portfolio-v2 && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/BlackHole.tsx
git commit -m "perf: optimize BlackHole SVG with will-change, content-visibility"
```

---

### Task 6: Add robots.txt and Verify Build Output

**Files:**
- Create: `public/robots.txt`
- Verify: `dist/` output

**Interfaces:**
- Produces: robots.txt for crawlers, verified build artifacts

- [ ] **Step 1: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://matheus0820.github.io/sitemap.xml
```

- [ ] **Step 2: Run final build and verify outputs**

```bash
cd portfolio-v2 && npm run build
ls -la ../public/
# Verify: index.html, sitemap.xml, manifest.webmanifest, robots.txt, assets/
```

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt
git commit -m "feat: add robots.txt for search crawlers"
```

---

### Task 7: Test Locally and Verify

**Files:**
- Verify: Local preview

**Interfaces:**
- Consumes: All previous tasks
- Produces: Verified working portfolio

- [ ] **Step 1: Run preview server**

```bash
cd portfolio-v2 && npm run preview
```

- [ ] **Step 2: Verify in browser**
- Check: Meta tags in page source
- Check: sitemap.xml accessible
- Check: manifest.webmanifest accessible
- Check: Service worker registered (DevTools > Application)
- Check: Accessibility with axe DevTools or Lighthouse
- Check: PWA installable
- Check: Dark/light mode toggle
- Check: Keyboard navigation
- Check: prefers-reduced-motion respected

- [ ] **Step 3: Run Lighthouse audit**

```bash
# In Chrome DevTools > Lighthouse > Run audit
# Target: Performance >90, Accessibility >95, Best Practices >90, SEO >95, PWA >90
```

- [ ] **Step 4: Commit any final fixes**

```bash
git add -A
git commit -m "chore: final fixes after local verification"
```

---

## Execution Order

1. Task 1 (Dependencies) → 2 (Vite Config) → 3 (SEO) → 4 (Accessibility) → 5 (Performance) → 6 (robots.txt) → 7 (Verify)

Each task is independently testable. Run `npm run build` after each to catch errors early.