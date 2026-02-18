import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactForm from '@/components/ContactForm';
import { CheckCircle2, ShieldCheck, Clock, Award, Star, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero />

      {/* Trust Bar */}
      <div className="bg-white border-b border-stone-100 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3 text-stone-400 font-bold tracking-widest uppercase text-xs">
              <Star className="text-amber-400" size={20} />
              5-Star Rated
            </div>
            <div className="flex items-center justify-center gap-3 text-stone-400 font-bold tracking-widest uppercase text-xs">
              <ShieldCheck className="text-forest-600" size={20} />
              Fully Insured
            </div>
            <div className="flex items-center justify-center gap-3 text-stone-400 font-bold tracking-widest uppercase text-xs">
              <Clock className="text-forest-600" size={20} />
              Fast Estimates
            </div>
            <div className="flex items-center justify-center gap-3 text-stone-400 font-bold tracking-widest uppercase text-xs">
              <Award className="text-forest-600" size={20} />
              Local Experts
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/french-drain.jpeg"
                  alt="Professional Drainage Services in Irving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-forest-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="font-bold tracking-widest uppercase text-xs opacity-80">Years Experience</div>
              </div>
            </div>
            
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">About Our Company</span>
              <h2 className="heading-2 mt-3 mb-6">Your Premier Choice for Irving Drainage Solutions</h2>
              <p className="text-p mb-8">
                At Irving Drainage Pros, we believe your property should be protected from water damage and erosion. With over 15 years of experience serving our local community, we&apos;ve built a reputation for excellence in French drains, gutter drainage, and professional property grading.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Custom French Drains',
                  'Gutter Downspout Extensions',
                  'Surface & Area Drains',
                  'Expert Landscape Grading',
                  'River Rock Drainage',
                  'Professional Sod & Mulch'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-stone-800">
                    <CheckCircle2 className="text-forest-600" size={20} />
                    {item}
                  </div>
                ))}
              </div>
              
            <Link href="/contact" className="btn-primary inline-block">
              Learn More About Us
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      <CTASection />
      
      <ProjectGallery />

      {/* Contact Section */}
      <section className="section-padding bg-stone-50" id="contact">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
              <h2 className="heading-2 mt-3 mb-6">Request Your Free No-Obligation Estimate</h2>
              <p className="text-p mb-10">
                Ready to solve your property drainage issues? Fill out the form, and our team will get back to you within 24 hours to schedule a consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center shrink-0">
                    <Phone className="text-forest-600" size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-1">Immediate Assistance</h4>
                    <p className="text-stone-600 mb-1 font-medium">Call us today for a fast response</p>
                    <a href="tel:682-628-0778" className="text-2xl font-bold text-forest-700 hover:text-forest-800 transition-colors">
                      (682) 628-0778
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-forest-600" size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-1">Our Guarantee</h4>
                    <p className="text-stone-600 leading-relaxed max-w-sm">
                      We stand behind every project with a 100% satisfaction guarantee. We&apos;re not happy until your drainage issues are fully resolved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-forest-600 rounded-3xl transform rotate-3 scale-105 opacity-10" />
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
