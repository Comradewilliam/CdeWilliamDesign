import React from 'react';
import { Check } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sophie Masaka',
    role: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: '10+ years of experience in digital design and branding. Sophie leads our creative vision and ensures every project exceeds expectations.'
  },
  {
    name: 'Mark Johnson',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Full-stack developer with expertise in modern web technologies. Mark brings technical excellence to every project we undertake.'
  },
  {
    name: 'Amelia Chen',
    role: 'UX/UI Designer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'User experience specialist with a background in psychology. Amelia creates intuitive interfaces that delight users and drive engagement.'
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
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Passionate about creating digital experiences that inspire</h3>
            <p className="text-lg text-gray-600">
              Founded in 2023, CdeWilliam Web Design has grown into a team of dedicated designers, developers, and strategists. We combine our passion for design with technical expertise to create websites that not only look stunning but also perform exceptionally.
            </p>
            <p className="text-lg text-gray-600">
              We believe that great design is about more than aesthetics—it's about solving problems and creating meaningful connections between brands and their audiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700">Award-winning designs</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700">User-centric approach</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700">Technical excellence</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-700">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Team</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Meet the creatives behind our success</h3>
          <p className="mt-4 text-lg text-gray-600">
            Our talented team brings together diverse skills and perspectives to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};