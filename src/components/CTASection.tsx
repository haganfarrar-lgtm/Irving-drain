import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-forest-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-forest-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-300 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Solve Your Irving Drainage Issues?
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get your free, no-obligation drainage estimate today. Our team of experts is ready to protect your property from water damage.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-white text-forest-900 hover:bg-forest-50 font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-xl text-lg flex items-center justify-center gap-3"
            >
              <Calendar size={24} />
              Book Free Estimate
            </Link>
            
            <a 
              href="tel:682-628-0778" 
              className="w-full sm:w-auto bg-forest-800 text-white hover:bg-forest-700 border border-forest-600 font-bold py-5 px-10 rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              (682) 628-0778
            </a>
          </div>

          <p className="mt-10 text-forest-300 font-medium">
            Serving Irving, TX and surrounding 50-mile areas.
          </p>
        </div>
      </div>
    </section>
  );
}

