"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Building2,
  Truck,
  Percent,
  HeadphonesIcon,
  Clock,
  CreditCard,
  Package,
  Users,
  Shield,
  ChevronRight,
} from "lucide-react"

const benefits = [
  {
    icon: Percent,
    title: "Wholesale Pricing",
    description: "Access exclusive trade prices on over 10,000 pet products from leading brands.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free UK mainland delivery on all orders over £150. Next day delivery available.",
  },
  {
    icon: Package,
    title: "Huge Selection",
    description: "Over 200 brands and 10,000+ products across all pet categories.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account manager and priority customer support for all trade customers.",
  },
  {
    icon: Clock,
    title: "Easy Ordering",
    description: "Quick reorder, saved favorites, and streamlined checkout for busy retailers.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Credit accounts available for established businesses. Multiple payment options.",
  },
]

const accountTypes = [
  {
    title: "Pet Shop Retailer",
    description: "Independent pet shops and retail stores",
    icon: Building2,
  },
  {
    title: "Online Retailer",
    description: "E-commerce businesses selling pet products",
    icon: Package,
  },
  {
    title: "Grooming Salon",
    description: "Professional pet grooming businesses",
    icon: Users,
  },
  {
    title: "Veterinary Practice",
    description: "Vets and veterinary clinics",
    icon: Shield,
  },
]

const faqs = [
  {
    question: "Who can open a trade account?",
    answer: "Trade accounts are available to registered businesses in the pet industry, including pet shops, online retailers, groomers, breeders, kennels, and veterinary practices.",
  },
  {
    question: "What documents do I need?",
    answer: "You will need to provide proof of business registration (Company Number or VAT registration), along with your business address and contact details.",
  },
  {
    question: "How long does approval take?",
    answer: "Most applications are approved within 24-48 hours. Once approved, you can immediately access wholesale pricing and start ordering.",
  },
  {
    question: "Is there a minimum order value?",
    answer: "There is no minimum order value, however free delivery is available on orders over £150. Orders under £150 incur a small delivery charge.",
  },
  {
    question: "Do you offer credit terms?",
    answer: "Yes, credit accounts are available for established businesses with a good trading history. New customers can apply after 3 months of regular ordering.",
  },
]

export default function TradeAccountPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-[#1a5d5d] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Trade Accounts for Pet Professionals
                </h1>
                <p className="text-white/90 text-lg mb-6">
                  Join thousands of pet retailers, groomers, and professionals who trust Signature Pet Supplies 
                  for their wholesale pet product needs. Access exclusive pricing and dedicated support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                      Apply Now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Existing Customer Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold">200+</div>
                      <div className="text-white/80">Brands</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold">10k+</div>
                      <div className="text-white/80">Products</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold">5k+</div>
                      <div className="text-white/80">Trade Customers</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold">24hr</div>
                      <div className="text-white/80">Dispatch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Signature Pet Supplies?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are the UK&apos;s leading pet products wholesaler, providing everything you need to run a successful pet business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-[#1a5d5d]/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-[#1a5d5d]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trade accounts are available to a wide range of pet industry professionals.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountTypes.map((type) => (
                <Card key={type.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#1a5d5d] rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#1a5d5d] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-[#1a5d5d] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                <p className="text-white/80">
                  Complete our simple online application form with your business details.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-[#1a5d5d] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                <p className="text-white/80">
                  We review your application and approve within 24-48 hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-[#1a5d5d] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Ordering</h3>
                <p className="text-white/80">
                  Access wholesale prices and start ordering immediately.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/register">
                <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                  Apply for Trade Account
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#1a5d5d] mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-11">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join the UK&apos;s leading pet wholesaler today and take your business to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                  Apply for Trade Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
