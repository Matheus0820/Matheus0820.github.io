import { Globe, Github } from 'lucide-react';
import { liveProjects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Projetos</h2>

        <div className="min-w-0">
          <p className="max-w-2xl">Projetos que desenvolvi e que estão no ar.</p>

          <ul className="mt-8 divide-y divide-dark-200 border-y border-dark-200 dark:divide-dark-800 dark:border-dark-800">
            {liveProjects.map((project) => (
              <li key={project.name} className="py-7">
                <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
                <p className="mt-0.5 font-sans text-sm text-dark-500 dark:text-dark-400">{project.host}</p>
                <p className="mt-3 max-w-2xl text-dark-600 dark:text-dark-300">{project.description}</p>

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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
