import Link from "next/link"
import { Bone, Fish, Scissors, Heart, Home, Utensils } from "lucide-react"

const categories = [
  {
    name: "Food & Treats",
    description: "Premium nutrition for every pet",
    icon: Utensils,
    href: "/category/food-treats",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Toys & Play",
    description: "Keep them entertained",
    icon: Bone,
    href: "/category/toys",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Beds & Housing",
    description: "Comfort and rest",
    icon: Home,
    href: "/category/beds-housing",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Grooming",
    description: "Keep them looking their best",
    icon: Scissors,
    href: "/category/grooming",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Health & Wellness",
    description: "Supplements and care",
    icon: Heart,
    href: "/category/health",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Aquatics",
    description: "Fish tanks and accessories",
    icon: Fish,
    href: "/category/aquatics",
    color: "bg-cyan-100 text-cyan-600",
  },
]

export function PopularCategories() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Popular Categories</h2>
          <p className="text-muted-foreground">Browse our most popular product categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-center text-foreground">{category.name}</h3>
              <p className="text-xs text-muted-foreground text-center mt-1">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
