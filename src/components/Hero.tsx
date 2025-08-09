import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden pt-20">
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-blue-400 opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-blue-300 opacity-5 rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-fadeIn">
              🏆 Award-Winning Digital Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fadeIn">
              We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">digital experiences</span> that drive results
            </h1>
            <p className="text-lg text-gray-600 md:pr-8 animate-fadeIn">
              Transform your brand's vision into captivating digital realities. We combine cutting-edge design with powerful functionality to create websites that not only look stunning but deliver measurable business results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-fadeIn">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                onClick={() => {
                  const message = encodeURIComponent("Habari,\nNinaitaji mazungumzo nanyi kwa ajili ya kazi yangu\nAsante");
                  window.open(`https://wa.me/255746525852?text=${message}`, '_blank');
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                Work With Us
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                onClick={() => {
                  const message = encodeURIComponent("Habari,\nNinaitaji mazungumzo nanyi kwa ajili ya kazi yangu\nAsante");
                  window.open(`https://wa.me/255746525852?text=${message}`, '_blank');
                }}
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern Web Design Showcase" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/4 -right-8 w-24 h-24 md:w-32 md:h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-8 w-16 h-16 md:w-24 md:h-24 bg-blue-700 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 animate-fadeIn">
          <div className="text-center">
            <p className="text-gray-500 font-medium mb-8">Trusted by innovative companies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">TechCorp</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">InnovateLab</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">DigitalFlow</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">CreativeHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern Web Design Showcase" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/4 -right-8 w-24 h-24 md:w-32 md:h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-8 w-16 h-16 md:w-24 md:h-24 bg-blue-700 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 animate-fadeIn">
          <div className="text-center">
            <p className="text-gray-500 font-medium mb-8">Trusted by innovative companies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">TechCorp</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">InnovateLab</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">DigitalFlow</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-700">CreativeHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};