import Link from 'next/link'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import ProjectGallery from '@/components/ProjectGallery'
import { generateSEO } from '@/lib/seo'
import { Clock, Calendar, ArrowLeft, User } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    title: 'Protecting Your Foundation with French Drains',
    slug: 'protecting-foundation-french-drains',
    excerpt: 'Learn how French drains can prevent foundation damage by managing groundwater levels around your Irving property.',
    content: `
      <p>Foundation issues are a common and expensive problem for homeowners in Irving. One of the most effective ways to prevent these issues is by managing the groundwater levels around your home using a French drain system.</p>
      
      <h3>What is a French Drain?</h3>
      <p>A French drain is a trench filled with gravel or rock and a perforated pipe that redirects surface water and groundwater away from an area. It's designed to collect water that would otherwise pool near your foundation.</p>
      
      <h3>How It Protects Your Home</h3>
      <p>By providing an easy path for water to flow, a French drain prevents hydrostatic pressure from building up against your foundation walls. This reduces the risk of cracks, shifting, and water intrusion in your basement or crawl space.</p>
      
      <h3>Professional Installation Matters</h3>
      <p>Proper sloping and placement are critical for a French drain to function correctly. Our team at Irving Drainage Pros ensures that every system is custom-designed for the specific topography of your property.</p>
    `,
    date: 'March 15, 2024',
    category: 'Drainage',
    readTime: '5 min read',
    image: '/images/services/french-drain.jpeg'
  },
  {
    title: 'The Importance of Proper Gutter Drainage',
    slug: 'importance-gutter-drainage',
    excerpt: 'Discover why underground downspout extensions are critical for keeping water away from your home during North Texas storms.',
    content: `
      <p>Your gutters are designed to collect rainwater from your roof, but if that water just dumps out at the base of your walls, it can still cause significant damage. Proper gutter drainage is essential for a complete water management strategy.</p>
      
      <h3>The Downspout Problem</h3>
      <p>Standard downspouts often release water directly next to the foundation. During a heavy North Texas storm, this can lead to thousands of gallons of water saturating the soil around your home's base.</p>
      
      <h3>Underground Extensions</h3>
      <p>By extending your downspouts underground and connecting them to a dedicated drainage line, we can carry that water far away from your foundation to a safe discharge point or pop-up emitter.</p>
      
      <h3>Integrated Systems</h3>
      <p>We often integrate gutter drainage with French drains or surface drains to provide a comprehensive solution that handles both roof runoff and ground water simultaneously.</p>
    `,
    date: 'March 10, 2024',
    category: 'Rainwater',
    readTime: '7 min read',
    image: '/images/services/gutter-drainage.jpg'
  },
  {
    title: 'Top Drainage Solutions for 2024',
    slug: 'drainage-solutions-2024',
    excerpt: 'Explore the latest trends in water management, from decorative river rock swales to advanced catch basin systems.',
    content: `
      <p>Drainage doesn't have to be purely utilitarian. In 2024, we're seeing a move toward drainage solutions that are both highly functional and aesthetically pleasing.</p>
      
      <h3>Decorative Swales</h3>
      <p>Using river rock and native plants, we can create dry creek beds that serve as beautiful landscape features while providing a natural path for water to flow during rain events.</p>
      
      <h3>Advanced Catch Basins</h3>
      <p>Modern catch basins are more durable and easier to maintain than ever. They are essential for collecting surface water from low spots in your yard and preventing large pools from forming.</p>
      
      <h3>Permeable Solutions</h3>
      <p>We're also seeing an increase in permeable landscape features that allow water to soak into the ground naturally while still providing a stable surface for walking or sitting.</p>
    `,
    date: 'March 5, 2024',
    category: 'Innovation',
    readTime: '6 min read',
    image: '/images/services/drainage.jpg'
  },
  {
    title: 'Benefits of Professional Property Grading',
    slug: 'benefits-professional-grading',
    excerpt: 'Learn how proper slope correction and yard leveling can eliminate low spots and improve your property\'s drainage performance.',
    content: `
      <p>Before installing pipes or drains, the most important step in drainage management is ensuring your property has the correct grade. Professional grading sets the foundation for all other water management efforts.</p>
      
      <h3>Correcting Negative Grade</h3>
      <p>Negative grading occurs when the land slopes toward your home rather than away from it. This is a primary cause of foundation damage and must be corrected through professional leveling.</p>
      
      <h3>Yard Leveling</h3>
      <p>Low spots in your yard can become swampy, muddy messes that take days to dry out. By carefully grading these areas, we can eliminate standing water and make your yard usable again.</p>
      
      <h3>Erosion Control</h3>
      <p>In addition to directing water, proper grading helps control erosion by slowing down the flow of water and ensuring it doesn't wash away your topsoil or mulch.</p>
    `,
    date: 'February 28, 2024',
    category: 'Grading',
    readTime: '4 min read',
    image: '/images/services/french-drain.jpeg'
  },
  {
    title: 'Choosing Between Surface and French Drains',
    slug: 'surface-vs-french-drains',
    excerpt: 'We compare surface area drains and French drains to help you decide which solution is right for your property\'s specific water issues.',
    content: `
      <p>Not all water problems are the same, and different issues require different drainage solutions. Understanding the difference between surface drains and French drains is key to fixing your yard.</p>
      
      <h3>When to Use Surface Drains</h3>
      <p>Surface drains, like catch basins, are best for collecting water that pools on top of the ground in specific low areas. They are designed to handle large volumes of water quickly during a storm.</p>
      
      <h3>When to Use French Drains</h3>
      <p>French drains are best for managing groundwater that saturates the soil. If your yard stays soggy for days after a rain, or if you have moisture in your crawl space, a French drain is likely the answer.</p>
      
      <h3>The Comprehensive Approach</h3>
      <p>Often, the best solution is a combination of both systems to ensure that both surface runoff and underground saturation are addressed.</p>
    `,
    date: 'February 20, 2024',
    category: 'Expert Advice',
    readTime: '8 min read',
    image: '/images/services/drainage.jpg'
  },
  {
    title: 'Maintaining Your Drainage System',
    slug: 'maintaining-drainage-system',
    excerpt: 'Essential tips for keeping your French drains and catch basins clear and functioning properly throughout the year.',
    content: `
      <p>A drainage system is an investment in your property's future, but like any mechanical system, it requires a small amount of regular maintenance to stay in top shape.</p>
      
      <h3>Keep Inlets Clear</h3>
      <p>Regularly check catch basin grates and pop-up emitters for leaves, mulch, or debris. A blocked inlet can cause your entire system to back up during a heavy rain.</p>
      
      <h3>Flushing the System</h3>
      <p>Once or twice a year, it's a good idea to flush your drainage lines with a garden hose to clear out any small sediment that may have accumulated over time.</p>
      
      <h3>Check Discharge Points</h3>
      <p>Ensure that the area where your drain exits is clear and hasn't been blocked by new drainage or soil buildup. Water needs a clear path to leave your property.</p>
    `,
    date: 'February 15, 2024',
    category: 'Maintenance',
    readTime: '6 min read',
    image: '/images/services/gutter-drainage.jpg'
  }
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) return {}

  return generateSEO({
    title: `${post.title} | Drainage Journal`,
    description: post.excerpt,
    canonical: `https://irvingdrainagepros.com/blog/${post.slug}`
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title={post.title}
        subtitle={`${post.category} • ${post.date} • ${post.readTime}`}
        backgroundImage={post.image}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-forest-600 font-bold uppercase tracking-widest text-sm mb-12 hover:text-forest-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Journal
            </Link>

            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-12">
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-100 pb-4">Written By</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-forest-100 rounded-2xl flex items-center justify-center text-forest-600">
                        <User size={24} />
                      </div>
                      <div>
                        <span className="block font-bold text-stone-900">Team Expert</span>
                        <span className="block text-xs text-stone-500 font-medium">Field Specialist</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-100 pb-4">Category</h4>
                    <span className="inline-block bg-forest-50 text-forest-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>

                  <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                    <h4 className="font-bold text-stone-900 mb-4">Need Expert Help?</h4>
                    <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                      Our team is ready to help you implement these tips on your property.
                    </p>
                    <Link href="/contact" className="btn-primary w-full text-center py-3 text-sm">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg prose-stone max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-stone-900 prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-16 border-t border-stone-100">
                  <h3 className="text-2xl font-bold text-stone-900 mb-8">Share this Article</h3>
                  <div className="flex gap-4">
                    {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                      <button key={platform} className="px-6 py-2 rounded-xl bg-stone-50 text-stone-600 font-bold text-sm hover:bg-forest-600 hover:text-white transition-all duration-300">
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery />
      
      <CTASection />
    </div>
  )
}
