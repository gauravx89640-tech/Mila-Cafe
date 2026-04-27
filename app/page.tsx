import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { FeatureCards } from "@/components/feature-cards"
import { VisitSection } from "@/components/visit-section"
import { AboutSection } from "@/components/about-section"
import { LoyaltySection } from "@/components/loyalty-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <FeatureCards />
      <VisitSection />
      <AboutSection />
      <LoyaltySection />
      <SocialSection />
      <Footer />
    </main>
  )
}
