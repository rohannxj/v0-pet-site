"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Lock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { allBrandProducts } from "@/lib/brand-products"

const products = allBrandProducts
  .filter((_, i) => i % 31 === 0)
  .slice(0, 8)
  .map((p) => ({ ...p, category: p.species }))

const filters = ["All", "Dog", "Cat", "Small Animal", "Bird"]

export function TopPicks() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { isAuthenticated } = useAuth()

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter.toLowerCase().replace(" ", "-"))

  return (
    <section className="py-12 md:py-16" style={{ background: "linear-gradient(to bottom, #fdf9f4 0%, #e8d9c0 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
 <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1" style={{ color: "#2c2c2c", fontFamily: "var(--font-roboto), sans-serif" }}>Top Picks For You</h2>        
            <p className="text-sm" style={{ color: "#7a7a6e" }}>Bestselling products loved by pet owners</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-4 py-1.5 text-sm font-medium rounded-md border transition-colors"
                style={
                  activeFilter === filter
                    ? { backgroundColor: "#6b7355", color: "#ffffff", borderColor: "#6b7355" }
                    : { backgroundColor: "#ffffff", color: "#6b7280", borderColor: "#e5e7eb" }
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all duration-200 hover:shadow-2xl hover:border-green-600 hover:border-2 hover:-translate-y-2" style={{ backgroundColor: "#faf7f2", border: "1px solid #d4cfbe", borderRadius: "10px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
              <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: "#f0ebe0" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <Badge
                    className={`absolute top-2 left-2 ${
                      product.badge === "Sale"
                        ? "bg-red-500"
                        : product.badge === "New"
                          ? "bg-green-500"
                          : "bg-[#1a5d5d]"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <button
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ border: "1px solid #d4cfbe" }}
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-4 w-4" style={{ color: "#7a7a6e" }} />
                </button>
              </div>
              <CardContent className="p-4">
                <p className="text-xs mb-1" style={{ color: "#9a9a8a" }}>{product.brand}</p>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-sm md:text-base line-clamp-2 transition-colors hover:underline" style={{ color: "#2c2c2c" }}>
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium" style={{ color: "#2c2c2c" }}>{product.rating}</span>
                  <span className="text-xs" style={{ color: "#9a9a8a" }}>({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center gap-2">
                        <span className="font-bold" style={{ color: "#4a6741" }}>£{product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm line-through" style={{ color: "#9a9a8a" }}>
                            £{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        style={{ borderColor: "#d4cfbe", color: "#5a5a4a" }}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "#9a9a8a" }}
                    >
                      <Lock className="h-3 w-3" />
                      <span>Login for pricing</span>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="rounded-md font-medium transition-colors" style={{ backgroundColor: "#ffffff", color: "#6b7280", borderColor: "#e5e7eb" }}>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
