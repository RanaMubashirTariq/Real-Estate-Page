'use client'
import React, { useEffect, useRef } from 'react'
import type { JSX as ReactJSX } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  once?: boolean
  rootMargin?: string
  threshold?: number
  as?: keyof ReactJSX.IntrinsicElements
}

export default function Reveal({
  children,
  className = '',
  once = true,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.15,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible')
            if (once) observer.unobserve(element)
          } else if (!once) {
            element.classList.remove('is-visible')
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  const Component = as as any
  return (
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  )
}


