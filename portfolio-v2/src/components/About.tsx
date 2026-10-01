import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Brain, Zap, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo, education, experience } from '../data/portfolio';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="sobre" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent dark:from-primary-900/10" />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Sobre Mim
          </span>
          <h2 className="section-title gradient-text">Conheça minha trajetória</h2>
          <p className="section-subtitle mt-4 mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            {/* Bio Card */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Sobre Mim
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-base">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div className="grid md:grid-cols-2 gap-4" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <InfoCard icon={<MapPin className="w-5 h-5" />} label="Localização" value={personalInfo.location} />
              <InfoCard icon={<Mail className="w-5 h-5" />} label="Email" value={personalInfo.email} />
              <InfoCard icon={<Github className="w-5 h-5" />} label="GitHub" value="@Matheus0820" href={personalInfo.github} />
              <InfoCard icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" value="matheus-ramos" href={personalInfo.linkedin} />
            </motion.div>

            {/* Education */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Formação Acadêmica
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-950" />
                    <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">{edu.period}</p>
                    <h4 className="font-semibold text-dark-900 dark:text-dark-50">{edu.degree}</h4>
                    <p className="text-dark-600 dark:text-dark-300">{edu.institution}</p>
                    {edu.description && <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">{edu.description}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Experiência Profissional
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-950" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-dark-900 dark:text-dark-50">{exp.role}</h4>
                      <span className="text-sm text-dark-500 dark:text-dark-400">{exp.period}</span>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 mb-2">{exp.company}</p>
                    <ul className="space-y-1 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-dark-600 dark:text-dark-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Quick Stats */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Destaques
              </h3>
              <div className="space-y-4">
                <StatHighlight icon={<Brain className="w-5 h-5" />} label="Pesquisa ML/IoT" value="PRH-25 ANP" color="primary" />
                <StatHighlight icon={<Rocket className="w-5 h-5" />} label="Startup" value="Opten Solutions" color="amber" />
                <StatHighlight icon={<Code className="w-5 h-5" />} label="Linguagens" value="7+" color="emerald" />
                <StatHighlight icon={<Github className="w-5 h-5" />} label="Repositórios" value="15+" color="violet" />
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Foco Atual
              </h3>
              <div className="space-y-3">
                {[
                  'LLMs & RAG para aplicações empresariais',
                  'Otimização logística com IoT',
                  'Arquitetura de microsserviços',
                  'DevOps & CI/CD avançado',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-sm text-dark-600 dark:text-dark-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Curiosidades
              </h3>
              <div className="space-y-3">
                {[
                  'Desenvolvi um rover controlado via MQTT',
                  'Implementei chatbot RAG para regulamento da UFRN',
                  'Pesquisa em ML aplicado a ciência de materiais',
                  'Experiência com VHDL/FPGA para sistemas digitais',
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-sm text-dark-600 dark:text-dark-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-primary-500 mt-1">→</span>
                    <span>{fact}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Content = href ? 'a' : 'div';
  return (
    <Content
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="card p-4 flex items-center gap-3 group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-xs text-dark-500 dark:text-dark-400">{label}</p>
        <p className="font-medium text-dark-900 dark:text-dark-50">{value}</p>
      </div>
    </Content>
  );
}

function StatHighlight({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
  };

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-dark-900 dark:text-dark-50">{value}</p>
        <p className="text-xs text-dark-500 dark:text-dark-400">{label}</p>
      </div>
    </div>
  );
}