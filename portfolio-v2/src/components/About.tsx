// import { ExternalLink } from 'lucide-react';
import { about, facts, currentFocus } from '../data/portfolio';

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

          <div className="mt-12">
            <h3 className="subtitle">Foco atual</h3>
            <ul className="mt-4 space-y-3 max-w-xl">
              {currentFocus.map((item) => (
                <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-3 before:bg-primary-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
