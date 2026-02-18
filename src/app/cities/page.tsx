import Link from 'next/link'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import { generateSEO } from '@/lib/seo'
import { MapPin, ArrowRight, ShieldCheck, Star } from 'lucide-react'

export const metadata = generateSEO({
  title: 'Service Areas | Drainage Solutions in DFW & Irving',
  description: 'Professional drainage services in Irving and surrounding areas including Fort Worth, Arlington, Dallas, Irving, and more. Local experts serving DFW.',
  keywords: ['cities served', 'service areas', 'DFW metroplex', 'drainage areas', 'Irving'],
  canonical: 'https://irvingdrainagepros.com/cities'
})

const cities = [
  { name: 'Irving', slug: 'irving', dist: '0 miles' },
  { name: 'Fort Worth', slug: 'fort-worth', dist: '8 miles' },
  { name: 'Arlington', slug: 'arlington', dist: '15 miles' },
  { name: 'Dallas', slug: 'dallas', dist: '25 miles' },
  { name: 'Irving', slug: 'irving', dist: '20 miles' },
  { name: 'Grand Prairie', slug: 'grand-prairie', dist: '18 miles' },
  { name: 'Euless', slug: 'euless', dist: '12 miles' },
  { name: 'Bedford', slug: 'bedford', dist: '10 miles' },
  { name: 'Hurst', slug: 'hurst', dist: '9 miles' },
  { name: 'North Richland Hills', slug: 'north-richland-hills', dist: '6 miles' },
  { name: 'Keller', slug: 'keller', dist: '14 miles' },
  { name: 'Colleyville', slug: 'colleyville', dist: '16 miles' },
  { name: 'Southlake', slug: 'southlake', dist: '18 miles' },
  { name: 'Grapevine', slug: 'grapevine', dist: '22 miles' },
  { name: 'Flower Mound', slug: 'flower-mound', dist: '28 miles' },
  { name: 'Lewisville', slug: 'lewisville', dist: '30 miles' },
  { name: 'The Colony', slug: 'the-colony', dist: '32 miles' },
  { name: 'Frisco', slug: 'frisco', dist: '35 miles' },
  { name: 'Plano', slug: 'plano', dist: '38 miles' },
  { name: 'McKinney', slug: 'mckinney', dist: '42 miles' },
  { name: 'Denton', slug: 'denton', dist: '35 miles' }
]

export default function CitiesPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title="Service Areas"
        subtitle="We proudly serve Irving and the entire Dallas-Fort Worth metroplex. Our team is dedicated to providing premium drainage services within 50 miles of our home base."
        backgroundImage="/images/services/french-drain.jpeg"
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Where We Work</span>
            <h2 className="heading-2 mt-3 mb-6">Expert Drainage Solutions Near You</h2>
            <p className="text-p">
              From historic neighborhoods to modern developments, we bring professional drainage systems, French drains, and property grading to homes and businesses across North Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cities.map((city) => (
              <Link 
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:bg-white hover:shadow-xl hover:border-forest-200 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-forest-100 transition-colors">
                    <MapPin className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-forest-700 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">{city.dist}</p>
                  </div>
                </div>
                <ArrowRight className="text-stone-300 group-hover:text-forest-600 transition-all group-hover:translate-x-1" size={24} />
              </Link>
            ))}
          </div>

          {/* Trust Factors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-stone-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-forest-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Local Reputation</h3>
              <p className="text-stone-600">Built on years of satisfied customers and permanent drainage solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-forest-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Service Area Focus</h3>
              <p className="text-stone-600">We optimize our routes to ensure timely service and personalized attention.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-forest-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">DFW Wide Coverage</h3>
              <p className="text-stone-600">Providing the same level of premium service to all communities in our range.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
