'use client'

import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Support() {
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="support" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-secondary mb-6 text-balance">
            Need guidance?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We're here to help you find the perfect solution for your sanitation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-background rounded-2xl p-8 text-center border-2 border-border hover:border-primary transition">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <MessageSquare className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Chat with us</h3>
            <p className="text-foreground/70 text-sm">Get instant support from our team</p>
          </div>

          <div className="bg-background rounded-2xl p-8 text-center border-2 border-border hover:border-primary transition">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Call us</h3>
            <p className="text-foreground/70 text-sm">+91 (0) 484 2888 888</p>
          </div>

          <div className="bg-background rounded-2xl p-8 text-center border-2 border-border hover:border-primary transition">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Find a store</h3>
            <p className="text-foreground/70 text-sm">Visit us across India</p>
          </div>

          <div className="bg-background rounded-2xl p-8 text-center border-2 border-border hover:border-primary transition">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Clock className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">24/7 Support</h3>
            <p className="text-foreground/70 text-sm">Always here for you</p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Ready to transform sanitation?</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Let's shape the future of sustainable sanitation together. Tell us about your needs and we'll find the perfect ReLeaf solution.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition">
              Get in Touch
            </button>
          </div>

          {isClient && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name" 
              className="w-full px-6 py-3 rounded-lg text-secondary bg-white/10 placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40 transition"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email" 
              className="w-full px-6 py-3 rounded-lg text-secondary bg-white/10 placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40 transition"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your needs" 
              rows={4}
              className="w-full px-6 py-3 rounded-lg text-secondary bg-white/10 placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40 transition resize-none"
            />
            <button type="submit" className="w-full px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition">
              Send Message
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}
