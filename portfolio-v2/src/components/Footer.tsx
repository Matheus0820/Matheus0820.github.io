import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, Heart, Code, Rocket, Brain } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-dark-200 dark:border-dark-800">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent dark:from-primary-500/5" />

      <div className="container-custom relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
              <span className="text-2xl font-bold gradient-text">MR</span>
              <span className="text-lg font-semibold text-dark-900 dark:text-dark-50">Matheus Ramos</span>
            </motion.div>
            <p className="text-dark-600 dark:text-dark-400 max-w-xs leading-relaxed">
              Desenvolvedor Full Stack & Pesquisador em ML/IoT. Fundador da Opten Solutions.
              Construindo o futuro com código.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.name}
                >
                  {social.icon === 'github' && <Github className="w-5 h-5" />}
                  {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  {social.icon === 'mail' && <Mail className="w-5 h-5" />}
                  {social.icon === 'globe' && <Globe className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-dark-900 dark:text-dark-50 mb-4">Navegação</h4>
            <nav className="space-y-3" aria-label="Navegação do rodapé">
              {[
                { href: '#sobre', label: 'Sobre Mim', icon: Code },
                { href: '#startup', label: 'Opten Solutions', icon: Rocket },
                { href: '#projetos', label: 'Projetos', icon: Code },
                { href: '#habilidades', label: 'Habilidades', icon: Brain },
                { href: '#contato', label: 'Contato', icon: Mail },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Tech Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-dark-900 dark:text-dark-50 mb-4">Tecnologias Principais</h4>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Python', 'Node.js', 'Go', 'Docker', 'AWS', 'PostgreSQL', 'Tailwind', 'MQTT'].map((tech) => (
                <motion.span
                  key={tech}
                  className="skill-badge"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700">
              <h4 className="font-semibold text-dark-900 dark:text-dark-50 mb-4">Projetos em Destaque</h4>
              <div className="space-y-2">
                {['OptenFleetAPI', 'ChatBot-RAG', 'Portfolio Rallyne', 'Algoritmos em Go'].map((project) => (
                  <motion.a
                    key={project}
                    href="https://github.com/Matheus0820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Code className="w-4 h-4" />
                    {project}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-dark-200 dark:border-dark-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-dark-500 dark:text-dark-400 text-center sm:text-left">
              © {currentYear} Matheus Ramos. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
              <motion.span
                className="flex items-center gap-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
                Feito com paixão
              </motion.span>

              <span className="hidden sm:inline">·</span>

              <motion.span className="flex items-center gap-1">
                <Rocket className="w-4 h-4 text-primary-500" />
                Deploy na Vercel
              </motion.span>

              <span className="hidden sm:inline">·</span>

              <motion.span className="flex items-center gap-1">
                <Code className="w-4 h-4 text-violet-500" />
                React + TypeScript + Tailwind
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}