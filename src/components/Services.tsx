import Link from 'next/link';
import { ArrowRight, Palette, Flower2, TreeDeciduous, Sprout, Layers, LayoutGrid, Droplets, Lightbulb, Sparkles } from 'lucide-react';

interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  icon: React.ElementType;
  category: 'drainage' | 'drainage' | 'maintenance' | 'specialty';
}

const services: Service[] = [
  {
    name: 'French Drains',
    slug: 'french-drain',
    shortDescription: 'Custom French drain systems to manage groundwater and protect your foundation.',
    icon: Droplets,
    category: 'drainage'
  },
  {
    name: 'Gutter Drainage',
    slug: 'gutter-drainage',
    shortDescription: 'Professional downspout extensions and underground drainage for rainwater management.',
    icon: Sparkles,
    category: 'drainage'
  },
  {
    name: 'Surface Drains',
    slug: 'drainage',
    shortDescription: 'Catch basins and area drains to eliminate standing water in your yard.',
    icon: Layers,
    category: 'drainage'
  },
  {
    name: 'Landscape Grading',
    slug: 'landscape-design',
    shortDescription: 'Expert property grading to ensure water flows away from your home.',
    icon: Palette,
    category: 'drainage'
  },
  {
    name: 'Sod Installation',
    slug: 'sod-installation',
    shortDescription: 'Instant green lawns with professional sod installation after drainage work.',
    icon: Sprout,
    category: 'drainage'
  },
  {
    name: 'River Rock Features',
    slug: 'river-rock',
    shortDescription: 'Beautiful and functional dry creek beds and rock drainage solutions.',
    icon: Flower2,
    category: 'drainage'
  },
  {
    name: 'Irrigation Systems',
    slug: 'irrigation',
    shortDescription: 'Efficient watering systems designed to work with your drainage.',
    icon: Droplets,
    category: 'specialty'
  },
  {
    name: 'Outdoor Lighting',
    slug: 'outdoor-lighting',
    shortDescription: 'Enhance your outdoor space with professional landscape lighting.',
    icon: Lightbulb,
    category: 'specialty'
  }
];

export default function Services() {
  const mainServices = services.filter(s => 
    ['french-drain', 'gutter-drainage', 'drainage', 'landscape-design', 'sod-installation', 'river-rock'].includes(s.slug)
  );
  
  const otherServices = services.filter(s => 
    !['french-drain', 'gutter-drainage', 'drainage', 'landscape-design', 'sod-installation', 'river-rock'].includes(s.slug)
  );

  return (
    <section className="section-padding bg-stone-50" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Professional Excellence</span>
          <h2 className="heading-2 mt-3 mb-6">
            Expert Drainage & French Drain Services
          </h2>
          <p className="text-p">
            From expert design to meticulous maintenance, we provide a full range of drainage services tailored for Irving properties.
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card group p-8 hover:border-forest-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest-600 group-hover:text-white transition-all duration-500">
                  <Icon size={32} className="text-forest-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-forest-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="text-forest-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={20} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Other Services */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-100 shadow-sm">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center md:text-left">Additional Specialized Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-forest-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                    <Icon size={24} className="text-stone-600 group-hover:text-forest-600" />
                  </div>
                  <span className="font-bold text-stone-800 group-hover:text-forest-700">{service.name}</span>
                </Link>
              );
            })}
            <Link 
              href="/services"
              className="flex items-center gap-4 p-4 rounded-xl bg-forest-600 text-white hover:bg-forest-700 transition-colors shadow-lg shadow-forest-100"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <LayoutGrid size={24} />
              </div>
              <span className="font-bold">View All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

