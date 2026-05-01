import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Pet Shop Owner, Manchester",
    content:
      "Vital Pet Group has been our go-to supplier for over 5 years. Their range is unmatched and delivery is always on time.",
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Testimonials</h2>
          <div className="w-32 h-px bg-gray-300 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 border-2 border-green-700"
              style={{ boxShadow: "6px 6px 0px #15803d" }}
            >
              <span className="text-6xl leading-none font-serif text-[#d4b896] select-none">&ldquo;</span>
              <p className="text-gray-700 mt-2 mb-5 leading-relaxed">{testimonial.content}</p>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
