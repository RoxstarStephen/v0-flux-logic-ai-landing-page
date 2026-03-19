'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6 w-fit"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                AI-Powered Audit Platform
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
            >
              Discover Hidden Growth{' '}
              <span className="text-accent">Opportunities</span> in Your
              Marketing
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-balance"
            >
              Our AI analyzes your campaigns, identifies blind spots, and delivers
              actionable insights to boost your ROI. Get a free personalized audit
              in seconds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection('lead-form')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
              >
                Get My Free Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('features')}
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                Learn How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="font-bold text-accent text-lg">10K+</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Audits Completed</p>
                  <p className="text-muted-foreground">This month</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="font-bold text-accent text-lg">4.9★</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Rated by Users</p>
                  <p className="text-muted-foreground">Based on 1.2K reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-[500px] hidden lg:block"
          >
            {/* Dashboard Mockup */}
            <div className="absolute inset-0 glass rounded-2xl border-2 border-accent/20 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-secondary/20 p-6 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="h-2 w-1/3 bg-accent/30 rounded" />
                  <div className="h-2 w-1/2 bg-border/50 rounded" />
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="h-20 bg-accent/10 rounded" />
                    <div className="h-20 bg-accent/10 rounded" />
                  </div>
                  <div className="h-20 bg-secondary/50 rounded mt-4" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 -left-10 glass rounded-lg px-4 py-3 border border-accent/30 backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-accent">
                ✓ Boost ROI by 40%
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
