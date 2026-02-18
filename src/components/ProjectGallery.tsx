import Image from 'next/image';

const projects = [
  {
    title: 'Custom French Drain Installation',
    location: 'Irving',
    image: '/images/services/french-drain.jpeg',
    category: 'French Drains'
  },
  {
    title: 'Gutter Drainage Solution',
    location: 'North Richland Hills',
    image: '/images/services/gutter-drainage.jpg',
    category: 'Rainwater'
  },
  {
    title: 'Surface Drainage Catch Basin',
    location: 'Keller',
    image: '/images/services/drainage.jpg',
    category: 'Surface Drains'
  },
  {
    title: 'Property Grading & Sod',
    location: 'Fort Worth',
    image: '/images/services/sod-installation.webp',
    category: 'Grading'
  },
  {
    title: 'River Rock Dry Creek Bed',
    location: 'Irving',
    image: '/images/services/river-rock.jpg',
    category: 'Drainage'
  },
  {
    title: 'French Drain System',
    location: 'Colleyville',
    image: '/images/services/french-drain.jpeg',
    category: 'French Drains'
  }
];

export default function ProjectGallery() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">Our Work</span>
            <h2 className="heading-2 mt-3 mb-4">Recent Projects in the Community</h2>
            <p className="text-p">
              Take a look at some of our recent drainage and property protection transformations across Irving and surrounding areas.
            </p>
          </div>
          <button className="btn-outline">
            View Full Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-forest-600 text-white text-xs font-bold rounded-full mb-3 tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-stone-300 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-forest-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}, TX
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

