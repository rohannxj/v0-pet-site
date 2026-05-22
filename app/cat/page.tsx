"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { ChevronRight } from "lucide-react"

const subcategories = [
  { name: "Food", count: 142, href: "/shop/cat?category=food" },
  { name: "Treats", count: 76, href: "/shop/cat?category=treats" },
  { name: "Toys", count: 98, href: "/shop/cat?category=toys" },
  { name: "Beds", count: 54, href: "/shop/cat?category=beds" },
  { name: "Litter", count: 67, href: "/shop/cat?category=litter" },
  { name: "Health", count: 89, href: "/shop/cat?category=health" },
]

const brands = [
  { name: "Whiskas", slug: "whiskas" },
  { name: "Felix", slug: "felix" },
  { name: "Royal Canin", slug: "royal-canin" },
  { name: "Purina", slug: "purina" },
  { name: "Sheba", slug: "sheba" },
  { name: "Applaws", slug: "applaws" },
]

export default function CatPage() {
  const catProducts = products.filter((p) => p.species === "cat").slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1600&auto=format&fit=crop&q=80"
            alt="A tabby cat looking directly at the camera"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <span className="text-white" aria-current="page">Cat</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cat Products</h1>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Quality products for your feline friends — premium food, cosy beds, entertaining toys, and more.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/shop/cat">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Shop All Cat Products
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {subcategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors min-h-[44px] flex items-center"
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
                <Image
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80"
                  alt="A small kitten sitting on a soft surface"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Kitten Essentials</h2>
                    <p className="text-white/80 mb-4">Start them off right</p>
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                      Shop Kitten
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&auto=format&fit=crop&q=80"
                  alt="A cat resting in a cosy bed"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cosy Cat Beds</h2>
                    <p className="text-white/80 mb-4">Comfort for your feline</p>
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {brands.map((brand) => (
                <Link key={brand.name} href={`/brands/${brand.slug}`}>
                  <Card className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
                    <CardContent className="p-4 flex items-center justify-center aspect-square">
                      <span className="text-sm font-bold text-center leading-tight group-hover:text-primary transition-colors">
                        {brand.name}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Cat Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">All Cat Products</h2>
              <Link href="/shop/cat" className="text-primary hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop/cat">
                <Button size="lg">Browse All Cat Products</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
