import React, { lazy } from 'react';
import { CheckCircleIcon, ClockIcon, AwardIcon, ShieldCheckIcon, ArrowRightIcon } from 'lucide-react';
export function Benefits() {
  const benefits = [{
    icon: <CheckCircleIcon className="h-6 w-6 md:h-7 md:w-7" />,
    title: 'Integrity & Discipline',
    description: 'We act with honesty and transparency in all our dealings, maintaining military-grade discipline in operations and service delivery.'
  }, {
    icon: <ClockIcon className="h-6 w-6 md:h-7 md:w-7" />,
    title: 'Client-Centric Approach',
    description: 'We prioritize the needs and concerns of our clients, offering personalized services and maintaining open communication to build lasting partnerships.'
  }, {
    icon: <AwardIcon className="h-6 w-6 md:h-7 md:w-7" />,
    title: 'Leadership & Experience',
    description: 'Founded and led by a retired Brigadier with 34 years of service in operational areas and logistics, bringing unmatched expertise.'
  }, {
    icon: <ShieldCheckIcon className="h-6 w-6 md:h-7 md:w-7" />,
    title: 'Flexible Security Plans',
    description: 'Recognizing that each client has unique requirements, we offer flexible security plans that can be customized to adapt to evolving security needs.'
  }];
  return <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-lg"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/30 rounded-2xl blur-sm"></div>
              <img src="https://images.unsplash.com/photo-1521791055366-0d553381c0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Security professionals discussing strategy and security plans" className="rounded-2xl shadow-2xl w-full relative z-10 object-cover aspect-[4/3]" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hover:shadow-2xl transition-shadow max-w-[80%] md:max-w-none">
                <div className="flex items-center">
                  <div className="mr-3 md:mr-4">
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      34+
                    </p>
                  </div>
                  <p className="text-gray-800 font-medium text-sm md:text-base">
                    Years of
                    <br />
                    Military Experience
                  </p>
                </div>
              </div>
              {/* Additional decorative element */}
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center z-20">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4 font-medium text-sm">
              <AwardIcon className="h-4 w-4 mr-2" />
              <span>Our Approach</span>
            </div>
            <h2 id="benefits-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Our Core Values & Approach
            </h2>
            <div className="space-y-6 md:space-y-8">
              {benefits.map((benefit, index) => <div key={index} className="flex group">
                  <div className="flex-shrink-0 mr-3 md:mr-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-1 md:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>)}
            </div>
            <div className="mt-8 md:mt-10">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all inline-flex items-center hover:shadow-lg hover:scale-105 active:scale-95" aria-label="Learn more about our security company">
                <span>Learn More About Us</span>
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}