import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
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
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full text-white">
      {/* Newsletter Section */}
      <div style={{ background: "linear-gradient(90deg, #012a1c 0%, #011e14 100%)" }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-emerald-100/70 text-sm">Product updates, new arrivals and trade news.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ backgroundColor: "#01160f" }} className="border-t border-emerald-950">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <span className="text-emerald-950 font-bold">VP</span>
                </div>
                <span className="font-bold text-lg">Signature Pet Supplies</span>
              </div>
              <p className="text-emerald-100/50 text-sm mb-4">
                UK&apos;s leading pet products wholesaler and distributor, supplying quality products to retailers nationwide.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:+441902924266" className="flex items-center gap-2 text-emerald-100/60 hover:text-emerald-400 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  01902 924266
                </a>
                <a href="mailto:info@vitalpetgroup.co.uk" className="flex items-center gap-2 text-emerald-100/60 hover:text-emerald-400 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-emerald-500" />
                  info@vitalpetgroup.co.uk
                </a>
                <div className="flex items-start gap-2 text-emerald-100/60">
                  <MapPin className="h-4 w-4 mt-0.5 text-emerald-500" />
                  <span>Wolverhampton, UK</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-emerald-100/50 hover:text-emerald-400 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Information</h4>
              <ul className="space-y-3">
                {footerLinks.information.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-emerald-100/50 hover:text-emerald-400 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-emerald-100/50 hover:text-emerald-400 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: "#000c08" }} className="border-t border-emerald-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-emerald-100/30">
            <p>&copy; {new Date().getFullYear()} Signature Pet Supplies. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-emerald-500 transition-colors duration-200">Terms</Link>
              <Link href="/privacy" className="hover:text-emerald-500 transition-colors duration-200">Privacy</Link>
              <Link href="/cookies" className="hover:text-emerald-500 transition-colors duration-200">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
