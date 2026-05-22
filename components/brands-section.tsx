"use client"

import Link from "next/link"
import Image from "next/image"

const brands = [
  { name: "Royal Canin", logo: "/logos/Royal Canin.png", slug: "royal-canin" },
  { name: "Pedigree", logo: "/logos/Pedigree.png", slug: "pedigree" },
  { name: "Whiskas", logo: "/logos/Whiskas.png", slug: "whiskas" },
  { name: "Felix", logo: "/logos/Felix.png", slug: "felix" },
  { name: "Iams", logo: "/logos/Iams.png", slug: "iams" },
  { name: "Hills Science Diet", logo: "/logos/Hills Science Diet.png", slug: "hills-science-plan" },
  { name: "Purina Pro Plan", logo: "/logos/Purina Pro Plan.png", slug: "purina-pro-plan" },
  { name: "Eukanuba", logo: "/logos/Eukanuba.png", slug: "eukanuba" },
  { name: "Applaws", logo: "/logos/Applaws.png", slug: "applaws" },
  { name: "James Wellbeloved", logo: "/logos/James Wellbeloved.png", slug: "james-wellbeloved" },
  { name: "Lily's Kitchen", logo: "/logos/Lily's Kitchen.png", slug: "lilys-kitchen" },
  { name: "Canagan", logo: "/logos/Canagan.png", slug: "canagan" },
  { name: "Burgess", logo: "/logos/Burgess.png", slug: "burgess" },
  { name: "Vitakraft", logo: "/logos/Vitakraft.png", slug: "vitakraft" },
  { name: "Trixie", logo: "/logos/Trixie.png", slug: "trixie" },
  { name: "Kong", logo: "/logos/Kong.png", slug: "kong" },
  { name: "Nylabone", logo: "/logos/Nylabone.png", slug: "nylabone" },
  { name: "Ancol", logo: "/logos/Ancol.png", slug: "ancol" },
  { name: "Beaphar", logo: "/logos/Beaphar.png", slug: "beaphar" },
  { name: "Frontline", logo: "/logos/Frontline.png", slug: "frontline" },
  { name: "Harringtons", logo: "/logos/Harringtons.png", slug: "harringtons" },
  { name: "Wagg", logo: "/logos/Wagg.png", slug: "wagg" },
  { name: "Drontal", logo: "/logos/Drontal.png", slug: "drontal" },
]

function BrandCard({ brand }: { brand: (typeof brands)[number] }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group flex flex-col items-center justify-center flex-shrink-0 w-32 h-24 bg-white rounded-xl px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.40_0.12_170)]"
      style={{
        boxShadow: "0 1px 3px oklch(0.25 0.10 170 / 0.08), 0 1px 2px oklch(0.25 0.10 170 / 0.06)",
        transition: "box-shadow 200ms cubic-bezier(0.25, 1, 0.5, 1), transform 200ms cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = "0 4px 12px oklch(0.25 0.10 170 / 0.12), 0 2px 4px oklch(0.25 0.10 170 / 0.08)"
        el.style.transform = "translateY(-3px)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = "0 1px 3px oklch(0.25 0.10 170 / 0.08), 0 1px 2px oklch(0.25 0.10 170 / 0.06)"
        el.style.transform = "translateY(0)"
      }}
    >
      <div className="relative w-full h-12 flex items-center justify-center">
        <Image
          src={brand.logo}
          alt={brand.name}
          fill
          className="object-contain transition-transform duration-500 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="128px"
        />
      </div>
      <span className="text-xs text-muted-foreground mt-2 text-center leading-tight line-clamp-1">{brand.name}</span>
    </Link>
  )
}

export function BrandsSection() {
  const doubled = [...brands, ...brands]

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#f7e7d4" }}>
      <style>{`
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .brands-track {
          animation: brands-scroll 40s linear infinite;
        }
        .brands-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Shop By Brand</h2>
        <p className="text-muted-foreground">We stock all the leading pet brands</p>
      </div>

      {/* Screen-reader list */}
      <nav aria-label="Brand links" className="sr-only">
        <ul>
          {brands.map((brand) => (
            <li key={brand.slug}>
              <Link href={`/brands/${brand.slug}`}>{brand.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        aria-hidden="true"
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="brands-track flex gap-6 px-4" style={{ width: "max-content" }}>
          {doubled.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/brands" className="text-[#1a5d5d] hover:underline font-medium">
          View All Brands
        </Link>
      </div>
    </section>
  )
}
