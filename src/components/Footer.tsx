import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink, Clock } from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'French Drains', slug: 'french-drain' },
    { name: 'Gutter Drainage', slug: 'gutter-drainage' },
    { name: 'Surface Drains', slug: 'drainage' },
    { name: 'Landscape Grading', slug: 'landscape-design' },
    { name: 'Sod Installation', slug: 'sod-installation' },
    { name: 'River Rock', slug: 'river-rock' },
  ]

  const cities = [
    'Irving',
    'Fort Worth',
    'Arlington',
    'Dallas',
    'Grand Prairie',
    'Euless',
    'Bedford',
    'Hurst',
    'North Richland Hills',
    'Keller',
    'Colleyville',
    'Coppell'
  ]

  return (
    <footer className="bg-stone-950 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Irving <span className="text-forest-500">Drainage Pros</span>
              </span>
            </Link>
            <p className="text-stone-400 text-lg leading-relaxed">
              Serving Irving and the DFW metroplex with expert drainage, French drains, and landscape grading services for over 15 years.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-stone-400 hover:bg-forest-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              Our Services
              <span className="w-10 h-1 bg-forest-600 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-stone-400 hover:text-forest-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-stone-800 rounded-full group-hover:bg-forest-600 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-forest-500 font-bold hover:text-forest-400 flex items-center gap-2 group"
                >
                  All Services
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities We Serve */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              Service Areas
              <span className="w-10 h-1 bg-forest-600 rounded-full" />
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {cities.map((city) => (
                <li key={city.toLowerCase().replace(/\s+/g, '-')}>
                  <Link
                    href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-stone-400 hover:text-forest-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-stone-800 rounded-full group-hover:bg-forest-600 transition-colors" />
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              Get In Touch
              <span className="w-10 h-1 bg-forest-600 rounded-full" />
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-forest-500" size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Call Us</span>
                  <a href="tel:682-628-0778" className="text-lg font-bold hover:text-forest-400 transition-colors">
                    (682) 628-0778
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-forest-500" size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Hours</span>
                  <span className="text-lg font-bold">
                    Mon - Sat: 8am - 6pm
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-forest-500" size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Visit Us</span>
                  <span className="text-lg font-bold">
                    Irving, TX 75061
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Irving Drainage Pros. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-stone-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-stone-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
