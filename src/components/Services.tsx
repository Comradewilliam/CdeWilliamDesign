import React from 'react';
import { Paintbrush, Globe, ShoppingCart, LineChart, Code, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-6 h-6 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage your audience and elevate your brand. We create visually stunning interfaces that users love and convert visitors into customers.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: 'Full-Stack Development',
    description: 'Custom, responsive websites built with cutting-edge technologies. Our development ensures lightning-fast performance, bulletproof security, and seamless scalability.',
    features: ['React/Next.js', 'Node.js', 'Database Design', 'API Integration']
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores that drive sales and maximize revenue. We build shopping experiences that convert visitors into loyal customers with advanced analytics.',
    features: ['Shopify/WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics Setup']
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Mobile-First Design',
    description: 'Websites optimized for all devices with mobile-first approach. We ensure your site looks and performs perfectly across all screen sizes and devices.',
    features: ['Responsive Design', 'Progressive Web Apps', 'Mobile Optimization', 'Cross-browser Testing']
  },
  {
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    title: 'SEO & Performance',
    description: 'Boost your online visibility and track performance with advanced SEO strategies. We optimize your site for search engines and provide actionable insights.',
    features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics & Reporting']
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that drive growth. We help define your brand\'s voice, visuals, and values across all digital touchpoints for maximum impact.',
    features: ['Brand Identity', 'Content Strategy', 'Social Media', 'Digital Marketing']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Services</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Complete digital solutions for modern businesses</h3>
          <p className="mt-4 text-lg text-gray-600">
            From concept to launch and beyond, we provide end-to-end digital solutions that help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              
              {service.features && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <a 
                href="/contact" 
                className="inline-flex items-center mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};