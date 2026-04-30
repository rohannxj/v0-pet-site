"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { products, species, categories } from "@/lib/products"
import { Search, SlidersHorizontal, ChevronRight, Grid3X3, LayoutGrid } from "lucide-react"

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [gridCols, setGridCols] = useState<3 | 4>(4)

  const filteredProducts = useMemo(() => {
    let result = products

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      )
    }

    // Species filter
    if (selectedSpecies.length > 0) {
      result = result.filter((p) => selectedSpecies.includes(p.species))
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result = [...result].sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0))
        break
      default:
        // featured - keep original order
        break
    }

    return result
  }, [searchQuery, selectedSpecies, selectedCategories, sortBy])

  const toggleSpecies = (speciesId: string) => {
    setSelectedSpecies((prev) =>
      prev.includes(speciesId)
        ? prev.filter((s) => s !== speciesId)
        : [...prev, speciesId]
    )
  }

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedSpecies([])
    setSelectedCategories([])
    setSortBy("featured")
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Pet Type</h3>
        <div className="space-y-2">
          {species.map((s) => (
            <label key={s.id} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedSpecies.includes(s.id)}
                onCheckedChange={() => toggleSpecies(s.id)}
              />
              <span className="text-sm">{s.name}</span>
              <span className="text-xs text-muted-foreground ml-auto">({s.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c.id} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedCategories.includes(c.id)}
                onCheckedChange={() => toggleCategory(c.id)}
              />
              <span className="text-sm">{c.name}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedSpecies.length > 0 || selectedCategories.length > 0) && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">All Products</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete range of pet products
          </p>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterSidebar />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-[200px] md:w-[300px]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Grid Toggle */}
                  <div className="hidden md:flex items-center gap-1 border rounded-md p-1">
                    <button
                      onClick={() => setGridCols(3)}
                      className={`p-1.5 rounded ${gridCols === 3 ? "bg-muted" : ""}`}
                      aria-label="3 column grid"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setGridCols(4)}
                      className={`p-1.5 rounded ${gridCols === 4 ? "bg-muted" : ""}`}
                      aria-label="4 column grid"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedSpecies.length > 0 || selectedCategories.length > 0) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedSpecies.map((s) => (
                    <Button
                      key={s}
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleSpecies(s)}
                      className="h-7"
                    >
                      {species.find((sp) => sp.id === s)?.name}
                      <span className="ml-1">&times;</span>
                    </Button>
                  ))}
                  {selectedCategories.map((c) => (
                    <Button
                      key={c}
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleCategory(c)}
                      className="h-7"
                    >
                      {categories.find((cat) => cat.id === c)?.name}
                      <span className="ml-1">&times;</span>
                    </Button>
                  ))}
                </div>
              )}

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div
                  className={`grid gap-4 md:gap-6 ${
                    gridCols === 3
                      ? "grid-cols-2 md:grid-cols-3"
                      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No products found matching your criteria.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
