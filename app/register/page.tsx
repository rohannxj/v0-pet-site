"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useAuth } from "@/contexts/auth-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Eye, EyeOff, Loader2, Check } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    company: "",
    accountType: "wholesale" as "retail" | "wholesale",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const { register, isLoading } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.firstName || !formData.lastName || !formData.password || !formData.company) {
      setError("Please fill in all required fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    const success = await register(formData)
    if (success) {
      router.push("/account")
    } else {
      setError("Registration failed. Please try again.")
    }
  }

  const benefits = [
    "Access to wholesale pricing",
    "Bulk order discounts",
    "Priority customer support",
    "Early access to new products",
    "Exclusive trade promotions",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">


<Card>
  <CardContent className="pt-6">
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Trade Account Application</h2>
        <p className="text-sm text-muted-foreground">
          To register for a trade account, please contact us using the details below.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">Email</p>
          <a
            href="mailto:trade@vitalpetgroup.co.uk"
            className="text-primary hover:underline"
          >
            trade@vitalpetgroup.co.uk
          </a>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">Phone</p>
          <a
            href="tel:+441234567890"
            className="text-primary hover:underline"
          >
            +44 1234 567890
          </a>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

            <div className="space-y-6">
              <Card className="bg-[#1a5d5d] text-white border-0">
                <CardHeader>
                  <CardTitle>Trade Account Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Vital Pet Group?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    As the UK&apos;s leading pet products wholesaler, we supply thousands of retailers
                    with premium products at competitive prices.
                  </p>
                  <p>
                    Our dedicated account managers provide personalized service to help your
                    business grow with the right product mix and support.
                  </p>
                  <p>
                    With next-day delivery on most orders and a minimum order value of just
                    £100, we make it easy to keep your shelves stocked.
                  </p>
                  <p>
                    Email: contact@vitalpetgroup.co.uk
                  </p>
                  <p>
                    Phone: +44 1902 000000
                  </p>
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