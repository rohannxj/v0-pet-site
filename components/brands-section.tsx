import Link from "next/link"

const brands = [
  { name: "Royal Canin", logo: "RC" },
  { name: "Pedigree", logo: "PD" },
  { name: "Whiskas", logo: "WK" },
  { name: "Felix", logo: "FX" },
  { name: "Iams", logo: "IM" },
  { name: "Hill&apos;s", logo: "HL" },
  { name: "Purina", logo: "PR" },
  { name: "Eukanuba", logo: "EK" },
]

export function BrandsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Shop By Brand</h2>
          <p className="text-muted-foreground">We stock all the leading pet brands</p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/brand/${brand.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className="group flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow aspect-square"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a5d5d] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground mt-2 text-center">{brand.name}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/brands"
            className="text-[#1a5d5d] hover:underline font-medium"
          >
            View All Brands
          </Link>
        </div>
      </div>
    </section>
  )
}
