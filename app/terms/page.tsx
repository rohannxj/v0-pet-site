"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white/80">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Vital Pet Group. These terms and conditions outline the rules and regulations 
              for the use of our website and services. By accessing this website, we assume you accept 
              these terms and conditions in full.
            </p>

            <h2>2. Trade Account Terms</h2>
            <p>
              Our services are available exclusively to registered trade customers. To open a trade account, 
              you must be a legitimate business operating in the pet industry. We reserve the right to 
              refuse or terminate any account at our discretion.
            </p>
            <ul>
              <li>All orders are subject to acceptance and availability</li>
              <li>Minimum order values may apply</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment terms are as agreed upon account opening</li>
            </ul>

            <h2>3. Product Information</h2>
            <p>
              We endeavour to ensure that all product descriptions, images, and prices are accurate. 
              However, we do not warrant that product descriptions or other content is error-free. 
              If you receive a product that does not match its description, your sole remedy is to 
              return it in unused condition.
            </p>

            <h2>4. Pricing and Payment</h2>
            <p>
              All prices displayed are exclusive of VAT unless otherwise stated. Payment must be made 
              according to the terms agreed upon account opening. We accept various payment methods 
              including bank transfer, credit/debit cards, and PayPal.
            </p>
            <ul>
              <li>Invoices are due within agreed payment terms</li>
              <li>Late payments may incur interest charges</li>
              <li>We reserve the right to suspend accounts with overdue balances</li>
            </ul>

            <h2>5. Delivery</h2>
            <p>
              Delivery times are estimates and not guaranteed. We are not liable for any delays caused 
              by circumstances beyond our control. Risk of loss or damage passes to you upon delivery. 
              Please inspect goods upon receipt and report any issues within 48 hours.
            </p>

            <h2>6. Returns and Refunds</h2>
            <p>
              Returns are accepted in accordance with our Returns Policy. Items must be returned in 
              their original condition and packaging. Refunds will be processed within 5-7 working 
              days of receiving the returned goods.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property 
              of Vital Pet Group or our licensors and is protected by copyright laws. You may not 
              reproduce, distribute, or use any content without our written permission.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Vital Pet Group shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your 
              use of our services or products.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy. Please review our 
              Privacy Policy to understand our practices regarding your personal data.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to this website. Your continued use of our services constitutes 
              acceptance of any modified terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England 
              and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts 
              of England and Wales.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: legal@vitalpetgroup.co.uk</li>
              <li>Phone: 01902 924266</li>
              <li>Address: Wolverhampton, UK</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
