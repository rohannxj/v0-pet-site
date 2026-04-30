import Link from "next/link"

const species = [
  {
    name: "Dog",
    href: "/dog",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&auto=format&fit=crop&q=80",
    productCount: "",
  },
  {
    name: "Cat",
    href: "/cat",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80",
    productCount: "",
  },
  {
    name: "Small Animal",
    href: "/small-animal",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&auto=format&fit=crop&q=80",
    productCount: "",
  },
  {
    name: "Bird",
    href: "/bird",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&auto=format&fit=crop&q=80",
    productCount: "",
  },
  {
    name: "Fish & Reptile",
    href: "/fish-reptile",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&auto=format&fit=crop&q=80",
    productCount: "",
  },
  {
    name: "Equine",
    href: "/equine",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&auto=format&fit=crop&q=80",
    productCount: "",
  },
]

export function ShopBySpecies() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Shop By Species</h2>
          <p className="text-muted-foreground">Find everything you need for your furry, feathered or scaly friends</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {species.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative overflow-hidden rounded-xl bg-muted aspect-square flex flex-col items-center justify-end p-4 transition-transform hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 text-center text-white">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-white/80">{item.productCount} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
