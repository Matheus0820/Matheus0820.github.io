export interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  homepage?: string;
  topics: string[];
  featured: boolean;
}

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
  lattes: "http://lattes.cnpq.br/3863511228005347",
  location: "Natal, RN - Brasil",
  bio: "Programador Full Stack e Pesquisador Operacional, cursando Bacharelado em Ciências e Tecnologia (ênfase em Tecnologia da Computação) na ECT/UFRN. Desenvolvo aplicações web com Python e Django e, como bolsista do PRH-25 da ANP, crio algoritmos de otimização e roteirização com Google OR-Tools. Sou fundador da Opt.en Solutions, startup nascida dessa pesquisa, e integro o grupo de trabalho do Governo do RN responsável pelo novo sistema do Diário Oficial do Estado.",
  avatar: "https://avatars.githubusercontent.com/u/89211913?v=4",
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
    period: "2026 - Atual",
    description: [
      "Startup nascida da pesquisa do PRH-25 da ANP, focada em roteirização sustentável para o setor de energia",
      "Aprovada com nota máxima na 1ª fase do edital Centelha Sebrae RN e selecionada para o programa SuperNova do Sebrae",
      "Lançamento do site oficial e desenvolvimento do MVP com algoritmos de otimização de rotas",
    ],
    technologies: ["Python", "Google OR-Tools", "VRP / CVRPTW", "Vercel"],
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

export const featuredProjects: Project[] = [
  {
    name: "portfolio_rallyne_frontend",
    description: "Front-end do site de portfólio de Rallyne Silva Fotografia: galeria de ensaios, casamentos e eventos registrados com luz natural. Publicado na Vercel.",
    language: "TypeScript",
    url: "https://github.com/Matheus0820/portfolio_rallyne_frontend",
    homepage: "https://rallynefotografia.vercel.app/",
    topics: ["frontend", "typescript", "fotografia", "portfolio", "vercel"],
    featured: true,
  },
  {
    name: "portfolio_rallyne_backend",
    description: "Back-end do site Rallyne Silva Fotografia: API que alimenta o portfólio fotográfico, integrada ao front-end e publicada na Vercel.",
    language: "JavaScript",
    url: "https://github.com/Matheus0820/portfolio_rallyne_backend",
    homepage: "https://rallynefotografia.vercel.app/",
    topics: ["backend", "nodejs", "api", "fotografia", "vercel"],
    featured: true,
  },
  {
    name: "OptenFleetAPI",
    description: "API da plataforma da Opt.en Solutions, startup nascida da pesquisa do PRH-25 da ANP, voltada à gestão de frotas e à otimização de rotas.",
    language: "JavaScript",
    url: "https://github.com/Matheus0820/OptenFleetAPI",
    topics: ["fleet-management", "optimization", "routing", "anp", "prh-25"],
    featured: true,
  },
  {
    name: "ChatBot-RAG-Regulamento-ECT-UFRN",
    description: "Chatbot inteligente com RAG (Retrieval-Augmented Generation) para consultas ao regulamento da ECT/UFRN. Utiliza LangChain, embeddings vetoriais e LLMs para respostas precisas.",
    language: "Python",
    url: "https://github.com/Matheus0820/ChatBot-RAG-Regulamento-ECT-UFRN",
    topics: ["rag", "llm", "langchain", "chatbot", "embeddings", "vector-db", "ufrn"],
    featured: true,
  },
  {
    name: "Algoritmos-e-Estrutura-de-Dados-1",
    description: "Implementações de algoritmos clássicos e estruturas de dados em Go. Inclui ordenação, busca, grafos, árvores e programação dinâmica.",
    language: "Go",
    url: "https://github.com/Matheus0820/Algoritmos-e-Estrutura-de-Dados-1",
    topics: ["algorithms", "data-structures", "go", "golang", "competitive-programming"],
    featured: true,
  },
  {
    name: "Sistemas-Digitais",
    description: "Projetos de sistemas digitais em VHDL para FPGA. Inclui processadores, memórias, controladores e circuitos sequenciais/combinacionais.",
    language: "VHDL",
    url: "https://github.com/Matheus0820/Sistemas-Digitais",
    topics: ["vhdl", "fpga", "digital-design", "hardware", "processor", "quartus"],
    featured: true,
  },
  {
    name: "pesquisa_machine_leaning_e_materiais",
    description: "Pesquisa em Machine Learning aplicado a ciência de materiais. Notebooks com experimentos, pré-processamento, treinamento e avaliação de modelos.",
    language: "Jupyter Notebook",
    url: "https://github.com/Matheus0820/pesquisa_machine_leaning_e_materiais",
    topics: ["machine-learning", "materials-science", "jupyter", "python", "research", "pytorch"],
    featured: true,
  },
  {
    name: "Desenvolvimento-WEB-Backend",
    description: "Projetos de desenvolvimento web backend com Node.js, Express, bancos de dados relacionais e não-relacionais, autenticação e deploy.",
    language: "JavaScript",
    url: "https://github.com/Matheus0820/Desenvolvimento-WEB-Backend",
    topics: ["nodejs", "express", "backend", "database", "api", "web-development"],
    featured: false,
  },
  {
    name: "Sinais-e-Sistemas",
    description: "Análise de sinais e sistemas com Python/Jupyter. Transformadas de Fourier, Laplace, Z, filtros digitais e processamento de sinais.",
    language: "Jupyter Notebook",
    url: "https://github.com/Matheus0820/Sinais-e-Sistemas",
    topics: ["signals", "systems", "fourier", "laplace", "dsp", "jupyter", "python"],
    featured: false,
  },
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
  { name: "Currículo Lattes", url: "http://lattes.cnpq.br/3863511228005347", icon: "book" },
  { name: "Email", url: "mailto:mr7052954@gmail.com", icon: "mail" },
  { name: "Opt.en Solutions", url: "https://optensolutions.vercel.app/", icon: "globe" },
];

export const startupInfo = {
  name: "Opt.en Solutions",
  tagline: "Rotas Sustentáveis para a Transição Energética",
  description: "A Opt.en Solutions é uma startup (regime Inova Simples) que nasceu da pesquisa do PRH-25 da ANP na UFRN. Desenvolvemos algoritmos de otimização e roteirização para o setor de energia, começando por micro e pequenas empresas de instalação e manutenção de painéis solares, para reduzir custos, diminuir as emissões de carbono das frotas e melhorar a qualidade do serviço.",
  website: "https://optensolutions.vercel.app/",
  logo: "🚀",
  stats: [
    { label: "Programa", value: "PRH-25 ANP" },
    { label: "Instituição", value: "UFRN" },
    { label: "Regime", value: "Inova Simples" },
    { label: "Status", value: "MVP em Desenvolvimento" },
  ],
  technologies: ["Python", "Google OR-Tools", "VRP / CVRPTW", "Machine Learning", "APIs", "Vercel"],
  achievements: [
    "Aprovada com nota máxima na 1ª fase do Centelha Sebrae RN",
    "Selecionada para o programa de aceleração SuperNova do Sebrae",
    "Formalizada sob o regime Inova Simples",
    "Site oficial lançado para atrair parcerias e divulgar a pesquisa",
    "Protótipos de roteirização validados com Google OR-Tools",
    "Resumo em anais da IX Semana de Ciências e Tecnologia da UFRN",
  ],
};
