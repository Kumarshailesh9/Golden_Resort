import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import  Gallery  from "@/components/gallery"
import { VideoSection } from "@/components/video-section"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Blog } from "@/components/blog"
import { Directions } from "@/components/directions"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <VideoSection />
      <Testimonials />
      {/* <CTA /> */}
      <Blog />
      <Directions />
      <FAQ />
      <Footer />
      
      {/* Floating Action Buttons & Chat Widget */}
      <FloatingButtons />
      <ChatWidget />
    </main>
  )
}
