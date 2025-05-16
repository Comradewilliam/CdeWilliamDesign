import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
  'future-of-web-design': {
    title: 'The Future of Web Design: Trends to Watch in 2025',
    author: 'Sophie Williams',
    date: 'May 10, 2025',
    content: `
      <p>The web design landscape is constantly evolving, and staying ahead of the curve is crucial for creating engaging digital experiences. Here are the key trends that will shape web design in 2025:</p>
      
      <h2>1. AI-Driven Personalization</h2>
      <p>Artificial intelligence will play a bigger role in creating personalized user experiences, adapting layouts and content based on user behavior and preferences.</p>
      
      <h2>2. Immersive Experiences</h2>
      <p>Virtual and augmented reality elements will become more common in web design, creating interactive and engaging user experiences.</p>
      
      <h2>3. Sustainable Design</h2>
      <p>Energy-efficient design practices will gain importance as businesses focus on reducing their digital carbon footprint.</p>
    `
  },
  'improve-conversion-rates': {
    title: 'How to Improve Website Conversion Rates Through UX Design',
    author: 'Mark Johnson',
    date: 'April 28, 2025',
    content: `
      <p>A well-designed user experience can significantly impact your website's conversion rates. Here are proven strategies to optimize your UX design:</p>
      
      <h2>1. Streamline User Journeys</h2>
      <p>Simplify navigation and reduce friction points in the user journey to make it easier for visitors to complete desired actions.</p>
      
      <h2>2. Optimize Call-to-Actions</h2>
      <p>Strategic placement and design of CTAs can dramatically improve click-through rates and conversions.</p>
      
      <h2>3. Mobile Optimization</h2>
      <p>Ensure your website provides an excellent experience across all devices to maximize conversion opportunities.</p>
    `
  },
  'impact-of-page-speed': {
    title: 'The Impact of Page Speed on SEO and User Experience',
    author: 'Amelia Chen',
    date: 'April 15, 2025',
    content: `
      <p>Page speed is a critical factor in both search engine rankings and user satisfaction. Here's why it matters and how to optimize it:</p>
      
      <h2>1. SEO Benefits</h2>
      <p>Faster loading times improve search engine rankings and visibility in search results.</p>
      
      <h2>2. User Retention</h2>
      <p>Quick-loading pages keep users engaged and reduce bounce rates.</p>
      
      <h2>3. Mobile Performance</h2>
      <p>Speed optimization is especially crucial for mobile users who may have slower connections.</p>
    `
  }
};

export const BlogPost: React.FC = () => {
  const { post } = useParams<{ post: string }>();
  const details = post ? blogPosts[post as keyof typeof blogPosts] : null;

  if (!details) {
    return <div>Post not found</div>;
  }

  return (
    <div className="pt-20">
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{details.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{details.author}</span>
            <span className="mx-2">•</span>
            <span>{details.date}</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: details.content }}
          />
          
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};