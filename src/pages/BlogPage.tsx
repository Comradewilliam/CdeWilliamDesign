import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const categories = ['All', 'Design', 'Development', 'SEO', 'Business', 'Trends'];

const articles = [
  {
    id: 'future-of-web-design',
    title: 'The Future of Web Design: AI-Powered Experiences in 2025',
    excerpt: 'Discover how artificial intelligence is revolutionizing web design and creating more personalized, intuitive user experiences that adapt to user behavior in real-time.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'William Sadiki',
    date: 'December 15, 2024',
    category: 'Design',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 'conversion-optimization',
    title: 'Conversion Rate Optimization: Psychology Meets Design',
    excerpt: 'Learn how understanding user psychology can dramatically improve your website\'s conversion rates through strategic design decisions and behavioral triggers.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Johnson',
    date: 'December 8, 2024',
    category: 'Business',
    readTime: '7 min read',
    featured: true
  },
  {
    id: 'core-web-vitals',
    title: 'Core Web Vitals: The Complete Guide to Performance Optimization',
    excerpt: 'Master Google\'s Core Web Vitals and learn advanced techniques to boost your website\'s performance, search rankings, and user experience.',
    image: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen',
    date: 'November 28, 2024',
    category: 'Development',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 'responsive-design-2025',
    title: 'Responsive Design in 2025: Beyond Mobile-First',
    excerpt: 'Explore the evolution of responsive design and how to create websites that work seamlessly across all devices and screen sizes.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Johnson',
    date: 'November 20, 2024',
    category: 'Design',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 'seo-trends-2025',
    title: 'SEO Trends That Will Dominate 2025',
    excerpt: 'Stay ahead of the competition with these emerging SEO trends and strategies that will shape search engine optimization in 2025.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'William Sadiki',
    date: 'November 15, 2024',
    category: 'SEO',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 'javascript-frameworks-comparison',
    title: 'React vs Vue vs Angular: Which Framework to Choose in 2025',
    excerpt: 'A comprehensive comparison of the top JavaScript frameworks to help you make the right choice for your next project.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen',
    date: 'November 10, 2024',
    category: 'Development',
    readTime: '12 min read',
    featured: false
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Stay updated with the latest web design trends, development tips, and digital marketing insights from our expert team at CDE William Design."
        keywords="web design blog, development tips, SEO insights, design trends, digital marketing"
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Stay ahead of the curve with expert insights on web design, development, and digital strategy trends that matter to your business.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {activeCategory === 'All' && featuredArticles.length > 0 && (
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-600">
                  Our most popular and impactful content
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <article 
                    key={article.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <a href={`/blog/${article.id}`} className="block overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </a>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        <a href={`/blog/${article.id}`}>{article.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-6">
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
                        href={`/blog/${article.id}`}
                        className="inline-flex items-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                      >
                        Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center mb-12">
              <div className="flex space-x-2 p-1 bg-white rounded-lg shadow-sm">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-md transition-colors duration-300 font-medium ${
                      activeCategory === category 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === 'All' ? regularArticles : filteredArticles).map((article) => (
                <article 
                  key={article.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <a href={`/blog/${article.id}`} className="block overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider flex items-center">
                        <Tag size={12} className="mr-1" />
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      <a href={`/blog/${article.id}`}>{article.title}</a>
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
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                    >
                      Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tips, and trends delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg transition-colors duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}