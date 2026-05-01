"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  { src: "/image-slider/wagg-deal.png", alt: "Wagg Deal" },
  { src: "/image-slider/vitakraft-deal.png", alt: "Vitakraft Deal" },
  { src: "/image-slider/felix-deal.png", alt: "Felix Deal" },
]

export function DealBanner() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "3/1" }}>
          {slides.map((slide, i) => (
            <div
              key={slide.src}
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

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
