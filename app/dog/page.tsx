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
  { name: "Food", count: 156, href: "/shop/dog?category=food" },
  { name: "Treats", count: 89, href: "/shop/dog?category=treats" },
  { name: "Toys", count: 124, href: "/shop/dog?category=toys" },
  { name: "Beds", count: 67, href: "/shop/dog?category=beds" },
  { name: "Grooming", count: 98, href: "/shop/dog?category=grooming" },
  { name: "Health", count: 112, href: "/shop/dog?category=health" },
]

const brands = [
  { name: "Royal Canin", logo: "RC" },
  { name: "Pedigree", logo: "PD" },
  { name: "Harringtons", logo: "HR" },
  { name: "James Wellbeloved", logo: "JW" },
  { name: "Lily's Kitchen", logo: "LK" },
  { name: "Burns", logo: "BN" },
]

export default function DogPage() {
  const dogProducts = products.filter((p) => p.species === "dog").slice(0, 8)
  const featuredProducts = dogProducts.filter((p) => p.badge === "Best Seller" || p.badge === "New").slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&auto=format&fit=crop&q=80"
            alt="Happy dog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Dog</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dog Products</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Everything your canine companion needs - from premium nutrition to toys, beds, and grooming essentials.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/shop/dog">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Shop All Dog Products
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

        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Dog Products</h2>
              <Link href="/shop/dog" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {(featuredProducts.length > 0 ? featuredProducts : dogProducts.slice(0, 4)).map((product) => (
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
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80"
                  alt="Puppy food"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5d5d]/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Puppy Essentials</h3>
                    <p className="text-white/80 mb-4">Everything for your new arrival</p>
                    <Button size="sm" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                      Shop Puppy
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80"
                  alt="Dog treats"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Training Treats</h3>
                    <p className="text-white/80 mb-4">Reward good behavior</p>
                    <Button size="sm" className="bg-white text-amber-600 hover:bg-white/90">
                      Shop Treats
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
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Dog Brands</h2>
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
              <h2 className="text-2xl font-bold">All Dog Products</h2>
              <Link href="/shop/dog" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {dogProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/dog">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Browse All Dog Products
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
