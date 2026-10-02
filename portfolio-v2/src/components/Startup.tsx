import { motion, Variants } from 'framer-motion';
import { Rocket, Brain, Target, Zap, BarChart, GitBranch, Server, Cpu, Cloud, CheckCircle, TrendingDown, TrendingUp, Leaf } from 'lucide-react';
import { startupInfo } from '../data/portfolio';

// Tipagem para os itens de estatística
interface StatItem {
  label: string;
  value: string;
}

export function Startup() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as const;

  const techIcons: Record<string, React.ReactNode> = {
    Python: <Brain className="w-5 h-5" />,
    "Google OR-Tools": <Cpu className="w-5 h-5" />,
    "VRP / CVRPTW": <GitBranch className="w-5 h-5" />,
    "Machine Learning": <Brain className="w-5 h-5" />,
    APIs: <Server className="w-5 h-5" />,
    Vercel: <Cloud className="w-5 h-5" />,
  };

  // Suporte flexível para compatibilidade com as propriedades no arquivo de dados
  const technologiesList: string[] = (startupInfo as Record<string, any>).technologies || (startupInfo as Record<string, any>).techStack || [];
  const achievementsList: string[] = startupInfo.achievements || [];
  const statsList: StatItem[] = startupInfo.stats || [];

  return (
    <section id="startup" className="section relative overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-transparent dark:from-primary-900/10 dark:via-dark-950 dark:to-dark-950">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary-500/10 to-transparent dark:from-primary-500/5" />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Startup
          </span>
          <h2 className="section-title">Opt.en Solutions</h2>
          <p className="section-subtitle mt-4 mx-auto text-2xl font-medium gradient-text">{startupInfo.tagline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div className="card gradient-border" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                  {startupInfo.logo || 'O'}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50">{startupInfo.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{startupInfo.tagline}</p>
                </div>
              </div>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                {startupInfo.description}
              </p>
              {startupInfo.website && (
                <motion.a
                  href={startupInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visitar Site
                  <Rocket className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>

            {/* Origin Story */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Origem: PRH-25 ANP
              </h3>
              <div className="space-y-3 text-dark-600 dark:text-dark-300">
                <p className="leading-relaxed">
                  A Opt.en Solutions nasceu dentro do <strong className="text-dark-900 dark:text-dark-50">Programa de Recursos Humanos PRH-25</strong> da{' '}
                  <strong className="text-dark-900 dark:text-dark-50">Agência Nacional do Petróleo (ANP)</strong>, na Universidade Federal do Rio Grande do Norte (UFRN).
                </p>
                <p className="leading-relaxed">
                  O programa, intitulado <em>Tecnologia e Inovação para Transição Energética Sustentável na Margem Equatorial Brasileira</em>,
                  fomenta pesquisa e inovação conectando academia e setor energético. A startup surgiu para levar ao mercado os algoritmos
                  de roteirização desenvolvidos na pesquisa, enfrentando a ineficiência logística que eleva custos e emissões.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Conquistas & Marcos
              </h3>
              <div className="space-y-3">
                {achievementsList.map((achievement: string, index: number) => (
                  <motion.div
                    key={`achievement-${index}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-dark-600 dark:text-dark-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 gap-4" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              {statsList.map((stat: StatItem, index: number) => (
                <motion.div
                  key={`stat-${index}`}
                  className="card text-center"
                  whileHover={{ y: -4 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sidebar: Technologies & Architecture */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Tech Stack */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologiesList.map((tech: string, index: number) => (
                  <motion.div
                    key={`tech-${tech}-${index}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {techIcons[tech] || <Zap className="w-4 h-4 text-primary-500" />}
                    <span className="text-sm font-medium text-dark-900 dark:text-dark-50">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Architecture Highlights */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Abordagem Técnica
              </h3>
              <div className="space-y-4">
                {[
                  { icon: GitBranch, title: 'Roteamento de Veículos (VRP)', desc: 'Evolução progressiva do VRP clássico até o CVRPTW, com restrições de capacidade e janelas de tempo' },
                  { icon: Cpu, title: 'Google OR-Tools', desc: 'Solvers de alto desempenho para modelagem e solução dos problemas de roteirização' },
                  { icon: BarChart, title: 'Cenários diário, semanal e mensal', desc: 'Lógica iterativa de arranjos de atendimento que minimiza a função objetivo global respeitando o tempo limite de cada cliente' },
                  { icon: Server, title: 'Workforce Scheduling & Routing', desc: 'Roteirização considerando a especialização técnica dos funcionários (WSRP)' },
                  { icon: Cloud, title: 'Plataforma Web', desc: 'API e biblioteca OR-Tools deram origem ao primeiro modelo da plataforma; site oficial na Vercel' },
                  { icon: Zap, title: 'Validação em campo', desc: 'Testes operacionais com micro e pequenas empresas de energia solar fotovoltaica para refinar o MVP' },
                ].map((item, index: number) => (
                  <motion.div
                    key={`arch-${index}`}
                    className="flex gap-4 p-4 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 dark:text-dark-50">{item.title}</h4>
                      <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div className="card gradient-border" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Impacto Esperado
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Ambiente corporativo', value: 'Menos custos', icon: TrendingDown },
                  { label: 'Ambiente corporativo', value: 'Mais margem', icon: TrendingUp },
                  { label: 'Frotas e sociedade', value: 'Menos CO₂', icon: Leaf },
                  { label: 'Serviços prestados', value: 'Mais qualidade', icon: Target },
                ].map((item, index: number) => (
                  <motion.div
                    key={`impact-${index}`}
                    className="text-center p-4 rounded-lg bg-dark-50 dark:bg-dark-800/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="w-6 h-6 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                    <p className="text-lg font-bold gradient-text">{item.value}</p>
                    <p className="text-xs text-dark-500 dark:text-dark-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}