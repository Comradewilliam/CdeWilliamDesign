import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Future of Web Design: AI-Powered Experiences in 2025',
    excerpt: 'Discover how artificial intelligence is revolutionizing web design and creating more personalized, intuitive user experiences.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'William Sadiki',
    date: 'December 15, 2024',
    category: 'AI & Design',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Conversion Rate Optimization: Psychology Meets Design',
    excerpt: 'Learn how understanding user psychology can dramatically improve your website\'s conversion rates through strategic design decisions.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Johnson',
    date: 'December 8, 2024',
    category: 'UX Strategy',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Core Web Vitals: The Complete Guide to Performance Optimization',
    excerpt: 'Master Google\'s Core Web Vitals and learn advanced techniques to boost your website\'s performance and search rankings.',
    image: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen',
    date: 'November 28, 2024',
    category: 'Performance',
    readTime: '10 min read'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Blog & Insights</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Latest insights and industry trends</h3>
          <p className="mt-4 text-lg text-gray-600">
            Stay ahead of the curve with our expert insights on web design, development, and digital strategy trends that matter to your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <a href="#" className="block overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <User size={14} className="mr-1" />
                    {article.author}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {article.date}
                  </span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                >
                  Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/blog" 
            className="inline-block border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Articles
          </a>
        </div>
      </div>
    </section>
  );
};