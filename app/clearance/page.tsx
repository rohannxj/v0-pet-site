"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { products } from "@/lib/products"
import { allBrandProducts } from "@/lib/brand-products"
import { Percent, Clock, Tag } from "lucide-react"

export default function ClearancePage() {
  const [sortBy, setSortBy] = useState("discount")
  const [selectedSpecies, setSelectedSpecies] = useState("all")

  // Seed-stable shuffle: pick 40 brand products as clearance with 10-50% discount
  const brandClearance = allBrandProducts
    .filter((_, i) => i % 7 === 0)
    .slice(0, 40)
    .map((p) => {
      const discountPct = 10 + ((p.id * 17) % 41)
      const originalPrice = parseFloat((p.price / (1 - discountPct / 100)).toFixed(2))
      return { ...p, originalPrice, badge: "Sale" }
    })

  const clearanceProducts = [
    ...products.filter((p) => p.originalPrice !== null),
    ...brandClearance,
  ]

  const filteredProducts = clearanceProducts.filter(
    (p) => selectedSpecies === "all" || p.species === selectedSpecies
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "discount":
        const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0
        const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0
        return discountB - discountA
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const species = ["all", "dog", "cat", "small-animal", "bird", "fish", "reptile", "equine"]

  const totalSavings = clearanceProducts.reduce((acc, p) => {
    if (p.originalPrice) {
      return acc + (p.originalPrice - p.price)
    }
    return acc
  }, 0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#c41e3a] to-[#8b0000] text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 text-6xl">%</div>
            <div className="absolute bottom-4 right-10 text-8xl">%</div>
            <div className="absolute top-1/2 left-1/3 text-4xl">%</div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                Limited Time
              </Badge>
              <Badge variant="outline" className="border-white text-white">
                Up to 50% Off
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Clearance Sale</h1>
            <p className="text-white/90 max-w-2xl text-lg mb-6">
              Massive savings on quality pet products. Stock up on your favorites while supplies last. 
              All clearance items are brand new and in perfect condition.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span>{clearanceProducts.length} Items on Sale</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="h-5 w-5" />
                <span>Save up to 50%</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>While Stocks Last</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Showing</span>
              <span className="font-semibold">{sortedProducts.length}</span>
              <span className="text-sm text-muted-foreground">clearance items</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All Species" />
                </SelectTrigger>
                <SelectContent>
                  {species.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s === "all" ? "All Species" : s.charAt(0).toUpperCase() + s.slice(1).replace("-", " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discount">Biggest Discount</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Quick Links */}
          <div className="flex flex-wrap gap-2 mb-8">
            {species.map((s) => (
              <Button
                key={s}
                variant={selectedSpecies === s ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSpecies(s)}
                className={selectedSpecies === s ? "bg-[#c41e3a] hover:bg-[#a01830]" : ""}
              >
                {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1).replace("-", " ")}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No clearance items found for this category.</p>
              <Button
                variant="outline"
                onClick={() => setSelectedSpecies("all")}
              >
                View All Clearance
              </Button>
            </div>
          )}

          {/* Bottom CTA */}
          <section
            aria-label="Newsletter sign-up and trade account"
            className="mt-12 rounded-lg p-10 text-center"
            style={{ background: "oklch(0.25 0.10 170)" }}
          >
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "oklch(0.97 0.01 170)" }}
            >
              Want More Great Deals?
            </h2>
            <p className="mb-6 max-w-sm mx-auto" style={{ color: "oklch(0.78 0.05 170)" }}>
              Be first to know about clearance sales and special offers.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/shop">
                <Button
                  style={{
                    color: "oklch(0.97 0.01 170)",
                    borderColor: "oklch(0.70 0.06 170)",
                    border: "1px solid oklch(0.70 0.06 170)",
                    background: "transparent",
                    transition: "background-color 150ms ease-out, border-color 150ms ease-out",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "oklch(0.97 0.01 170 / 0.10)"
                    el.style.borderColor = "oklch(0.85 0.04 170)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "transparent"
                    el.style.borderColor = "oklch(0.70 0.06 170)"
                  }}
                  onFocus={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "oklch(0.97 0.01 170 / 0.10)"
                    el.style.outline = "2px solid oklch(0.70 0.08 170)"
                    el.style.outlineOffset = "2px"
                  }}
                  onBlur={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "transparent"
                    el.style.outline = ""
                    el.style.outlineOffset = ""
                  }}
                >
                  Browse Full Catalogue
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className="font-semibold"
                  style={{
                    background: "oklch(0.55 0.15 170)",
                    color: "oklch(0.99 0.005 170)",
                    transition: "background-color 150ms ease-out",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "oklch(0.62 0.15 170)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "oklch(0.55 0.15 170)"
                  }}
                  onFocus={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "oklch(0.62 0.15 170)"
                    el.style.outline = "2px solid oklch(0.70 0.08 170)"
                    el.style.outlineOffset = "2px"
                  }}
                  onBlur={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.backgroundColor = "oklch(0.55 0.15 170)"
                    el.style.outline = ""
                    el.style.outlineOffset = ""
                  }}
                >
                  Create Trade Account
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
