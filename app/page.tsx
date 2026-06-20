import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustSection from "@/components/trust-section"
import ServicesSection from "@/components/services-section"
import HowItWorks from "@/components/how-it-works"
import BeforeAfterSection from "@/components/before-after-section"
import GallerySection from "@/components/gallery-section"
import WhyUsSection from "@/components/why-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingSection from "@/components/booking-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <HowItWorks />
      <BeforeAfterSection />
      <GallerySection />
      <WhyUsSection />
      <TestimonialsSection />
      <BookingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
