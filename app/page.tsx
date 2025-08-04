import { Hero } from '@/components/Hero'
import { QuickStats } from '@/components/QuickStats'
import { ResourceCategories } from '@/components/ResourceCategories'
import { NewsFeed } from '@/components/NewsFeed'
import { LeadCapture } from '@/components/LeadCapture'
import { PartnerLinks } from '@/components/PartnerLinks'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickStats />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ResourceCategories />
              <NewsFeed />
            </div>
            <div className="space-y-8">
              <LeadCapture />
              <PartnerLinks />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}