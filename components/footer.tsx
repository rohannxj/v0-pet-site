import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

const footerLinks = {
  shop: [
    { name: "Dog Products", href: "/shop/dog" },
    { name: "Cat Products", href: "/shop/cat" },
    { name: "Small Animals", href: "/shop/small-animal" },
    { name: "Bird Products", href: "/shop/bird" },
    { name: "Fish & Reptile", href: "/shop/fish-reptile" },
    { name: "Equine", href: "/shop/equine" },
  ],
  information: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Delivery Information", href: "/delivery" },
    { name: "Returns Policy", href: "/returns" },
    { name: "Trade Accounts", href: "/trade-account" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "FAQs", href: "/help" },
    { name: "Track Order", href: "/track-order" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a3a3a] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#1a5d5d] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-white/80 text-sm">Get the latest deals, new products and exclusive offers</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1a5d5d] font-bold">VP</span>
              </div>
              <span className="font-bold text-lg">Vital Pet Group</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              UK&apos;s leading pet products wholesaler and distributor, supplying quality products to retailers nationwide.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+441onal123456" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Phone className="h-4 w-4" />
                01902 924266
              </a>
              <a href="mailto:info@vitalpetgroup.co.uk" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Mail className="h-4 w-4" />
                info@vitalpetgroup.co.uk
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Wolverhampton, UK</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Payment Methods</h4>
              <div className="flex flex-wrap gap-2">
                {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                  <div
                    key={method}
                    className="bg-white/10 px-3 py-1 rounded text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Vital Pet Group. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
