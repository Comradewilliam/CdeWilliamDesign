import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with CDE William Design. We'd love to hear from you and discuss your next project!"
        keywords="contact, design consultation, web development, CDE William"
      />
      <Header />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Start Something Amazing</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Ready to transform your digital presence? We're here to help bring your vision to life with cutting-edge design and development.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We'd love to hear about your project and discuss how we can help you achieve your goals. 
                  Reach out through any of the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">youngwilliamsadiki@gmail.com</p>
                    <p className="text-sm text-gray-500">We typically respond within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+255 746 525 852</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM EAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-600">213 Makongo Juu Street</p>
                    <p className="text-gray-600">Dar Es Salaam, DSM 15121</p>
                    <p className="text-gray-600">Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">How long does a typical project take?</h4>
                    <p className="text-gray-600 text-sm">Most projects are completed within 4-8 weeks, depending on complexity and scope.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Do you offer ongoing support?</h4>
                    <p className="text-gray-600 text-sm">Yes, we provide maintenance packages and ongoing support for all our projects.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">What's your design process like?</h4>
                    <p className="text-gray-600 text-sm">We follow a collaborative approach: Discovery → Design → Development → Launch → Support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}