'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollInView } from '@/hooks/use-scroll-in-view'

interface ScrollFadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const directionVariants = {
  up: { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  down: { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  left: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  right: { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
}

export function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: ScrollFadeInProps) {
  const { ref, isInView } = useScrollInView({ threshold: 0.2 })
  const variants = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
