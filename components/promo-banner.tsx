import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PawPrint } from "lucide-react"

const banners = [
  {
    subtitle: "Dog's Essentials",
    heading: "EXPLORE DOG COLLECTION",
    href: "/dog",
    label: "Browse Dogs",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80",
    alt: "Golden retriever dog running outdoors",
  },
  {
    subtitle: "Cats & Kittens",
    heading: "EXPLORE CAT COLLECTION",
    href: "/cat",
    label: "Browse Cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    alt: "Cat with striking blue eyes",
  },
]

export function PromoBanner() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-visible">
      <img
        src="/olive-branch-lefthandside.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden md:block"
        style={{ top: -40, left: -30, width: 280, zIndex: 20 }}
      />
      <img
        src="/olive-branch-righthandside.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden md:block"
        style={{ top: -40, right: -30, width: 280, zIndex: 20 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {banners.map((b) => (
            <div
              key={b.heading}
              className="relative overflow-hidden rounded-2xl flex items-center min-h-[260px]"
              style={{
                backgroundColor: "#ffffff",
                border: "1.5px solid #b8b49a",
                outline: "1px solid #d4cfbe",
                outlineOffset: "-6px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              }}
            >
              <div className="relative z-10 p-8 flex-1 flex flex-col justify-center">
                <p className="text-sm mb-2" style={{ color: "#8a8a7a" }}>{b.subtitle}</p>
                <h3
                  className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                  style={{ color: "#6b7355" }}
                >
                  {b.heading}
                </h3>
                <div className="mb-6">
                  <Button
                    asChild
                    size="sm"
                    style={{ backgroundColor: "#6b7355", color: "#fff", border: "none", borderRadius: "6px" }}
                  >
                    <Link href={b.href}>{b.label}</Link>
                  </Button>
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white" style={{ border: "1.5px solid #c0bba8" }}>
                    <PawPrint className="w-5 h-5" style={{ color: "#6b7355" }} aria-hidden="true" />
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white" style={{ border: "1.5px solid #c0bba8" }}>
                    <PawPrint className="w-5 h-5" style={{ color: "#8a9a6a" }} aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
