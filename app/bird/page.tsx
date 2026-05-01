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
  { name: "Food & Seed", count: 98, href: "/shop/bird?category=food" },
  { name: "Cages", count: 45, href: "/shop/bird?category=cages" },
  { name: "Toys", count: 67, href: "/shop/bird?category=toys" },
  { name: "Accessories", count: 54, href: "/shop/bird?category=accessories" },
  { name: "Health", count: 32, href: "/shop/bird?category=health" },
  { name: "Baths & Care", count: 28, href: "/shop/bird?category=care" },
]

const birdTypes = [
  { name: "Budgies", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&auto=format&fit=crop&q=80" },
  { name: "Canaries", image: "https://images.unsplash.com/photo-1591198936750-16d8e15edc9f?w=400&auto=format&fit=crop&q=80" },
  { name: "Parrots", image: "https://images.unsplash.com/photo-1544923246-77307dd628b5?w=400&auto=format&fit=crop&q=80" },
  { name: "Finches", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&auto=format&fit=crop&q=80" },
]

const brands = [
  { name: "Hagen", logo: "HG" },
  { name: "Versele-Laga", logo: "VL" },
  { name: "Trill", logo: "TR" },
  { name: "Vitakraft", logo: "VK" },
  { name: "Kaytee", logo: "KT" },
  { name: "Beaphar", logo: "BP" },
]

export default function BirdPage() {
  const birdProducts = products.filter((p) => p.species === "bird").slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1600&auto=format&fit=crop&q=80"
            alt="Colorful bird"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Bird</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bird Products</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Seeds, cages, toys, and accessories for all types of birds - from budgies to parrots.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/shop/bird">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Shop All Bird Products
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

        {/* Shop by Bird Type */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Shop by Bird Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {birdTypes.map((bird) => (
                <Link key={bird.name} href={`/shop/bird?type=${bird.name.toLowerCase()}`}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden group">
                    <div className="aspect-square relative">
                      <img
                        src={bird.image}
                        alt={bird.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{bird.name}</h3>
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
              <h2 className="text-2xl font-bold">Popular Bird Products</h2>
              <Link href="/shop/bird" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {birdProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/bird">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Browse All Bird Products
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
