"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie } from "lucide-react"

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.",
    examples: ["Session cookies", "Authentication cookies", "Security cookies"],
    required: true,
  },
  {
    name: "Performance Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.",
    examples: ["Google Analytics", "Page load time tracking", "Error logging"],
    required: false,
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.",
    examples: ["Language preferences", "Region settings", "Saved cart items"],
    required: false,
  },
  {
    name: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
    examples: ["Retargeting cookies", "Social media cookies", "Advertising pixels"],
    required: false,
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a5d5d] to-[#2a7d7d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Cookie className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-white/80">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-sm mb-12">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently 
                and provide information to website owners.
              </p>
              <p>
                We use cookies and similar technologies to enhance your experience on our website, 
                understand how you use our services, and improve our offerings.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6 mb-12">
              {cookieTypes.map((type) => (
                <Card key={type.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{type.name}</span>
                      {type.required && (
                        <span className="text-xs bg-[#1a5d5d] text-white px-2 py-1 rounded">
                          Required
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    <div>
                      <p className="text-sm font-medium mb-2">Examples:</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {type.examples.map((example) => (
                          <li key={example}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-sm">
              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. 
                However, if you limit the ability of websites to set cookies, you may affect your 
                overall user experience.
              </p>
              <p>To manage cookies in your browser:</p>
              <ul>
                <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy &gt; Cookies</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not 
                control the use of these cookies. The third-party service providers are responsible 
                for the cookies they set on our site.
              </p>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for operational, legal, or regulatory reasons. Please revisit this page regularly 
                to stay informed about our use of cookies.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <ul>
                <li>Email: privacy@vitalpetgroup.co.uk</li>
                <li>Phone: 01902 924266</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
