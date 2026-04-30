"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { brandProductMap } from "@/lib/brand-products"
import { ChevronLeft } from "lucide-react"

const brandInfo: Record<string, { name: string; description: string; logo: string }> = {
  "royal-canin": {
    name: "Royal Canin",
    description: "Royal Canin is dedicated to delivering precise nutritional solutions for cats and dogs based on their specific needs. With over 50 years of experience, they create tailored nutrition backed by scientific research.",
    logo: "Royal Canin.png",
  },
  "hills-science-plan": {
    name: "Hills Science Plan",
    description: "Hill's Science Plan provides clinically proven nutrition for your pet's specific needs. Their products are developed by veterinarians and nutritional scientists to help pets live their best lives.",
    logo: "Hills Science Diet.png",
  },
  "hills-science-diet": {
    name: "Hills Science Plan",
    description: "Hill's Science Plan provides clinically proven nutrition for your pet's specific needs. Their products are developed by veterinarians and nutritional scientists to help pets live their best lives.",
    logo: "Hills Science Diet.png",
  },
  "purina-pro-plan": {
    name: "Purina Pro Plan",
    description: "Purina Pro Plan offers advanced nutrition backed by 90+ years of Purina research. Their formulas are designed to nourish specific needs and life stages of cats and dogs.",
    logo: "Purina Pro Plan.png",
  },
  "whiskas": { name: "Whiskas", description: "Tasty cat food and treats from one of the world's most recognised cat food brands.", logo: "Whiskas.png" },
  "pedigree": { name: "Pedigree", description: "Quality dog food and care products trusted by dog owners for generations.", logo: "Pedigree.png" },
  "felix": { name: "Felix", description: "Delicious cat food varieties that cats love, made by Purina.", logo: "Felix.png" },
  "iams": { name: "Iams", description: "Tailored nutrition solutions for cats and dogs at every life stage.", logo: "Iams.png" },
  "eukanuba": { name: "Eukanuba", description: "Performance pet nutrition engineered for active and working dogs.", logo: "Eukanuba.png" },
  "james-wellbeloved": { name: "James Wellbeloved", description: "Natural hypoallergenic food crafted with simple, honest ingredients.", logo: "James Wellbeloved.png" },
  "lily's-kitchen": { name: "Lily's Kitchen", description: "Proper food for pets made with natural, nutritious ingredients.", logo: "Lily's Kitchen.png" },
  "canagan": { name: "Canagan", description: "Grain-free pet food inspired by a dog's natural ancestral diet.", logo: "Canagan.png" },
  "applaws": { name: "Applaws", description: "Natural cat and dog food with minimal, high-quality ingredients.", logo: "Applaws.png" },
  "burgess": { name: "Burgess", description: "Small animal specialists providing complete nutrition for rabbits, guinea pigs and more.", logo: "Burgess.png" },
  "vitakraft": { name: "Vitakraft", description: "Treats and care products for all types of pets.", logo: "Vitakraft.png" },
  "trixie": { name: "Trixie", description: "Pet accessories and toys for dogs, cats and small animals.", logo: "Trixie.png" },
  "kong": { name: "Kong", description: "Durable dog toys designed to satisfy natural instincts.", logo: "Kong.png" },
  "nylabone": { name: "Nylabone", description: "Chew toys and dental products to keep dogs healthy and happy.", logo: "Nylabone.png" },
  "ancol": { name: "Ancol", description: "Pet accessories made in the UK for over 50 years.", logo: "Ancol.png" },
  "beaphar": { name: "Beaphar", description: "Pet healthcare products trusted by vets and owners worldwide.", logo: "Beaphar.png" },
  "frontline": { name: "Frontline", description: "Leading flea and tick treatment protecting pets and homes.", logo: "Frontline.png" },
  "drontal": { name: "Drontal", description: "Effective worming treatments for cats and dogs.", logo: "Drontal.png" },
  "harringtons": { name: "Harringtons", description: "Natural pet food made with wholesome ingredients at great value.", logo: "Harringtons.png" },
  "wagg": { name: "Wagg", description: "Value pet food range delivering balanced nutrition for less.", logo: "Wagg.png" },
}

export default function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const brand = brandInfo[slug] || {
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    description: "Quality pet products from a trusted brand.",
    logo: null,
  }

  const brandProducts = brandProductMap[slug] ?? products.slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Link
              href="/brands"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Brands
            </Link>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                {brand.logo ? (
                  <Image
                    src={`/logos/${brand.logo}`}
                    alt={brand.name}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full p-2"
                  />
                ) : (
                  <span className="text-3xl font-bold text-[#1a5d5d]">{brand.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{brand.name}</h1>
                <p className="text-muted-foreground max-w-2xl">{brand.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Products from {brand.name}</h2>
            <span className="text-muted-foreground">{brandProducts.length} products</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {brandProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products found for this brand.</p>
              <Link href="/shop">
                <Button variant="outline">Browse All Products</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
