import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Wrench, Lightbulb, Brain, Zap, Server, Database, Globe, Cpu } from 'lucide-react';
import { skills, Skill } from '../data/portfolio';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<'language' | 'framework' | 'tool' | 'concept'>('language');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const categoryConfig = {
    language: { label: 'Linguagens', icon: Code, bg: 'bg-primary-100 dark:bg-primary-900/30', border: 'border-primary-200 dark:border-primary-800', active: 'bg-primary-600', from: '#0ea5e9', to: '#0284c7', light: '#38bdf8' },
    framework: { label: 'Frameworks & Libs', icon: Layers, bg: 'bg-violet-100 dark:bg-violet-900/30', border: 'border-violet-200 dark:border-violet-800', active: 'bg-violet-600', from: '#8b5cf6', to: '#7c3aed', light: '#a78bfa' },
    tool: { label: 'Ferramentas & Cloud', icon: Wrench, bg: 'bg-amber-100 dark:bg-amber-900/30', border: 'border-amber-200 dark:border-amber-800', active: 'bg-amber-600', from: '#f59e0b', to: '#d97706', light: '#fbbf24' },
    concept: { label: 'Conceitos & Domínios', icon: Lightbulb, bg: 'bg-emerald-100 dark:bg-emerald-900/30', border: 'border-emerald-200 dark:border-emerald-800', active: 'bg-emerald-600', from: '#10b981', to: '#059669', light: '#34d399' },
  } as const;

  const categories = ['language', 'framework', 'tool', 'concept'] as const;

  return (
    <section id="habilidades" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-transparent dark:from-primary-900/10" />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline mr-1" />
            Habilidades & Tecnologias
          </span>
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Tecnologias e conceitos que domino e utilizo no dia a dia
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? `${categoryConfig[cat].active} text-white shadow-lg`
                  : 'bg-white dark:bg-dark-900 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {(() => { const Icon = categoryConfig[cat].icon; return <Icon className="w-4 h-4 inline mr-2" />; })()}
              {categoryConfig[cat].label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          role="tabpanel"
          aria-label={`${categoryConfig[activeCategory].label} skills`}
        >
          {skills
            .filter((skill) => skill.category === activeCategory)
            .map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                config={categoryConfig[activeCategory]}
              />
            ))}
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800"
        >
          <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            Níveis de Proficiência
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { level: 'Especialista', desc: 'Uso avançado, arquitetura, otimização', dot: 'bg-emerald-500' },
              { level: 'Avançado', desc: 'Desenvolvimento completo, boas práticas', dot: 'bg-blue-500' },
              { level: 'Intermediário', desc: 'Desenvolvimento funcional, aprendendo', dot: 'bg-amber-500' },
              { level: 'Básico', desc: 'Conceitos fundamentais, estudando', dot: 'bg-gray-500' },
            ].map((item, index) => (
              <motion.div
                key={item.level}
                className="p-4 rounded-lg bg-dark-50 dark:bg-dark-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${item.dot}`} />
                  <span className="font-medium text-dark-900 dark:text-dark-50">{item.level}</span>
                </div>
                <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface CategoryStyle {
  bg: string;
  border: string;
  from: string;
  to: string;
  light: string;
}

function SkillCard({ skill, index, config }: { skill: Skill; index: number; config: CategoryStyle }) {
  const iconMap: Record<string, React.ReactNode> = {
    TypeScript: <Code className="w-5 h-5" />,
    JavaScript: <Code className="w-5 h-5" />,
    Python: <Brain className="w-5 h-5" />,
    'C++': <Cpu className="w-5 h-5" />,
    Java: <Code className="w-5 h-5" />,
    VHDL: <Cpu className="w-5 h-5" />,
    AMPL: <Cpu className="w-5 h-5" />,
    Go: <Cpu className="w-5 h-5" />,
    React: <Layers className="w-5 h-5" />,
    Node: <Server className="w-5 h-5" />,
    Express: <Server className="w-5 h-5" />,
    Django: <Layers className="w-5 h-5" />,
    Flask: <Layers className="w-5 h-5" />,
    Bootstrap: <Layers className="w-5 h-5" />,
    Tailwind: <Layers className="w-5 h-5" />,
    Framer: <Zap className="w-5 h-5" />,
    Pytest: <Wrench className="w-5 h-5" />,
    Pandas: <Database className="w-5 h-5" />,
    NumPy: <Database className="w-5 h-5" />,
    LangChain: <Brain className="w-5 h-5" />,
    Git: <Code className="w-5 h-5" />,
    Google: <Cpu className="w-5 h-5" />,
    Jupyter: <Code className="w-5 h-5" />,
    Vercel: <Globe className="w-5 h-5" />,
    Modelagem: <Layers className="w-5 h-5" />,
    Pesquisa: <Brain className="w-5 h-5" />,
    Roteiriza: <Globe className="w-5 h-5" />,
    Machine: <Brain className="w-5 h-5" />,
    LLMs: <Brain className="w-5 h-5" />,
    APIs: <Zap className="w-5 h-5" />,
    Testes: <Wrench className="w-5 h-5" />,
    'Análise': <Lightbulb className="w-5 h-5" />,
    Gerenciamento: <Layers className="w-5 h-5" />,
  };

  const getIcon = (name: string) => {
    for (const [key, icon] of Object.entries(iconMap)) {
      if (name.includes(key)) return icon;
    }
    return <Zap className="w-5 h-5" />;
  };

  return (
    <motion.div
      className={`card relative overflow-hidden group ${config.bg} ${config.border}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px -10px rgba(14, 165, 233, 0.2)` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10" style={{ background: `linear-gradient(to bottom left, transparent, ${config.from})` }} />

      <div className="relative z-10 flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`} style={{ background: `linear-gradient(135deg, ${config.from}, ${config.to})` }}>
          {getIcon(skill.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-dark-900 dark:text-dark-50 truncate">{skill.name}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/50 dark:bg-dark-800/50 backdrop-blur text-dark-600 dark:text-dark-400 capitalize">
            {skill.category}
          </span>
        </div>
      </div>

      {/* Proficiency Bar */}
      <motion.div
        className="mt-4 h-2 rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${config.from}, ${config.light})` }}
          initial={{ width: 0 }}
          animate={{ width: getProficiencyWidth(skill.name) }}
          transition={{ delay: 0.5 + index * 0.05, duration: 1, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

function getProficiencyWidth(skill: string): string {
  // Estimativa de nível a partir do currículo; ajuste conforme sua percepção.
  const expert = ['Python', 'JavaScript', 'Django', 'Git'];
  const advanced = [
    'Java', 'TypeScript', 'React', 'Node.js', 'Express.js', 'Pytest', 'Pandas', 'NumPy', 'GitHub',
    'Google OR-Tools', 'Pesquisa Operacional', 'Roteirização (VRP)', 'APIs REST', 'Testes Automatizados', 'Análise de Requisitos',
  ];
  const intermediate = [
    'C', 'C++', 'Go', 'VHDL', 'AMPL', 'Flask', 'Bootstrap', 'Tailwind CSS', 'Framer Motion', 'LangChain',
    'Jupyter', 'Vercel', 'Machine Learning', 'LLMs & RAG', 'Gerenciamento Ágil', 'Modelagem 3D (CAD)',
  ];

  if (expert.includes(skill)) return '95%';
  if (advanced.includes(skill)) return '80%';
  if (intermediate.includes(skill)) return '65%';
  return '50%';
}
