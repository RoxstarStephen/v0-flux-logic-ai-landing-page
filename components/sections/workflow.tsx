'use client'

import { motion } from 'framer-motion'
import { ScrollFadeIn } from '@/components/animations/scroll-fade-in'
import {
  Upload,
  Sparkles,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Upload Your Data',
    description:
      'Connect your marketing accounts or upload campaign data. Works with all major platforms.',
    icon: Upload,
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    number: '02',
    title: 'AI Analysis Begins',
    description:
      'Our advanced AI engine analyzes patterns, trends, and opportunities in your data.',
    icon: Sparkles,
    color: 'from-accent/20 to-accent/5',
  },
  {
    number: '03',
    title: 'Get Your Insights',
    description:
      'Receive detailed reports with actionable recommendations tailored to your business.',
    icon: BarChart3,
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    number: '04',
    title: 'Implement & Win',
    description:
      'Follow our roadmap to implement changes and watch your metrics improve.',
    icon: CheckCircle2,
    color: 'from-green-500/20 to-green-500/5',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your free marketing audit in minutes, not weeks.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollFadeIn key={step.number} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  {/* Connecting Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                  )}

                  {/* Card */}
                  <div className="glass rounded-xl p-6 md:p-8 border border-accent/10 h-full">
                    {/* Step Badge */}
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollFadeIn>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollFadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to get started?
            </p>
            <motion.a
              href="#lead-form"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('lead-form')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent font-semibold transition-colors"
            >
              Get Your Free Audit Now
              <span>→</span>
            </motion.a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
