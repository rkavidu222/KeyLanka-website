import React, { lazy } from 'react';
import { LinkedinIcon, MailIcon, AwardIcon, BookOpenIcon, BriefcaseIcon, CheckCircleIcon, UserIcon, ShieldCheckIcon } from 'lucide-react';
export function Team() {
  return <section id="team" className="py-24 bg-blue-50 relative overflow-hidden" aria-labelledby="team-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-200 text-blue-700 rounded-full mb-4 font-medium text-sm">
            <UserIcon className="h-4 w-4 mr-2" />
            <span>Leadership</span>
          </div>
          <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Management & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Our company is led by experienced professionals with extensive
            military backgrounds, bringing discipline, strategy, and excellence
            to security services.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20"></div>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Brigadier Priyankara Vidanagamage, Managing Director of Key Lanka Solutions" className="w-full h-full object-cover object-center relative z-10 aspect-[4/5] md:aspect-auto" loading="lazy" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Managing Director
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  Brigadier Priyankara Vidanagamage (Retd)
                </h3>
                <p className="text-blue-600 font-medium mb-4 pb-4 border-b border-gray-100">
                  RSP, IG, MLRHRM (UOC), PGDLRHRM (UOC)
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  With decades of operational experience, Priyankara leads Key
                  Lanka Solutions with a focus on discipline, efficiency, and
                  client-centric service delivery.
                </p>
                <div className="space-y-4 mb-8">
                  {[{
                  icon: <AwardIcon className="h-5 w-5 text-blue-600" />,
                  text: '34 years of service in operational areas and logistics'
                }, {
                  icon: <BookOpenIcon className="h-5 w-5 text-blue-600" />,
                  text: 'Advanced training in risk management and security operations'
                }, {
                  icon: <BriefcaseIcon className="h-5 w-5 text-blue-600" />,
                  text: 'Expert in security deployment and strategic planning'
                }].map((item, index) => <div key={index} className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        {item.icon}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>)}
                </div>
                <div className="flex space-x-4">
                  <a href="mailto:keylanka.sec@gmail.com" className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-blue-600 p-3 rounded-full transition-colors hover:scale-110" aria-label="Email Brigadier Priyankara Vidanagamage">
                    <MailIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-blue-600 p-3 rounded-full transition-colors hover:scale-110" aria-label="View Brigadier Priyankara Vidanagamage's LinkedIn profile">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Our Recruitment & Team Building Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-xl text-blue-700 mb-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <UserIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  Inlisting System
                </h4>
                <ul className="space-y-4 text-gray-600">
                  {['Priority for individuals with military service experience', 'Thorough screening with GS certificate and police report verification', 'Employee referral program to maintain high standards'].map((item, index) => <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-lg mr-2 mt-1.5">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-xl text-blue-700 mb-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  Backup Security Cadre
                </h4>
                <ul className="space-y-4 text-gray-600">
                  {['Immediate backup security with mobility on call', 'Adequate backup officers always available', 'Seamless implementation of changes as required'].map((item, index) => <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-lg mr-2 mt-1.5">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}