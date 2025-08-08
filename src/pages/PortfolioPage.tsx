import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ExternalLink, ArrowRight } from 'lucide-react';

const categories = ['All', 'Web Design', 'E-Commerce', 'Branding', 'Mobile'];

const projects = [
  {
    id: 'modern-e-commerce',
    title: 'Modern E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive e-commerce solution with custom product pages and seamless checkout flow.',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    client: 'TechStore Inc.',
    year: '2024'
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete overhaul of a corporate website with modern UI/UX and improved user journey.',
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    client: 'Global Corp',
    year: '2024'
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant Booking App',
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Mobile application for restaurant reservations with real-time availability and notifications.',
    technologies: ['React Native', 'Firebase', 'Push Notifications'],
    client: 'Bistro Elite',
    year: '2024'
  },
  {
    id: 'fashion-brand',
    title: 'Fashion Brand Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete brand identity for a fashion startup, including logo, color palette, and brand guidelines.',
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    client: 'Luxe Fashion',
    year: '2023'
  },
  {
    id: 'tech-conference',
    title: 'Tech Conference Website',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Dynamic conference website with ticket sales, speaker profiles, and schedule management.',
    technologies: ['Vue.js', 'Laravel', 'Payment Gateway'],
    client: 'TechSummit 2024',
    year: '2024'
  },
  {
    id: 'real-estate-platform',
    title: 'Luxury Real Estate Platform',
    category: 'E-Commerce',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'High-end real estate platform with virtual tours, property comparisons, and agent connections.',
    technologies: ['React', 'GraphQL', 'Virtual Tours', 'Maps API'],
    client: 'Elite Properties',
    year: '2023'
  }
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <SEO
        title="Our Portfolio"
        description="Explore our portfolio of successful web design, development, and branding projects. See how we've helped businesses transform their digital presence."
        keywords="portfolio, web design projects, development work, case studies, client work"
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover our latest projects and see how we've helped businesses transform their digital presence with innovative design and development solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center mb-12">
              <div className="flex space-x-2 p-1 bg-white rounded-lg shadow-sm">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-md transition-colors duration-300 font-medium ${
                      activeCategory === category 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <a 
                          href={`/portfolio/${project.id}`}
                          className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors duration-300"
                        >
                          View Project <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600">{project.category}</span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Client: <span className="font-medium text-gray-700">{project.client}</span></p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <a 
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Case Study <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project and see how we can help transform your digital presence.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}