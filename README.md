# Irving Drainage Pros Website

A professional, SEO-optimized landscaping website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to rank #1 for "drainage specialist in Irving" and serve the entire Dallas-Fort Worth metroplex.

## 🚀 Features

- **100% SEO Optimized** - Comprehensive meta tags, schema markup, sitemap, and local business structured data
- **Mobile Responsive** - Fully responsive design that works on all devices
- **Fast Performance** - Optimized with Next.js 15 and modern web standards
- **Local SEO Focus** - Pages for Irving and 21+ surrounding cities within 50 miles
- **21 Service Pages** - Detailed pages for all drainage services
- **Blog/Journal** - SEO-optimized content with landscaping tips and advice
- **Contact Integration** - Contact forms with GHL lead capture
- **Professional Design** - Clean, modern design with branding

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **SEO:** next-sitemap, custom SEO utilities
- **Icons:** Heroicons (SVG)
- **Deployment:** Ready for Vercel/Netlify

## 📁 Project Structure

```
irving-drainage-pros/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── cities/            # City service area pages
│   │   ├── services/          # Individual service pages
│   │   ├── blog/              # Blog/journal pages
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout with header/footer
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   └── lib/                   # Utilities
│       └── seo.ts             # SEO utilities and schema markup
├── public/                    # Static assets
│   └── images/               # Logo and hero images
├── next.config.ts            # Next.js configuration
├── next-sitemap.config.js    # SEO sitemap configuration
└── tailwind.config.ts        # Tailwind CSS configuration
```

## 🎯 SEO Strategy

### Local SEO Optimization
- **Primary Target:** "drainage specialist in Irving"
- **Service Area:** 21 cities within 50 miles
- **Local Schema:** Google My Business structured data
- **City Pages:** Individual SEO-optimized pages for each city

### Technical SEO
- **Meta Tags:** Comprehensive title, description, and keyword optimization
- **Schema Markup:** LocalBusiness, Service, and Organization schemas
- **Sitemap:** Auto-generated XML sitemap with priority and frequency settings
- **Robots.txt:** Optimized for search engine crawling
- **Canonical URLs:** Proper canonical tag implementation

### Content SEO
- **Service Pages:** Detailed, keyword-rich content for each service
- **Blog Content:** Regular updates with seasonal landscaping advice
- **Local Content:** City-specific information and local relevance
- **Internal Linking:** Strategic cross-linking between pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd irving-drainage-pros
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Generate sitemap (automatically included in build)
npm run build
```

## 📊 Performance Optimization

- **Image Optimization:** Next.js automatic image optimization
- **Lazy Loading:** Automatic lazy loading for images and components
- **Code Splitting:** Automatic code splitting by Next.js
- **CSS Optimization:** Tailwind CSS purging and minification
- **Font Optimization:** Next.js automatic font optimization

## 🔍 SEO Checklist

- [x] Homepage with primary keyword "drainage specialist in Irving"
- [x] 21 comprehensive service pages
- [x] 21+ city service area pages
- [x] Blog with seasonal content
- [x] Local business schema markup
- [x] XML sitemap with proper priorities
- [x] Robots.txt optimization
- [x] Mobile-responsive design
- [x] Fast loading times (< 3 seconds)
- [x] Internal linking strategy
- [x] Contact forms with lead capture
- [x] Professional branding and logo

## 📞 Contact Integration

- **Phone:** (682) 628-0778
- **GHL Integration:** Form submissions ready for CRM integration
- **Lead Capture:** Contact forms with service interest tracking
- **Follow-up:** Automated response system ready

## 🌍 Service Areas

**Primary:** Irving, TX
**Metro Area:** Dallas-Fort Worth (DFW) metroplex
**Coverage:** 21 cities within 50 miles including:
- Fort Worth, Arlington, Dallas, Irving
- Grand Prairie, Euless, Bedford, Hurst
- North Richland Hills, Keller, Colleyville
- Southlake, Grapevine, Flower Mound
- Lewisville, The Colony, Frisco, Plano
- McKinney, Denton

## 📈 Marketing Features

- **Lead Magnets:** Free consultation offers
- **Social Proof:** Service guarantees and testimonials ready
- **Call-to-Actions:** Strategic CTAs throughout the site
- **Local Branding:** Community-focused messaging
- **Seasonal Campaigns:** Year-round marketing opportunities

## 🔧 Customization

### Adding New Services
1. Create new page in `src/app/services/[service-name]/`
2. Update services array in main services page
3. Add to sitemap configuration

### Adding New Cities
1. Create new page in `src/app/cities/[city-name]/`
2. Update cities array in main cities page
3. Add to sitemap configuration

### Updating Branding
- Logo: Replace `public/images/logo.png`
- Colors: Update Tailwind config
- Content: Edit respective page components

## 📝 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
```

### Manual Server
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Irving Drainage Pros.

## 📞 Support

For technical support or questions:
- Email: info@irvingdrainagepros.com
- Phone: (682) 628-0778

---

**Built with ❤️ for Irving Drainage Pros**
*Optimized to rank #1 for "drainage specialist in Irving"*