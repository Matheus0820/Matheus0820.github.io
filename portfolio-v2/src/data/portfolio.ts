export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'concept';
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export interface Participation {
  name: string;
  short: string;
  url: string;
}

export const personalInfo = {
  name: "Matheus Ramos",
  fullName: "Matheus Ramos Ferreira da Silva",
  title: "Programador Full Stack & Pesquisador Operacional",
  subtitle: "Aplicações web, otimização de rotas e Machine Learning",
  email: "mr7052954@gmail.com",
  github: "https://github.com/Matheus0820",
  linkedin: "https://www.linkedin.com/in/matheus-ramos-ferreira-da-silva-b40987226",
  lattes: "http://lattes.cnpq.br/3863511228005347",
  location: "Natal, RN - Brasil",
  intro: "Estudo Ciências e Tecnologia na UFRN, desenvolvo aplicações web com Python e Django e pesquiso otimização de rotas com Google OR-Tools como bolsista do PRH-25 da ANP.",
};

export const education: Education[] = [
  {
    degree: "Bacharelado em Ciências e Tecnologia - Ênfase em Tecnologia da Computação",
    institution: "ECT/UFRN - Escola de Ciências e Tecnologia da Universidade Federal do Rio Grande do Norte",
    period: "2024 - Atual",
    description: "6º período. Disciplinas do PRH-ANP 25: Aprendizado de Máquina, Introdução à Otimização, Desenvolvimento Web Backend, Cultura e Ecossistemas de Inovação",
  },
  {
    degree: "Técnico em Informática",
    institution: "EAJ/UFRN - Escola Agrícola de Jundiaí",
    period: "2021 - 2023",
    description: "Formação técnica em informática",
  },
];

