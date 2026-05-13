'use client'

import { useParams, notFound } from 'next/navigation'
import { solutionsData } from '@/lib/solutions-data'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer' // Assuming Footer exists
import { SolutionHero } from '@/components/solutions/SolutionHero'
import { SolutionOverview } from '@/components/solutions/SolutionOverview'
import { SolutionFeatures, SolutionProcess, SolutionMetrics, SolutionCTA } from '@/components/solutions/SolutionBlocks'

export default function SolutionPage() {
  const params = useParams()
  const slug = params.slug as string
  const data = solutionsData[slug]

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SolutionHero 
        headline={data.hero.headline}
        sub={data.hero.sub}
        badge={data.hero.badge}
        metric={data.hero.metric}
        chatPreview={data.hero.chatPreview}
        nodeGraph={data.hero.nodeGraph}
      />
      <SolutionOverview {...data.overview} />
      <SolutionFeatures features={data.features} />
      <SolutionProcess steps={data.steps} />
      <SolutionMetrics metrics={data.metrics} />
      <SolutionCTA category={data.category} />
      <Footer />
    </main>
  )
}
