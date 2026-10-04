import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/portfolio';

export function Testimonials() {
  return (
    <section id="depoimentos" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Depoimentos</h2>

        <div className="min-w-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-primary-500/50 mb-4" aria-hidden="true" />

                <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-dark-200 pt-4 dark:border-dark-800">
                  <p className="font-semibold text-dark-900 dark:text-dark-50">{testimonial.name}</p>
                  <p className="font-sans text-sm text-dark-500 dark:text-dark-400">
                    {testimonial.role} — {testimonial.organization}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}