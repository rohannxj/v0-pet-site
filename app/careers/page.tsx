"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, Heart, Users, TrendingUp, Coffee, Gift } from "lucide-react"
import Link from "next/link"

const benefits = [
  { icon: Heart, title: "Pet-Friendly Office", description: "Bring your furry friend to work" },
  { icon: TrendingUp, title: "Career Growth", description: "Clear progression pathways" },
  { icon: Coffee, title: "Free Refreshments", description: "Complimentary drinks & snacks" },
  { icon: Gift, title: "Staff Discount", description: "Generous product discounts" },
  { icon: Users, title: "Team Events", description: "Regular social activities" },
  { icon: Clock, title: "Flexible Hours", description: "Work-life balance matters" },
]

const openPositions = [
  {
    title: "Warehouse Operative",
    department: "Operations",
    location: "Wolverhampton",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Wolverhampton",
    type: "Full-time",
    posted: "5 days ago",
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    title: "Sales Account Manager",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    title: "Junior Web Developer",
    department: "IT",
    location: "Hybrid",
    type: "Full-time",
    posted: "2 weeks ago",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Pack</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Build your career with the UK&apos;s leading pet products wholesaler
          </p>
          <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Join Vital Pet Group?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We&apos;re passionate about pets and the people who care for them. Join a team that makes a difference.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 mx-auto text-[#1a5d5d] mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold text-[#1a5d5d]">150+</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#1a5d5d]">25+</p>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#1a5d5d]">95%</p>
              <p className="text-muted-foreground">Staff Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#1a5d5d]">4.8</p>
              <p className="text-muted-foreground">Glassdoor Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
          <p className="text-center text-muted-foreground mb-12">
            Find your perfect role and start your journey with us
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((job) => (
              <Card key={job.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
                    </div>
                    <Button className="bg-[#1a5d5d] hover:bg-[#154a4a] shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a5d5d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See the Right Role?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your CV and we&apos;ll keep it on file for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#1a5d5d] hover:bg-white/90">
                Submit Your CV
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
