import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-900">
              CdeWilliam<span className="text-blue-500">Design</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="/blog">Insights</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300"
            >
              Get Started
            </a>
          </nav>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)}>Insights</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <a 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      className="text-gray-800 hover:text-blue-600 transition-colors duration-300 text-lg font-medium block py-2"
      onClick={onClick}
    >
      {children}
    </a>
  );
};