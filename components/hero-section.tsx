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
    bgColor: "#6B7F6E",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "New Spring Collection",
    subtitle: "Fresh Arrivals",
    description: "Discover our latest range of pet accessories and seasonal treats for your furry friends.",
    cta: "View Collection",
    ctaLink: "/new-arrivals",
    bgColor: "#6B7F6E",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Trade Accounts",
    subtitle: "Exclusive Benefits",
    description: "Register for a trade account and enjoy exclusive discounts, priority delivery and dedicated support.",
    cta: "Register Now",
    ctaLink: "/trade-account",
    bgColor: "#4A5A4D",
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
        {/* Botanical decorations */}
        <img
          src="/olive-branch-lefthandside.png"
          alt=""
          className="absolute left-0 bottom-0 h-[70%] w-auto object-contain z-20 pointer-events-none select-none -translate-x-1/4"
        />
        <img
          src="/grain-seeds-right.png"
          alt=""
          className="absolute right-0 top-[10%] h-[60%] w-auto object-contain z-20 pointer-events-none select-none translate-x-1/4"
        />
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0" style={{ backgroundColor: slide.bgColor }} />
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                <div className="text-white max-w-xl">
                  <p className="text-xs md:text-sm font-medium mb-4 text-[#E8E4D9]/80 tracking-[0.2em] uppercase">{slide.subtitle}</p>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 text-balance leading-[1.1] tracking-[0.05em] uppercase" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#C8B89A" }}>{slide.title}</h2>
                  <p className="text-base md:text-lg mb-10 text-[#E8E4D9]/85 text-pretty leading-relaxed max-w-md">{slide.description}</p>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border border-[#E8E4D9]/70 text-[#E8E4D9] bg-transparent hover:bg-[#E8E4D9] hover:text-[#4A5A4D] font-medium rounded-[4px] px-10 py-3 tracking-wide transition-colors"
                  >
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                  <div className="p-4 shadow-2xl" style={{ backgroundColor: "#8A9B8D" }}>
                    <img
                      src={slide.image}
                      alt=""
                      className="w-[300px] h-[300px] object-cover block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E8E4D9]/15 hover:bg-[#E8E4D9]/30 text-[#E8E4D9] p-2 rounded-full transition-colors z-20 border border-[#E8E4D9]/25"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E8E4D9]/15 hover:bg-[#E8E4D9]/30 text-[#E8E4D9] p-2 rounded-full transition-colors z-20 border border-[#E8E4D9]/25"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all w-2.5 h-2.5 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
