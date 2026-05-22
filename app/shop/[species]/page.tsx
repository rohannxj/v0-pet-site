"use client"

import { useState, useMemo, use, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { allBrandProducts } from "@/lib/brand-products"

const allProducts = [...products, ...allBrandProducts].filter(
  (p, i, arr) => arr.findIndex((x) => x.id === p.id) === i
)
import { Search, SlidersHorizontal, ChevronRight, Grid3X3, LayoutGrid } from "lucide-react"

const speciesInfo: Record<string, { title: string; description: string; image: string }> = {
  dog: {
    title: "Dog Products",
    description: "Everything your canine companion needs - from premium food to toys and grooming supplies.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&auto=format&fit=crop&q=80",
  },
  cat: {
    title: "Cat Products",
    description: "Quality products for your feline friends - food, beds, toys and more.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&auto=format&fit=crop&q=80",
  },
  "small-animal": {
    title: "Small Animal Products",
    description: "Everything for rabbits, guinea pigs, hamsters and other small pets.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&auto=format&fit=crop&q=80",
  },
  bird: {
    title: "Bird Products",
    description: "Seeds, cages, toys and accessories for all types of birds.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&auto=format&fit=crop&q=80",
  },
  fish: {
    title: "Fish & Aquatics",
    description: "Aquarium supplies, food, and accessories for freshwater and marine fish.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
  },
  reptile: {
    title: "Reptile Products",
    description: "Heating, lighting, food and habitats for reptiles and amphibians.",
    image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=1200&auto=format&fit=crop&q=80",
  },
  equine: {
    title: "Equine Products",
    description: "Premium supplies for horses - grooming, feed, tack and accessories.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&auto=format&fit=crop&q=80",
  },
}

export default function SpeciesPage({ params }: { params: Promise<{ species: string }> }) {
  const { species: speciesSlug } = use(params)
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const cat = searchParams.get("category")
    return cat ? [cat] : []
  })
  const [sortBy, setSortBy] = useState("featured")
  const [gridCols, setGridCols] = useState<3 | 4>(4)

  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  const info = speciesInfo[speciesSlug]
  const speciesData = species.find((s) => s.id === speciesSlug)

  if (!info || !speciesData) {
    notFound()
  }

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((p) => p.species === speciesSlug)

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      )
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

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
      default:
        break
    }

    return result
  }, [searchQuery, selectedCategories, sortBy, speciesSlug])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSortBy("featured")
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
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

      <div>
        <h3 className="font-semibold mb-3">Browse Other Pets</h3>
        <div className="space-y-2">
          {species.map((s) => (
            <Link
              key={s.id}
              href={`/shop/${s.id}`}
              className={`block text-sm py-1 hover:text-[#1a5d5d] transition-colors ${
                s.id === speciesSlug ? "text-[#1a5d5d] font-medium" : "text-muted-foreground"
              }`}
            >
              {s.name} ({s.count})
            </Link>
          ))}
        </div>
      </div>

      {selectedCategories.length > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={info.image}
            alt={info.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-2">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/shop" className="hover:text-white">Shop</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">{speciesData.name}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{info.title}</h1>
              <p className="text-white/80 max-w-xl">{info.description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
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

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full sm:w-[200px] md:w-[300px]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-[160px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>

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
              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
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
