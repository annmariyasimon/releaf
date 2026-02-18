'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="font-black text-2xl text-primary flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-black group-hover:scale-110 transition">R</div>
          <span className="group-hover:text-accent transition duration-300">ReLeaf</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          <Link href="#solutions" className="text-foreground font-bold hover:text-primary transition relative group">
            Solutions
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <Link href="#for-everyone" className="text-foreground font-bold hover:text-primary transition relative group">
            For Everyone
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <Link href="#stories" className="text-foreground font-bold hover:text-primary transition relative group">
            Stories
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <Link href="#support" className="text-foreground font-bold hover:text-primary transition relative group">
            Support
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <button className="group bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition font-bold hover:scale-110 transform duration-300">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-5 max-w-6xl mx-auto">
            <Link href="#solutions" className="block text-foreground font-bold hover:text-primary transition">
              Solutions
            </Link>
            <Link href="#for-everyone" className="block text-foreground font-bold hover:text-primary transition">
              For Everyone
            </Link>
            <Link href="#stories" className="block text-foreground font-bold hover:text-primary transition">
              Stories
            </Link>
            <Link href="#support" className="block text-foreground font-bold hover:text-primary transition">
              Support
            </Link>
            <button className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition font-bold">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
