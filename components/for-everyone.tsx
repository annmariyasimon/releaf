import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Portable Toilets',
    description: 'Premium portable sanitation units with eco-friendly waste management systems',
    highlight: 'Most Popular',
    image: '/product-showcase.jpg'
  },
  {
    title: 'Bio-Treatment Tanks',
    description: 'Advanced biological treatment solutions for wastewater management',
    highlight: 'Innovative',
    image: '/water-management.jpg'
  },
  {
    title: 'Water Recycling',
    description: 'State-of-the-art filtration systems for water conservation',
    highlight: 'Eco-Friendly',
    image: '/event-sanitation.jpg'
  },
  {
    title: 'Infrastructure Projects',
    description: 'Custom sanitation infrastructure for communities and institutions',
    highlight: 'Scalable',
    image: '/community-project.jpg'
  }
]

export default function ForEveryone() {
  return (
    <section id="for-everyone" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-4 py-2 bg-accent/30 text-accent rounded-full text-sm font-bold mb-6">
            PRODUCT LINEUP
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-secondary mb-8 text-balance">
            Engineered for Impact
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Every ReLeaf product is designed with innovation and sustainability at its core. Experience the future of sanitation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-3xl border-3 border-border hover:border-primary transition bg-background shadow-xl hover:shadow-2xl transform hover:-translate-y-2 duration-300">
              <div className="relative h-72 w-full overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-125 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-black px-4 py-2 bg-accent text-white rounded-full">
                    {service.highlight}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black text-secondary mb-3 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed text-lg">{service.description}</p>
                <div className="flex items-center text-primary font-bold group-hover:gap-3 transition-all gap-2 text-base">
                  Explore This
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-3xl p-16 text-center shadow-2xl">
          <h3 className="text-5xl font-black mb-6">Ready to Make a Difference?</h3>
          <p className="text-white/90 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
            Join thousands of organizations transforming sanitation. Let's discuss which ReLeaf solution powers your mission.
          </p>
          <button className="group px-12 py-4 bg-white text-primary font-black rounded-full hover:bg-white/90 transition hover:scale-110 transform duration-300 text-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}
