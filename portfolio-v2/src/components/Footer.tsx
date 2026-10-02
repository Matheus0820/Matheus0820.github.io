import { Github, BookOpen, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Footer() {
  const links = [
    { label: 'GitHub', href: personalInfo.github, icon: Github },
    { label: 'Currículo Lattes', href: personalInfo.lattes, icon: BookOpen },
    { label: 'E-mail', href: `mailto:${personalInfo.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-dark-200 dark:border-dark-800">
      <div className="wrap flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-sans text-sm text-dark-500 dark:text-dark-400">
          © {new Date().getFullYear()} {personalInfo.fullName}
        </p>
        <ul className="flex items-center gap-1">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="block rounded-md p-2 text-dark-500 transition-colors hover:text-primary-700 dark:text-dark-400 dark:hover:text-primary-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
