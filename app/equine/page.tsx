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
  { name: "Feed", count: 134, href: "/shop/equine?category=food" },
  { name: "Supplements", count: 89, href: "/shop/equine?category=supplements" },
  { name: "Grooming", count: 76, href: "/shop/equine?category=grooming" },
  { name: "Stable", count: 54, href: "/shop/equine?category=stable" },
  { name: "Health", count: 67, href: "/shop/equine?category=health" },
  { name: "Tack", count: 98, href: "/shop/equine?category=tack" },
]

const brands = [
  { name: "Spillers", logo: "SP" },
  { name: "Dodson & Horrell", logo: "DH" },
  { name: "NAF", logo: "NF" },
  { name: "Baileys", logo: "BY" },
  { name: "TopSpec", logo: "TS" },
  { name: "Saracen", logo: "SR" },
]

export default function EquinePage() {
  const equineProducts = products.filter((p) => p.species === "equine").slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&auto=format&fit=crop&q=80"
            alt="Horse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Equine</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Equine Products</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Premium supplies for horses - grooming, feed, supplements, tack, and accessories from leading brands.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/shop/equine">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Shop All Equine Products
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

        {/* Promo Banners */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800&auto=format&fit=crop&q=80"
                  alt="Horse grooming"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5d5d]/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Grooming Essentials</h3>
                    <p className="text-white/80 mb-4">Keep your horse looking their best</p>
                    <Button size="sm" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                      Shop Grooming
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&auto=format&fit=crop&q=80"
                  alt="Horse supplements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Supplements</h3>
                    <p className="text-white/80 mb-4">Support health and performance</p>
                    <Button size="sm" className="bg-white text-amber-600 hover:bg-white/90">
                      Shop Supplements
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Popular Equine Products</h2>
              <Link href="/shop/equine" className="text-[#1a5d5d] hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {equineProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/equine">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Browse All Equine Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Brands */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Equine Brands</h2>
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

        {/* Trade Account CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-[#1a5d5d] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Wholesale Prices for Trade Customers</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-6">
                Register for a trade account to access exclusive wholesale pricing on our full range of equine products.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/trade-account">
                  <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                    Apply for Trade Account
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
