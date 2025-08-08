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
import { ContactPage } from './pages/ContactPage';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AppErrorBoundary } from './components/ErrorBoundary';
import { SEO } from './components/SEO';

function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="CdeWilliam Web Design creates stunning websites and digital experiences that transform brands and drive results. Expert web design, development, and branding services."
        keywords="web design, web development, branding, digital marketing, responsive design, UI/UX"
      />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppErrorBoundary>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/:service" element={<ServicePage />} />
              <Route path="/portfolio/:project" element={<PortfolioPage />} />
              <Route path="/blog/:post" element={<BlogPost />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Toaster position="top-right" />
          </div>
        </AppErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;