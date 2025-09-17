import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for CDE William Design - Read our terms and conditions for using our services."
        keywords="terms of service, terms and conditions, legal, agreement"
      />
      <Header />
      
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using CDE William Design services, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services</h2>
              <p className="text-gray-700 mb-4">
                CDE William Design provides web design, development, branding, and digital marketing services. 
                We reserve the right to modify or discontinue any service at any time.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>50% deposit required to start any project</li>
                <li>Final payment due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive ownership of the final deliverables. 
                We retain the right to showcase completed work in our portfolio.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                CDE William Design shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none text-gray-700">
                <li>Email: youngwilliamsadiki@gmail.com</li>
                <li>Phone: +255 746 525 852</li>
                <li>Address: 213 Makongo Juu Street, Dar Es Salaam, DSM 15121, Tanzania</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}