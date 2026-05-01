import Link from "next/link"

const categories = [
  { name: "Food", count: 156, href: "/search?q=food" },
  { name: "Treats", count: 89, href: "/search?q=treats" },
  { name: "Toys", count: 124, href: "/search?q=toys" },
  { name: "Beds", count: 67, href: "/search?q=beds" },
  { name: "Grooming", count: 98, href: "/search?q=grooming" },
  { name: "Health", count: 143, href: "/search?q=health" },
]

export function ShopBySpecies() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Browse our most popular product categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center justify-center px-4 py-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="font-semibold text-foreground text-lg">{item.name}</span>
              <span className="text-sm text-muted-foreground mt-1">{item.count} products</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
