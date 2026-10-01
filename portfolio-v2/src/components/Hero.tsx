import { motion } from 'framer-motion';
import { ArrowDown, Code, Rocket, Brain, Zap } from 'lucide-react';
import { ParticlesBackground, GradientOrb, FloatingShapes } from './ParticlesBackground';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animations */}
      <ParticlesBackground particleCount={60} />
      <FloatingShapes />
      <GradientOrb className="top-1/4 left-1/4" delay={0.5} />
      <GradientOrb className="bottom-1/4 right-1/4" delay={1} />
      <GradientOrb className="top-1/2 right-1/2" delay={1.5} />

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent dark:from-primary-500/5" />

      <motion.div
        className="container-custom relative z-10 pt-32 pb-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-200 dark:border-primary-800">
              <Zap className="w-4 h-4" />
              Desenvolvedor Full Stack • Pesquisador ML/IoT • Fundador Opten Solutions
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-dark-900 dark:text-dark-50 mb-6"
          >
            Olá, sou{' '}
            <span className="gradient-text">Matheus Ramos</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Construo aplicações web escaláveis, pesquisador em{' '}
            <span className="font-medium text-primary-600 dark:text-primary-400">Machine Learning</span>{' '}
            e{' '}
            <span className="font-medium text-primary-600 dark:text-primary-400">IoT</span>,{' '}
            fundador da{' '}
            <span className="font-medium text-primary-600 dark:text-primary-400">Opten Solutions</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto"
          >
            <StatCard label="Anos de Estudo" value="4+" icon={<Code className="w-6 h-6" />} />
            <StatCard label="Projetos no GitHub" value="15+" icon={<Rocket className="w-6 h-6" />} />
            <StatCard label="Tecnologias" value="20+" icon={<Brain className="w-6 h-6" />} />
            <StatCard label="Startup" value="Opten" icon={<Zap className="w-6 h-6" />} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projetos');
              }}
              className="btn-primary group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Projetos
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contato');
              }}
              className="btn-secondary group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Entrar em Contato
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 opacity-60"
          >
            {['TypeScript', 'React', 'Python', 'Node.js', 'Go', 'Docker', 'AWS', 'PostgreSQL', 'Tailwind', 'MQTT'].map((tech) => (
              <motion.span
                key={tech}
                className="skill-badge"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.button
              onClick={() => scrollToSection('#sobre')}
              className="p-3 rounded-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Rolar para próxima seção"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <motion.div
      className="p-4 rounded-xl bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-dark-200 dark:border-dark-700"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center text-primary-600 dark:text-primary-400 mb-2">
        {icon}
      </div>
      <p className="text-2xl font-bold text-dark-900 dark:text-dark-50">{value}</p>
      <p className="text-xs text-dark-500 dark:text-dark-400">{label}</p>
    </motion.div>
  );
}