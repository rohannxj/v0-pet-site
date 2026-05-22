"use client"

import { use, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById, products } from "@/lib/products"
import { allBrandProducts } from "@/lib/brand-products"
import { useAuth } from "@/contexts/auth-context"
import { ProductCard } from "@/components/product-card"
import {
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
  Lock,
  Check,
} from "lucide-react"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { isAuthenticated } = useAuth()

  const product = getProductById(parseInt(id)) ?? allBrandProducts.find(p => p.id === parseInt(id))

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.species === product.species && p.id !== product.id)
    .slice(0, 4)

  const images = product.images || [product.image]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                Shop
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link
                href={`/shop/${product.species}`}
                className="text-muted-foreground hover:text-foreground capitalize"
              >
                {product.species.replace("-", " ")}
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <Badge
                    className={`absolute top-4 left-4 ${
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
              </div>
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? "border-[#1a5d5d]" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {isAuthenticated ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-[#1a5d5d]">
                      £{product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        £{product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive">
                        Save £{(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                ) : (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Lock className="h-5 w-5" />
                      <span className="font-medium">Trade Pricing</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Please log in to view wholesale pricing and place orders.
                    </p>
                    <div className="flex gap-2">
                      <Button asChild className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/register">Register</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* SKU & Stock */}
              <div className="flex flex-wrap gap-4 text-sm mb-6">
                {product.sku && (
                  <span className="text-muted-foreground">SKU: {product.sku}</span>
                )}
                {product.inStock ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <Check className="h-4 w-4" /> In Stock
                  </span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              {isAuthenticated && (
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-0 focus-visible:ring-0"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <Button className="flex-1 bg-[#1a5d5d] hover:bg-[#154a4a]" size="lg">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>

                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-6 border-t border-b">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-[#1a5d5d]" />
                  <p className="text-xs text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-[#1a5d5d]" />
                  <p className="text-xs text-muted-foreground">Quality Guaranteed</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-[#1a5d5d]" />
                  <p className="text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <Tabs defaultValue="features" className="mt-12">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="features"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1a5d5d] data-[state=active]:bg-transparent px-6 pb-3"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1a5d5d] data-[state=active]:bg-transparent px-6 pb-3"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1a5d5d] data-[state=active]:bg-transparent px-6 pb-3"
              >
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-6">
              {product.features && product.features.length > 0 ? (
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#1a5d5d] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No features listed.</p>
              )}
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Brand</span>
                  <span className="font-medium">{product.brand}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">SKU</span>
                  <span className="font-medium">{product.sku}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Pet Type</span>
                  <span className="font-medium capitalize">{product.species.replace("-", " ")}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  {isAuthenticated
                    ? "Be the first to review this product."
                    : "Please log in to view and write reviews."}
                </p>
                {!isAuthenticated && (
                  <Button asChild variant="outline">
                    <Link href="/login">Sign In to Review</Link>
                  </Button>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
