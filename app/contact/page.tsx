"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Users,
  HelpCircle,
  Loader2,
  CheckCircle,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Vital Pet Group", "123 Distribution Way", "Manchester, M1 2AB", "United Kingdom"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Sales: 0161 123 4567", "Support: 0161 123 4568"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sales@vitalpetgroup.co.uk", "support@vitalpetgroup.co.uk"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 1pm", "Sunday: Closed"],
  },
]

const departments = [
  { value: "sales", label: "Sales Enquiries" },
  { value: "support", label: "Customer Support" },
  { value: "accounts", label: "Accounts & Billing" },
  { value: "returns", label: "Returns & Refunds" },
  { value: "other", label: "Other" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    department: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or need assistance? Our team is here to help. 
              Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#1a5d5d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-[#1a5d5d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our support team in real-time
                  </p>
                  <Button variant="outline" size="sm">Start Chat</Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#1a5d5d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#1a5d5d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Sales Team</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak to our sales team about trade accounts
                  </p>
                  <Button variant="outline" size="sm">Call Sales</Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#1a5d5d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="h-6 w-6 text-[#1a5d5d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Help Centre</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse our FAQs and support articles
                  </p>
                  <Button variant="outline" size="sm">View Help</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-4">
                          Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsSubmitted(false)
                            setFormData({
                              name: "",
                              email: "",
                              company: "",
                              phone: "",
                              department: "",
                              message: "",
                            })
                          }}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Smith"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your Company Ltd"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="0161 123 4567"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="department">Department *</Label>
                          <Select
                            value={formData.department}
                            onValueChange={(value) => setFormData({ ...formData, department: value })}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept.value} value={dept.value}>
                                  {dept.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#1a5d5d] hover:bg-[#154a4a]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-[#1a5d5d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-[#1a5d5d]" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-muted rounded-lg h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would go here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
