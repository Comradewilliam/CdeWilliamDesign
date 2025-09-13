import React, { useState } from 'react';
import { Code, Palette, Smartphone, ShoppingCart, Award, BookOpen, ArrowRight, X, Send } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  process: string[];
  deliverables: string[];
}

interface ServicePricing {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

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

  // Get service pricing from localStorage (admin can modify these)
  const getServicePricing = (): ServicePricing[] => {
    const stored = localStorage.getItem('servicePricing');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Default pricing
    const defaultPricing: ServicePricing[] = [
      {
        id: 'web-design',
        name: 'Web Design',
        basePrice: 2500,
        description: 'Professional web design with modern UI/UX',
        features: ['Responsive Design', 'UI/UX Design', 'Brand Integration', 'Mobile-First Approach']
      },
      {
        id: 'web-development',
        name: 'Web Development',
        basePrice: 3500,
        description: 'Custom web development with modern technologies',
        features: ['Custom Development', 'Frontend & Backend', 'Database Integration', 'API Development']
      },
      {
        id: 'ecommerce',
        name: 'E-Commerce',
        basePrice: 4500,
        description: 'Complete e-commerce solution',
        features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Order Processing']
      },
      {
        id: 'mobile',
        name: 'Mobile Development',
        basePrice: 5000,
        description: 'Native and cross-platform mobile apps',
        features: ['iOS & Android Apps', 'Cross-Platform Development', 'App Store Optimization', 'Push Notifications']
      },
      {
        id: 'branding',
        name: 'Branding',
        basePrice: 2000,
        description: 'Complete brand identity package',
        features: ['Logo Design', 'Brand Identity', 'Visual Guidelines', 'Marketing Materials']
      },
      {
        id: 'academic',
        name: 'Academic Projects',
        basePrice: 1500,
        description: 'Academic and research projects',
        features: ['Research Platforms', 'Educational Tools', 'Data Analysis', 'Academic Websites']
      }
    ];
    
    localStorage.setItem('servicePricing', JSON.stringify(defaultPricing));
    return defaultPricing;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Habari,\nNinaitaji mazungumzo nanyi kwa ajili ya kazi yanyu\nAsante");
    window.open(`https://wa.me/255746525852?text=${message}`, '_blank');
  };

  const handleGetQuote = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
    setShowQuoteModal(true);
  };

  const QuoteModal = () => {
    const servicePricing = getServicePricing();
    const selectedPricing = servicePricing.find(p => p.id === selectedServiceForQuote);
    
    if (!selectedPricing) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Service Quote</h3>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedPricing.name}</h4>
              <p className="text-gray-600 mb-4">{selectedPricing.description}</p>
              <div className="text-3xl font-bold text-blue-600">${selectedPricing.basePrice.toLocaleString()}</div>
              <p className="text-sm text-gray-500 mt-1">Starting price - final cost may vary based on requirements</p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-bold text-gray-900 mb-3">What's Included:</h5>
              <ul className="space-y-2">
                {selectedPricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h5 className="font-bold text-gray-900 mb-2">Terms & Conditions:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 50% deposit required to start the project</li>
                <li>• Final payment due upon project completion</li>
                <li>• Timeline: 4-8 weeks depending on complexity</li>
                <li>• 3 rounds of revisions included</li>
                <li>• 30-day support period included</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Accept Quote & Start Project
              </button>
              <p className="text-sm text-gray-500 mt-2">Click to discuss this quote via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectInquiryForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      services: [] as string[],
      budget: '',
      timeline: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleServiceToggle = (serviceId: string) => {
      setFormData(prev => ({
        ...prev,
        services: prev.services.includes(serviceId)
          ? prev.services.filter(s => s !== serviceId)
          : [...prev.services, serviceId]
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Save to localStorage for admin
      const inquiry = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString(),
        type: 'project_inquiry'
      };

      const existingInquiries = JSON.parse(localStorage.getItem('projectInquiries') || '[]');
      existingInquiries.push(inquiry);
      localStorage.setItem('projectInquiries', JSON.stringify(existingInquiries));

      setTimeout(() => {
        setIsSubmitting(false);
        setShowProjectForm(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          services: [],
          budget: '',
          timeline: '',
          message: ''
        });
        
        // Show success message
        alert('Thank you for your inquiry! Our team will get in touch with you within 24 hours through the contact information provided.');
      }, 1000);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Start Your Project</h3>
              <button
                onClick={() => setShowProjectForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Services Needed *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label key={service.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{service.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                />
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Project Inquiry
                    </div>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  Our team will review your inquiry and get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
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
                  onClick={() => handleGetQuote(service.id)}
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
            onClick={() => setShowProjectForm(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Your Project
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

      {/* Quote Modal */}
      {showQuoteModal && <QuoteModal />}

      {/* Project Inquiry Form */}
      {showProjectForm && <ProjectInquiryForm />}
    </section>
  );
};

export default Services;