import Header from '@/components/header'
import Hero from '@/components/hero'
import Solutions from '@/components/solutions'
import ForEveryone from '@/components/for-everyone'
import Stories from '@/components/stories'
import Support from '@/components/support'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <ForEveryone />
      <Stories />
      <Support />
      <Footer />
    </main>
  )
}
