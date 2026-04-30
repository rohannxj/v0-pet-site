"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/auth-context"
import { products } from "@/lib/products"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Lock } from "lucide-react"

// Demo cart items
const initialCartItems = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 1 },
  { productId: 7, quantity: 3 },
]

export default function CartPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [cartItems, setCartItems] = useState(initialCartItems)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/cart")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a5d5d]"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <Card className="max-w-md text-center">
            <CardContent className="pt-6">
              <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Sign In Required</h2>
              <p className="text-muted-foreground mb-4">
                Please sign in to view your cart and place orders.
              </p>
              <Button asChild className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                <Link href="/login?redirect=/cart">Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  const cartProducts = cartItems.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  })).filter((item) => item.product)

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems((prev) => prev.filter((item) => item.productId !== productId))
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>

          {cartProducts.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven&apos;t added any items to your cart yet.
                </p>
                <Button asChild className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartProducts.map(({ product, quantity }) => (
                  <Card key={product.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Link href={`/product/${product.id}`} className="flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">{product.brand}</p>
                              <Link href={`/product/${product.id}`}>
                                <h3 className="font-medium hover:text-[#1a5d5d] transition-colors line-clamp-2">
                                  {product.name}
                                </h3>
                              </Link>
                              <p className="text-sm text-muted-foreground mt-1">
                                SKU: {product.sku}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(product.id)}
                              className="text-muted-foreground hover:text-red-600 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="p-2 hover:bg-muted transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-10 text-center">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="p-2 hover:bg-muted transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-[#1a5d5d]">
                                £{(product.price * quantity).toFixed(2)}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                £{product.price.toFixed(2)} each
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-between items-center pt-4">
                  <Button asChild variant="outline">
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => setCartItems([])}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>£{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-sm text-muted-foreground">
                        Add £{(100 - subtotal).toFixed(2)} more for free delivery
                      </p>
                    )}
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-[#1a5d5d]">£{total.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Including VAT
                      </p>
                    </div>

                    {/* Promo Code */}
                    <div className="border-t pt-4">
                      <label className="text-sm font-medium">Promo Code</label>
                      <div className="flex gap-2 mt-2">
                        <Input placeholder="Enter code" />
                        <Button variant="outline">Apply</Button>
                      </div>
                    </div>

                    <Button className="w-full bg-[#1a5d5d] hover:bg-[#154a4a]" size="lg">
                      Proceed to Checkout
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Secure checkout powered by Stripe
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
