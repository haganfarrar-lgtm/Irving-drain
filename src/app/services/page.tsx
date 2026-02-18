import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CTASection from '@/components/CTASection'
import ProjectGallery from '@/components/ProjectGallery'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Drainage & French Drain Services | Irving Drainage Solutions',
  description: 'Complete property drainage and water management solutions. We offer French drains, gutter drainage, surface drains, and expert landscape grading in Irving.',
  keywords: ['drainage services', 'French drains', 'gutter drainage', 'grading', 'sod installation', 'Irving drainage'],
  canonical: 'https://irvingdrainagepros.com/services'
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Hero 
        title="Our Services"
        subtitle="Expert drainage, French drains, and property grading services designed to protect your home and enhance your Irving property."
        backgroundImage="/images/services/french-drain.jpeg"
      />
      
      <Services />
      
      <ProjectGallery />
      
      <CTASection />
    </div>
  )
}
