"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { ChevronRight, Fish, UtensilsCrossed, Scissors, Heart, Home, Sparkles } from "lucide-react"

const subcategories = [
  { name: "Food", icon: UtensilsCrossed, count: 142, href: "/shop/cat?category=food", color: "bg-amber-100 text-amber-700" },
  { name: "Treats", icon: Fish, count: 76, href: "/shop/cat?category=treats", color: "bg-orange-100 text-orange-700" },
  { name: "Toys", icon: Sparkles, count: 98, href: "/shop/cat?category=toys", color: "bg-blue-100 text-blue-700" },
  { name: "Beds", icon: Home, count: 54, href: "/shop/cat?category=beds", color: "bg-purple-100 text-purple-700" },
  { name: "Litter", icon: Scissors, count: 67, href: "/shop/cat?category=litter", color: "bg-emerald-100 text-emerald-700" },
  { name: "Health", icon: Heart, count: 89, href: "/shop/cat?category=health", color: "bg-red-100 text-red-700" },
]

const brands = [
  { name: "Whiskas", logo: "WK" },
  { name: "Felix", logo: "FX" },
  { name: "Royal Canin", logo: "RC" },
  { name: "Purina", logo: "PR" },
  { name: "Sheba", logo: "SH" },
  { name: "Applaws", logo: "AP" },
]

export default function CatPage() {
  const catProducts = products.filter((p) => p.species === "cat").slice(0, 8)
  const featuredProducts = catProducts.filter((p) => p.badge === "Best Seller" || p.badge === "New").slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1600&auto=format&fit=crop&q=80"
            alt="Cat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Cat</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cat Products</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Quality products for your feline friends - premium food, cozy beds, entertaining toys, and more.
              </p>
              <div className="flex gap-4">
                <Link href="/shop/cat">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Shop All Cat Products
                  </Button>
                </Link>
                <Link href="/shop/cat?category=food">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Cat Food
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {subcategories.map((cat) => (
                <Link key={cat.name} href={cat.href}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`w-14 h-14 rounded-full ${cat.color} flex items-center justify-center mb-4`}>
                        <cat.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-semibold mb-1">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground">{cat.count} products</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Cat Products</h2>
              <Link href="/shop/cat" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {(featuredProducts.length > 0 ? featuredProducts : catProducts.slice(0, 4)).map((product) => (
                <ProductCard key={product.id} product={product} />
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
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80"
                  alt="Kitten"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5d5d]/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Kitten Essentials</h3>
                    <p className="text-white/80 mb-4">Start them off right</p>
                    <Button size="sm" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                      Shop Kitten
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&auto=format&fit=crop&q=80"
                  alt="Cat bed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Cozy Cat Beds</h3>
                    <p className="text-white/80 mb-4">Comfort for your feline</p>
                    <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90">
                      Shop Beds
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Brands */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Cat Brands</h2>
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

        {/* All Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">All Cat Products</h2>
              <Link href="/shop/cat" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/cat">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Browse All Cat Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
