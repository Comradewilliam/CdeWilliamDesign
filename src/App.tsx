import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AppErrorBoundary } from './components/ErrorBoundary';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServicePage } from './pages/ServicePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectPage } from './pages/ProjectPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppErrorBoundary>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:service" element={<ServicePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:project" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
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