'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'French Drains', slug: 'french-drain' },
    { name: 'Gutter Drainage', slug: 'gutter-drainage' },
    { name: 'Surface Drains', slug: 'drainage' },
    { name: 'Landscape Grading', slug: 'landscape-design' },
    { name: 'Sod Installation', slug: 'sod-installation' },
    { name: 'River Rock', slug: 'river-rock' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <span className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight group-hover:text-forest-700 transition-colors">
              Irving <span className="text-forest-600">Drainage Pros</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="font-semibold transition-colors hover:text-forest-600 text-black"
            >
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className="font-semibold flex items-center gap-1 transition-colors hover:text-forest-600 text-black"
              >
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
                <div className="bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-6 py-3 text-black hover:bg-forest-50 hover:text-forest-700 transition-colors font-medium border-b border-stone-50 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-6 py-4 bg-stone-50 text-forest-700 hover:bg-forest-100 transition-colors font-bold text-center"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/cities" 
              className="font-semibold transition-colors hover:text-forest-600 text-black"
            >
              Service Areas
            </Link>
            <Link 
              href="/blog" 
              className="font-semibold transition-colors hover:text-forest-600 text-black"
            >
              Journal
            </Link>
            <Link 
              href="/contact" 
              className="font-semibold transition-colors hover:text-forest-600 text-black"
            >
              Contact
            </Link>

            <a
              href="tel:682-628-0778"
              className="btn-primary flex items-center gap-2 py-2.5 px-6 ml-4"
            >
              <Phone size={18} />
              (682) 628-0778
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="tel:682-628-0778"
              className="p-2 rounded-full transition-colors bg-forest-100 text-forest-700"
            >
              <Phone size={20} />
            </a>
            <button
              className="p-2 rounded-lg transition-colors text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container-custom py-8 h-full overflow-y-auto">
            <nav className="flex flex-col gap-6">
              <Link href="/" className="text-2xl font-bold text-stone-900" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Our Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-xl font-semibold text-stone-800 flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                      <ChevronDown size={20} className="-rotate-90 text-stone-400" />
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-xl font-bold text-forest-600 mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services →
                  </Link>
                </div>
              </div>

              <Link href="/cities" className="text-2xl font-bold text-stone-900" onClick={() => setIsMenuOpen(false)}>
                Service Areas
              </Link>
              <Link href="/blog" className="text-2xl font-bold text-stone-900" onClick={() => setIsMenuOpen(false)}>
                Journal
              </Link>
              <Link href="/contact" className="text-2xl font-bold text-stone-900" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

              <div className="pt-8 border-t border-stone-100">
                <a
                  href="tel:682-628-0778"
                  className="btn-primary w-full flex items-center justify-center gap-3 text-xl py-5"
                >
                  <Phone size={24} />
                  (682) 628-0778
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
