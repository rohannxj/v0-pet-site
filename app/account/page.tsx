"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  ShoppingBag,
  Clock,
  TrendingUp,
} from "lucide-react"

const recentOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 156.99,
    items: 5,
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-10",
    status: "Processing",
    total: 89.50,
    items: 3,
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-05",
    status: "Delivered",
    total: 234.00,
    items: 8,
  },
]

const quickLinks = [
  { icon: Package, label: "My Orders", href: "/account/orders", description: "View and track your orders" },
  { icon: Heart, label: "Wishlist", href: "/account/wishlist", description: "Saved items for later" },
  { icon: MapPin, label: "Addresses", href: "/account/addresses", description: "Manage delivery addresses" },
  { icon: CreditCard, label: "Payment Methods", href: "/account/payment", description: "Saved payment options" },
  { icon: Settings, label: "Account Settings", href: "/account/settings", description: "Update your details" },
]

export default function AccountPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading || !isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a5d5d]"></div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-muted-foreground">
              Manage your account, orders, and preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Account Summary */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#1a5d5d]/10 rounded-lg">
                        <ShoppingBag className="h-6 w-6 text-[#1a5d5d]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">Total Orders</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#1a5d5d]/10 rounded-lg">
                        <Clock className="h-6 w-6 text-[#1a5d5d]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-sm text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#1a5d5d]/10 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-[#1a5d5d]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">£2,450</p>
                        <p className="text-sm text-muted-foreground">Total Spent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your latest purchases</CardDescription>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/account/orders">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                            {" • "}
                            {order.items} items
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">£{order.total.toFixed(2)}</p>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Card className="hover:shadow-md transition-shadow h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-muted rounded-lg">
                            <link.icon className="h-5 w-5 text-[#1a5d5d]" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{link.label}</p>
                            <p className="text-sm text-muted-foreground">{link.description}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#1a5d5d] flex items-center justify-center text-white text-xl font-bold">
                      {user.firstName[0]}{user.lastName[0]}
                    </div>
                    <div>
                      <p className="font-medium">{user.firstName} {user.lastName}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Company</p>
                      <p className="font-medium">{user.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Account Type</p>
                      <p className="font-medium capitalize">{user.accountType}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild variant="outline" className="w-full mb-2">
                      <Link href="/account/settings">
                        <User className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="bg-[#1a5d5d] text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Our support team is here to assist you with any questions.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
