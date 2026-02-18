import Link from 'next/link';
import { Phone, ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  cityName?: string;
  serviceName?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  cityName = 'Irving',
  serviceName,
  backgroundImage
}: HeroProps) {
  const defaultTitle = serviceName 
    ? `Professional ${serviceName} in ${cityName}, TX`
    : `Expert Drainage & French Drain Solutions in ${cityName}, Texas`;
  
  const defaultSubtitle = serviceName
    ? `Expert ${serviceName.toLowerCase()} services tailored for ${cityName} properties. Quality craftsmanship, attention to detail, and lasting results guaranteed.`
    : `Protect your property from water damage with expert French drains, grading, and drainage solutions. Serving ${cityName} and surrounding communities with excellence.`;

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage || '/images/services/french-drain.jpeg'})` }}
      >
        <div className="absolute inset-0 bg-forest-950/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-5 border border-white/20">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>Top-Rated Drainage Specialist in {cityName}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title || defaultTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-stone-200 mb-8 leading-relaxed max-w-2xl">
            {subtitle || defaultSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link 
              href="/contact" 
              className="btn-primary flex items-center justify-center gap-2 group text-lg px-10"
            >
              Get Your Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:682-628-0778" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 text-lg"
            >
              <Phone size={20} />
              (682) 628-0778
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-stone-200">
            <div className="flex items-center gap-2">
              <Shield className="text-forest-400" size={20} />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-forest-400" size={20} />
              <span className="font-medium">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-forest-400" size={20} />
              <span className="font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}

