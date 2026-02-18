import Link from 'next/link'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import { generateSEO } from '@/lib/seo'
import { Clock, Calendar, ArrowRight, User } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateSEO({
  title: 'Drainage Journal | Tips & Advice for Irving',
  description: 'Expert drainage tips, French drain maintenance advice, and property protection guides for Irving homeowners. Stay informed with our latest articles.',
  keywords: ['drainage blog', 'French drain tips', 'property grading', 'water management', 'Irving drainage service'],
  canonical: 'https://irvingdrainagepros.com/blog'
})

const blogPosts = [
  {
    title: 'Protecting Your Foundation with French Drains',
    slug: 'protecting-foundation-french-drains',
    excerpt: 'Learn how French drains can prevent foundation damage by managing groundwater levels around your Irving property.',
    date: 'March 15, 2024',
    category: 'Drainage',
    readTime: '5 min read',
    image: '/images/services/french-drain.jpeg'
  },
  {
    title: 'The Importance of Proper Gutter Drainage',
    slug: 'importance-gutter-drainage',
    excerpt: 'Discover why underground downspout extensions are critical for keeping water away from your home during North Texas storms.',
    date: 'March 10, 2024',
    category: 'Rainwater',
    readTime: '7 min read',
    image: '/images/services/gutter-drainage.jpg'
  },
  {
    title: 'Top Drainage Solutions for 2024',
    slug: 'drainage-solutions-2024',
    excerpt: 'Explore the latest trends in water management, from decorative river rock swales to advanced catch basin systems.',
    date: 'March 5, 2024',
    category: 'Innovation',
    readTime: '6 min read',
    image: '/images/services/drainage.jpg'
  },
  {
    title: 'Benefits of Professional Property Grading',
    slug: 'benefits-professional-grading',
    excerpt: 'Learn how proper slope correction and yard leveling can eliminate low spots and improve your property\'s drainage performance.',
    date: 'February 28, 2024',
    category: 'Grading',
    readTime: '4 min read',
    image: '/images/services/french-drain.jpeg'
  },
  {
    title: 'Choosing Between Surface and French Drains',
    slug: 'surface-vs-french-drains',
    excerpt: 'We compare surface area drains and French drains to help you decide which solution is right for your property\'s specific water issues.',
    date: 'February 20, 2024',
    category: 'Expert Advice',
    readTime: '8 min read',
    image: '/images/services/drainage.jpg'
  },
  {
    title: 'Maintaining Your Drainage System',
    slug: 'maintaining-drainage-system',
    excerpt: 'Essential tips for keeping your French drains and catch basins clear and functioning properly throughout the year.',
    date: 'February 15, 2024',
    category: 'Maintenance',
    readTime: '6 min read',
    image: '/images/services/gutter-drainage.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title="Drainage Journal"
        subtitle="Expert tips, seasonal advice, and drainage inspiration for Irving homeowners. Stay informed with the latest best practices."
        backgroundImage="/images/services/french-drain.jpeg"
      />

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-forest-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-stone-400 text-sm font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-forest-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-forest-600" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-forest-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-stone-600 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                        <User size={20} />
                      </div>
                      <span className="text-sm font-bold text-stone-700 uppercase tracking-widest">Team expert</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-10 h-10 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="btn-outline">
              Load More Article
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
