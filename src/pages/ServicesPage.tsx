import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Paintbrush, Globe, ShoppingCart, LineChart, Code, Smartphone, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'web-design',
    icon: <Paintbrush className="w-8 h-8 text-blue-600" />,
    title: 'Web Design',
    description: 'Beautiful, intuitive designs that engage your audience and elevate your brand. We create visually stunning interfaces that users love and convert visitors into customers.',
    features: ['UI/UX Design', 'Wireframing & Prototyping', 'Visual Design Systems', 'User Research & Testing'],
    price: 'Starting at $2,500',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'web-development',
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Custom, responsive websites built with cutting-edge technologies. Our development ensures lightning-fast performance, bulletproof security, and seamless scalability.',
    features: ['React/Next.js Development', 'Node.js Backend', 'Database Design', 'API Integration'],
    price: 'Starting at $3,500',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'e-commerce',
    icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores that drive sales and maximize revenue. We build shopping experiences that convert visitors into loyal customers with advanced analytics.',
    features: ['Shopify/WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics & Reporting'],
    price: 'Starting at $4,500',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mobile-first-design',
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: 'Mobile-First Design',
    description: 'Websites optimized for all devices with mobile-first approach. We ensure your site looks and performs perfectly across all screen sizes and devices.',
    features: ['Responsive Design', 'Progressive Web Apps', 'Mobile Optimization', 'Cross-browser Testing'],
    price: 'Starting at $2,000',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'seo-analytics',
    icon: <LineChart className="w-8 h-8 text-blue-600" />,
    title: 'SEO & Analytics',
    description: 'Boost your online visibility and track performance with advanced SEO strategies. We optimize your site for search engines and provide actionable insights.',
    features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics Setup'],
    price: 'Starting at $1,500',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'brand-strategy',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: 'Brand Strategy',
    description: 'Comprehensive digital strategies that drive growth. We help define your brand\'s voice, visuals, and values across all digital touchpoints for maximum impact.',
    features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Digital Marketing'],
    price: 'Starting at $3,000',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive digital solutions including web design, development, e-commerce, SEO, and branding services. Transform your business with our expert team."
        keywords="web design services, web development, e-commerce, SEO, branding, digital marketing"
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Complete Digital Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                From concept to launch and beyond, we provide end-to-end digital solutions that help your business thrive in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
                >
                  Get Started Today
                </a>
                <a 
                  href="/portfolio" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                      <a 
                        href={`/services/${service.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Learn More <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}