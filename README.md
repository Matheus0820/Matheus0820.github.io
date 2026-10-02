# Matheus0820.github.io

Portfólio pessoal de Matheus Ramos, feito com React, TypeScript, Vite e Tailwind CSS.

## Estrutura

- `portfolio-v2/src/data/portfolio.ts`: todo o conteúdo (sobre, experiência, formação, habilidades, contato). Para atualizar o site, edite só este arquivo.
- `portfolio-v2/src/components/`: seções da página.
- `.github/workflows/deploy.yml`: build e publicação no GitHub Pages.

## Como rodar

```bash
cd portfolio-v2
npm install
npm run dev
```

## Build

```bash
npm run build
```

O build gera os arquivos estáticos na pasta `public/` da raiz do repositório.

## Publicação

O deploy é feito pelo GitHub Actions. Em **Settings > Pages > Build and deployment > Source**, selecione **GitHub Actions**.
