import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web Design', 'E-Commerce', 'Branding', 'Mobile'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get projects from localStorage (admin managed)
  const getProjects = () => {
    const stored = localStorage.getItem('projects');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Default projects if none exist
    const defaultProjects = [
      {
        id: '1',
        name: 'Modern E-Commerce Platform',
        category: 'E-Commerce',
        thumbnails: ['https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
        description: 'A comprehensive e-commerce solution with custom product pages and seamless checkout flow.',
        client: 'TechStore Inc.',
        year: '2024'
      },
      {
        id: '2',
        name: 'Corporate Website Redesign',
        category: 'Web Design',
        thumbnails: ['https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
        description: 'Complete overhaul of a corporate website with modern UI/UX and improved user journey.',
        client: 'Global Corp',
        year: '2024'
      },
      {
        id: '3',
        name: 'Restaurant Booking App',
        category: 'Mobile',
        thumbnails: ['https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
        description: 'Mobile application for restaurant reservations with real-time availability and notifications.',
        client: 'Bistro Elite',
        year: '2024'
      }
    ];
    
    localStorage.setItem('projects', JSON.stringify(defaultProjects));
    return defaultProjects;
  };

  const projects = getProjects();
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
                  src={project.thumbnails[0]} 
                  alt={project.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                <div className="text-sm font-medium text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/portfolio"
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};