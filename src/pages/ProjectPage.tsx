import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ArrowRight, ExternalLink, Calendar, User, Tag } from 'lucide-react';

export function ProjectPage() {
  const { project } = useParams<{ project: string }>();
  
  // Get project from localStorage
  const getProjectDetails = (projectId: string) => {
    const stored = localStorage.getItem('projects');
    if (stored) {
      const projects = JSON.parse(stored);
      return projects.find((p: any) => p.id === projectId);
    }
    return null;
  };

  const details = project ? getProjectDetails(project) : null;

  if (!details) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <a 
              href="/portfolio" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Portfolio <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={details.title}
        description={details.description}
        keywords={`${details.category}, case study, ${details.client}, web design, development`}
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {details.category}
                </span>
                <span className="text-blue-100">{details.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {details.name}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {details.description}
              </p>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Client: {details.client}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{details.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {details.thumbnails.map((image: string, index: number) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`${details.name} - Image ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{details.challenge || 'Challenge details not available.'}</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{details.solution || 'Solution details not available.'}</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(details.results || []).map((result: string, index: number) => (
                      <div key={index} className="bg-blue-50 p-6 rounded-lg">
                        <p className="text-lg font-semibold text-blue-900">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Client</span>
                      <p className="text-gray-900">{details.client}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Year</span>
                      <p className="text-gray-900">{details.year}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Category</span>
                      <p className="text-gray-900">{details.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {(details.technologies || []).map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
                  <p className="text-blue-100 mb-4">
                    Let's create something amazing together.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                  >
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Projects
              </h2>
              <p className="text-lg text-gray-600">
                Explore more of our work and see how we've helped other businesses succeed.
              </p>
            </div>
            <div className="text-center">
              <a 
                href="/portfolio" 
                className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
              >
                View All Projects <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}