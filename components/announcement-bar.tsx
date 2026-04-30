import { Truck, Shield, Clock, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free UK Delivery",
    description: "On orders over £150",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium pet products",
  },
  {
    icon: Clock,
    title: "Next Day Delivery",
    description: "Order before 2pm",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated team",
  },
]

export function AnnouncementBar() {
  return (
    <section className="bg-muted py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1a5d5d] rounded-full flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
