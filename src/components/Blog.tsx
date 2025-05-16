import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Future of Web Design: Trends to Watch in 2025',
    excerpt: 'Explore the cutting-edge design trends that will shape the digital landscape in the coming year.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sophie MASAKA',
    date: 'May 10, 2025',
    category: 'Design Trends'
  },
  {
    id: 2,
    title: 'How to Improve Website Conversion Rates Through UX Design',
    excerpt: 'Learn practical strategies to enhance user experience and increase conversions on your website.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Mark Johnson',
    date: 'April 28, 2025',
    category: 'UX Design'
  },
  {
    id: 3,
    title: 'The Impact of Page Speed on SEO and User Experience',
    excerpt: 'Discover why site speed matters and how to optimize your website for better performance.',
    image: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Amelia Chen',
    date: 'April 15, 2025',
    category: 'Performance'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Blog & Insights</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Latest from our journal</h3>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest trends, tips, and insights in web design and digital marketing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <a href="#" className="block overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">{article.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
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
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};