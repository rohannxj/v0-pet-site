"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const slides = [
  { src: "/image-slider/wagg-deal.png", alt: "Wagg deal promotion" },
  { src: "/image-slider/vitakraft-deal.png", alt: "Vitakraft deal promotion" },
  { src: "/image-slider/felix-deal.png", alt: "Felix deal promotion" },
]

export function DealBanner() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [fading, setFading] = useState(false)
  const prefersReduced = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  useEffect(() => {
    if (paused || prefersReduced.current) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [paused])

  return (
    <section
      className="py-8 md:py-12"
      aria-roledescription="carousel"
      aria-label="Current deals"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {slides[current].alt} — {current + 1} of {slides.length}
      </div>
      <div className="container mx-auto px-4">
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: "3/1", minHeight: "120px" }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.alt}`}
              aria-hidden={i !== current}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? (fading ? 0 : 1) : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          ))}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setPaused(true) }}
                className="p-2 -m-1"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
              >
                <span
                  className={`block w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-white" : "bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
