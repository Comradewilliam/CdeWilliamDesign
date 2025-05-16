import React from 'react';
import { useParams } from 'react-router-dom';

const projectDetails = {
  'modern-e-commerce': {
    title: 'Modern E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with custom product pages and seamless checkout flow.',
    challenge: 'Creating a scalable and user-friendly e-commerce platform that handles high traffic and complex product variations.',
    solution: 'We implemented a custom-built solution using modern technologies, focusing on performance and user experience.',
    results: ['50% increase in conversion rate', '30% reduction in cart abandonment', 'Improved customer satisfaction scores']
  },
  'corporate-website': {
    title: 'Corporate Website Redesign',
    description: 'Complete overhaul of a corporate website with modern UI/UX and improved user journey.',
    challenge: 'Modernizing a dated corporate website while maintaining brand identity and improving user engagement.',
    solution: 'We created a fresh, modern design that emphasizes content hierarchy and user flow.',
    results: ['40% increase in time on site', '25% increase in lead generation', 'Improved mobile engagement']
  },
  'restaurant-app': {
    title: 'Restaurant Booking App',
    description: 'Mobile application for restaurant reservations with real-time availability and notifications.',
    challenge: 'Building a reliable reservation system that handles real-time updates and user notifications.',
    solution: 'Developed a robust mobile app with real-time synchronization and push notifications.',
    results: ['60% increase in online bookings', 'Reduced no-shows by 40%', 'Improved customer satisfaction']
  }
};

export const PortfolioPage: React.FC = () => {
  const { project } = useParams<{ project: string }>();
  const details = project ? projectDetails[project as keyof typeof projectDetails] : null;

  if (!details) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-20">
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{details.title}</h1>
          <p className="text-xl text-gray-600">{details.description}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
            <p className="text-gray-600 mb-8">{details.challenge}</p>
            
            <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
            <p className="text-gray-600 mb-8">{details.solution}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <ul className="space-y-4">
              {details.results.map((result, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {result}
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};