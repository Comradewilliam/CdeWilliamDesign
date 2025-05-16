import React from 'react';
import { useParams } from 'react-router-dom';

const serviceDetails = {
  'brand-strategy': {
    title: 'Brand Strategy',
    description: 'We help businesses build strong, memorable brands that connect with their audience.',
    features: [
      'Brand Identity Development',
      'Visual Design Systems',
      'Brand Voice & Messaging',
      'Brand Guidelines'
    ]
  },
  'seo-analytics': {
    title: 'SEO & Analytics',
    description: 'Improve your online visibility and track performance metrics.',
    features: [
      'Search Engine Optimization',
      'Performance Analytics',
      'Conversion Tracking',
      'SEO Audits'
    ]
  },
  'mobile-first-design': {
    title: 'Mobile-First Design',
    description: 'Create responsive websites that work perfectly on all devices.',
    features: [
      'Responsive Design',
      'Mobile Optimization',
      'Cross-platform Testing',
      'Performance Optimization'
    ]
  },
  'e-commerce': {
    title: 'E-Commerce Solutions',
    description: 'Build powerful online stores that drive sales.',
    features: [
      'Custom E-commerce Development',
      'Payment Integration',
      'Inventory Management',
      'Shopping Cart Optimization'
    ]
  },
  'web-development': {
    title: 'Web Development',
    description: 'Custom web solutions built with modern technologies.',
    features: [
      'Custom Website Development',
      'Web Application Development',
      'API Integration',
      'Database Design'
    ]
  },
  'web-design': {
    title: 'Web Design',
    description: 'Beautiful, intuitive designs that engage your audience.',
    features: [
      'UI/UX Design',
      'Wireframing & Prototyping',
      'Visual Design',
      'User Research'
    ]
  }
};

export const ServicePage: React.FC = () => {
  const { service } = useParams<{ service: string }>();
  const details = service ? serviceDetails[service as keyof typeof serviceDetails] : null;

  if (!details) {
    return <div>Service not found</div>;
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
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Get Started</h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your digital presence? Contact us today to discuss your project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};