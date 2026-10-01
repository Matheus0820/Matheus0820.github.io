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

export const personalInfo = {
  name: "Matheus Ramos",
  title: "Desenvolvedor Full Stack & Pesquisador",
  subtitle: "Especialista em aplicações web, IoT e Machine Learning",
  email: "matheus.ramos@exemplo.com",
  github: "https://github.com/Matheus0820",
  linkedin: "https://linkedin.com/in/matheus-ramos",
  location: "Natal, RN - Brasil",
  bio: "Sou desenvolvedor com experiência em aplicações web full-stack e projetos de pesquisa em Machine Learning e IoT. Tenho foco em Python, TypeScript, React e tecnologias cloud. Atualmente cursando Bacharelado em Ciências e Tecnologia na UFRN e sou fundador da Opten Solutions, startup nascida da pesquisa do PRH-25 da ANP.",
  avatar: "https://avatars.githubusercontent.com/u/89211913?v=4",
};

export const education: Education[] = [
  {
    degree: "Bacharelado em Ciências e Tecnologia",
    institution: "ECT/UFRN - Escola de Ciências e Tecnologia da Universidade Federal do Rio Grande do Norte",
    period: "2024 - Atual",
    description: "Foco em computação, matemática aplicada e engenharia de software",
  },
  {
    degree: "Técnico em Informática",
    institution: "EAJ/UFRN - Escola Agrícola de Jundiaí",
    period: "2020 - 2023",
    description: "Formação técnica em desenvolvimento de sistemas, redes e hardware",
  },
];

export const experience: Experience[] = [
  {
    role: "Fundador & Desenvolvedor Full Stack",
    company: "Opten Solutions",
    period: "2024 - Atual",
    description: [
      "Startup nascida da pesquisa do PRH-25 da ANP (Agência Nacional do Petróleo)",
      "Desenvolvimento de soluções para gestão de frotas e otimização logística",
      "Arquitetura full-stack com React, Node.js, Python e infraestrutura cloud",
      "Implementação de APIs REST, autenticação, banco de dados e deploy contínuo",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Vercel", "AWS"],
  },
  {
    role: "Pesquisador em Machine Learning & IoT",
    company: "PRH-25 / ANP - UFRN",
    period: "2023 - Atual",
    description: [
      "Pesquisa em otimização de processos industriais usando ML",
      "Desenvolvimento de chatbots RAG para regulamentos técnicos",
      "Projetos de IoT com MQTT para monitoramento remoto",
      "Publicações e participação em eventos técnicos",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "MQTT", "Raspberry Pi", "ESP32", "Docker"],
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Go", category: "language" },
  { name: "Java", category: "language" },
  { name: "VHDL", category: "language" },
  { name: "SQL", category: "language" },

  // Frameworks
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Django", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "Framer Motion", category: "framework" },

  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "AWS", category: "tool" },
  { name: "PostgreSQL", category: "tool" },
  { name: "MongoDB", category: "tool" },
  { name: "Redis", category: "tool" },
  { name: "Linux", category: "tool" },
  { name: "VS Code", category: "tool" },

  // Concepts
  { name: "Machine Learning", category: "concept" },
  { name: "LLMs & RAG", category: "concept" },
  { name: "IoT & MQTT", category: "concept" },
  { name: "APIs REST", category: "concept" },
  { name: "Microserviços", category: "concept" },
  { name: "CI/CD", category: "concept" },
  { name: "Arquitetura Limpa", category: "concept" },
  { name: "Testes Automatizados", category: "concept" },
];

export const featuredProjects: Project[] = [
  {
    name: "OptenFleetAPI",
    description: "API de gestão de frotas para a startup Opten Solutions. Sistema completo de rastreamento, telemetria e otimização de rotas para veículos industriais.",
    language: "JavaScript",
    url: "https://github.com/Matheus0820/OptenFleetAPI",
    topics: ["fleet-management", "iot", "telemetry", "optimization", "anp", "prh-25"],
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
    name: "portfolio_rallyne_frontend",
    description: "Frontend moderno de portfólio construído com React, TypeScript e Tailwind CSS. Deploy automatizado na Vercel com CI/CD.",
    language: "TypeScript",
    url: "https://github.com/Matheus0820/portfolio_rallyne_frontend",
    homepage: "https://portfolio-rallyne-frontend.vercel.app",
    topics: ["react", "typescript", "tailwind", "vercel", "portfolio", "frontend"],
    featured: true,
  },
  {
    name: "portfolio_rallyne_backend",
    description: "Backend do portfólio Rallyne com API REST, autenticação JWT, banco de dados PostgreSQL e deploy serverless.",
    language: "JavaScript",
    url: "https://github.com/Matheus0820/portfolio_rallyne_backend",
    homepage: "https://portfolio-rallyne-backend.vercel.app",
    topics: ["nodejs", "api", "jwt", "postgresql", "vercel", "backend"],
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

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Matheus0820", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/matheus-ramos", icon: "linkedin" },
  { name: "Email", url: "mailto:matheus.ramos@exemplo.com", icon: "mail" },
  { name: "Opten Solutions", url: "https://optensolutions.vercel.app/", icon: "globe" },
];

export const startupInfo = {
  name: "Opten Solutions",
  tagline: "Otimização Inteligente para Gestão de Frotas",
  description: "A Opten Solutions nasceu da pesquisa do PRH-25 (Programa de Recursos Humanos da ANP) na UFRN. Desenvolvemos soluções tecnológicas para o setor de óleo e gás, com foco em gestão de frotas, telemetria avançada e otimização logística usando IoT e Machine Learning.",
  website: "https://optensolutions.vercel.app/",
  logo: "🚀",
  stats: [
    { label: "Programa", value: "PRH-25 ANP" },
    { label: "Instituição", value: "UFRN" },
    { label: "Foco", value: "O&G + Tech" },
    { label: "Status", value: "Em Desenvolvimento" },
  ],
  technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MQTT", "Docker", "AWS"],
  achievements: [
    "Selecionado no programa PRH-25 da ANP",
    "Desenvolvimento de MVP para gestão de frotas",
    "Integração IoT com sensores industriais",
    "Algoritmos de otimização de rotas",
  ],
};