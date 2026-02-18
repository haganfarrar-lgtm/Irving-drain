import { Metadata } from 'next'

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export function generateSEO(props: SEOProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/og-image.jpg',
    structuredData
  } = props

  const fullTitle = `${title} | Irving Drainage Pros`
  const defaultKeywords = [
    'drainage',
    'french drain',
    'gutter drainage',
    'Irving',
    'Texas',
    'foundation protection',
    'landscape grading',
    'surface drains',
    'professional drainage'
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: 'Irving Drainage Pros' }],
    creator: 'Irving Drainage Pros',
    publisher: 'Irving Drainage Pros',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://irvingdrainagepros.com'),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Irving Drainage Pros',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@irvingdrainagepros',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    other: structuredData ? {
      'script:ld+json': JSON.stringify(structuredData)
    } : undefined,
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Irving Drainage Pros',
    'description': 'Professional drainage and French drain services in Irving and surrounding areas. Expert foundation protection, grading, and gutter drainage.',
    'url': 'https://irvingdrainagepros.com',
    'telephone': '+1-682-628-0778',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Irving, TX',
      'addressLocality': 'Irving',
      'addressRegion': 'TX',
      'postalCode': '75061',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 32.814,
      'longitude': -96.9489
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Irving',
        'addressRegion': 'TX'
      },
      {
        '@type': 'City',
        'name': 'Fort Worth',
        'addressRegion': 'TX'
      },
      {
        '@type': 'City',
        'name': 'Arlington',
        'addressRegion': 'TX'
      },
      {
        '@type': 'City',
        'name': 'Dallas',
        'addressRegion': 'TX'
      }
    ],
    'serviceType': [
      'Drainage',
      'French Drains',
      'Gutter Drainage',
      'Landscape Grading',
      'Sod Installation',
      'River Rock'
    ],
    'priceRange': '$$',
    'openingHours': 'Mo-Fr 08:00-18:00, Sa 08:00-16:00',
    'sameAs': [
      'https://www.facebook.com/irvingdrainagepros',
      'https://www.instagram.com/irvingdrainagepros'
    ]
  }
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Irving Drainage Pros'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Irving',
      'addressRegion': 'TX'
    }
  }
}
