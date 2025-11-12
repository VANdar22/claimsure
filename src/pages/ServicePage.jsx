"use client";
import React from 'react';
import { LayoutGrid } from '../components/ui/layout-grid';
import partsReplacementImg from '../assets/partsreplacement.png';
import carRepairImg from '../assets/carrepairs.png';
import periodicMaintenanceImg from '../assets/periodicmaintanance.png'; // Note: 'maintanance' is misspelled in the filename
import batteryCheckImg from '../assets/batterycheck.png';
import diagnosticsImg from '../assets/diagnosis.png'; // Using 'diagnosis.png' instead of 'diagnostics.png'

const ServicePage = () => {
  const services = [
    {
      title: "Parts Replacement",
      description: "High-quality replacement parts and professional installation services for your vehicle.",
      emoji: '🔧',
      thumbnail: partsReplacementImg
    },
    {
      title: "Repair Works",
      description: "Expert repair services to fix any issues with your vehicle's mechanical and electrical systems.",
      emoji: '🔨',
      thumbnail: carRepairImg
    },
    {
      title: "Periodic Maintenance",
      description: "Regular maintenance services to keep your vehicle running smoothly and efficiently.",
      emoji: '⏱️',
      thumbnail: periodicMaintenanceImg
    },
    {
      title: "Battery Check",
      description: "Comprehensive battery testing and replacement services to ensure reliable starts.",
      emoji: '🔋',
      thumbnail: batteryCheckImg
    },
    {
      title: "Diagnostics",
      description: "Advanced diagnostic services to quickly identify and resolve any vehicle issues.",
      emoji: '🔍',
      thumbnail: diagnosticsImg
    }
  ];

  // Service card components
  const ServiceCard = ({ title, description, emoji, thumbnail }) => (
    <div className="h-full">
      <div className="h-full bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#EB0A1E]">
        {thumbnail ? (
          <div className="relative h-40 overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ) : (
          <div className="h-40 bg-[#EB0A1E] flex items-center justify-center text-6xl text-white">
            {emoji}
          </div>
        )}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

  // Define the cards with service information
  const cards = services.map((service, index) => ({
    id: index + 1,
    content: (
      <ServiceCard 
        key={service.title}
        title={service.title} 
        description={service.description}
        icon={service.icon}
        thumbnail={service.thumbnail}
      />
    ),
    className: "col-span-1",
    thumbnail: service.thumbnail,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Services Grid */}
      <div className="py-10 w-full bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="h-full">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  emoji={service.emoji}
                  thumbnail={service.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Hours & Location */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Working Hours</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Regular Hours:</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Available Time Slots:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        '8:00 AM - 8:30 AM',
                        '9:00 AM - 9:30 AM',
                        '10:00 AM - 10:30 AM',
                        '1:00 PM - 1:30 PM',
                        '2:00 PM - 2:30 PM'
                      ].map((slot, index) => (
                        <li key={index} className="text-sm bg-gray-50 p-2 rounded">
                          {slot}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-red-600 text-white md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {/* Location Item Template */}
                  <div className="bg-red-700 p-3 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-600 p-2 rounded-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Greater Accra Region</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li>
                            <a 
                              href="https://www.google.com/maps/place/Toyota+Ghana+Company+Limited,+Graphic+Road+Branch/@5.5582405,-0.3673428,12z/data=!4m10!1m2!2m1!1sToyota+Accra+Branch+Ghana!3m6!1s0xfdf90ab182d921d:0x8d6236928d2a9f79!8m2!3d5.5582405!4d-0.2231472!15sChlUb3lvdGEgQWNjcmEgQnJhbmNoIEdoYW5hIgOIAQFaGyIZdG95b3RhIGFjY3JhIGJyYW5jaCBnaGFuYZIBCmNhcl9kZWFsZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUldkbVppUm1wQlJSQULgAQD6AQUIgQEQQA!16s%2Fg%2F1w456z9v?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-100 hover:underline"
                            >
                              Accra Branch
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://www.google.com/maps/place/Toyota+Ghana+Company+Limited,+Legon+Branch/@5.6651432,-0.3384784,12z/data=!4m10!1m2!2m1!1sToyota+Accra+Branch+Ghana!3m6!1s0xfdf9d4b519d3517:0x10294fa5665e1d7a!8m2!3d5.6651432!4d-0.1942828!15sChlUb3lvdGEgQWNjcmEgQnJhbmNoIEdoYW5hIgOIAQFaGyIZdG95b3RhIGFjY3JhIGJyYW5jaCBnaGFuYZIBCmNhcl9yZXBhaXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkthSEpxWDAxUkVBReABAPoBBAgAEDw!16s%2Fg%2F11t5_2hwpf?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-100 hover:underline"
                            >
                              Legon
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://www.google.com/maps/place/Toyota+Ghana+Company+Limited/@5.6601806,-0.145928,13z/data=!4m10!1m2!2m1!1sToyota+Accra+tema!3m6!1s0xfdf81e7e732be6b:0xc52b29e1e2ac9c2f!8m2!3d5.6601806!4d-0.0738302!15sChFUb3lvdGEgQWNjcmEgdGVtYSIDiAEBWhMiEXRveW90YSBhY2NyYSB0ZW1hkgEKY2FyX2RlYWxlcuABAA!16s%2Fg%2F11hzf60fjd?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-100 hover:underline"
                            >
                              Motoway Branch
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-700 p-3 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-600 p-2 rounded-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Ashanti Region</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li>
                            <a 
                              href="https://www.google.com/maps/place/Toyota+Ghana+Kumasi/@6.6870923,-1.6417068,15z/data=!3m1!4b1!4m6!3m5!1s0xfdb96e950087133:0xc7b3dcfe45822281!8m2!3d6.6870926!4d-1.6232527!16s%2Fg%2F11cs171m_j?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-100 hover:underline"
                            >
                              Kumasi Branch
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://www.google.com/maps/place/Toyota+Ghana+Company+Limited+-Tamale+Office/@9.3820515,-0.8661556,17z/data=!3m1!4b1!4m6!3m5!1s0xfd43d68bf705dc7:0xe8e5956c8b7888a!8m2!3d9.3820515!4d-0.8635807!16s%2Fg%2F11kgkfbs8l?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-100 hover:underline"
                            >
                              Tamale Branch
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-700 p-3 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-600 p-2 rounded-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Western Region</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li>
                            <a 
                              href="https://www.google.com/maps/place/Toyota+Ghana+Company+Limited,+Takoradi+Branch/@4.9021556,-1.7609214,17z/data=!3m1!4b1!4m6!3m5!1s0xfe779f74556d0ef:0x85b74372c80e3269!8m2!3d4.9021556!4d-1.7583465!16s%2Fg%2F11f56g2ljm?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-100 hover:underline"
                            >
                              Takoradi Branch
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
