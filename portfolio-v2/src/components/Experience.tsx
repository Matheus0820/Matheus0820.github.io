import { motion } from 'framer-motion';
import { experience, education } from '../data/portfolio';
import { Award, TrendingUp } from 'lucide-react';

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Experiência</h2>

        <ol className="min-w-0 space-y-12 border-l border-dark-200 pl-8 dark:border-dark-800">
          {experience.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[37.5px] top-2 h-2.5 w-2.5 rounded-full bg-primary-500 ring-4 ring-white dark:ring-dark-950"
              />
              <div className="grid gap-1 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-6">
                <p className="whitespace-nowrap pt-0.5 font-sans text-sm text-dark-500 dark:text-dark-400">{item.period}</p>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug">{item.role}</h3>
                  <p className="mt-0.5 text-dark-600 dark:text-dark-300">{item.company}</p>

                  <ul className="mt-4 space-y-2">
                    {item.description.map((line) => (
                      <li key={line} className="relative pl-5 before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-3 before:bg-primary-500">
                        {line}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-sans text-sm text-dark-500 dark:text-dark-400">
                    <span className="font-medium text-dark-700 dark:text-dark-200">Tecnologias:</span>{' '}
                    {item.technologies.join(', ')}
                  </p>

                  {item.links && (
                    <p className="mt-2 font-sans text-sm">
                      {item.links.map((link, i) => (
                        <span key={link.url}>
                          {i > 0 && <span className="text-dark-400"> | </span>}
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-link">
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  )}

                  {item.metrics && item.metrics.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-dark-200 dark:border-dark-800">
                      <h4 className="font-sans text-sm font-semibold text-dark-900 dark:text-dark-50 mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        Métricas & Conquistas
                      </h4>
                      <ul className="space-y-2">
                        {item.metrics.map((metric, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300"
                          >
                            <Award className="h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400 mt-0.5" aria-hidden="true" />
                            {metric}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="formacao" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Formação</h2>

        <div className="min-w-0">
          <ul className="divide-y divide-dark-200 border-y border-dark-200 dark:divide-dark-800 dark:border-dark-800">
            {education.map((item) => (
              <li key={item.degree} className="grid gap-1 py-6 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-6">
                <p className="whitespace-nowrap pt-0.5 font-sans text-sm text-dark-500 dark:text-dark-400">{item.period}</p>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug">{item.degree}</h3>
                  <p className="mt-0.5 text-dark-600 dark:text-dark-300">{item.institution}</p>
                  {item.description && <p className="mt-3 text-dark-600 dark:text-dark-300">{item.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
