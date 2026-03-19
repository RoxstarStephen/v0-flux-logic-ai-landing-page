'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollInViewOptions {
  threshold?: number
  once?: boolean
  margin?: string
}

export function useScrollInView(options: UseScrollInViewOptions = {}) {
  const { threshold = 0.1, once = true, margin = '0px' } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once, margin])

  return { ref, isInView }
}
