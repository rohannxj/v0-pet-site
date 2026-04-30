"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package, Search, Truck, CheckCircle, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [trackingResult, setTrackingResult] = useState<null | "found" | "not-found">(null)
  const { isAuthenticated } = useAuth()

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate tracking - in real app would call API
    if (orderNumber && email) {
      setTrackingResult(orderNumber.startsWith("VP") ? "found" : "not-found")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Package className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Enter your order details below to check the status of your delivery
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            {isAuthenticated ? (
              <Card className="mb-8">
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    You&apos;re logged in! View all your orders from your account dashboard.
                  </p>
                  <Link href="/account">
                    <Button className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                      Go to My Orders
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : null}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Track by Order Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="orderNumber">Order Number</Label>
                    <Input
                      id="orderNumber"
                      placeholder="e.g., VP-123456"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="The email used for your order"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#1a5d5d] hover:bg-[#154a4a]">
                    Track Order
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Tracking Result */}
            {trackingResult === "found" && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Order Found
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="font-semibold">{orderNumber}</p>
                        <p className="text-sm text-muted-foreground">Placed on 25th April 2026</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        In Transit
                      </span>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <div className="w-0.5 h-12 bg-green-600"></div>
                        </div>
                        <div>
                          <p className="font-medium">Order Confirmed</p>
                          <p className="text-sm text-muted-foreground">25th April 2026, 10:30 AM</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                            <Package className="h-4 w-4 text-white" />
                          </div>
                          <div className="w-0.5 h-12 bg-green-600"></div>
                        </div>
                        <div>
                          <p className="font-medium">Dispatched</p>
                          <p className="text-sm text-muted-foreground">25th April 2026, 2:15 PM</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                            <Truck className="h-4 w-4 text-white" />
                          </div>
                          <div className="w-0.5 h-12 bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">In Transit</p>
                          <p className="text-sm text-muted-foreground">26th April 2026, 8:00 AM</p>
                          <p className="text-sm text-blue-600">Your package is on its way</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-muted-foreground">Out for Delivery</p>
                          <p className="text-sm text-muted-foreground">Estimated: 27th April 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {trackingResult === "not-found" && (
              <Card className="mt-8 border-red-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Order Not Found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn&apos;t find an order matching these details. Please check your order number and email address.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline">Contact Support</Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Help Section */}
            <div className="mt-12 text-center">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/help">
                  <Button variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    FAQs
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
