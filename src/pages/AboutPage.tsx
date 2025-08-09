import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Check, Award, Users, Clock, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Young SADIKI',
    role: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: '5+ years of experience in digital design and full-stack development. Young leads our creative vision and ensures every project exceeds client expectations with innovative solutions.',
    skills: ['UI/UX Design', 'Full-Stack Development', 'Project Management', 'Brand Strategy']
  },
  {
    name: 'Christina KWEKA',
    role: 'Senior UI/UX Designer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Specialized in user-centered design with a passion for creating intuitive digital experiences. Christina ensures every interface is both beautiful and functional.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    name: 'Godfrey KIHOYA',
    role: 'Full-Stack Developer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Expert in modern web technologies and scalable architecture. Godfrey brings technical excellence and innovative solutions to every development project.',
    skills: ['React/Next.js', 'Node.js', 'Database Design', 'DevOps']
  }
];

const stats = [
  { icon: <Users className="w-8 h-8 text-blue-600" />, number: '150+', label: 'Happy Clients' },
  { icon: <Award className="w-8 h-8 text-blue-600" />, number: '200+', label: 'Projects Completed' },
  { icon: <Clock className="w-8 h-8 text-blue-600" />, number: '5+', label: 'Years Experience' },
  { icon: <Check className="w-8 h-8 text-blue-600" />, number: '98%', label: 'Client Satisfaction' }
];

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve by embracing new technologies and design trends to deliver cutting-edge solutions.'
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your success is our success. We work closely with you to understand your goals and exceed your expectations.'
  },
  {
    title: 'Quality Excellence',
    description: 'We never compromise on quality. Every project undergoes rigorous testing and refinement before delivery.'
  },
  {
    title: 'Transparent Communication',
    description: 'We believe in open, honest communication throughout the entire project lifecycle.'
  }
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about CDE William Design - a passionate team of designers and developers creating exceptional digital experiences since 2019."
        keywords="about us, web design team, company history, our mission, design agency"
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About CdeWilliam Design
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                We're a passionate team of designers and developers dedicated to creating exceptional digital experiences that drive real business results.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Our team collaborating" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-xl opacity-10 transform -translate-x-4 -translate-y-4"></div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2019, CdeWilliam Web Design began as a vision to bridge the gap between beautiful design and powerful functionality. What started as a small team of passionate creators has evolved into a dynamic agency serving clients worldwide.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our philosophy centers on the belief that exceptional design goes beyond aesthetics—it's about solving complex problems, enhancing user experiences, and creating meaningful connections between brands and their audiences in the digital space.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we combine cutting-edge design principles with robust development practices to create digital solutions that not only look stunning but drive measurable business growth for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These numbers represent more than statistics—they represent relationships built, problems solved, and dreams realized.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our passionate team combines diverse expertise in design, development, and strategy to deliver exceptional digital solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's create something amazing together. We'd love to hear about your project and discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="/portfolio" 
                className="inline-flex items-center border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-lg transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}