// Ordem: da experiência mais recente para a mais antiga
export const experience: Experience[] = [
  {
    role: "Membro da Equipe Técnica - Grupo de Trabalho do Diário Oficial do RN",
    company: "Governo do RN - Gabinete Civil (GAC) e SEPLAN",
    period: "Set/2026 - Atual",
    description: [
      "Integrante do Grupo de Trabalho Interinstitucional instituído pela Portaria Conjunta-SEI nº 5/2026 (Diário Oficial do RN, 29/09/2026)",
      "Desenvolvimento e implantação de sistema informatizado para gestão, processamento e publicação das matérias e atos oficiais pelo Departamento Estadual de Imprensa (DEI)",
      "Levantamento de fluxos e requisitos, testes, homologação e documentação técnica da solução",
    ],
    technologies: ["Desenvolvimento Web", "Análise de Requisitos", "Documentação Técnica", "Integração de Sistemas"],
  },
  {
    role: "Fundador",
    company: "Opt.en Solutions (Inova Simples)",
    period: "2025 - Atual",
    description: [
      "Startup nascida da pesquisa do PRH-25 da ANP, focada em roteirização sustentável para o setor de energia",
      "Aprovada com nota máxima na 1ª fase do edital Centelha Sebrae RN e selecionada para o programa SuperNova do Sebrae",
      "Lançamento do site oficial e desenvolvimento do MVP com algoritmos de otimização de rotas",
    ],
    technologies: ["Python", "Google OR-Tools", "VRP / CVRPTW", "Vercel"],
    links: [{ label: "Site oficial", url: "https://optensolutions.vercel.app/" }],
  },
  {
    role: "Programador Full Stack, Cientista de Dados e Pesquisador Operacional",
    company: "Bolsista PRH-25 / ANP - ECT/UFRN",
    period: "Out/2025 - Atual",
    description: [
      "Desenvolvimento de sistemas web, incluindo APIs e ERPs",
      "Aplicação de técnicas de Machine Learning para análise e processamento de dados",
      "Desenvolvimento de algoritmos de otimização e roteirização com Google OR-Tools, do VRP clássico ao CVRPTW (capacidade e janelas de tempo)",
      "Resumo em anais na IX Semana de Ciências e Tecnologia da UFRN: \"Rotas Sustentáveis para a Transição Energética\"",
    ],
    technologies: ["Python", "Google OR-Tools", "Machine Learning", "APIs", "Pandas", "NumPy"],
    links: [{ label: "Site do programa PRH-25", url: "https://prh25.ect.ufrn.br/" }],
  },
  {
    role: "Programador Full Stack",
    company: "Site de Gerenciamento de Laboratório",
    period: "2024 - 2025",
    description: [
      "Análise de requisitos e criação de documentação",
      "Desenvolvimento de site com diversas aplicações",
      "Versionamento de código",
    ],
    technologies: ["Desenvolvimento Web", "Git", "Documentação"],
    links: [{ label: "Repositório no GitHub", url: "https://github.com/Matheus0820/Project-SiGLab" }],
  },
  {
    role: "Programador Full Stack (Bolsa de Pesquisa - Voluntário)",
    company: "Projeto educacional - UFRN",
    period: "2023 - 2024",
    description: [
      "Análise de requisitos, criação de documentação e versionamento de código",
      "Desenvolvimento de site completo de cunho educacional com o framework Django",
    ],
    technologies: ["Python", "Django", "Git"],
    links: [{ label: "Site do OVNE", url: "https://ovne.ect.ufrn.br/" }],
  },
  {
    role: "Programador Full Stack (Estágio e Bolsa de Apoio Técnico)",
    company: "PoP-RN - Ponto de Presença da RNP no Rio Grande do Norte",
    period: "Abr/2023 - Jan/2024",
    description: [
      "Desenvolvimento de telas e criação de aplicações com Django",
      "Criação de testes unitários com pytest",
      "Versionamento de código e criação de documentação",
    ],
    technologies: ["Python", "Django", "Pytest", "Git"],
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Java", category: "language" },
  { name: "C", category: "language" },
  { name: "C++", category: "language" },
  { name: "Go", category: "language" },
  { name: "VHDL", category: "language" },
  { name: "AMPL", category: "language" },

  // Frameworks & Libs
  { name: "Django", category: "framework" },
  { name: "Flask", category: "framework" },
  { name: "Express.js", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Bootstrap", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "Framer Motion", category: "framework" },
  { name: "Pytest", category: "framework" },
  { name: "Pandas", category: "framework" },
  { name: "NumPy", category: "framework" },
  { name: "LangChain", category: "framework" },

  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Google OR-Tools", category: "tool" },
  { name: "Jupyter", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "Modelagem 3D (CAD)", category: "tool" },

  // Concepts
  { name: "Pesquisa Operacional", category: "concept" },
  { name: "Roteirização (VRP)", category: "concept" },
  { name: "Machine Learning", category: "concept" },
  { name: "LLMs & RAG", category: "concept" },
  { name: "APIs REST", category: "concept" },
  { name: "Testes Automatizados", category: "concept" },
  { name: "Análise de Requisitos", category: "concept" },
  { name: "Gerenciamento Ágil", category: "concept" },
];

// Projetos de extensão e pesquisa dos quais participo/participei
export const participations: Participation[] = [
  { name: "Observatório de Valores do Nordeste", short: "OVNE", url: "https://ovne.ect.ufrn.br" },
  { name: "Caravana Espacial", short: "Caravana Espacial", url: "https://caravanaespacial.ect.ufrn.br" },
  { name: "Vênus Aero Space", short: "VAS", url: "https://sites.google.com/view/venusaerospace/v%C3%AAnus-aero-space" },
  { name: "Um Robô por Aluno", short: "URA", url: "https://www.umroboporaluno.org" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Matheus0820", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/matheus-ramos-ferreira-da-silva-b40987226", icon: "linkedin" },
  { name: "Currículo Lattes", url: "http://lattes.cnpq.br/3863511228005347", icon: "book" },
  { name: "Email", url: "mailto:mr7052954@gmail.com", icon: "mail" },
];

export const about = [
  "Curso Bacharelado em Ciências e Tecnologia, com ênfase em Tecnologia da Computação, na ECT/UFRN. Desde 2023 trabalho com desenvolvimento web, principalmente com Python e Django, em projetos da universidade e da RNP.",
  "Como bolsista do PRH-25 da ANP, desenvolvo algoritmos de otimização e roteirização de veículos com Google OR-Tools. Dessa pesquisa nasceu a Opt.en Solutions, startup que fundei, e um resumo nos anais da IX Semana de Ciências e Tecnologia da UFRN.",
  "Também integro o grupo de trabalho do Governo do RN que desenvolve o novo sistema do Diário Oficial do Estado.",
];

export const facts = [
  { label: "Localização", value: "Natal, RN - Brasil" },
  { label: "Formação", value: "Bacharelado em Ciências e Tecnologia (Tecnologia da Computação), UFRN, 6º período" },
  { label: "Atuação", value: "Bolsista PRH-25 da ANP e membro do Grupo de Trabalho do Diário Oficial do RN" },
];

export const currentFocus = [
  "Otimização de rotas (VRP e CVRPTW) com Google OR-Tools",
  "MVP da Opt.en Solutions e parcerias com empresas de energia solar",
  "Sistema do Diário Oficial do RN (GT GAC/SEPLAN)",
  "Machine Learning aplicado à análise de dados",
];

export const publication = {
  title: "Rotas sustentáveis para a transição energética: desenvolvimento de algoritmos e da modelagem de negócios da Opt.en",
  authors: "Ramos, M.; Carvalho, Z.; Santi, É.",
  venue: "IX Semana de Ciências e Tecnologia da UFRN",
  kind: "Resumo em anais",
};

export interface LiveProject {
  name: string;
  host: string;
  description: string;
  links: { label: string; url: string; kind: 'site' | 'code' }[];
}

// Projetos que desenvolvi e que estão no ar
export const liveProjects: LiveProject[] = [
  {
    name: "Rallyne Silva Fotografia",
    host: "rallynefotografia.vercel.app",
    description: "Site de portfólio de uma fotógrafa, com galeria de ensaios, casamentos e eventos registrados com luz natural. Desenvolvi o front-end e o back-end, e o site está publicado na Vercel.",
    links: [
      { label: "Ver site", url: "https://rallynefotografia.vercel.app/", kind: "site" },
      { label: "Front-end", url: "https://github.com/Matheus0820/portfolio_rallyne_frontend", kind: "code" },
      { label: "Back-end", url: "https://github.com/Matheus0820/portfolio_rallyne_backend", kind: "code" },
    ],
  },
  {
    name: "Observatório de Valores do Nordeste (OVNE)",
    host: "ovne.ect.ufrn.br",
    description: "Site educacional do projeto de iniciação científica da ECT/UFRN, que divulga o setor aeroespacial do Nordeste. Desenvolvido com Django durante minha bolsa de pesquisa voluntária (2023–2024).",
    links: [{ label: "Ver site", url: "https://ovne.ect.ufrn.br/", kind: "site" }],
  },
  {
    name: "Opt.en Solutions",
    host: "optensolutions.vercel.app",
    description: "Site institucional da startup que fundei, disponível em português, inglês e alemão, com uma página de demonstração do Opt.en Fleet, a plataforma de roteirização. Publicado na Vercel.",
    links: [
      { label: "Ver site", url: "https://optensolutions.vercel.app/", kind: "site" },
      { label: "Demo Opt.en Fleet", url: "https://optensolutions.vercel.app/Opten_fleet_demo.html", kind: "site" },
    ],
  },
];
