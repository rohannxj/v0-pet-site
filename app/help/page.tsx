"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Search,
  Package,
  Truck,
  CreditCard,
  User,
  RotateCcw,
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react"

const helpCategories = [
  {
    icon: Package,
    title: "Orders & Products",
    description: "Placing orders, product availability, order tracking",
    href: "#orders",
  },
  {
    icon: Truck,
    title: "Delivery & Shipping",
    description: "Delivery times, shipping costs, tracking",
    href: "#delivery",
  },
  {
    icon: CreditCard,
    title: "Payments & Invoices",
    description: "Payment methods, invoices, credit accounts",
    href: "#payments",
  },
  {
    icon: User,
    title: "Account & Login",
    description: "Account setup, login issues, password reset",
    href: "#account",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Return policy, refund process, damaged goods",
    href: "#returns",
  },
  {
    icon: HelpCircle,
    title: "General Enquiries",
    description: "Trade accounts, bulk orders, partnerships",
    href: "#general",
  },
]

const faqSections = [
  {
    id: "orders",
    title: "Orders & Products",
    faqs: [
      {
        question: "How do I place an order?",
        answer: "Log in to your trade account, browse our catalogue, add items to your basket, and proceed to checkout. You can also quick-order by entering product codes directly.",
      },
      {
        question: "Can I see product availability before ordering?",
        answer: "Yes, stock levels are shown on each product page. Items marked 'In Stock' are available for immediate dispatch. For out-of-stock items, you can request notification when they become available.",
      },
      {
        question: "Is there a minimum order quantity?",
        answer: "There is no minimum order value. However, to qualify for free delivery, orders must be over £150. Individual products may have minimum quantities for wholesale pricing.",
      },
      {
        question: "Can I amend or cancel my order?",
        answer: "Orders can be amended or cancelled within 1 hour of placement by contacting our customer service team. Once an order is dispatched, it cannot be cancelled.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & Shipping",
    faqs: [
      {
        question: "How much does delivery cost?",
        answer: "UK mainland delivery is free on orders over £150. Orders under £150 incur a £7.95 delivery charge. Scottish Highlands, Northern Ireland, and offshore locations may incur additional charges.",
      },
      {
        question: "How long will delivery take?",
        answer: "Orders placed before 2pm on working days are dispatched same day. Standard delivery is 2-3 working days. Next day delivery is available for an additional charge.",
      },
      {
        question: "Can I track my order?",
        answer: "Yes, you will receive a tracking number via email once your order is dispatched. You can also track orders through your account dashboard.",
      },
      {
        question: "Do you deliver to my area?",
        answer: "We deliver to all UK addresses. For international deliveries, please contact our sales team for a quote.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Invoices",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, PayPal, and bank transfer. Approved trade customers can also pay on credit terms.",
      },
      {
        question: "How do I apply for a credit account?",
        answer: "Credit accounts are available after 3 months of regular ordering. Contact our accounts team to apply. You will need to provide trade references and business accounts.",
      },
      {
        question: "Where can I find my invoices?",
        answer: "All invoices are available to download from your account dashboard under 'Order History'. We can also email invoices upon request.",
      },
      {
        question: "Do you charge VAT?",
        answer: "Yes, all prices shown are exclusive of VAT. VAT is added at checkout at the current rate of 20%.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Login",
    faqs: [
      {
        question: "How do I create a trade account?",
        answer: "Click 'Register' and complete the application form with your business details. Applications are typically approved within 24-48 hours.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Click 'Forgot Password' on the login page and enter your email address. You will receive a password reset link within minutes.",
      },
      {
        question: "Can I have multiple users on one account?",
        answer: "Yes, you can add additional users to your trade account. Contact customer service to set up sub-accounts with different permission levels.",
      },
      {
        question: "How do I update my business details?",
        answer: "Log in to your account, go to 'Account Settings', and update your business information. For changes to company name or VAT number, please contact us.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    faqs: [
      {
        question: "What is your returns policy?",
        answer: "Unused items in original packaging can be returned within 30 days for a full refund. Perishable items and opened products cannot be returned unless faulty.",
      },
      {
        question: "How do I return an item?",
        answer: "Contact customer service to request a returns authorization number. Pack items securely and include the RA number. Return shipping costs are the customer's responsibility unless items are faulty.",
      },
      {
        question: "What if my order arrives damaged?",
        answer: "Please report damaged items within 48 hours of delivery with photos. We will arrange a replacement or refund at no extra cost.",
      },
      {
        question: "How long do refunds take?",
        answer: "Refunds are processed within 5-7 working days of receiving returned items. Credit account customers will receive a credit note.",
      },
    ],
  },
  {
    id: "general",
    title: "General Enquiries",
    faqs: [
      {
        question: "Do you offer bulk discounts?",
        answer: "Yes, we offer volume discounts on larger orders. Contact our sales team for a custom quote on bulk purchases.",
      },
      {
        question: "Can you source specific products?",
        answer: "If you need a product we don't currently stock, let us know. We have relationships with hundreds of suppliers and can often source items on request.",
      },
      {
        question: "Do you offer drop shipping?",
        answer: "Yes, we offer drop shipping services for online retailers. Products can be shipped directly to your customers in plain packaging.",
      },
      {
        question: "How do I become a supplier?",
        answer: "We are always interested in new product lines. Please email our buying team with your product information and price lists.",
      },
    ],
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-[#1a5d5d] text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Centre</h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="search"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-foreground bg-white rounded-full"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {helpCategories.map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="block"
              >
                <Card className="h-full hover:shadow-md hover:border-[#1a5d5d] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1a5d5d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <category.icon className="h-5 w-5 text-[#1a5d5d]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            {faqSections.map((section) => (
              <div key={section.id} id={section.id} className="mb-8 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4 text-[#1a5d5d]">{section.title}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.id}-${index}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Still Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-[#1a5d5d]" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Mon-Fri 9am-5pm</p>
                  <a href="tel:01onal123456" className="text-[#1a5d5d] font-medium hover:underline">
                    01902 924266
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-[#1a5d5d]" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Response within 24hrs</p>
                  <a href="mailto:help@vitalpetgroup.co.uk" className="text-[#1a5d5d] font-medium hover:underline">
                    help@vitalpetgroup.co.uk
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MessageSquare className="h-8 w-8 mx-auto mb-4 text-[#1a5d5d]" />
                  <h3 className="font-semibold mb-2">Contact Form</h3>
                  <p className="text-muted-foreground text-sm mb-2">Send a detailed message</p>
                  <Link href="/contact" className="text-[#1a5d5d] font-medium hover:underline">
                    Go to Contact Page
                  </Link>
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
