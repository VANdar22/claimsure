import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insights } from '../data/insightsData';
import { insightDetails } from '../data/insightDetails';
import InsightCard from '../components/InsightCard';

const InsightDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the insight with the matching id
  const insight = insights.find(item => 
    item.title.toLowerCase().replaceAll(/\s+/g, '-') === id
  );

  // Find the detailed content for this insight
  const insightDetail = insightDetails.find(detail => 
    detail.title === insight?.title
  );

  if (!insight || !insightDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Insight not found</h1>
          <button 
            onClick={() => navigate('/insights')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto font-['Montserrat']">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#0E38B1] hover:text-blue-800 mb-12 transition-colors group"
          whileHover={{ x: -4 }}
        >
          <svg 
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          <span className="font-medium">Back</span>
        </button>

        {/* Article Header */}
        <div className="bg-white overflow-hidden mb-12">
          <div className="p-6 sm:p-8 pb-0 sm:pb-0">
            <h1 className="font-['Montserrat'] font-light text-[#0E38B1] text-left w-full mb-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                {insight.title}
              </div>
            </h1>
            <div className="flex items-center text-sm mb-8 border-b border-gray-100 pb-6">
              <span className="text-gray-900 font-normal bg-gray-100 px-3 py-1 rounded-sm">
                {insight.category}
              </span>
              <span className="mx-3 text-gray-300">•</span>
              <span className="text-gray-900">{insight.date}</span>
            </div>
          </div>
          <div className="w-full h-80 sm:h-[32rem] overflow-hidden">
            <img 
              src={insight.image} 
              alt={insight.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white p-6 sm:p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              {insight.excerpt}
            </p>
            
            <div className="space-y-8">
              {insightDetail.sections.map((section, index) => {
                switch (section.type) {
                  case 'paragraph':
                    return <p key={`para-${index}`} className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{section.content}</p>;
                  case 'heading':
                    const HeadingTag = `h${section.level}`;
                    return (
                      <HeadingTag 
                        key={`heading-${index}`}
                        className={`${section.level === 2 ? 'text-2xl' : 'text-xl'} font-light text-[#0E38B1] mt-12 mb-6`}
                      >
                        {section.content}
                      </HeadingTag>
                    );
                  case 'list':
                    return (
                      <ul key={`list-${index}`} className="list-disc pl-6 space-y-3">
                        {section.items.map((item, i) => {
                          const [title, ...content] = item.split(': ');
                          return (
                            <li key={`item-${i}`} className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                              <span className="text-[#0E38B1]">{title}:</span> {content.join(': ')}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
              
              <h2 className="text-xl sm:text-2xl font-light text-[#0E38B1] mt-16 mb-6">Real-World Impact</h2>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                By implementing our solutions, our clients have seen remarkable results, including:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">30% reduction in claims processing time</li>
                <li className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">25% improvement in fraud detection rates</li>
                <li className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">40% increase in customer satisfaction scores</li>
              </ul>
              
              <p className="mt-8 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                The future belongs to organizations that can effectively leverage data and insights. With our expertise and innovative approach, we're helping our clients transform their operations and achieve sustainable growth in an increasingly competitive market.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 md:mt-24 px-4 sm:px-6">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-between flex-nowrap gap-3 sm:gap-6">
              <div className="min-w-0">
                <h3 className="font-['Montserrat'] text-base sm:text-lg md:text-xl font-light text-gray-900">
                  Ready to transform your data into a competitive advantage?
                </h3>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-gray-600 mt-1">
                  Our team of experts is here to help you unlock the full potential of your data assets.
                </p>
              </div>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="flex-shrink-0 px-4 sm:px-5 py-2 sm:py-3 bg-white text-[#0E38B1] border-2 border-[#0E38B1] rounded-xl font-medium hover:bg-[#0E38B1] hover:text-white transition-colors duration-300 text-xl sm:text-2xl"
              >
                🡥
              </button>
            </div>
          </div>
        </div>

        {/* Other Insights Section */}
        {insights.length > 1 && (
          <div className="mt-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-light text-[#0E38B1] mb-8">More Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {insights
                  .filter(item => item.title !== insight.title)
                  .map((item, index) => (
                    <InsightCard key={item.title} item={item} index={index} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightDetails;
