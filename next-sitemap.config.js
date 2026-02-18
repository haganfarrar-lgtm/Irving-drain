/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://irvingdrainagepros.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for specific pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
      }
    }

    if (path.startsWith('/services/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
      }
    }

    if (path.startsWith('/cities/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
      }
    }

    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    }
  },
  additionalPaths: async (config) => {
    const result = []

    // Add service pages
    const services = [
      'border-edging',
      'brick-work',
      'cleanup',
      'concrete',
      'drainage',
      'flagstone',
      'french-drain',
      'gutter-drainage',
      'hardscaping',
      'irrigation',
      'landscape-design',
      'leaf-cleanup',
      'mulch',
      'outdoor-lighting',
      'paver-installation',
      'retaining-wall',
      'river-rock',
      'sod-installation',
      'tree-planting',
      'tree-trimming-pruning',
      'weed-barrier'
    ]

    services.forEach(service => {
      result.push({
        loc: `/services/${service}`,
        changefreq: 'weekly',
        priority: 0.8,
      })
    })

    // Add city pages
    const cities = [
      'irving',
      'fort-worth',
      'arlington',
      'dallas',
      'irving',
      'grand-prairie',
      'euless',
      'bedford',
      'hurst',
      'north-richland-hills',
      'keller',
      'colleyville',
      'southlake',
      'grapevine',
      'flower-mound',
      'lewisville',
      'the-colony',
      'frisco',
      'plano',
      'mckinney',
      'denton'
    ]

    cities.forEach(city => {
      result.push({
        loc: `/cities/${city}`,
        changefreq: 'monthly',
        priority: 0.6,
      })
    })

    return result
  },
}
