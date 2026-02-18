import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const stories = [
  {
    title: 'TTD Temple Festival 2024',
    category: 'Religious Event',
    description: 'Serving 100,000+ pilgrims with sustainable sanitation at India\'s largest temple',
    impact: '0 waste to landfill',
    image: '/event-sanitation.jpg'
  },
  {
    title: 'Tata Projects Construction',
    category: 'Infrastructure',
    description: 'Supporting mega infrastructure project with 500+ workers for 2 years',
    impact: '5M liters water saved',
    image: '/construction-site.jpg'
  },
  {
    title: 'Cochin Shipyard Community',
    category: 'Corporate Social',
    description: 'Providing sanitation to 5,000 families in coastal communities',
    impact: '100% coverage achieved',
    image: '/community-project.jpg'
  },
  {
    title: 'Kerala Tourism Summit',
    category: 'Tourist Event',
    description: 'Managing sanitation for India\'s largest tourism conference',
    impact: '99.8% satisfaction',
    image: '/product-showcase.jpg'
  },
  {
    title: 'HAL Aerospace Event',
    category: 'Aviation Industry',
    description: 'Premium sanitation solutions for aerospace industry conference',
    impact: 'Industry recognition',
    image: '/hero-sanitation.jpg'
  },
  {
    title: 'Village Development Project',
    category: 'Community Health',
    description: 'Building permanent sanitation infrastructure in rural communities',
    impact: '15 villages served',
    image: '/water-management.jpg'
  }
]

export default function Stories() {
  return (
    <section id="stories" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold mb-6">
            COMMUNITY IMPACT
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-secondary mb-8 text-balance">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            From transforming massive events to empowering rural communities—discover how ReLeaf creates lasting change across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-3xl border-3 border-primary/20 hover:border-primary transition shadow-lg hover:shadow-2xl transform hover:-translate-y-2 duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-125 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-black text-white bg-accent/90 px-4 py-2 rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-2xl font-black text-secondary mb-3 group-hover:text-primary transition line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-foreground/70 mb-6 text-base leading-relaxed">{story.description}</p>
                <div className="pt-6 border-t border-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-black text-primary">{story.impact}</span>
                  </div>
                  <ArrowRight size={20} className="text-primary group-hover:translate-x-2 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group px-12 py-4 border-3 border-primary text-primary font-black rounded-full hover:bg-primary hover:text-primary-foreground transition hover:scale-110 transform duration-300 text-lg">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  )
}
