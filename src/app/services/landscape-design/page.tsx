import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import ProjectGallery from '@/components/ProjectGallery'
import { generateSEO, generateServiceSchema } from '@/lib/seo'
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Landscape Grading Services | Professional Drainage in Irving',
  description: 'Expert property grading and slope correction to ensure proper water runoff. Protect your foundation with professional grading in Irving.',
  keywords: ['landscape grading', 'yard leveling', 'slope correction', 'drainage grading', 'Irving', 'Texas'],
  canonical: 'https://irvingdrainagepros.com/services/landscape-design',
  structuredData: generateServiceSchema('Landscape Grading', 'Expert property grading and slope correction to ensure proper water runoff.')
})

export default function LandscapeGradingPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title="Landscape Grading"
        subtitle="Expert property grading and slope correction to ensure proper water runoff away from your home and foundation."
        backgroundImage="/images/services/french-drain.jpeg"
      />

      {/* Trust Indicators */}
      <div className="bg-white border-b border-stone-100 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-forest-700" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-1">Fully Licensed</h4>
                <p className="text-stone-500 text-sm">Professional & Bonded</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="text-forest-700" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-1">Free Estimates</h4>
                <p className="text-stone-500 text-sm">Fast 24-Hour Response</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                <Award className="text-forest-700" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-1">Local Experts</h4>
                <p className="text-stone-500 text-sm">Serving Irving</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/french-drain.jpeg"
                  alt="Landscape Grading Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-forest-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                <span className="text-4xl font-bold">🏗️</span>
              </div>
            </div>
            
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Foundation Protection</span>
              <h2 className="heading-2 mt-3 mb-6">Professional Property Grading Solutions</h2>
              <p className="text-p mb-8">
                Proper grading is the first line of defense against water damage. Our team uses precision equipment to correct slopes and ensure all surface water is directed safely away from your Irving property.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Foundation Grading',
                  'Slope Correction',
                  'Yard Leveling',
                  'Erosion Control',
                  'Swale Construction',
                  'Guaranteed Runoff'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 font-bold text-stone-800">
                    <CheckCircle2 className="text-forest-600 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="btn-primary inline-block">
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Block */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8">Why Professional Grading Matters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <ShieldCheck className="text-forest-600" size={24} />
                Prevent Foundation Damage
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Negative grading can lead to water pooling around your foundation, causing cracks and structural issues. We fix the root cause.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <Award className="text-forest-600" size={24} />
                Eliminate Standing Water
              </h3>
              <p className="text-stone-600 leading-relaxed">
                By creating the proper pitch, we eliminate low spots where water collects, preventing muddy yards and mosquito breeding grounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery />
      
      <CTASection />
    </div>
  )
}
