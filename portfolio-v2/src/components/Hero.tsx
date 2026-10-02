import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { BlackHole } from './BlackHole';
import { personalInfo } from '../data/portfolio';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:whitespace-nowrap sm:text-6xl lg:text-[4.25rem]">
            {personalInfo.name}
          </h1>
          <p className="mt-4 font-sans text-xl text-primary-700 dark:text-primary-300 sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-6 max-w-xl text-lg text-dark-600 dark:text-dark-300">{personalInfo.intro}</p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            <a href="#contato" className="btn-primary !px-4">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Entrar em contato
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href={personalInfo.lattes} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Lattes
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none lg:translate-x-8">
          <BlackHole glow className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
