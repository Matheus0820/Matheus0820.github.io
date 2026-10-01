import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Globe, MapPin, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/portfolio';

export function Contact() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-transparent dark:from-primary-900/10" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 inline mr-1" />
            Entre em Contato
          </span>
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div className="card gradient-border" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <ContactItem
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                  description="Respondo em até 24h"
                />
                <ContactItem
                  icon={<Github className="w-5 h-5" />}
                  label="GitHub"
                  value="@Matheus0820"
                  href={personalInfo.github}
                  description="Projetos e contribuições"
                />
                <ContactItem
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  value="matheus-ramos"
                  href={personalInfo.linkedin}
                  description="Networking profissional"
                />
                <ContactItem
                  icon={<Globe className="w-5 h-5" />}
                  label="Opten Solutions"
                  value="optensolutions.vercel.app"
                  href="https://optensolutions.vercel.app/"
                  description="Minha startup"
                />
                <ContactItem
                  icon={<MapPin className="w-5 h-5" />}
                  label="Localização"
                  value={personalInfo.location}
                  description="Disponível para remoto/híbrido"
                />
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div className="card" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }}>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Disponibilidade
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Tipo de trabalho', value: 'Remoto / Híbrido / Presencial (Natal-RN)' },
                  { label: 'Disponibilidade', value: 'Imediata' },
                  { label: 'Interesses', value: 'Full-stack, ML/IoT, Startups, Pesquisa' },
                  { label: 'Contratação', value: 'CLT, PJ, Estágio, Freelance' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-dark-900 dark:text-dark-50">{item.label}</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="card p-8"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
            >
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Envie uma mensagem
              </h3>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800 dark:text-emerald-200">Mensagem enviada!</p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">Entrarei em contato em breve.</p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Nome"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    disabled={status === 'submitting'}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <FormField
                  label="Assunto"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que gostaria de falar?"
                  required
                  disabled={status === 'submitting'}
                />

                <FormField
                  label="Mensagem"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte mais detalhes..."
                  required
                  rows={5}
                  disabled={status === 'submitting'}
                />

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactItem({ icon, label, value, href, description }: { icon: React.ReactNode; label: string; value: string; href?: string; description: string }) {
  const Content = href ? 'a' : 'div';
  return (
    <Content
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-4 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700 group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-dark-500 dark:text-dark-400">{label}</p>
        <p className="font-medium text-dark-900 dark:text-dark-50 truncate">{value}</p>
        <p className="text-xs text-dark-400 dark:text-dark-500">{description}</p>
      </div>
      {href && (
        <ExternalLink className="w-5 h-5 text-dark-400 dark:text-dark-500 group-hover:text-primary-500 transition-colors" />
      )}
    </Content>
  );
}

function FormField({ label, name, type, value, onChange, placeholder, required, disabled, rows }: { label: string; name: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void; placeholder: string; required: boolean; disabled: boolean; rows?: number }) {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
        {label} {required && <span className="text-primary-500">*</span>}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type === 'textarea' ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-dark-50 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      />
    </div>
  );
}