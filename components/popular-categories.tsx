import Link from "next/link"

const categories = [
  { name: "Food & Treats", href: "/search?q=food" },
  { name: "Toys & Play", href: "/search?q=toys" },
  { name: "Beds & Housing", href: "/search?q=beds" },
  { name: "Grooming", href: "/search?q=grooming" },
  { name: "Health & Wellness", href: "/search?q=health" },
  { name: "Aquatics", href: "/search?q=aquatics" },
]

export function PopularCategories() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Popular Categories</h2>
          <p className="text-muted-foreground">Browse our most popular product categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex items-center justify-center px-4 py-5 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <h3 className="font-semibold text-center text-foreground">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
