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
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee-quad gap-12 hover:[animation-play-state:paused]">
          {[...features, ...features, ...features, ...features].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground whitespace-nowrap">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
