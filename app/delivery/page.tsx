"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, MapPin, Package, AlertCircle, CheckCircle } from "lucide-react"

const deliveryOptions = [
  {
    title: "Standard Delivery",
    price: "FREE on orders over £150",
    time: "2-3 working days",
    description: "Our standard delivery service covers all UK mainland addresses.",
    icon: Truck,
  },
  {
    title: "Next Day Delivery",
    price: "£9.99",
    time: "Order by 2pm",
    description: "Place your order before 2pm for guaranteed next working day delivery.",
    icon: Clock,
  },
  {
    title: "Pallet Delivery",
    price: "From £29.99",
    time: "2-4 working days",
    description: "For larger orders, we offer cost-effective pallet delivery services.",
    icon: Package,
  },
]

const deliveryZones = [
  { zone: "UK Mainland", standard: "2-3 days", express: "Next day", cost: "FREE over £150" },
  { zone: "Scottish Highlands", standard: "3-5 days", express: "2 days", cost: "£15.00" },
  { zone: "Northern Ireland", standard: "3-5 days", express: "2 days", cost: "£20.00" },
  { zone: "Channel Islands", standard: "5-7 days", express: "3-4 days", cost: "£25.00" },
  { zone: "Isle of Man", standard: "4-6 days", express: "2-3 days", cost: "£20.00" },
]

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Delivery Information</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fast, reliable delivery across the UK with free shipping on orders over £150
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Delivery Options</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliveryOptions.map((option) => (
              <Card key={option.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <option.icon className="h-12 w-12 mx-auto text-[#1a5d5d] mb-2" />
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-[#1a5d5d] mb-2">{option.price}</p>
                  <p className="text-sm text-muted-foreground mb-4">{option.time}</p>
                  <p className="text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Delivery Zones & Times</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-background rounded-lg overflow-hidden shadow">
              <thead className="bg-[#1a5d5d] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Delivery Zone</th>
                  <th className="px-6 py-4 text-left">Standard Delivery</th>
                  <th className="px-6 py-4 text-left">Express Delivery</th>
                  <th className="px-6 py-4 text-left">Minimum Order</th>
                </tr>
              </thead>
              <tbody>
                {deliveryZones.map((zone, i) => (
                  <tr key={zone.zone} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                    <td className="px-6 py-4 font-medium">{zone.zone}</td>
                    <td className="px-6 py-4">{zone.standard}</td>
                    <td className="px-6 py-4">{zone.express}</td>
                    <td className="px-6 py-4">{zone.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  What We Deliver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    All pet food and treats
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Accessories and toys
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Health and grooming products
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Beds, cages, and housing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    Aquarium and reptile equipment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                    Delivery times exclude weekends and bank holidays
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                    Large or heavy items may require pallet delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                    Remote areas may incur additional charges
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                    Signature required on delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                    Track your order via your account dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-[#1a5d5d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions About Delivery?</h2>
          <p className="text-white/80 mb-6">Our customer service team is here to help</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01onal902924266" className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              <MapPin className="h-5 w-5" />
              01902 924266
            </a>
            <a href="mailto:delivery@vitalpetgroup.co.uk" className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              <MapPin className="h-5 w-5" />
              delivery@vitalpetgroup.co.uk
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
