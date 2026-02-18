import { useState, useEffect } from 'react';
import SkeletonImage from './SkeletonImage';
import advisory from '../assets/advisory.png';
import documentation from '../assets/documentation.png';
import followup from '../assets/followup.png';
import negotiation from '../assets/negotiation.png';
import riskadvisory from '../assets/riskadvisory.png';

const services = [
  {
    title: 'Insurance Claims Advisory',
    description: 'Expert guidance on policy interpretation, claims procedures, coverage, exclusions, and entitlements to help you navigate the claims process with confidence.',
    items: [
      'Policy interpretation and claims advisory',
      'Guidance on claims procedures and requirements',
      'Advisory on coverage, exclusions, and claim entitlements'
    ],
    image: advisory
  },
  {
    title: 'Claims Documentation & Preparation',
    description: 'Assistance in preparing claim forms, compiling evidence, coordinating loss documentation, and conducting surveys to ensure accurate and complete submissions.',
    items: [
      'Preparation of claim forms and supporting documents',
      'Loss documentation coordination',
      'Evidence compilation and verification',
      'Survey'
    ],
    image: documentation
  },
  {
    title: 'Claims Submission & Follow-Up',
    description: 'End-to-end management of claim submission, continuous progress monitoring, and liaison between policyholders and insurers for smooth processing.',
    items: [
      'Submission of claims to insurers',
      'Continuous follow-up and progress monitoring',
      'Liaison between policyholders and insurers'
    ],
    image: followup
  },
  {
    title: 'Claims Negotiation & Settlement Support',
    description: 'Support during negotiations, review of insurer assessments and settlement offers, and professional recommendations to maximize claim outcomes.',
    items: [
      'Advisory support during claims negotiation',
      'Review of insurer assessments and settlement offers',
      'Professional representation and settlement recommendations'
    ],
    image: negotiation
  },
  {
    title: 'Claims Management & Risk Advisory',
    description: 'Comprehensive claims management for businesses, including loss prevention, risk advisory, post-loss guidance, and recommendations for claims improvement.',
    items: [
      'Claims management support for businesses',
      'Loss prevention and claims risk advisory',
      'Post-loss advisory and claims improvement recommendations'
    ],
    image: riskadvisory
  }
];

const ServicesAccordion = () => {
  const [openTitle, setOpenTitle] = useState(services[0].title);
  
  // Ensure the first item is always open on initial render
  useEffect(() => {
    setOpenTitle(services[0].title);
  }, []);

  const toggleAccordion = (title) => {
    setOpenTitle(openTitle === title ? '' : title);
  };

  return (
    <div className="w-full p-4 font-montserrat">
      <h2 className="text-3xl md:text-4xl font-light text-[#7f1734] mb-12 md:mb-20 md:ml-8">
        Our Comprehensive Services
      </h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.title} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className={`w-full px-4 py-3 text-left flex justify-between items-center transition-colors duration-200 ${openTitle === service.title ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
              onClick={() => toggleAccordion(service.title)}
            >
              <div className="flex items-center">
                <span className={`font-light mr-3 text-lg md:text-xl ${openTitle === service.title ? 'text-[#7f1734]' : 'text-[#7f1734]/70'}`}>
                  {services.indexOf(service) + 1}.
                </span>
                <span className={`text-lg md:text-xl font-light ${openTitle === service.title ? 'text-gray-900' : 'text-gray-500/80'}`}>
                  {service.title}
                </span>
              </div>
              <span className="text-[#7f1734] text-5xl font-thin w-12 h-12 flex items-center justify-center opacity-70">
                {openTitle === service.title ? '−' : '+'}
              </span>
            </button>
            {openTitle === service.title && (
              <div className="flex flex-col md:flex-row md:h-80 bg-gray-50">
                <div className="px-6 py-6 md:w-7/12 overflow-y-auto max-h-96 md:max-h-none">
                  <p className="text-gray-600 text-lg md:text-lg">{service.description}</p>
                </div>
                <div className="w-full h-48 md:h-auto md:w-5/12 relative">
                  {service.image ? (
                  <SkeletonImage 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
