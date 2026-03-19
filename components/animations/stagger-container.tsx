'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollInView } from '@/hooks/use-scroll-in-view'

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
  className?: string
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.2,
  className,
}: StaggerContainerProps) {
  const { ref, isInView } = useScrollInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  )
}
