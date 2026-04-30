"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Premium Pet Products",
    subtitle: "Wholesale & Distribution",
    description: "Quality products for dogs, cats, small animals and more at competitive wholesale prices.",
    cta: "Shop Now",
    ctaLink: "/shop",
    bgColor: "from-[#1a5d5d] to-[#2a7a7a]",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "New Spring Collection",
    subtitle: "Fresh Arrivals",
    description: "Discover our latest range of pet accessories and seasonal treats for your furry friends.",
    cta: "View Collection",
    ctaLink: "/new-arrivals",
    bgColor: "from-[#2d6b4f] to-[#40916c]",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Trade Accounts",
    subtitle: "Exclusive Benefits",
    description: "Register for a trade account and enjoy exclusive discounts, priority delivery and dedicated support.",
    cta: "Register Now",
    ctaLink: "/trade-account",
    bgColor: "from-[#1a5d5d] to-[#0d3030]",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop&q=80",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                <div className="text-white max-w-xl">
                  <p className="text-sm md:text-base font-medium mb-2 text-white/80">{slide.subtitle}</p>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">{slide.title}</h2>
                  <p className="text-base md:text-lg mb-6 text-white/90 text-pretty">{slide.description}</p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#1a5d5d] hover:bg-white/90 font-semibold"
                  >
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover h-[350px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
