import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, PhoneIcon, MailIcon, MapPinIcon, ShieldCheckIcon, ArrowRightIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20 pb-8 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="flex items-center text-2xl font-bold mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-2 rounded-lg mr-3">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <span>
                <span className="text-blue-300">KEY LANKA</span> SOLUTIONS
              </span>
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Securing Your Future with Professionalism & Discipline. We are
              committed to safeguarding your life, property, and business with
              trusted security solutions.
            </p>
            <div className="flex space-x-4">
              {[{
              icon: <FacebookIcon className="h-5 w-5" />,
              label: 'Facebook'
            }, {
              icon: <TwitterIcon className="h-5 w-5" />,
              label: 'Twitter'
            }, {
              icon: <InstagramIcon className="h-5 w-5" />,
              label: 'Instagram'
            }, {
              icon: <LinkedinIcon className="h-5 w-5" />,
              label: 'LinkedIn'
            }].map((item, index) => <a key={index} href="#" className="bg-blue-800/50 hover:bg-blue-700 p-2 rounded-full transition-all hover:scale-110" aria-label={`Follow us on ${item.label}`}>
                  {item.icon}
                </a>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {['Fire & Safety Solutions', 'Static Security Guarding', 'Mobile Patrol & Escort Services', 'VIP Protection / Executive Security', 'Event Security', 'Surveillance & Access Control'].map((service, index) => <li key={index}>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                    <ArrowRightIcon className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service}</span>
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[{
              name: 'Home',
              href: '#'
            }, {
              name: 'Services',
              href: '#services'
            }, {
              name: 'About Us',
              href: '#about'
            }, {
              name: 'Management',
              href: '#team'
            }, {
              name: 'Contact',
              href: '#contact'
            }, {
              name: 'Careers',
              href: '#'
            }].map((link, index) => <li key={index}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors flex items-center group">
                    <ArrowRightIcon className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-blue-100">
                  070 331 1333
                  <br />
                  071 252 7950
                  <br />
                  011 284 8391
                </span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:keylanka.sec@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  keylanka.sec@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-blue-100">
                  Key Lanka Solutions (Pvt) Ltd
                  <br />
                  4/88, Highlevel Road, Maharagama, Sri Lanka
                </span>
              </li>

            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 mb-4 md:mb-0">
              © {currentYear} Key Lanka Solutions (Pvt) Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}