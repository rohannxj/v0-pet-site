"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <h2>1. Introduction</h2>
            <p>
              Vital Pet Group (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our 
              website and use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact details</li>
              <li>Business name and registration number</li>
              <li>Email address and phone number</li>
              <li>Billing and delivery addresses</li>
              <li>Payment information</li>
              <li>Order history and preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfil your orders</li>
              <li>Manage your trade account</li>
              <li>Communicate with you about orders and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li><strong>Contract:</strong> To fulfil orders and manage your account</li>
              <li><strong>Legitimate interests:</strong> To improve our services and marketing</li>
              <li><strong>Consent:</strong> For marketing communications</li>
              <li><strong>Legal obligation:</strong> To comply with laws and regulations</li>
            </ul>

            <h2>5. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Delivery partners to fulfil orders</li>
              <li>Payment processors for transactions</li>
              <li>IT service providers</li>
              <li>Professional advisors</li>
              <li>Regulatory authorities when required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal 
              data against unauthorised access, alteration, disclosure, or destruction. However, no 
              internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfil the purposes for which 
              it was collected, comply with legal obligations, resolve disputes, and enforce agreements. 
              Account information is typically retained for 7 years after account closure.
            </p>

            <h2>8. Your Rights</h2>
            <p>Under data protection laws, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, please contact us using the details below.</p>

            <h2>9. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. For more information, 
              please see our Cookie Policy.
            </p>

            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these websites and encourage you to read their privacy policies.
            </p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our services are intended for businesses and are not directed at children under 18. 
              We do not knowingly collect personal information from children.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new policy on this page and updating the effective date.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact our Data Protection Officer:
            </p>
            <ul>
              <li>Email: privacy@vitalpetgroup.co.uk</li>
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
