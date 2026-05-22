"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import { Heart, ShoppingCart, Trash2, Lock } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    name: "Premium Dry Dog Food - Chicken & Rice",
    brand: "Vital Nutrition",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Interactive Dog Toy Bundle",
    brand: "PlayPaws",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: 7,
    name: "Dog Grooming Kit - Professional",
    brand: "GroomPro",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&auto=format&fit=crop&q=80",
    inStock: false,
  },
]

export default function WishlistPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/wishlist")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-sm text-center">
            <Lock
              className="mx-auto mb-6"
              style={{ width: 40, height: 40, color: "oklch(0.55 0.15 170)" }}
              strokeWidth={1.5}
            />
            <h2
              className="text-2xl font-bold tracking-tight mb-3"
              style={{ color: "oklch(0.25 0.01 240)" }}
            >
              Login required
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "oklch(0.50 0 0)", maxWidth: "36ch", margin: "0 auto 2rem" }}
            >
              Your saved items are here when you log in.
            </p>
            <Link href="/login?redirect=/wishlist" className="block">
              <Button
                className="w-full font-medium"
                style={{
                  backgroundColor: "oklch(0.55 0.15 170)",
                  color: "oklch(1 0 0)",
                  transition: "background-color 200ms cubic-bezier(0.25,1,0.5,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.25 0.10 170)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.55 0.15 170)"
                }}
              >
                Log in
              </Button>
            </Link>
            <p className="mt-4 text-sm" style={{ color: "oklch(0.50 0 0)" }}>
              New to Pet Vital?{" "}
              <Link
                href="/register"
                className="font-medium underline-offset-2 hover:underline"
                style={{ color: "oklch(0.55 0.15 170)" }}
              >
                Create an account
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">My Wishlist</h1>
              <p className="text-muted-foreground">{wishlistItems.length} items saved</p>
            </div>
            <Button variant="outline" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add All to Cart
            </Button>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid gap-4">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <Link href={`/product/${item.id}`} className="sm:w-40 h-40 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="flex-1 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <Link href={`/product/${item.id}`}>
                            <h3 className="font-semibold hover:text-[#1a5d5d] transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.brand}</p>
                          <p className="font-bold text-[#1a5d5d] mt-2">£{item.price.toFixed(2)}</p>
                          {item.inStock ? (
                            <span className="text-sm text-green-600">In Stock</span>
                          ) : (
                            <span className="text-sm text-red-600">Out of Stock</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#1a5d5d] hover:bg-[#154a4a] gap-2"
                            disabled={!item.inStock}
                          >
                            <ShoppingCart className="h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="icon">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Save items you love by clicking the heart icon on any product.
                </p>
                <Link href="/shop">
                  <Button className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                    Browse Products
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
