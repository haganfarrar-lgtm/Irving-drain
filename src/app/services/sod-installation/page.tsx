
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import ProjectGallery from '@/components/ProjectGallery'
import { generateSEO, generateServiceSchema } from '@/lib/seo'
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Sod Installation Services | Professional Drainage Services in Irving',
  description: 'Professional sod installation for instant, beautiful landscapes. Expert installation and design in Irving and surrounding areas.',
  keywords: ['sod installation', 'drainage', 'Irving', 'Texas'],
  canonical: 'https://irvingdrainagepros.com/services/sod-installation',
  structuredData: generateServiceSchema('Sod Installation', 'Professional sod installation for instant, beautiful landscapes.')
})

export default function SodInstallationPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title="Sod Installation"
        subtitle="Professional sod installation to restore your lawn after drainage work. We provide high-quality sod solutions for residential and commercial properties in Irving."
        backgroundImage="/images/services/sod-installation.webp"
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
                  src="/images/services/sod-installation.webp"
                  alt="Sod Installation Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-forest-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                <span className="text-4xl font-bold">🌱</span>
              </div>
            </div>
            
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Post-Drainage Restoration</span>
              <h2 className="heading-2 mt-3 mb-6">Restore Your Lawn After Drainage Installation</h2>
              <p className="text-p mb-8">
                At Irving Drainage Pros, we don&apos;t just install drains; we restore your property. Our professional sod installation ensures your lawn looks better than ever once your drainage system is in place.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Professional Design',
                  'Expert Installation',
                  'Quality Materials',
                  'Attention to Detail',
                  'Custom Solutions',
                  'Guaranteed Results'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-stone-800">
                    <CheckCircle2 className="text-forest-600" size={20} />
                    {item}
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
          <h2 className="heading-2 mb-8">Why Choose Us For Your Sod Installation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <ShieldCheck className="text-forest-600" size={24} />
                Quality Workmanship
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Our team is trained to handle every aspect of sod installation with precision. We don&apos;t cut corners and we ensure every detail is perfect.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <Award className="text-forest-600" size={24} />
                Professional Results
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We use commercial-grade equipment and materials to provide professional results that enhance your curb appeal and property value.
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
