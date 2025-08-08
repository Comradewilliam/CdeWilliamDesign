import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ArrowRight, ExternalLink, Calendar, User, Tag } from 'lucide-react';

const projectDetails = {
  'modern-e-commerce': {
    title: 'Modern E-Commerce Platform',
    client: 'TechStore Inc.',
    year: '2024',
    category: 'E-Commerce',
    description: 'A comprehensive e-commerce solution with custom product pages and seamless checkout flow.',
    challenge: 'TechStore Inc. needed a scalable e-commerce platform that could handle high traffic volumes while providing an exceptional user experience. Their existing platform was outdated and couldn\'t support their growing product catalog and customer base.',
    solution: 'We developed a modern, responsive e-commerce platform using React and Node.js, with a focus on performance optimization and user experience. The solution included custom product configurators, advanced search functionality, and a streamlined checkout process.',
    results: [
      '50% increase in conversion rate',
      '30% reduction in cart abandonment',
      '200% improvement in page load speed',
      '40% increase in average order value'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
    images: [
      'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  'corporate-website': {
    title: 'Corporate Website Redesign',
    client: 'Global Corp',
    year: '2024',
    category: 'Web Design',
    description: 'Complete overhaul of a corporate website with modern UI/UX and improved user journey.',
    challenge: 'Global Corp\'s website was outdated and didn\'t reflect their position as an industry leader. The site had poor user experience, low conversion rates, and wasn\'t mobile-optimized.',
    solution: 'We created a modern, responsive website with a focus on user experience and brand storytelling. The new design features intuitive navigation, compelling content, and clear calls-to-action throughout the user journey.',
    results: [
      '40% increase in time on site',
      '25% increase in lead generation',
      '60% improvement in mobile engagement',
      '35% reduction in bounce rate'
    ],
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Contentful', 'Vercel'],
    images: [
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  'restaurant-app': {
    title: 'Restaurant Booking App',
    client: 'Bistro Elite',
    year: '2024',
    category: 'Mobile',
    description: 'Mobile application for restaurant reservations with real-time availability and notifications.',
    challenge: 'Bistro Elite needed a modern booking system to replace their outdated phone-based reservation system. They wanted to reduce no-shows and improve customer experience.',
    solution: 'We developed a comprehensive mobile app with real-time table availability, push notifications, and integrated payment processing. The app includes features for menu browsing, special offers, and customer loyalty programs.',
    results: [
      '60% increase in online bookings',
      '40% reduction in no-shows',
      '50% improvement in customer satisfaction',
      '25% increase in repeat customers'
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'Push Notifications', 'Stripe'],
    images: [
      'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  }
};

export function ProjectPage() {
  const { project } = useParams<{ project: string }>();
  const details = project ? projectDetails[project as keyof typeof projectDetails] : null;

  if (!details) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <a 
              href="/portfolio" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Portfolio <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={details.title}
        description={details.description}
        keywords={`${details.category}, case study, ${details.client}, web design, development`}
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {details.category}
                </span>
                <span className="text-blue-100">{details.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {details.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {details.description}
              </p>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Client: {details.client}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{details.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {details.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`${details.title} - Image ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{details.challenge}</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{details.solution}</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {details.results.map((result, index) => (
                      <div key={index} className="bg-blue-50 p-6 rounded-lg">
                        <p className="text-lg font-semibold text-blue-900">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Client</span>
                      <p className="text-gray-900">{details.client}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Year</span>
                      <p className="text-gray-900">{details.year}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Category</span>
                      <p className="text-gray-900">{details.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
                  <p className="text-blue-100 mb-4">
                    Let's create something amazing together.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                  >
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Projects
              </h2>
              <p className="text-lg text-gray-600">
                Explore more of our work and see how we've helped other businesses succeed.
              </p>
            </div>
            <div className="text-center">
              <a 
                href="/portfolio" 
                className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
              >
                View All Projects <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}