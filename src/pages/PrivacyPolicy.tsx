import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for CDE William Design - Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, cookies"
      />
      <Header />
      
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                fill out a form, or contact us. This may include your name, email address, phone number, 
                and any other information you choose to provide.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To send you technical notices and support messages</li>
                <li>To respond to your comments and questions</li>
                <li>To communicate with you about products, services, and events</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
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