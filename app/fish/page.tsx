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
  { name: "Food", count: 112, href: "/shop/fish?category=food" },
  { name: "Tanks", count: 67, href: "/shop/fish?category=tanks" },
  { name: "Filtration", count: 54, href: "/shop/fish?category=filtration" },
  { name: "Heating", count: 38, href: "/shop/fish?category=heating" },
  { name: "Health", count: 45, href: "/shop/fish?category=health" },
  { name: "Decor", count: 89, href: "/shop/fish?category=decor" },
]

const fishTypes = [
  { name: "Tropical", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=80" },
  { name: "Coldwater", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&auto=format&fit=crop&q=80" },
  { name: "Marine", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&auto=format&fit=crop&q=80" },
  { name: "Pond", image: "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=400&auto=format&fit=crop&q=80" },
]

const brands = [
  { name: "Tetra", logo: "TT" },
  { name: "Fluval", logo: "FL" },
  { name: "API", logo: "AP" },
  { name: "Interpet", logo: "IP" },
  { name: "Seachem", logo: "SC" },
  { name: "JBL", logo: "JB" },
]

export default function FishPage() {
  const fishProducts = products.filter((p) => p.species === "fish" || p.species === "reptile").slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&auto=format&fit=crop&q=80"
            alt="Tropical fish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Fish &amp; Aquatics</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fish &amp; Aquatics</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Aquarium supplies, food, and accessories for freshwater and marine fish - everything for the perfect tank.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/shop/fish">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Shop All Fish Products
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {subcategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="px-4 py-2 min-h-[44px] flex items-center rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors"
                  >
                    {cat.name} <span className="text-white/70 text-xs ml-1">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shop by Fish Type */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Shop by Fish Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fishTypes.map((fish) => (
                <Link key={fish.name} href={`/shop/fish?type=${fish.name.toLowerCase()}`}>
                  <Card className="hover:shadow-lg transition-[transform,box-shadow] duration-200 hover:-translate-y-1 cursor-pointer overflow-hidden group">
                    <div className="aspect-square relative">
                      <img
                        src={fish.image}
                        alt={fish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{fish.name}</h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banners */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1520302519878-3836d6eeadb2?w=800&auto=format&fit=crop&q=80"
                  alt="Aquarium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starter Kits</h3>
                    <p className="text-white/80 mb-4">Everything to get started</p>
                    <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90">
                      Shop Kits
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800&auto=format&fit=crop&q=80"
                  alt="Fish food"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5d5d]/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Fish Food</h3>
                    <p className="text-white/80 mb-4">Nutrition for healthy fish</p>
                    <Button size="sm" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                      Shop Food
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Popular Fish Products</h2>
              <Link href="/shop/fish" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {fishProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/fish">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Browse All Fish Products
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
