import React from 'react';
import {
  LinkedinIcon,
  MailIcon,
  AwardIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  UserIcon,
  ShieldCheckIcon,
} from 'lucide-react';

export function Team() {
  return (
    <section
      id="team"
      className="py-24 bg-blue-50 relative overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-200 text-blue-700 rounded-full mb-4 font-medium text-sm shadow-md">
            <UserIcon className="h-4 w-4 mr-2" />
            <span>Leadership</span>
          </div>
          <h2
            id="team-heading"
            className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mb-4"
          >
            Management & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700">
            Our company is led by experienced professionals with extensive
            military backgrounds, bringing discipline, strategy, and excellence
            to security services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Team Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-transform duration-300 group hover:scale-[1.02]">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform rounded-3xl"></div>
                <img
                  src="/images/team/team1.jpg"
                  alt="Brigadier Priyankara Vidanagamage"
                  className="w-full h-full object-cover object-center relative z-10 aspect-[4/5] md:aspect-auto rounded-3xl transform transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Managing Director
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 md:p-10 md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mb-2">
                  Brigadier Priyankara Vidanagamage (Retd)
                </h3>
                <p className="text-blue-600 font-medium mb-4 pb-4 border-b border-gray-100">
                  RSP, IG, MLRHRM (UOC), PGDLRHRM (UOC)
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  With decades of operational experience, Priyankara leads Key
                  Lanka Solutions with a focus on discipline, efficiency, and
                  client-centric service delivery.
                </p>

                {/* Achievements */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <AwardIcon className="h-5 w-5 text-blue-600" />,
                      text: '34 years of service in operational areas and logistics',
                    },
                    {
                      icon: <BookOpenIcon className="h-5 w-5 text-blue-600" />,
                      text: 'Advanced training in risk management and security operations',
                    },
                    {
                      icon: <BriefcaseIcon className="h-5 w-5 text-blue-600" />,
                      text: 'Expert in security deployment and strategic planning',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Buttons */}
                <div className="flex space-x-4">
                  <a
                    href="mailto:keylanka.sec@gmail.com"
                    className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-purple-200 text-blue-600 p-3 rounded-full transition-all transform hover:scale-110 shadow-md"
                    aria-label="Email Brigadier Priyankara Vidanagamage"
                  >
                    <MailIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-purple-200 text-blue-600 p-3 rounded-full transition-all transform hover:scale-110 shadow-md"
                    aria-label="View LinkedIn profile"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment Philosophy */}
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 space-y-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 text-center mb-8">
              Our Recruitment & Team Building Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inlisting System */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
                <h4 className="font-semibold text-xl text-blue-700 mb-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <UserIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  Inlisting System
                </h4>
                <ul className="space-y-4 text-gray-700">
                  {[
                    'Priority for individuals with military service experience',
                    'Thorough screening with GS certificate and police report verification',
                    'Employee referral program to maintain high standards',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="bg-blue-100 p-1 rounded-lg mt-1.5">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backup Security Cadre */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
                <h4 className="font-semibold text-xl text-blue-700 mb-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  Backup Security Cadre
                </h4>
                <ul className="space-y-4 text-gray-700">
                  {[
                    'Immediate backup security with mobility on call',
                    'Adequate backup officers always available',
                    'Seamless implementation of changes as required',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="bg-blue-100 p-1 rounded-lg mt-1.5">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
