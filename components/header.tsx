"use client"

import Link from "next/link"
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { allBrandProducts } from "@/lib/brand-products"

const categories = [
  { name: "Dog", href: "/dog", shopHref: "/shop/dog", subcategories: [
    { label: "Food", category: "food" },
    { label: "Treats", category: "food" },
    { label: "Toys", category: "toys" },
    { label: "Beds", category: "beds" },
    { label: "Grooming", category: "grooming" },
    { label: "Health", category: "healthcare" },
  ]},
  { name: "Cat", href: "/cat", shopHref: "/shop/cat", subcategories: [
    { label: "Food", category: "food" },
    { label: "Treats", category: "food" },
    { label: "Accessories", category: "accessories" },
    { label: "Health", category: "healthcare" },
  ]},
  { name: "Small Animal", href: "/small-animal", shopHref: "/shop/small-animal", subcategories: [
    { label: "Food", category: "food" },
    { label: "Bedding", category: "beds" },
    { label: "Cages", category: "housing" },
    { label: "Toys", category: "toys" },
    { label: "Health", category: "healthcare" },
  ]},
  { name: "Bird", href: "/bird", shopHref: "/shop/bird", subcategories: [
    { label: "Food", category: "food" },
    { label: "Cages", category: "housing" },
    { label: "Toys", category: "toys" },
    { label: "Accessories", category: "accessories" },
  ]},
  { name: "Fish & Reptile", href: "/fish", shopHref: "/shop/fish", subcategories: [
    { label: "Food", category: "food" },
    { label: "Tanks", category: "aquatics" },
    { label: "Accessories", category: "accessories" },
    { label: "Health", category: "healthcare" },
  ]},
  { name: "Equine", href: "/equine", shopHref: "/shop/equine", subcategories: [
    { label: "Food", category: "food" },
    { label: "Supplements", category: "healthcare" },
    { label: "Grooming", category: "grooming" },
    { label: "Stable", category: "housing" },
  ]},
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<typeof allBrandProducts>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const handleQueryChange = (value: string) => {
    setSearchQuery(value)
    if (value.trim().length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }
    const q = value.toLowerCase()
    const matches = allBrandProducts
      .filter(p =>
        p.name?.toLowerCase().includes(q) ||
        p.sku?.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q)
      )
      .slice(0, 8)
    setSuggestions(matches)
    setShowSuggestions(matches.length > 0)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuggestions(false)
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleSuggestionClick = (productId: number) => {
    setShowSuggestions(false)
    router.push(`/product/${productId}`)
  }

  return (
    <header className="w-full" style={{ fontFamily: "var(--font-navbar), system-ui, sans-serif" }}>
      {/* Top bar */}
      <div className="bg-[#1a5d5d] text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+441onal" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>01902 924266</span>
            </a>
            <a href="mailto:info@vitalpetgroup.co.uk" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@vitalpetgroup.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-4 mx-auto md:mx-0">
            <span className="text-center">Free UK Delivery on Orders Over £150</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/trade-account" className="hover:text-white/80 transition-colors">Trade Account</Link>
            <Link href="/help" className="hover:text-white/80 transition-colors">Help</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <div className="p-4 border-b">
                  <Link href="/" className="text-2xl font-bold text-[#1a5d5d]">
                    Vital Pet Group
                  </Link>
                </div>
                <nav className="p-4">
                  {categories.map((category) => (
                    <div key={category.name} className="py-2 border-b">
                      <Link href={category.href} className="font-medium text-foreground hover:text-[#1a5d5d]">
                        {category.name}
                      </Link>
                      <div className="pl-4 mt-2 space-y-1">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub.label}
                            href={`${category.shopHref}?category=${sub.category}`}
                            className="block text-sm text-muted-foreground hover:text-[#1a5d5d]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#1a5d5d] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VP</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-[#1a5d5d]">Vital Pet Group</h1>
                  <p className="text-xs text-muted-foreground">UK Pet Products Wholesaler</p>
                </div>
              </div>
            </Link>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:block">
              <div className="relative" ref={searchRef}>
                <Input
                  type="search"
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  className="w-full pl-4 pr-12 py-3 border-2 border-[#1a5d5d]/20 focus:border-[#1a5d5d] rounded-full"
                  autoComplete="off"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black hover:bg-zinc-800"
                >
                  <Search className="h-4 w-4" />
                </Button>
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#1a5d5d]/20 rounded-xl shadow-lg z-50 overflow-hidden">
                    {suggestions.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onMouseDown={() => handleSuggestionClick(product.id)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#1a5d5d]/05 text-left transition-colors"
                      >
                        <div className="w-8 h-8 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img src={product.image} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {product.brand}
                            {product.sku && (
                              <span onMouseDown={(e) => e.stopPropagation()} className="cursor-default"> · {product.sku}</span>
                            )}
                          </p>
                        </div>
                      </button>
                    ))}
                    <button
                      type="submit"
                      onMouseDown={handleSearch as any}
                      className="w-full px-4 py-2.5 text-sm text-[#1a5d5d] font-medium hover:bg-[#1a5d5d]/05 text-left border-t border-[#1a5d5d]/10 transition-colors"
                    >
                      See all results for &ldquo;{searchQuery}&rdquo;
                    </button>
                  </div>
                )}
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden sm:flex">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <div className="px-2 py-1.5 text-sm font-medium border-b mb-1">
                      {user?.businessName || user?.email}
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/account">My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/account">Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="text-red-600">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile search */}
          <form onSubmit={handleSearch} className="mt-4 md:hidden">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border-2 border-[#1a5d5d]/20 rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black hover:bg-zinc-800 h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1a5d5d] hidden lg:block border border-black">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1">
            {categories.map((category) => (
              <li key={category.name}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-3 text-white hover:bg-white/10 transition-colors font-medium">
                      {category.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href={category.href} className="font-medium">
                        All {category.name}
                      </Link>
                    </DropdownMenuItem>
                    {category.subcategories.map((sub) => (
                      <DropdownMenuItem key={sub.label} asChild>
                        <Link href={`${category.shopHref}?category=${sub.category}`}>
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ))}
            <li>
              <Link href="/brands" className="flex items-center px-4 py-3 text-white hover:bg-white/10 transition-colors font-medium">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/clearance" className="flex items-center px-4 py-3 text-[#ffd700] hover:bg-white/10 transition-colors font-medium">
                Clearance
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
