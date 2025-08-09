import React from 'react';
import { Paintbrush, Globe, ShoppingCart, LineChart, Code, Smartphone, ArrowRight, X } from 'lucide-react';

const services = [
  {
    id: 'ui-ux-design',
    icon: <Paintbrush className="w-6 h-6 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage your audience and elevate your brand. We create visually stunning interfaces that users love and convert visitors into customers.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    detailedDescription: 'Our UI/UX design process begins with comprehensive user research to understand your target audience\'s needs, behaviors, and pain points. We create detailed user personas and journey maps to guide our design decisions. Through wireframing and prototyping, we test and refine the user experience before moving to visual design. Our team ensures that every interface element serves a purpose and contributes to achieving your business goals while providing an exceptional user experience.',
    process: ['Discovery & Research', 'User Persona Development', 'Information Architecture', 'Wireframing', 'Interactive Prototyping', 'Visual Design', 'Usability Testing', 'Design System Creation'],
    deliverables: ['User Research Report', 'Wireframes', 'Interactive Prototypes', 'Visual Designs', 'Design System', 'Style Guide']
  },
  {
    id: 'full-stack-development',
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: 'Full-Stack Development',
    description: 'Custom, responsive websites built with cutting-edge technologies. Our development ensures lightning-fast performance, bulletproof security, and seamless scalability.',
    features: ['React/Next.js', 'Node.js', 'Database Design', 'API Integration'],
    detailedDescription: 'We build robust, scalable web applications using modern technologies and best practices. Our full-stack development approach covers everything from frontend user interfaces to backend server architecture and database design. We prioritize performance optimization, security, and maintainability in every project. Our development process includes thorough testing, code reviews, and deployment strategies that ensure your application runs smoothly and can scale with your business growth.',
    process: ['Technical Planning', 'Architecture Design', 'Frontend Development', 'Backend Development', 'Database Setup', 'API Development', 'Testing & QA', 'Deployment & Monitoring'],
    deliverables: ['Source Code', 'Technical Documentation', 'API Documentation', 'Deployment Guide', 'Testing Reports', 'Performance Optimization Report']
  },
  {
    id: 'ecommerce-solutions',
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores that drive sales and maximize revenue. We build shopping experiences that convert visitors into loyal customers with advanced analytics.',
    features: ['Shopify/WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics Setup'],
    detailedDescription: 'Our e-commerce solutions are designed to maximize conversions and provide seamless shopping experiences. We integrate secure payment gateways, implement inventory management systems, and set up comprehensive analytics to track performance. From product catalog management to order processing and customer support integration, we handle every aspect of your online store. Our solutions are optimized for mobile commerce and include features like abandoned cart recovery, customer reviews, and personalized recommendations.',
    process: ['E-commerce Strategy', 'Platform Selection', 'Store Design', 'Product Catalog Setup', 'Payment Gateway Integration', 'Shipping Configuration', 'Testing & Launch', 'Analytics Setup'],
    deliverables: ['Complete Online Store', 'Admin Training', 'Payment Gateway Setup', 'Analytics Dashboard', 'SEO Optimization', 'Mobile App (if applicable)']
  },
  {
    id: 'mobile-first-design',
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Mobile-First Design',
    description: 'Websites optimized for all devices with mobile-first approach. We ensure your site looks and performs perfectly across all screen sizes and devices.',
    features: ['Responsive Design', 'Progressive Web Apps', 'Mobile Optimization', 'Cross-browser Testing'],
    detailedDescription: 'With mobile traffic accounting for over 50% of web usage, we prioritize mobile-first design in all our projects. Our approach ensures that your website provides an optimal experience on smartphones and tablets while scaling beautifully to desktop screens. We implement progressive web app features for enhanced mobile performance, including offline functionality, push notifications, and app-like interactions. Our rigorous testing process covers various devices, screen sizes, and browsers to guarantee consistent performance.',
    process: ['Mobile Strategy Planning', 'Responsive Design Creation', 'Progressive Web App Development', 'Performance Optimization', 'Cross-device Testing', 'Browser Compatibility Testing', 'Launch & Monitoring'],
    deliverables: ['Responsive Website', 'PWA Features', 'Performance Report', 'Cross-browser Testing Results', 'Mobile Optimization Guide']
  },
  {
    id: 'seo-performance',
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    title: 'SEO & Performance',
    description: 'Boost your online visibility and track performance with advanced SEO strategies. We optimize your site for search engines and provide actionable insights.',
    features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics & Reporting'],
    detailedDescription: 'Our comprehensive SEO and performance optimization service helps your website rank higher in search results and load faster for better user experience. We conduct thorough technical audits, optimize site structure and content, and implement performance enhancements. Our approach includes keyword research, on-page optimization, technical SEO fixes, and ongoing monitoring. We provide detailed analytics and reporting to track your website\'s performance and search engine rankings over time.',
    process: ['SEO Audit', 'Keyword Research', 'Technical Optimization', 'Content Optimization', 'Performance Tuning', 'Analytics Setup', 'Ongoing Monitoring', 'Monthly Reporting'],
    deliverables: ['SEO Audit Report', 'Keyword Strategy', 'Optimized Content', 'Technical Improvements', 'Analytics Dashboard', 'Monthly Performance Reports']
  },
  {
    id: 'digital-strategy',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that drive growth. We help define your brand\'s voice, visuals, and values across all digital touchpoints for maximum impact.',
    features: ['Brand Identity', 'Content Strategy', 'Social Media', 'Digital Marketing'],
    detailedDescription: 'Our digital strategy service provides a comprehensive roadmap for your online presence. We analyze your market position, define your brand identity, and create strategies for content marketing, social media engagement, and digital advertising. Our approach includes competitor analysis, target audience research, and the development of brand guidelines that ensure consistency across all digital platforms. We help you build a strong online presence that resonates with your audience and drives business growth.',
    process: ['Market Analysis', 'Brand Strategy Development', 'Content Planning', 'Social Media Strategy', 'Digital Marketing Plan', 'Implementation Roadmap', 'Performance Tracking'],
    deliverables: ['Digital Strategy Document', 'Brand Guidelines', 'Content Calendar', 'Social Media Strategy', 'Marketing Plan', 'Implementation Timeline']
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<typeof services[0] | null>(null);
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Habari,\nNinaitaji mazungumzo nanyi kwa ajili ya kazi yangu\nAsante");
    window.open(`https://wa.me/255746525852?text=${message}`, '_blank');
  };

  return (
    <>
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
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mr-4">
                  {selectedService.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-600 leading-relaxed">{selectedService.detailedDescription}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Process</h3>
                  <ul className="space-y-2">
                    {selectedService.process?.map((step, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Deliverables</h3>
                  <ul className="space-y-2">
                    {selectedService.deliverables?.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </button>
                  <a
                    href="/portfolio"
                    className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg transition-all duration-300 text-center"
                  >
                    View Related Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};