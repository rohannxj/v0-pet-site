import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnnouncementBar } from "@/components/announcement-bar"
import { TopPicks } from "@/components/top-picks"
import { DealBanner } from "@/components/deal-banner"
import { PromoBanner } from "@/components/promo-banner"
import { PopularCategories } from "@/components/popular-categories"
import { BrandsSection } from "@/components/brands-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnnouncementBar />
<TopPicks />
        <DealBanner />
        <PromoBanner />
        <PopularCategories />
        <BrandsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
