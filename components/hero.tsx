import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Bold Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold">
                SUSTAINABILITY ADVENTURE AWAITS
              </div>
              <h1 className="text-7xl lg:text-8xl font-black text-secondary leading-tight text-balance">
                Transform Sanitation
              </h1>
              <p className="text-2xl lg:text-3xl font-bold text-primary">
                Experience the revolution
              </p>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              From massive events to remote communities—ReLeaf powers sustainable sanitation across India with innovation, impact, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-primary/90 transition hover:scale-105 transform duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-3 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-white transition hover:scale-105 transform duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual - Immersive Image */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-sanitation.jpg"
              alt="Transform sanitation with ReLeaf"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Floating Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-black text-primary">5K+</p>
                  <p className="text-xs font-bold text-secondary mt-1">Deployments</p>
                </div>
                <div className="border-l border-r border-secondary/20">
                  <p className="text-3xl font-black text-primary">10M</p>
                  <p className="text-xs font-bold text-secondary mt-1">Liters Saved</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">100K+</p>
                  <p className="text-xs font-bold text-secondary mt-1">Lives Changed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-sm font-bold text-secondary">SCROLL FOR MORE</span>
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
