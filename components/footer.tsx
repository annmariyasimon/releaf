import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary font-bold">R</div>
              <Link href="/" className="font-bold text-2xl text-white">
                ReLeaf
              </Link>
            </div>
            <p className="text-white/80 text-sm">
              Innovative eco-friendly sanitation solutions across India since 1991
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <Facebook size={20} className="text-white" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <Linkedin size={20} className="text-white" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <Twitter size={20} className="text-white" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <Instagram size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#solutions" className="hover:text-white transition">Portable Toilets</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition">Bio Tanks</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition">Water Recycling</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#support" className="hover:text-white transition">Event Solutions</Link></li>
              <li><Link href="#support" className="hover:text-white transition">Construction Sites</Link></li>
              <li><Link href="#support" className="hover:text-white transition">24/7 Support</Link></li>
              <li><Link href="#support" className="hover:text-white transition">Maintenance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#stories" className="hover:text-white transition">Stories</Link></li>
              <li><Link href="#support" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>&copy; {currentYear} ReLeaf Sanitation Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>

        {/* Under Footer */}
        <div className="mt-8 text-center text-xs text-white/60">
          <p>Connecting everyone everywhere with sustainable sanitation solutions | A brand of ICF Group</p>
        </div>
      </div>
    </footer>
  )
}
