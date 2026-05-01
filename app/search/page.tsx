"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { allBrandProducts as products } from "@/lib/brand-products"
import { Search } from "lucide-react"

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState(products)

  useEffect(() => {
    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    const q = query.toLowerCase()
    const filtered = products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q) ||
        p.species?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.sku?.toLowerCase().includes(q)
    )
    setSearchResults(filtered)
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Results */}
      {query.trim() === "" ? (
        <div className="text-center py-12">
          <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Search Our Catalogue</h2>
          <p className="text-muted-foreground mb-6">
            Enter a search term to find products, brands, or categories.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {["Dog Food", "Cat Toys", "Bird Seed", "Grooming"].map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => setQuery(term)}
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      ) : searchResults.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{searchResults.length}</span> results for{" "}
              <span className="font-semibold text-foreground">&quot;{query}&quot;</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn&apos;t find any products matching &quot;{query}&quot;.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={() => setQuery("")}>
              Clear Search
            </Button>
            <Link href="/shop">
              <Button className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-[#1a5d5d] text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold">Search Products</h1>
          </div>
        </div>

        <Suspense fallback={
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="h-14 bg-muted rounded-full animate-pulse" />
            </div>
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
