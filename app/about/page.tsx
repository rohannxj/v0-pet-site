import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Users,
  Truck,
  Heart,
  Target,
  Globe,
  CheckCircle,
} from "lucide-react"

const stats = [
  { label: "Years in Business", value: "25+" },
  { label: "Products Available", value: "10,000+" },
  { label: "Trade Customers", value: "5,000+" },
  { label: "Brands Stocked", value: "200+" },
]

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We only stock products from trusted brands that meet our strict quality standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our dedicated team provides personalized service to help your business succeed.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Next-day delivery on most orders with our efficient logistics network.",
  },
  {
    icon: Heart,
    title: "Pet Welfare",
    description: "We are committed to promoting responsible pet ownership and animal welfare.",
  },
]

const timeline = [
  { year: "1999", event: "Founded in Manchester as a small pet supplies distributor" },
  { year: "2005", event: "Expanded warehouse facilities to serve nationwide" },
  { year: "2010", event: "Launched online ordering platform for trade customers" },
  { year: "2015", event: "Partnered with 100+ leading pet brands" },
  { year: "2020", event: "Opened second distribution centre in the Midlands" },
  { year: "2024", event: "Serving over 5,000 retailers across the UK" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a5d5d] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UK&apos;s Leading Pet Products Wholesaler
              </h1>
              <p className="text-xl text-white/80 mb-8">
                For over 25 years, we have been supplying pet retailers with premium products at competitive wholesale prices. Our commitment to quality and service has made us a trusted partner for thousands of businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/register">Open Trade Account</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#1a5d5d] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At Signature Pet Supplies, our mission is to empower pet retailers with access to the best products at competitive prices, enabling them to serve pet owners with excellence.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe every pet deserves quality nutrition, care, and accessories. By partnering with leading brands and maintaining rigorous quality standards, we ensure our trade customers can offer their clients nothing but the best.
                </p>
                <div className="space-y-3">
                  {[
                    "Premium products from trusted brands",
                    "Competitive wholesale pricing",
                    "Dedicated account management",
                    "Fast and reliable delivery",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#1a5d5d]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80"
                  alt="Warehouse operations"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and define how we work with our partners.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-[#1a5d5d]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-[#1a5d5d]" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to becoming the UK&apos;s leading pet products wholesaler.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#1a5d5d] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a5d5d] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of retailers who trust Signature Pet Supplies for their wholesale pet product needs. Open a trade account today and start saving.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">Open Trade Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
