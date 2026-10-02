import { experience, education, publication } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Experiência</h2>

        <ol className="min-w-0 space-y-12 border-l border-dark-200 pl-8 dark:border-dark-800">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative">
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
                </div>
              </div>
            </li>
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

          <div className="mt-12 max-w-2xl">
            <h3 className="subtitle">Publicação</h3>
            <p className="mt-3 text-dark-900 dark:text-dark-100">{publication.title}</p>
            <p className="mt-1 text-dark-600 dark:text-dark-300">
              {publication.authors}. {publication.venue}. {publication.kind}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
