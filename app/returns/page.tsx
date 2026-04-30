"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw, Package, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

const returnSteps = [
  {
    step: 1,
    title: "Contact Us",
    description: "Email or call our customer service team to request a returns authorisation number.",
  },
  {
    step: 2,
    title: "Pack Your Items",
    description: "Securely pack your items in their original packaging where possible.",
  },
  {
    step: 3,
    title: "Ship Your Return",
    description: "Send your parcel to our returns address using a tracked delivery service.",
  },
  {
    step: 4,
    title: "Receive Refund",
    description: "Once inspected, we will process your refund within 5-7 working days.",
  },
]

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <RotateCcw className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Returns Policy</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We want you to be completely satisfied with your purchase
          </p>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">30-Day Returns Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  We offer a 30-day returns policy on most products. If you&apos;re not completely satisfied with your purchase, 
                  you can return it within 30 days of delivery for a full refund or exchange.
                </p>
              </CardContent>
            </Card>

            {/* What Can/Cannot Be Returned */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-5 w-5" />
                    Eligible for Returns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Unopened food products within 30 days
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Unused accessories and toys
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Faulty or damaged items (any time)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Incorrect items received
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Items in original packaging
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <XCircle className="h-5 w-5" />
                    Not Eligible for Returns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      Opened or used food products
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      Perishable or refrigerated items
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      Clearance or sale items (final sale)
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      Personalised or custom orders
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      Items damaged by misuse
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Return Steps */}
            <h2 className="text-2xl font-bold text-center mb-8">How to Return an Item</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {returnSteps.map((step) => (
                <Card key={step.step} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#1a5d5d] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Refund Info */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#1a5d5d]" />
                  Refund Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Once we receive your return, it will be inspected within 2 working days. If approved, your refund will be processed:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#1a5d5d]" />
                    <span><strong>Credit/Debit Card:</strong> 5-7 working days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#1a5d5d]" />
                    <span><strong>PayPal:</strong> 3-5 working days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#1a5d5d]" />
                    <span><strong>Store Credit:</strong> Immediately</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card className="border-amber-200 bg-amber-50/50 mb-8">
              <CardContent className="flex items-start gap-4 pt-6">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-1">Important</h3>
                  <p className="text-sm text-amber-700">
                    You are responsible for return shipping costs unless the item is faulty or we made an error. 
                    We recommend using a tracked delivery service as we cannot be responsible for items lost in transit.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Need to start a return?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-[#1a5d5d] hover:bg-[#154a4a]">
                    Contact Customer Service
                  </Button>
                </Link>
                <Link href="/account">
                  <Button variant="outline">
                    View My Orders
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
