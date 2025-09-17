import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ExternalLink } from 'lucide-react';

export function Sitemap() {
  const pages = [
    { name: 'Home', url: '/', description: 'Main landing page showcasing our services and portfolio' },
    { name: 'Services', url: '/services', description: 'Complete list of our web design and development services' },
    { name: 'Portfolio', url: '/portfolio', description: 'Showcase of our completed projects and case studies' },
    { name: 'About Us', url: '/about', description: 'Learn about our team, mission, and company values' },
    { name: 'Blog', url: '/blog', description: 'Latest insights, tips, and industry trends' },
    { name: 'Contact', url: '/contact', description: 'Get in touch with our team for project inquiries' },
    { name: 'Privacy Policy', url: '/privacy-policy', description: 'How we collect, use, and protect your information' },
    { name: 'Terms of Service', url: '/terms-of-service', description: 'Terms and conditions for using our services' }
  ];

  const services = [
    { name: 'Web Design', url: '/services/web-design' },
    { name: 'Web Development', url: '/services/web-development' },
    { name: 'E-Commerce', url: '/services/e-commerce' },
    { name: 'Mobile Development', url: '/services/mobile-first-design' },
    { name: 'SEO & Analytics', url: '/services/seo-analytics' },
    { name: 'Brand Strategy', url: '/services/brand-strategy' }
  ];

  return (
    <>
      <SEO
        title="Sitemap"
        description="Complete sitemap of CDE William Design website - Find all our pages, services, and content easily."
        keywords="sitemap, website structure, navigation, pages"
      />
      <Header />
      
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
            <p className="text-lg text-gray-600 mb-12">
              Find all the pages and content on our website organized for easy navigation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
                <ul className="space-y-4">
                  {pages.map((page, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4">
                      <a 
                        href={page.url}
                        className="flex items-center justify-between group"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4">
                      <a 
                        href={service.url}
                        className="flex items-center justify-between group"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Help Finding Something?</h2>
              <p className="text-blue-100 mb-6">
                Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}