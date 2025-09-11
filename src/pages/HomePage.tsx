import React from 'react';
import { Header } from '../components/Header';
import Hero from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function HomePage() {
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