'use client'

import { motion } from 'framer-motion'
import { ScrollFadeIn } from '@/components/animations/scroll-fade-in'
import {
  Zap,
  TrendingUp,
  Target,
  Wallet,
  Gauge,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    id: '1',
    title: 'Real-Time Analysis',
    description: 'Instant insights across all your marketing channels in one dashboard.',
    icon: Zap,
    span: 'md:col-span-2',
  },
  {
    id: '2',
    title: 'Competitor Insights',
    description: 'See what your competitors are doing and stay ahead of the curve.',
    icon: TrendingUp,
    span: 'md:col-span-1',
  },
  {
    id: '3',
    title: 'Campaign Optimization',
    description: 'AI-powered recommendations to maximize your campaign performance.',
    icon: Target,
    span: 'md:col-span-1',
  },
  {
    id: '4',
    title: 'Smart Budget Allocation',
    description: 'Intelligently distribute your budget where it matters most.',
    icon: Wallet,
    span: 'md:col-span-1',
  },
  {
    id: '5',
    title: 'Trend Detection',
    description: 'Identify emerging trends before your competitors do.',
    icon: TrendingUp,
    span: 'md:col-span-1',
  },
  {
    id: '6',
    title: 'Performance Metrics',
    description: 'Deep-dive analytics with predictive metrics and KPI tracking.',
    icon: Gauge,
    span: 'md:col-span-2',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function BentoGridSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              Powerful Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to give you a competitive advantage in your
              marketing.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={`glass group rounded-xl p-6 md:p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300 cursor-pointer ${
                  feature.span
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors"
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base flex-grow">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="mt-4 text-accent text-sm font-semibold"
                  >
                    Learn more →
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
