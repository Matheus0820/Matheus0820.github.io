import { motion } from 'framer-motion';
import { Globe, Github, ArrowRight, Check } from 'lucide-react';
import { liveProjects, LiveProject } from '../data/portfolio';

interface ProjectCardProps {
  project: LiveProject;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.li
      key={project.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="py-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
          <p className="mt-0.5 font-sans text-sm text-dark-500 dark:text-dark-400">{project.host}</p>
          <p className="mt-3 max-w-2xl text-dark-600 dark:text-dark-300">{project.shortDescription}</p>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {project.links.map((link) => {
              const Icon = link.kind === 'code' ? Github : Globe;
              return (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-3.5 !py-2"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0 p-2 text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label={`Ver detalhes do projeto ${project.name}`}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>

      {project.featured && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-6 p-5 rounded-lg bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-800"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="font-sans text-sm font-semibold text-dark-900 dark:text-dark-50 mb-2">Problema</h4>
              <p className="text-sm text-dark-600 dark:text-dark-300">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-dark-900 dark:text-dark-50 mb-2">Solução</h4>
              <p className="text-sm text-dark-600 dark:text-dark-300">{project.solution}</p>
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-dark-900 dark:text-dark-50 mb-2">Resultados</h4>
              <ul className="space-y-1.5">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400 mt-0.5" aria-hidden="true" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip text-xs px-2 py-0.5">{tech}</span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Projetos</h2>

        <div className="min-w-0">
          <p className="max-w-2xl">Projetos que desenvolvi e que estão no ar. Projetos em destaque mostram o case completo (problema → solução → resultados).</p>

          <ul className="mt-8 divide-y divide-dark-200 border-y border-dark-200 dark:divide-dark-800 dark:border-dark-800">
            {liveProjects.map((project, index) => (
              <ProjectCard project={project} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
