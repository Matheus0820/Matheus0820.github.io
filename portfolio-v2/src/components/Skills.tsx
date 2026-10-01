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
    language: { label: 'Linguagens', icon: Code, color: 'primary', bg: 'bg-primary-100 dark:bg-primary-900/30' },
    framework: { label: 'Frameworks & Libs', icon: Layers, color: 'violet', bg: 'bg-violet-100 dark:bg-violet-900/30' },
    tool: { label: 'Ferramentas & Cloud', icon: Wrench, color: 'amber', bg: 'bg-amber-100 dark:bg-amber-900/30' },
    concept: { label: 'Conceitos & Domínios', icon: Lightbulb, color: 'emerald', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
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
                  ? `bg-${categoryConfig[cat].color}-600 text-white shadow-lg`
                  : 'bg-white dark:bg-dark-900 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <categoryConfig[cat].icon className="w-4 h-4 inline mr-2" />
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
                categoryColor={categoryConfig[activeCategory].color}
                categoryBg={categoryConfig[activeCategory].bg}
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
              { level: 'Especialista', desc: 'Uso avançado, arquitetura, otimização', color: 'emerald' },
              { level: 'Avançado', desc: 'Desenvolvimento completo, boas práticas', color: 'blue' },
              { level: 'Intermediário', desc: 'Desenvolvimento funcional, aprendendo', color: 'amber' },
              { level: 'Básico', desc: 'Conceitos fundamentais, estudando', color: 'gray' },
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
                  <div className={`w-3 h-3 rounded-full bg-${item.color}-500`} />
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

function SkillCard({ skill, index, categoryColor, categoryBg }: { skill: Skill; index: number; categoryColor: string; categoryBg: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    TypeScript: <Code className="w-5 h-5" />,
    JavaScript: <Code className="w-5 h-5" />,
    Python: <Brain className="w-5 h-5" />,
    Go: <Cpu className="w-5 h-5" />,
    Java: <Code className="w-5 h-5" />,
    VHDL: <Cpu className="w-5 h-5" />,
    SQL: <Database className="w-5 h-5" />,
    React: <Layers className="w-5 h-5" />,
    Next: <Globe className="w-5 h-5" />,
    Node: <Server className="w-5 h-5" />,
    Django: <Layers className="w-5 h-5" />,
    FastAPI: <Zap className="w-5 h-5" />,
    Tailwind: <Layers className="w-5 h-5" />,
    Framer: <Zap className="w-5 h-5" />,
    Git: <Code className="w-5 h-5" />,
    Docker: <Server className="w-5 h-5" />,
    AWS: <Globe className="w-5 h-5" />,
    PostgreSQL: <Database className="w-5 h-5" />,
    MongoDB: <Database className="w-5 h-5" />,
    Redis: <Database className="w-5 h-5" />,
    Linux: <Cpu className="w-5 h-5" />,
    Machine: <Brain className="w-5 h-5" />,
    LLMs: <Brain className="w-5 h-5" />,
    IoT: <Globe className="w-5 h-5" />,
    APIs: <Zap className="w-5 h-5" />,
    Micro: <Server className="w-5 h-5" />,
    CI: <Zap className="w-5 h-5" />,
    Arquitetura: <Layers className="w-5 h-5" />,
    Testes: <Wrench className="w-5 h-5" />,
  };

  const getIcon = (name: string) => {
    for (const [key, icon] of Object.entries(iconMap)) {
      if (name.includes(key)) return icon;
    }
    return <Zap className="w-5 h-5" />;
  };

  return (
    <motion.div
      className={`card relative overflow-hidden group ${categoryBg} border-${categoryColor}-200 dark:border-${categoryColor}-800`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px -10px rgba(14, 165, 233, 0.2)` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent to-current opacity-10" style={{ '--tw-gradient-from': `var(--${categoryColor}-500)` }} />

      <div className="relative z-10 flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`} style={{ background: `linear-gradient(135deg, var(--${categoryColor}-500), var(--${categoryColor}-600))` }}>
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
          style={{ background: `linear-gradient(90deg, var(--${categoryColor}-500), var(--${categoryColor}-400))` }}
          initial={{ width: 0 }}
          animate={{ width: getProficiencyWidth(skill.name) }}
          transition={{ delay: 0.5 + index * 0.05, duration: 1, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

function getProficiencyWidth(skill: string): string {
  const expert = ['TypeScript', 'JavaScript', 'Python', 'React', 'Node.js', 'Git', 'SQL'];
  const advanced = ['Go', 'Django', 'Tailwind', 'Docker', 'PostgreSQL', 'AWS', 'APIs', 'Machine Learning'];
  const intermediate = ['Java', 'VHDL', 'Next.js', 'FastAPI', 'Framer', 'MongoDB', 'Redis', 'Linux', 'LLMs', 'IoT', 'Micro', 'CI', 'Arquitetura', 'Testes'];

  if (expert.includes(skill)) return '95%';
  if (advanced.includes(skill)) return '80%';
  if (intermediate.includes(skill)) return '65%';
  return '50%';
}