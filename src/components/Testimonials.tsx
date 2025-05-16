import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    company: 'Vertex Media',
    title: 'Marketing Director',
    quote: 'CdeWilliam Web Design transformed our outdated website into a powerful marketing tool. The attention to detail and strategic approach to our brand\'s digital presence exceeded our expectations. We\'ve seen a 40% increase in leads since launch.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: 2,
    name: 'David Rodriguez',
    company: 'Altitude Coffee',
    title: 'Founder',
    quote: 'Working with the team at CdeWilliam was a game-changer for our small business. They created a website that perfectly captures our brand and has made online ordering seamless for our customers. The investment has paid for itself many times over.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    company: 'Horizon Technologies',
    title: 'CEO',
    quote: 'We needed a complex web application built on a tight timeline, and CdeWilliam delivered flawlessly. Their technical expertise combined with exceptional design sensibilities created a product that has received praise from both our team and users.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const testimonial = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Testimonials</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">What our clients say</h3>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it—hear from some of our satisfied clients about their experience working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mt-4">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-blue-600 font-medium">{testimonial.company}</p>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <blockquote>
                  <p className="text-xl text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-2 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-2 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};