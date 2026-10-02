import { useState } from 'react';
import { Mail, Github, BookOpen, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Sem servidor: o formulário monta a mensagem e abre o aplicativo de e-mail do visitante.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    const params = new URLSearchParams({ subject: form.subject, body });
    window.location.href = `mailto:${personalInfo.email}?${params.toString().replace(/\+/g, '%20')}`;
  };

  const channels = [
    { label: 'E-mail', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    { label: 'GitHub', value: '@Matheus0820', href: personalInfo.github, icon: Github },
    { label: 'Currículo Lattes', value: 'Matheus Ramos', href: personalInfo.lattes, icon: BookOpen },
  ];

  return (
    <section id="contato" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Contato</h2>

        <div className="grid min-w-0 gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-md">
              Para oportunidades, colaborações ou conversas sobre tecnologia e pesquisa, escreva por e-mail ou use o formulário.
            </p>

            <ul className="mt-8 space-y-5">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-sans text-sm text-dark-500 dark:text-dark-400">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-link break-words"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <div>
                  <p className="font-sans text-sm text-dark-500 dark:text-dark-400">Localização</p>
                  <p>{personalInfo.location}</p>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
              <Field label="E-mail" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
            </div>
            <Field label="Assunto" name="subject" value={form.subject} onChange={handleChange} />
            <Field label="Mensagem" name="message" value={form.message} onChange={handleChange} rows={5} />

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send className="h-4 w-4" aria-hidden="true" />
              Abrir no meu e-mail
            </button>
            <p className="font-sans text-sm text-dark-500 dark:text-dark-400">
              O formulário abre o seu aplicativo de e-mail com a mensagem pronta para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  rows?: number;
  autoComplete?: string;
}

function Field({ label, name, value, onChange, type = 'text', rows, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-sans text-sm font-medium text-dark-800 dark:text-dark-200">
        {label}
      </label>
      {rows ? (
        <textarea id={name} name={name} value={value} onChange={onChange} rows={rows} required className="field resize-y" />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} required autoComplete={autoComplete} className="field" />
      )}
    </div>
  );
}
