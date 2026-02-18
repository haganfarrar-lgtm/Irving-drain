
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CTASection from '@/components/CTASection'
import ProjectGallery from '@/components/ProjectGallery'
import { generateSEO } from '@/lib/seo'
import { CheckCircle2, ShieldCheck, MapPin, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Drainage & French Drain Services in Grapevine, TX | Professional Drainage Solutions',
  description: 'Expert drainage services in Grapevine, TX. Professional property protection, hardscaping, irrigation, and outdoor design. Free estimates.',
  keywords: ['drainage Grapevine', 'drainage solutions Grapevine', 'drainage specialist Grapevine', 'Texas drainage'],
  canonical: 'https://irvingdrainagepros.com/cities/grapevine'
})

export default function GrapevinePage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title="Drainage Solutions in Grapevine, TX"
        subtitle="Your trusted local drainage specialist serving Grapevine and surrounding areas. Professional property protection, hardscaping, and design services."
        backgroundImage="/images/services/landscape-design.webp"
      />

      {/* Trust Indicators */}
      <div className="bg-white border-b border-stone-100 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-forest-700" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-1">Local Service</h4>
                <p className="text-stone-500 text-sm">Serving Grapevine</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-forest-700" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-1">Fully Insured</h4>
                <p className="text-stone-500 text-sm">Professional & Bonded</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                <Award className="text-forest-700" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-1">Expert Results</h4>
                <p className="text-stone-500 text-sm">15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Premier Drainage</span>
              <h2 className="heading-2 mt-3 mb-6">Expert Drainage for Grapevine Homeowners</h2>
              <p className="text-p mb-8">
                Are you looking for a professional drainage specialist in Grapevine, TX? Irving Drainage Pros is proud to extend our expert services to the Grapevine community. We understand the local climate and soil conditions, allowing us to create and maintain beautiful landscapes that thrive in North Texas.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Customized designs for Grapevine properties',
                  'Professional sod and mulch installation',
                  'Expert hardscape design and construction',
                  'Efficient irrigation and drainage solutions',
                  'Meticulous tree care and maintenance',
                  'Reliable year-round property maintenance'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 font-bold text-stone-800">
                    <CheckCircle2 className="text-forest-600 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="btn-primary inline-block">
                Free Estimate for Grapevine Residents
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/landscape-design.webp"
                  alt="Drainage Solutions in Grapevine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center text-white">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 leading-none mb-1">#1 Rated</div>
                    <div className="text-xs text-stone-500 font-bold uppercase tracking-widest">In Grapevine Area</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      <ProjectGallery />
      
      <CTASection />
    </div>
  );
}
