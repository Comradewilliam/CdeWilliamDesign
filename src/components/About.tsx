import React from 'react';
import { Check } from 'lucide-react';

const teamMembers = [
  {
    name: 'Young SADIKI',
    role: 'Founder & Creative Director',
    image: '/public/SADIKI.jpg',
    bio: '5+ years of experience in digital design and full-stack development. William leads our creative vision and ensures every project exceeds client expectations with innovative solutions.'
  },
  {
    name: 'Christina KWEKA',
    role: 'Senior UI/UX Designer',
    image: '/public/KWEKA.jpg',
    bio: 'Specialized in user-centered design with a passion for creating intuitive digital experiences. Christina ensures every interface is both beautiful and functional.'
  },
  {
    name: 'Godfrey KIHOYA',
    role: 'Full-Stack Developer',
    image: '/public/KIHOYA.jpg',
    bio: 'Expert in modern web technologies and scalable architecture. Godfrey brings technical excellence and innovative solutions to every development project.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg opacity-10 transform -translate-x-4 -translate-y-4"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Passionate creators of digital experiences that inspire and deliver results</h3>
            <p className="text-lg text-gray-600">
              Founded in 2019, CdeWilliam Web Design has evolved into a dynamic team of creative professionals and technical experts. We combine cutting-edge design principles with robust development practices to create digital solutions that drive real business growth.
            </p>
            <p className="text-lg text-gray-600">
              Our philosophy centers on the belief that exceptional design goes beyond aesthetics—it's about solving complex problems, enhancing user experiences, and creating meaningful connections between brands and their audiences in the digital space.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700 font-medium">Award-winning designs</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700 font-medium">Data-driven approach</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700 font-medium">Cutting-edge technology</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700 font-medium">24/7 support & maintenance</p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Team</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Meet the creatives behind our success</h3>
          <p className="mt-4 text-lg text-gray-600">
            Our passionate team combines diverse expertise in design, development, and strategy to deliver exceptional digital solutions that exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};