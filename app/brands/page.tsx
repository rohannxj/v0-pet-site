"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { brandProductMap } from "@/lib/brand-products"

const brands = [
  { name: "Royal Canin", logo: "Royal Canin.png", productCount: 145, description: "Premium nutrition for cats and dogs" },
  { name: "Hills Science Plan", logo: "Hills Science Diet.png", productCount: 98, description: "Clinically proven pet nutrition" },
  { name: "Purina Pro Plan", logo: "Purina Pro Plan.png", productCount: 112, description: "Advanced nutrition for pets" },
  { name: "Whiskas", logo: "Whiskas.png", productCount: 67, description: "Tasty cat food and treats" },
  { name: "Pedigree", logo: "Pedigree.png", productCount: 89, description: "Quality dog food and care" },
  { name: "Felix", logo: "Felix.png", productCount: 54, description: "Delicious cat food varieties" },
  { name: "Iams", logo: "Iams.png", productCount: 76, description: "Tailored nutrition solutions" },
  { name: "Eukanuba", logo: "Eukanuba.png", productCount: 62, description: "Performance pet nutrition" },
  { name: "James Wellbeloved", logo: "James Wellbeloved.png", productCount: 48, description: "Natural hypoallergenic food" },
  { name: "Lily's Kitchen", logo: "Lily's Kitchen.png", productCount: 85, description: "Proper food for pets" },
  { name: "Canagan", logo: "Canagan.png", productCount: 42, description: "Grain-free pet food" },
  { name: "Applaws", logo: "Applaws.png", productCount: 78, description: "Natural cat and dog food" },
  { name: "Burgess", logo: "Burgess.png", productCount: 27, description: "Small animal specialists" },
  { name: "Vitakraft", logo: "Vitakraft.png", productCount: 72, description: "Treats and care products" },
  { name: "Trixie", logo: "Trixie.png", productCount: 124, description: "Pet accessories and toys" },
  { name: "Kong", logo: "Kong.png", productCount: 45, description: "Durable dog toys" },
  { name: "Nylabone", logo: "Nylabone.png", productCount: 33, description: "Chew toys and dental" },
  { name: "Ancol", logo: "Ancol.png", productCount: 160, description: "Pet accessories UK" },
  { name: "Beaphar", logo: "Beaphar.png", productCount: 96, description: "Pet healthcare products" },
  { name: "Frontline", logo: "Frontline.png", productCount: 24, description: "Flea and tick treatment" },
  { name: "Drontal", logo: "Drontal.png", productCount: 12, description: "Worming treatments" },
  { name: "Harringtons", logo: "Harringtons.png", productCount: 52, description: "Natural pet food" },
  { name: "Wagg", logo: "Wagg.png", productCount: 41, description: "Value pet food range" },
  { name: "Safebed", logo: "Safebed.png", productCount: 18, description: "Safe bedding for small animals" },
  { name: "Baileys", logo: "Baileys.png", productCount: 30, description: "Premium horse feed and nutrition" },
  { name: "Tetra", logo: "Tetra.png", productCount: 55, description: "Fish food and aquarium care" },
  { name: "King British", logo: "King British.png", productCount: 40, description: "Aquatic fish food and treatments" },
  { name: "CJ Wildlife", logo: "CJ Wildlife.png", productCount: 35, description: "Wild bird food and garden wildlife" },
  { name: "Countrywide", logo: "Countrywide.png", productCount: 45, description: "Country and farm animal feeds" },
  { name: "Oxbow", logo: "Oxbow.png", productCount: 38, description: "Premium small animal nutrition" },
]

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLetter = !activeLetter || brand.name.charAt(0).toUpperCase() === activeLetter
    return matchesSearch && matchesLetter
  })

  const groupedBrands = filteredBrands.reduce((acc, brand) => {
    const letter = brand.name.charAt(0).toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(brand)
    return acc
  }, {} as Record<string, typeof brands>)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-[#1a5d5d] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Brands</h1>
            <p className="text-white/80 max-w-2xl">
              We stock over 200 leading pet brands, bringing you the best products at wholesale prices. 
              Browse our complete brand directory below.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Input
                type="search"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button
              variant={activeLetter === null ? "default" : "outline"}
              onClick={() => setActiveLetter(null)}
              className={activeLetter === null ? "bg-[#1a5d5d] hover:bg-[#154a4a]" : ""}
            >
              All Brands
            </Button>
          </div>

          {/* Alphabet Filter */}
          <div className="flex flex-wrap gap-1 mb-8 pb-4 border-b">
            {alphabet.map((letter) => {
              const hasbrands = brands.some((b) => b.name.charAt(0).toUpperCase() === letter)
              return (
                <Button
                  key={letter}
                  variant={activeLetter === letter ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                  disabled={!hasbrands}
                  className={`w-8 h-8 p-0 ${activeLetter === letter ? "bg-[#1a5d5d] hover:bg-[#154a4a]" : ""}`}
                >
                  {letter}
                </Button>
              )
            })}
          </div>

          {/* Brands Grid */}
          {Object.keys(groupedBrands)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1a5d5d] mb-4 pb-2 border-b">{letter}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {groupedBrands[letter].map((brand) => (
                    <Link
                      key={brand.name}
                      href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="p-4 border rounded-lg hover:border-[#1a5d5d] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border flex items-center justify-center overflow-hidden flex-shrink-0">
                          <Image
                            src={`/logos/${brand.logo}`}
                            alt={brand.name}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full p-1"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-[#1a5d5d] transition-colors">
                            {brand.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{brand.productCount} products</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{brand.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No brands found matching your search.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("")
                  setActiveLetter(null)
                }}
                className="text-[#1a5d5d]"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
