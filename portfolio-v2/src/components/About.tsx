import { ExternalLink } from 'lucide-react';
import { about, facts, currentFocus, participations } from '../data/portfolio';

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Sobre</h2>

        <div className="min-w-0">
          <div className="max-w-2xl space-y-5">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-12 divide-y divide-dark-200 border-y border-dark-200 dark:divide-dark-800 dark:border-dark-800">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
                <dt className="font-sans text-sm font-medium text-dark-500 dark:text-dark-400">{fact.label}</dt>
                <dd className="text-dark-900 dark:text-dark-100">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="subtitle">Foco atual</h3>
              <ul className="mt-4 space-y-3">
                {currentFocus.map((item) => (
                  <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-3 before:bg-primary-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="subtitle">Projetos de extensão e pesquisa</h3>
              <ul className="mt-4 space-y-3">
                {participations.map((item) => (
                  <li key={item.short}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link inline-flex items-baseline gap-1.5"
                    >
                      {item.name}
                      <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 translate-y-0.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
