import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Star, FolderOpen } from 'lucide-react';
import { featuredProjects, Project } from '../data/portfolio';

export function Projects() {
  const containerVariants = {
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
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const filterOptions = ['Todos', 'Destaque', 'Backend', 'Frontend', 'ML/Otimização', 'Pesquisa'];
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Destaque') return project.featured;
    if (activeFilter === 'Backend') return ['JavaScript', 'TypeScript', 'Go', 'Python'].includes(project.language) && !project.topics.includes('frontend');
    if (activeFilter === 'Frontend') return project.topics.includes('frontend') || project.topics.includes('react');
    if (activeFilter === 'ML/Otimização') return project.topics.some(t => ['ml', 'machine-learning', 'optimization', 'routing', 'rag', 'llm'].includes(t.toLowerCase()));
    if (activeFilter === 'Pesquisa') return project.topics.includes('research') || project.language === 'Jupyter Notebook' || project.language === 'VHDL';
    return true;
  });

  // Language colors
  const languageColors: Record<string, string> = {
    'TypeScript': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'JavaScript': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    'Python': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    'Go': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
    'VHDL': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'Jupyter Notebook': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
  };

  return (
    <section id="projetos" className="section relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <FolderOpen className="w-4 h-4 inline mr-1" />
            Projetos em Destaque
          </span>
          <h2 className="section-title">Meus Repositórios Principais</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Seleção dos projetos mais relevantes no GitHub, abrangendo full-stack, ML, otimização de rotas e pesquisa acadêmica
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterOptions.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-dark-900 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Lista de projetos"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              languageColors={languageColors}
            />
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Matheus0820"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Todos no GitHub
            <Github className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index, languageColors }: { project: Project; index: number; languageColors: Record<string, string> }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
      className="card relative overflow-hidden group"
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <span className="px-2 py-1 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Destaque
          </span>
        </motion.div>
      )}

      <div className="h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/20 dark:from-primary-900/30 dark:to-primary-800/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary-500/5 to-primary-500/10" />
        {project.topics.slice(0, 3).map((topic, i) => (
          <motion.span
            key={topic}
            className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1"
            style={{ bottom: `3px`, left: `3px` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <span className="px-2 py-0.5 text-xs rounded bg-white/80 dark:bg-dark-900/80 backdrop-blur text-dark-700 dark:text-dark-300">
              {topic}
            </span>
          </motion.span>
        ))}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span className={`text-xs font-medium px-2 py-1 rounded ${languageColors[project.language] || 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300'}`}>
                {project.language}
              </span>
            </div>
            <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="text-dark-600 dark:text-dark-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {project.topics.slice(0, 5).map((topic) => (
            <motion.span
              key={topic}
              className="px-2 py-1 text-xs rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 border border-dark-200 dark:border-dark-700"
              whileHover={{ backgroundColor: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9' }}
            >
              {topic}
            </motion.span>
          ))}
          {project.topics.length > 5 && (
            <span className="px-2 py-1 text-xs rounded-full bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 border border-dark-200 dark:border-dark-700">
              +{project.topics.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-dark-200 dark:border-dark-700">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 rounded-lg bg-primary-50 dark:bg-primary-900/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            Código
          </motion.a>
          {project.homepage && (
            <motion.a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg bg-dark-100 dark:bg-dark-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}