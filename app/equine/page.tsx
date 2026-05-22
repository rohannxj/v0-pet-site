"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
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
  { name: "Spillers", href: "/brands/spillers" },
  { name: "Dodson & Horrell", href: "/brands/dodson-horrell" },
  { name: "NAF", href: "/brands/naf" },
  { name: "Baileys", href: "/brands/baileys" },
  { name: "TopSpec", href: "/brands/topspec" },
  { name: "Saracen", href: "/brands/saracen" },
]

export default function EquinePage() {
  const equineProducts = products.filter((p) => p.species === "equine").slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&auto=format&fit=crop&q=80"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-sm text-white/80">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="h-4 w-4" />
                  </li>
                  <li aria-current="page">
                    <span className="text-white">Equine</span>
                  </li>
                </ol>
              </nav>
              <h1
                className="font-bold text-white mb-4"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Equine Products
              </h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Premium feed, supplements, grooming, tack, and accessories for horses, from trusted brands.
              </p>
              <div className="mb-6">
                <Link href="/shop/equine">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Shop All Equine Products
                  </Button>
                </Link>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="Equine categories">
                {subcategories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={cat.href}
                      aria-label={`${cat.name}, ${cat.count} products`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors min-h-[44px]"
                    >
                      {cat.name}
                      <span className="text-white/70 text-xs" aria-hidden="true">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Promo Banners */}
        <section className="py-8" aria-label="Featured categories">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800&auto=format&fit=crop&q=80"
                  alt=""
                  fill
                  className="object-cover motion-safe:group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Grooming Essentials</h3>
                    <p className="text-white/90 mb-4">Keep your horse looking their best</p>
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                      Shop Grooming
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&auto=format&fit=crop&q=80"
                  alt=""
                  fill
                  className="object-cover motion-safe:group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Supplements</h3>
                    <p className="text-white/90 mb-4">Support health and performance</p>
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                      Shop Supplements
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12" aria-labelledby="products-heading">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2
                id="products-heading"
                className="font-bold"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}
              >
                Popular Equine Products
              </h2>
              <Link href="/shop/equine" className="text-primary hover:underline font-medium flex items-center gap-1 shrink-0 ml-4">
                View All <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {equineProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {equineProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-muted-foreground mb-4">No equine products available right now.</p>
                <Link href="/shop">
                  <Button variant="outline">Browse All Products</Button>
                </Link>
              </div>
            )}

            {equineProducts.length > 0 && (
              <div className="text-center mt-8">
                <Link href="/shop/equine">
                  <Button size="lg">Browse All Equine Products</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Popular Brands */}
        <section className="py-12 bg-muted/30" aria-labelledby="brands-heading">
          <div className="container mx-auto px-4">
            <h2
              id="brands-heading"
              className="font-bold mb-8 text-center"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}
            >
              Popular Equine Brands
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px border border-border rounded-lg overflow-hidden bg-border">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <Link
                    href={brand.href}
                    className="flex items-center justify-center h-16 bg-background px-4 text-sm font-semibold text-center leading-tight hover:text-primary hover:bg-muted/50 transition-colors min-h-[44px]"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Trade Account CTA */}
        <section className="py-12" aria-labelledby="trade-heading">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
              <h2
                id="trade-heading"
                className="font-bold mb-4 text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}
              >
                Wholesale Prices for Trade Customers
              </h2>
              <p className="text-white/95 max-w-2xl mx-auto mb-6">
                Open a trade account for exclusive wholesale pricing across our full equine range.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/trade-account">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
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
