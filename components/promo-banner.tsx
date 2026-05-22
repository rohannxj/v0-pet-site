import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const banners = [
  {
    subtitle: "Dog's Fitting",
    heading: "EXPLORE DOG\nCOLLECTION",
    href: "/dog",
    label: "Shop Dog",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&auto=format&fit=crop&q=80",
    alt: "Beagle dog portrait",
    cardBg: "#f8f6f2",
    imageBg: "#e3d9c0",
  },
  {
    subtitle: "Dog & Paul",
    heading: "EXPLORE CAT\nCOLLECTION",
    href: "/cat",
    label: "Shop Cat",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&auto=format&fit=crop&q=80",
    alt: "Tabby cat portrait",
    cardBg: "#f0efed",
    imageBg: null,
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
              className="rounded-2xl flex items-stretch overflow-hidden min-h-[240px]"
              style={{
                backgroundColor: b.cardBg,
                border: "1.5px solid #b8b49a",
                outline: "1px solid #d4cfbe",
                outlineOffset: "-6px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              }}
            >
              {/* Text column */}
              <div className="flex flex-col justify-center p-8 flex-1">
                <p className="text-sm mb-2" style={{ color: "#8a8a7a" }}>{b.subtitle}</p>
                <h3
                  className="text-3xl md:text-4xl font-bold mb-5 leading-tight whitespace-pre-line"
                  style={{ color: "#6b7355" }}
                >
                  {b.heading}
                </h3>
                <Button
                  asChild
                  size="sm"
                  style={{ backgroundColor: "#6b7355", color: "#fff", border: "none", borderRadius: "6px", alignSelf: "flex-start" }}
                >
                  <Link href={b.href}>{b.label}</Link>
                </Button>
              </div>

              {/* Image column */}
              <div className="relative flex items-center justify-center" style={{ width: "42%" }}>
                {b.imageBg ? (
                  <div
                    className="relative rounded-xl overflow-hidden"
                    style={{
                      width: "85%",
                      aspectRatio: "1 / 1",
                      backgroundColor: b.imageBg,
                    }}
                  >
                    <Image
                      src={b.image}
                      alt={b.alt}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <Image
                      src={b.image}
                      alt={b.alt}
                      fill
                      className="object-cover object-center"
                      sizes="200px"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
