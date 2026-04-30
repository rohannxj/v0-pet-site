import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Pet Shop Owner, Manchester",
    content: "Vital Pet Group has been our go-to supplier for over 5 years. Their range is unmatched and delivery is always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Williams",
    role: "Veterinary Clinic, Birmingham",
    content: "Excellent quality products and competitive prices. The trade account benefits are fantastic for our business.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Online Retailer, London",
    content: "The next-day delivery has transformed our business. Our customers love the quality and we love the margins!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground">Trusted by thousands of retailers across the UK</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-[#1a5d5d]/20 mb-4" />
                <p className="text-foreground mb-4 text-pretty">{testimonial.content}</p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
