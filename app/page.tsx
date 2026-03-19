import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { SocialProofSection } from '@/components/sections/social-proof'
import { BentoGridSection } from '@/components/sections/bento-grid'
import { WorkflowSection } from '@/components/sections/workflow'
import { FAQSection } from '@/components/sections/faq'
import { LeadFormSection } from '@/components/sections/lead-form'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <BentoGridSection />
      <WorkflowSection />
      <FAQSection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}
