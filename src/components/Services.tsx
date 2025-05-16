import React from 'react';
import { Paintbrush, Globe, ShoppingCart, LineChart, Code, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-6 h-6 text-blue-600" />,
    title: 'Web Design',
    description: 'Beautiful, intuitive designs that engage your audience and elevate your brand. We create visually stunning interfaces that users love.'
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies. Our development ensures speed, security, and flexibility.'
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    title: 'E-Commerce',
    description: 'Powerful online stores that drive sales. We build shopping experiences that convert visitors into customers.'
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Mobile-First Design',
    description: 'Websites optimized for all devices. We ensure your site looks and performs perfectly on phones, tablets, and desktops.'
  },
  {
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    title: 'SEO & Analytics',
    description: 'Improve visibility and track performance. We optimize your site for search engines and provide powerful analytics.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Brand Strategy',
    description: 'Cohesive digital identities that resonate. We help define your brand\'s voice, visuals, and values across all touchpoints.'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Services</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Transforming brands with innovative digital solutions</h3>
          <p className="mt-4 text-lg text-gray-600">
            We offer a comprehensive suite of services designed to elevate your digital presence and drive meaningful results for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a 
                href="#" 
                className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};