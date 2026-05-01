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
    <section className="bg-[#f3f0e7] py-6 border-t-[12px] border-[#4b6344]">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee-quad gap-16 hover:[animation-play-state:paused]">
          {[...features, ...features, ...features, ...features].map((feature, i) => (
            <div key={i} className="flex flex-row items-center gap-3.5 flex-shrink-0">
              <div className="flex-shrink-0 w-11 h-11 bg-[#5a7652] rounded-full flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-[#f3f0e7]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-extrabold text-sm md:text-base text-[#5a7652] whitespace-nowrap leading-tight mb-0.5 tracking-tight">{feature.title}</h3>
                <p className="text-xs md:text-sm text-[#5a7652] whitespace-nowrap leading-tight font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
