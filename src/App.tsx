import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Blog } from './components/Blog';
import { ServicePage } from './pages/ServicePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogPost } from './pages/BlogPost';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AppErrorBoundary } from './components/ErrorBoundary';
import { SEO } from './components/SEO';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppErrorBoundary>
          <SEO
            title="Contact Us"
            description="Get in touch with CDE William Design. We'd love to hear from you!"
            keywords="contact, design, web development, CDE William"
          />
          <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
          <Toaster position="top-right" />
        </AppErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;