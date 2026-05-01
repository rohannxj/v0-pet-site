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

export function BrandsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Shop By Brand</h2>
        <p className="text-muted-foreground">We stock all the leading pet brands</p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, i) => (
            <Link
              key={i}
              href={`/brands/${brand.slug}`}
              className="group flex flex-col items-center justify-center w-32 h-24 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                  sizes="128px"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 text-center leading-tight line-clamp-1">{brand.name}</span>
            </Link>
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
