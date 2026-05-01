import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a5d5d] to-[#2a7a7a] p-8 min-h-[250px]">
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium mb-2">Limited Time Offer</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                20% Off All Dog Food
              </h3>
              <p className="text-white/80 mb-4">Premium nutrition at unbeatable prices</p>
              <Button asChild className="bg-white text-[#1a5d5d] hover:bg-white/90">
                <Link href="/shop/dog?category=food">Shop Now</Link>
              </Button>
            </div>
            <div
              className="absolute right-0 bottom-0 w-1/2 h-full opacity-20"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&auto=format&fit=crop&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Right Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2d6b4f] to-[#40916c] p-8 min-h-[250px]">
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium mb-2">New Arrivals</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                Spring Cat Collection
              </h3>
              <p className="text-white/80 mb-4">Fresh toys, beds and accessories</p>
              <Button asChild className="bg-white text-[#2d6b4f] hover:bg-white/90">
                <Link href="/shop/cat">Discover More</Link>
              </Button>
            </div>
            <div
              className="absolute right-0 bottom-0 w-1/2 h-full opacity-20"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
