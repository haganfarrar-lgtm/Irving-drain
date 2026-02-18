import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import CTASection from '@/components/CTASection'
import { generateSEO } from '@/lib/seo'
import { Phone, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react'

export const metadata = generateSEO({
  title: 'Get A Quote | Irving Drainage Pros',
  description: 'Get your free drainage estimate today. Contact Irving Drainage Pros for design, hardscaping, sod, mulch, and property maintenance services.',
  keywords: ['contact drainage', 'free estimate', 'drainage quote', 'Irving contact', 'DFW drainage'],
  canonical: 'https://irvingdrainagepros.com/contact'
})

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Free Consultation</span>
            <h1 className="heading-2 mt-3 mb-6 text-center">Request Your Free No-Obligation Estimate</h1>
            <p className="text-p mx-auto">
              Ready to start your next drainage project? Fill out the form, and our team will get back to you within 24 hours to schedule a consultation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-forest-600 rounded-3xl transform rotate-1 scale-105 opacity-5" />
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-6">
                <Phone className="text-forest-600" size={28} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Call Us</h4>
              <p className="text-stone-600 mb-4">Immediate assistance for your project</p>
              <a href="tel:682-628-0778" className="text-2xl font-bold text-forest-700 hover:text-forest-800 transition-colors">
                (682) 628-0778
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-6">
                <Clock className="text-forest-600" size={28} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Response Time</h4>
              <p className="text-stone-600">We respond to all inquiries within</p>
              <span className="text-2xl font-bold text-forest-700">24 Hours</span>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-6">
                <ShieldCheck className="text-forest-600" size={28} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Our Guarantee</h4>
              <p className="text-stone-600">100% Satisfaction or we&apos;ll make it right</p>
              <span className="text-2xl font-bold text-forest-700">Protected</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
