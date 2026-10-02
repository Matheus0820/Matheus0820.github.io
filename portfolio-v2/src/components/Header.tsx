import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { BlackHole } from './BlackHole';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* armazenamento indisponível: o tema vale só nesta visita */
    }
  };

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md p-2 text-dark-600 transition-colors hover:bg-dark-100 hover:text-dark-900 dark:text-dark-300 dark:hover:bg-dark-800 dark:hover:text-dark-50"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        isScrolled || isMenuOpen
          ? 'border-b border-dark-200 bg-white/95 dark:border-dark-800 dark:bg-dark-950/95'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Navegação principal">
        <a href="#inicio" className="flex items-center gap-2.5 font-sans text-lg font-semibold text-dark-900 dark:text-dark-50">
          <BlackHole className="h-8 w-8" />
          {personalInfo.name}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-dark-600 transition-colors hover:text-primary-700 dark:text-dark-300 dark:hover:text-primary-300"
            >
              {link.label}
            </a>
          ))}
          {themeButton}
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          {themeButton}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-md p-2 text-dark-600 transition-colors hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="wrap pb-4 lg:hidden">
          <ul className="flex flex-col border-t border-dark-200 pt-2 dark:border-dark-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-sans text-base font-medium text-dark-700 hover:text-primary-700 dark:text-dark-200 dark:hover:text-primary-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
