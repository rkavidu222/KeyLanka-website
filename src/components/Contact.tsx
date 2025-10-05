import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, SendIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4 font-medium text-sm">
            <MailIcon className="h-4 w-4 mr-2" />
            <span>Get In Touch</span>
          </div>
          <h2 id="contact-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">
            Get in touch with our security experts to discuss your specific
            protection needs.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-10 h-full border border-blue-100/50 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8">
                Get In Touch
              </h3>
              <div className="space-y-6 md:space-y-8">
                {[{
                icon: <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                title: 'Phone',
                content: ['070 331 1333 (Official)', '071 252 7950 (Personal)', '011 284 8391 (Land)']
              }, {
                icon: <MailIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                title: 'Email',
                content: ['keylanka.sec@gmail.com']
              }, {
                icon: <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                title: 'Location',
                content: ['Key Lanka Solutions (Pvt) Ltd', 'Colombo, Sri Lanka']
              }, {
                icon: <ClockIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                title: 'Hours',
                content: ['Monday - Friday: 8:00 AM - 5:00 PM', '24/7 Emergency Response']
              }].map((item, index) => <div key={index} className="flex items-start group">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-3 rounded-xl mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1 md:mb-2">
                        {item.title}
                      </h4>
                      {item.content.map((line, i) => <p key={i} className="text-gray-600 text-sm md:text-base">
                          {line}
                        </p>)}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8">
                Request a Quote
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="John" aria-required="true" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Doe" aria-required="true" />
                </div>
              </div>
              <div className="mb-4 md:mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="john.doe@example.com" aria-required="true" />
              </div>
              <div className="mb-4 md:mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Your phone number" aria-required="true" />
              </div>
              <div className="mb-4 md:mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Interested In
                </label>
                <select id="service" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white" aria-required="true">
                  <option value="">Select a service</option>
                  <option value="fire">Fire & Safety Solutions</option>
                  <option value="static">Static Security Guarding</option>
                  <option value="mobile">
                    Mobile Patrol & Escort Services
                  </option>
                  <option value="vip">
                    VIP Protection / Executive Security
                  </option>
                  <option value="event">Event Security</option>
                  <option value="surveillance">
                    Surveillance & Access Control
                  </option>
                </select>
              </div>
              <div className="mb-6 md:mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Tell us about your security needs..." aria-required="true"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 md:py-4 px-6 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center" aria-label="Submit security service request">
                <span>Submit Request</span>
                <SendIcon className="h-4 w-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}