import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Pet Shop Owner, Manchester",
    content:
      "Signature Pet Supplies has been our go-to supplier for over 5 years. Their range is unmatched and delivery is always on time.",
    rating: 5,
    initials: "SJ",
  },
  {
    id: 2,
    name: "James Williams",
    role: "Veterinary Clinic, Birmingham",
    content:
      "Excellent quality products and competitive prices. The trade account benefits are fantastic for our business.",
    rating: 5,
    initials: "JW",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Online Retailer, London",
    content:
      "The next-day delivery has transformed our business. Our customers love the quality and we love the margins!",
    rating: 5,
    initials: "ET",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#fdf6ee" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#2d2d2d" }}>Testimonials</h2>
          <div className="w-32 h-px mx-auto" style={{ backgroundColor: "#c8c0aa" }} />
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8"
              style={{
                border: "1px solid #ddd8cc",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <span className="text-6xl leading-none font-serif select-none" style={{ color: "#d4b896" }}>&ldquo;</span>
              <p className="mt-2 mb-5 leading-relaxed" style={{ color: "#4a4a3a" }}>{testimonial.content}</p>
              <div className="flex gap-1 mb-5">
                <span aria-label={`${testimonial.rating} out of 5 stars`} className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#5a7652", color: "#ffffff" }}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#2d2d2d" }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: "#7a7a6e" }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
