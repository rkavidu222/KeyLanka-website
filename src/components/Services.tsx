import React from 'react';
import { ShieldIcon, BuildingIcon, AlertTriangleIcon, UserIcon, CameraIcon, FlameIcon, CarIcon, ChevronRightIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <FlameIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: 'Fire & Safety Solutions',
    description: 'Fire risk assessments, fire detection systems, fire drills, and compliance support for comprehensive safety.',
    link: '#contact',
    color: 'from-orange-500 to-red-500'
  }, {
    icon: <BuildingIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: 'Static Security Guarding',
    description: 'Professional guards for industrial, commercial, and residential sites with military-grade discipline.',
    link: '#contact',
    color: 'from-blue-500 to-blue-600'
  }, {
    icon: <CarIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: 'Mobile Patrol & Escort Services',
    description: 'Secure transport and rapid response teams for dynamic security needs and asset protection.',
    link: '#contact',
    color: 'from-green-500 to-teal-500'
  }, {
    icon: <UserIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: 'VIP Protection / Executive Security',
    description: 'Close protection for high-profile individuals and events by experienced security professionals.',
    link: '#contact',
    color: 'from-purple-500 to-indigo-500'
  }, {
    icon: <AlertTriangleIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: 'Event Security',
    description: 'Planning and deployment for corporate and private events with meticulous attention to detail.',
    link: '#contact',
    color: 'from-amber-500 to-yellow-500'
  }, {
    icon: <CameraIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: 'Surveillance & Access Control',
    description: 'CCTV monitoring, intrusion detection, and electronic access control systems with modern technology integration.',
    link: '#contact',
    color: 'from-cyan-500 to-blue-500'
  }];
  return <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4 font-medium text-sm">
            <ShieldIcon className="h-4 w-4 mr-2" />
            <span>Professional Security</span>
          </div>
          <h2 id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Our Security Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">
            Key Lanka Solutions offers a full spectrum of security and
            fire-safety services designed to meet the needs of individuals,
            corporates, and institutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8 group border border-gray-100 hover:-translate-y-1 duration-300">
              <div className={`mb-6 bg-gradient-to-br ${service.color} p-3 md:p-4 rounded-2xl text-white inline-block group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href={service.link} className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group/link" aria-label={`Learn more about ${service.title}`}>
                <span>Learn More</span>
                <ChevronRightIcon className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>)}
        </div>
      </div>
    </section>;
}