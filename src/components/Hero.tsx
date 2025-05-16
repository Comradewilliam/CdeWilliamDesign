import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden pt-20">
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-blue-400 opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-blue-300 opacity-5 rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-fadeIn">
              Award-Winning Web Design Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We create <span className="text-blue-600">digital experiences</span> that matter
            </h1>
            <p className="text-lg text-gray-600 md:pr-8">
              CdeWilliam Web Design transforms your brand's vision into captivating digital realities. We combine stunning design with powerful functionality to create websites that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center group">
                View Our Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-3 rounded-lg transition-colors duration-300">
                Let's Talk
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Web Design Showcase" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/4 -right-8 w-24 h-24 md:w-32 md:h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-8 w-16 h-16 md:w-24 md:h-24 bg-blue-700 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="text-center">
            <p className="text-gray-500 font-medium">Trusted by industry leaders</p>
          </div>
          <div className="w-32 text-center">
            <p className="text-xl font-bold text-gray-700">BRAND ONE</p>
          </div>
          <div className="w-32 text-center">
            <p className="text-xl font-bold text-gray-700">BRAND TWO</p>
          </div>
          <div className="w-32 text-center">
            <p className="text-xl font-bold text-gray-700">BRAND THREE</p>
          </div>
          <div className="w-32 text-center">
            <p className="text-xl font-bold text-gray-700">BRAND FOUR</p>
          </div>
        </div>
      </div>
    </section>
  );
};