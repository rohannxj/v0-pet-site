import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WholesalerBanner() {
  return (
    <section style={{ backgroundColor: "#f5ede0", overflow: "visible", position: "relative" }}>
      <div className="relative py-16 md:py-20" style={{ overflow: "visible" }}>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#2d2d2d" }}>
            Your Trusted UK Wholesaler of Premium Pet Products
          </h2>
          <p className="text-sm md:text-base mb-8 leading-relaxed" style={{ color: "#6b6b5a" }}>
            We are your leading source of quality pet products for dogs, cats, small animals, and more. All of our
            products come from trusted brands and are stocked to meet the highest standards of quality and safety.
            Explore our extensive range of products that support the health and happiness of pets across the UK.
          </p>

          {/* Button row with flanking grain images */}
          <div className="relative flex items-center justify-center" style={{ overflow: "visible" }}>
            <img
              src="/grains-left-side.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute"
              style={{
                width: 320,
                right: "calc(50% + 140px)",
                bottom: "-70%",
                transform: "translateY(50%)",
                zIndex: 1,
              }}
            />
            <Button
              asChild
              className="relative"
              style={{ backgroundColor: "#6b7355", color: "#fff", border: "none", borderRadius: "6px", zIndex: 2 }}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <img
              src="/grains-right-side.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute"
              style={{
                width: 280,
                left: "calc(50% + 140px)",
                bottom: "-50%",
                transform: "translateY(50%)",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
