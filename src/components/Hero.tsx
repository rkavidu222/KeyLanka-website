import React from 'react';
import { ShieldCheckIcon, LockIcon, EyeIcon, ArrowRightIcon } from 'lucide-react';

export function Hero() {
  return <section className="relative bg-gradient-to-b from-blue-50 via-white to-white pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden" aria-labelledby="hero-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[15%] w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full mb-12 md:mb-0 md:pr-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6 font-medium text-sm">
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              <span>Professional Security Services</span>
            </div>
            <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Securing Your Future
              </span>{' '}
              with Professionalism & Discipline
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              KEY LANKA SOLUTIONS (PVT) LTD delivers reliable, efficient, and
              innovative security services managed by experienced ex-army
              officers with military precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all flex items-center justify-center hover:shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto" aria-label="Get started with our security services">
                <span>Get Started</span>
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </a>
              <a href="#services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all flex items-center justify-center hover:shadow-md w-full sm:w-auto" aria-label="Learn about our security services">
                Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-lg"></div>
              <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Professional security guard in uniform monitoring a secure area" className="rounded-2xl shadow-2xl w-full relative z-10 object-cover aspect-[4/3]" loading="eager" />
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl flex items-center z-20 border border-gray-100 hover:shadow-2xl transition-shadow max-w-[80%] md:max-w-none">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-3 rounded-xl mr-2 md:mr-3">
                  <ShieldCheckIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900 text-sm md:text-base">
                    Military Expertise
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    34+ years leadership experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {[{
          icon: <ShieldCheckIcon className="h-6 w-6 text-white" />,
          title: 'Professional Team',
          description: 'Carefully selected, trained, and background-verified security personnel with military discipline.'
        }, {
          icon: <LockIcon className="h-6 w-6 text-white" />,
          title: 'Comprehensive Solutions',
          description: 'Full spectrum of security and fire-safety services for individuals, corporates, and institutions.'
        }, {
          icon: <EyeIcon className="h-6 w-6 text-white" />,
          title: '24/7 Availability',
          description: 'Rapid response capability and continuous monitoring to ensure your safety around the clock.'
        }].map((feature, index) => <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 border border-gray-100 group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
}