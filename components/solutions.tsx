import { Zap, Droplets, Leaf, Building2, Users, Wrench } from 'lucide-react'
import Image from 'next/image'

const solutions = [
  {
    icon: Building2,
    title: 'Event Sanitation',
    description: 'Portable solutions for concerts, festivals, and large gatherings',
    image: '/event-sanitation.jpg'
  },
  {
    icon: Zap,
    title: 'Construction Sites',
    description: 'Durable infrastructure for ongoing construction projects',
    image: '/construction-site.jpg'
  },
  {
    icon: Droplets,
    title: 'Water Management',
    description: 'Advanced filtration and waste treatment systems',
    image: '/water-management.jpg'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Design',
    description: 'Sustainable materials and zero-waste processing',
    image: '/product-showcase.jpg'
  },
  {
    icon: Users,
    title: 'Community Projects',
    description: 'Support for villages and public health initiatives',
    image: '/community-project.jpg'
  },
  {
    icon: Wrench,
    title: '24/7 Maintenance',
    description: 'Round-the-clock support and maintenance services',
    image: '/hero-sanitation.jpg'
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
            OUR SOLUTIONS
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-secondary mb-8 text-balance">
            Built for Every Challenge
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Events to industrial sites, communities to enterprises—discover how ReLeaf powers sustainable sanitation everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-3xl border-3 border-border hover:border-primary hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-125 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="inline-block p-4 bg-accent/30 backdrop-blur-md rounded-2xl group-hover:bg-accent group-hover:scale-110 transition duration-300 transform">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-background">
                  <h3 className="text-2xl font-black text-secondary mb-3 group-hover:text-primary transition">{solution.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{solution.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition">
                    Learn More →
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
