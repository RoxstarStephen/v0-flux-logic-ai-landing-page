'use client'

import { motion } from 'framer-motion'
import { ScrollFadeIn } from '@/components/animations/scroll-fade-in'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechVenture',
    content:
      'AuditHub identified optimization opportunities we completely missed. We increased conversions by 47% in the first month.',
    avatar: '🟢',
  },
  {
    name: 'Michael Rivera',
    role: 'Growth Lead',
    company: 'DataFlow',
    content:
      'The insights are incredibly accurate. Our team uses the audit findings as our primary strategic roadmap.',
    avatar: '🔵',
  },
  {
    name: 'Jessica Park',
    role: 'CEO',
    company: 'CloudSync',
    content:
      'Finally, marketing decisions backed by AI. The ROI improved significantly and we saved months of testing.',
    avatar: '🟡',
  },
]

const companies = [
  { name: 'TechVenture', logo: '▲' },
  { name: 'DataFlow', logo: '⬢' },
  { name: 'CloudSync', logo: '☁' },
  { name: 'NeuralAI', logo: '⧿' },
  { name: 'Pixel Studio', logo: '■' },
  { name: 'Growth Labs', logo: '▶' },
]

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <ScrollFadeIn delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              Trusted by Industry Leaders
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Join 10,000+ Marketing Teams
            </h2>

            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-4xl md:text-5xl">{company.logo}</div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* Testimonials */}
        <ScrollFadeIn delay={0.2}>
          <div className="mt-16 md:mt-24">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              What Our Users Say
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="glass p-6 md:p-8 rounded-xl border border-accent/10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
