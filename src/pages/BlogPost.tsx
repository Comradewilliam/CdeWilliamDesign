import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { post } = useParams<{ post: string }>();
  
  // Get blog posts from localStorage (admin managed)
  const getBlogPosts = () => {
    const stored = localStorage.getItem('blogPosts');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Default blog posts if none exist
    const defaultPosts = [
      {
        id: 'future-of-web-design',
        title: 'The Future of Web Design: AI-Powered Experiences in 2025',
        excerpt: 'Discover how artificial intelligence is revolutionizing web design and creating more personalized, intuitive user experiences that adapt to user behavior in real-time.',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-xl text-gray-600 mb-8">The web design landscape is constantly evolving, and staying ahead of the curve is crucial for creating engaging digital experiences. As we move through 2025, artificial intelligence is becoming the driving force behind the next generation of web design.</p>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">AI-Driven Personalization</h2>
            <p class="text-lg text-gray-700 mb-6">Artificial intelligence will play a bigger role in creating personalized user experiences, adapting layouts and content based on user behavior and preferences. This technology allows websites to learn from user interactions and automatically adjust elements like:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Content recommendations based on browsing history</li>
              <li>Dynamic layout adjustments for optimal user engagement</li>
              <li>Personalized color schemes and typography preferences</li>
              <li>Adaptive navigation structures</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Immersive Experiences</h2>
            <p class="text-lg text-gray-700 mb-6">Virtual and augmented reality elements will become more common in web design, creating interactive and engaging user experiences. These technologies enable:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>3D product visualizations for e-commerce</li>
              <li>Virtual showrooms and galleries</li>
              <li>Interactive storytelling experiences</li>
              <li>Immersive brand presentations</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Sustainable Design</h2>
            <p class="text-lg text-gray-700 mb-6">Energy-efficient design practices will gain importance as businesses focus on reducing their digital carbon footprint. This includes:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Optimized images and compressed assets</li>
              <li>Efficient code structures and minimal JavaScript</li>
              <li>Dark mode implementations to reduce screen energy consumption</li>
              <li>Green hosting solutions and CDN optimization</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Road Ahead</h2>
            <p class="text-lg text-gray-700 mb-6">As we continue through 2025, the intersection of AI, sustainability, and user experience will define the future of web design. Businesses that embrace these trends early will have a significant competitive advantage in the digital marketplace.</p>
          </div>
        `,
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Young Sadiki',
        authorRole: 'Founder & Creative Director',
        date: 'December 15, 2024',
        category: 'Design',
        readTime: '5 min read',
        featured: true
      },
      {
        id: 'conversion-optimization',
        title: 'Conversion Rate Optimization: Psychology Meets Design',
        excerpt: 'Learn how understanding user psychology can dramatically improve your website\'s conversion rates through strategic design decisions and behavioral triggers.',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-xl text-gray-600 mb-8">Understanding the psychology behind user behavior is crucial for creating websites that not only look great but also convert visitors into customers. In this comprehensive guide, we'll explore how psychological principles can be applied to web design for maximum conversion impact.</p>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Psychology of Color</h2>
            <p class="text-lg text-gray-700 mb-6">Colors evoke emotions and influence decision-making. Strategic use of color psychology can significantly impact conversion rates:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li><strong>Red:</strong> Creates urgency and excitement, perfect for sale buttons</li>
              <li><strong>Blue:</strong> Builds trust and reliability, ideal for financial services</li>
              <li><strong>Green:</strong> Associated with growth and positive action</li>
              <li><strong>Orange:</strong> Encourages enthusiasm and calls-to-action</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Social Proof and Trust Signals</h2>
            <p class="text-lg text-gray-700 mb-6">Humans are social creatures who look to others for validation. Implementing social proof elements can dramatically increase conversions:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Customer testimonials and reviews</li>
              <li>Trust badges and security certificates</li>
              <li>Client logos and case studies</li>
              <li>User-generated content and social media feeds</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Principle of Scarcity</h2>
            <p class="text-lg text-gray-700 mb-6">Limited availability creates urgency and drives action. Effective scarcity tactics include:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Limited-time offers with countdown timers</li>
              <li>Stock level indicators</li>
              <li>Exclusive access messaging</li>
              <li>Early bird pricing strategies</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Success</h2>
            <p class="text-lg text-gray-700 mb-6">Implementing these psychological principles requires continuous testing and optimization. Use A/B testing to measure the impact of design changes and make data-driven decisions for ongoing improvement.</p>
          </div>
        `,
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Christina Kweka',
        authorRole: 'Senior UI/UX Designer',
        date: 'December 8, 2024',
        category: 'Business',
        readTime: '7 min read',
        featured: true
      },
      {
        id: 'core-web-vitals',
        title: 'Core Web Vitals: The Complete Guide to Performance Optimization',
        excerpt: 'Master Google\'s Core Web Vitals and learn advanced techniques to boost your website\'s performance, search rankings, and user experience.',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-xl text-gray-600 mb-8">Google's Core Web Vitals have become essential metrics for website performance and search engine optimization. Understanding and optimizing these metrics is crucial for maintaining competitive search rankings and providing excellent user experiences.</p>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Core Web Vitals</h2>
            <p class="text-lg text-gray-700 mb-6">Core Web Vitals consist of three key metrics that measure different aspects of user experience:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance</li>
              <li><strong>First Input Delay (FID):</strong> Measures interactivity</li>
              <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Optimization Strategies</h2>
            <p class="text-lg text-gray-700 mb-6">Improving Core Web Vitals requires a comprehensive approach:</p>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">LCP Optimization</h3>
            <ul class="list-disc pl-6 mb-6 text-lg text-gray-700">
              <li>Optimize server response times</li>
              <li>Use efficient image formats (WebP, AVIF)</li>
              <li>Implement proper caching strategies</li>
              <li>Minimize render-blocking resources</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">FID Improvement</h3>
            <ul class="list-disc pl-6 mb-6 text-lg text-gray-700">
              <li>Reduce JavaScript execution time</li>
              <li>Break up long tasks</li>
              <li>Use web workers for heavy computations</li>
              <li>Optimize third-party code</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">CLS Prevention</h3>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Set size attributes for images and videos</li>
              <li>Reserve space for dynamic content</li>
              <li>Avoid inserting content above existing content</li>
              <li>Use CSS transforms for animations</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Tools and Monitoring</h2>
            <p class="text-lg text-gray-700 mb-6">Regular monitoring and testing are essential for maintaining optimal Core Web Vitals scores. Recommended tools include Google PageSpeed Insights, Lighthouse, and Chrome DevTools.</p>
          </div>
        `,
        image: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Godfrey Kihoya',
        authorRole: 'Full-Stack Developer',
        date: 'November 28, 2024',
        category: 'Development',
        readTime: '10 min read',
        featured: false
      },
      {
        id: 'seo-trends-2025',
        title: 'SEO Trends That Will Dominate 2025',
        excerpt: 'Stay ahead of the competition with these emerging SEO trends and strategies that will shape search engine optimization in 2025.',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-xl text-gray-600 mb-8">Search engine optimization continues to evolve rapidly, and 2025 brings new challenges and opportunities. Understanding these emerging trends will help you stay ahead of the competition and maintain strong search visibility.</p>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">AI-Powered Search</h2>
            <p class="text-lg text-gray-700 mb-6">Search engines are becoming more sophisticated with AI integration, changing how we approach SEO:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Focus on semantic search and user intent</li>
              <li>Create comprehensive, topic-focused content</li>
              <li>Optimize for conversational queries</li>
              <li>Implement structured data markup</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Voice Search Optimization</h2>
            <p class="text-lg text-gray-700 mb-6">With the rise of voice assistants, optimizing for voice search is becoming crucial:</p>
            <ul class="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>Target long-tail, conversational keywords</li>
              <li>Create FAQ-style content</li>
              <li>Optimize for local search queries</li>
              <li>Focus on featured snippet optimization</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Core Web Vitals Evolution</h2>
            <p class="text-lg text-gray-700 mb-6">Google continues to emphasize user experience metrics, with new additions to Core Web Vitals expected in 2025.</p>
            
            <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Video Content Dominance</h2>
            <p class="text-lg text-gray-700 mb-6">Video content is becoming increasingly important for SEO success, requiring new optimization strategies for video search results.</p>
          </div>
        `,
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Young Sadiki',
        authorRole: 'Founder & Creative Director',
        date: 'November 15, 2024',
        category: 'SEO',
        readTime: '8 min read',
        featured: false
      }
    ];
    
    localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
    return defaultPosts;
  };

  const blogPosts = getBlogPosts();
  const details = blogPosts.find((p: any) => p.id === post);

  if (!details) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <a 
              href="/blog" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={details.title}
        description={details.excerpt}
        keywords={`${details.category}, blog post, ${details.author}, web design, development`}
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Tag size={14} className="mr-1" />
                  {details.category}
                </span>
                <span className="text-blue-100 flex items-center">
                  <Clock size={14} className="mr-1" />
                  {details.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {details.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {details.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{details.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{details.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <img 
                  src={details.image} 
                  alt={details.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: details.content }}
              />
              
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {details.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{details.author}</h4>
                      <p className="text-gray-600">{details.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Published on</p>
                    <p className="text-gray-900 font-medium">{details.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Share this article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Articles
              </h2>
              <p className="text-lg text-gray-600">
                Continue reading our latest insights and tips.
              </p>
            </div>
            <div className="text-center">
              <a 
                href="/blog" 
                className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
              >
                View All Articles <ArrowLeft size={20} className="ml-2 rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};