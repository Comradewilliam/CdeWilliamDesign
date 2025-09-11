import React, { useState } from 'react';
import { Code, Palette, Smartphone, ShoppingCart, Award, BookOpen, ArrowRight, X } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  process: string[];
  deliverables: string[];
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'web-design',
      icon: <Palette className="w-12 h-12" />,
      title: 'Web Design',
      description: 'Create stunning, user-friendly websites that captivate your audience and drive conversions.',
      features: [
        'Responsive Design',
        'User Experience (UX) Design',
        'User Interface (UI) Design',
        'Brand Integration',
        'Mobile-First Approach'
      ],
      process: [
        'Discovery & Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'User Testing',
        'Final Implementation'
      ],
      deliverables: [
        'Complete Design System',
        'High-Fidelity Mockups',
        'Interactive Prototypes',
        'Style Guide',
        'Asset Library'
      ]
    },
    {
      id: 'web-development',
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications with cutting-edge technologies and best practices.',
      features: [
        'Custom Web Applications',
        'Frontend Development',
        'Backend Development',
        'Database Integration',
        'API Development'
      ],
      process: [
        'Requirements Analysis',
        'Architecture Planning',
        'Development & Coding',
        'Testing & Quality Assurance',
        'Deployment & Launch'
      ],
      deliverables: [
        'Fully Functional Website',
        'Source Code',
        'Documentation',
        'Testing Reports',
        'Deployment Guide'
      ]
    },
    {
      id: 'ecommerce',
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce',
      description: 'Launch your online store with secure, feature-rich e-commerce solutions that boost sales.',
      features: [
        'Online Store Setup',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Management'
      ],
      process: [
        'Business Analysis',
        'Platform Selection',
        'Store Development',
        'Payment Integration',
        'Launch & Optimization'
      ],
      deliverables: [
        'Complete Online Store',
        'Admin Dashboard',
        'Payment System',
        'Inventory System',
        'Training Materials'
      ]
    },
    {
      id: 'mobile',
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Develop native and cross-platform mobile apps that engage users and grow your business.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Development',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications'
      ],
      process: [
        'Concept & Strategy',
        'UI/UX Design',
        'Development',
        'Testing & Debugging',
        'App Store Submission'
      ],
      deliverables: [
        'Mobile Application',
        'App Store Listing',
        'User Manual',
        'Analytics Setup',
        'Maintenance Plan'
      ]
    },
    {
      id: 'branding',
      icon: <Award className="w-12 h-12" />,
      title: 'Branding',
      description: 'Build a strong brand identity that resonates with your audience and stands out from competitors.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Visual Guidelines',
        'Marketing Materials',
        'Brand Strategy'
      ],
      process: [
        'Brand Discovery',
        'Concept Development',
        'Design Creation',
        'Refinement',
        'Brand Guidelines'
      ],
      deliverables: [
        'Logo Package',
        'Brand Guidelines',
        'Business Cards',
        'Letterhead Design',
        'Brand Assets'
      ]
    },
    {
      id: 'academic',
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Academic Projects',
      description: 'Support academic research and educational initiatives with custom digital solutions.',
      features: [
        'Research Platforms',
        'Educational Tools',
        'Data Analysis',
        'Academic Websites',
        'Learning Management'
      ],
      process: [
        'Research Requirements',
        'Solution Design',
        'Development',
        'Academic Review',
        'Final Delivery'
      ],
      deliverables: [
        'Custom Solution',
        'Research Documentation',
        'User Guide',
        'Source Code',
        'Academic Report'
      ]
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Habari,\nNinaitaji mazungumzo nanyi kwa ajili ya kazi yanyu\nAsante");
    window.open(`https://wa.me/255746525852?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your vision to life
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Your Project Today
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-blue-600">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8">{selectedService.description}</p>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Our Process</h4>
                  <ol className="space-y-2">
                    {selectedService.process.map((step, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables</h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Started with {selectedService.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;