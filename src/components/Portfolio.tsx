import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web Design', 'E-Commerce', 'Branding', 'Mobile'];

const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive e-commerce solution with custom product pages and seamless checkout flow.'
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete overhaul of a corporate website with modern UI/UX and improved user journey.'
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Mobile application for restaurant reservations with real-time availability and notifications.'
  },
  {
    id: 4,
    title: 'Fashion Brand Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete brand identity for a fashion startup, including logo, color palette, and brand guidelines.'
  },
  {
    id: 5,
    title: 'Tech Conference Website',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Dynamic conference website with ticket sales, speaker profiles, and schedule management.'
  },
  {
    id: 6,
    title: 'Luxury Real Estate Platform',
    category: 'E-Commerce',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'High-end real estate platform with virtual tours, property comparisons, and agent connections.'
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Portfolio</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Showcasing our finest work</h3>
          <p className="mt-4 text-lg text-gray-600">
            Browse through our selected projects that demonstrate our expertise and creative approach to solving digital challenges.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors duration-300"
                    >
                      View Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};