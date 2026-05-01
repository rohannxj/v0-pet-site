"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { ChevronRight } from "lucide-react"

const subcategories = [
  { name: "Food", count: 87, href: "/shop/small-animal?category=food" },
  { name: "Bedding", count: 54, href: "/shop/small-animal?category=bedding" },
  { name: "Cages", count: 42, href: "/shop/small-animal?category=cages" },
  { name: "Toys", count: 68, href: "/shop/small-animal?category=toys" },
  { name: "Health", count: 45, href: "/shop/small-animal?category=health" },
  { name: "Accessories", count: 36, href: "/shop/small-animal?category=accessories" },
]

const petTypes = [
  { name: "Rabbits", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&auto=format&fit=crop&q=80" },
  { name: "Guinea Pigs", image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&auto=format&fit=crop&q=80" },
  { name: "Hamsters", image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&auto=format&fit=crop&q=80" },
  { name: "Gerbils", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&auto=format&fit=crop&q=80" },
]

const brands = [
  { name: "Burgess", logo: "BG" },
  { name: "Supreme", logo: "SP" },
  { name: "Tiny Friends Farm", logo: "TF" },
  { name: "Oxbow", logo: "OX" },
  { name: "Rosewood", logo: "RW" },
  { name: "Kaytee", logo: "KT" },
]

export default function SmallAnimalPage() {
  const smallAnimalProducts = products.filter((p) => p.species === "small-animal").slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1600&auto=format&fit=crop&q=80"
            alt="Rabbit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Small Animal</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Small Animal Products</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Everything for rabbits, guinea pigs, hamsters, and other small pets - food, bedding, cages, and more.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/shop/small-animal">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Shop All Small Animal Products
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {subcategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors"
                  >
                    {cat.name} <span className="text-white/70 text-xs ml-1">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shop by Pet Type */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Shop by Pet Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {petTypes.map((pet) => (
                <Link key={pet.name} href={`/shop/small-animal?type=${pet.name.toLowerCase()}`}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden group">
                    <div className="aspect-square relative">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{pet.name}</h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Popular Small Animal Products</h2>
              <Link href="/shop/small-animal" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {smallAnimalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/small-animal">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Browse All Small Animal Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Brands */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Brands</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {brands.map((brand) => (
                <Link key={brand.name} href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center justify-center aspect-square">
                      <div className="w-16 h-16 rounded-full bg-[#1a5d5d]/10 flex items-center justify-center mb-3">
                        <span className="text-xl font-bold text-[#1a5d5d]">{brand.logo}</span>
                      </div>
                      <span className="text-sm font-medium text-center">{brand.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
