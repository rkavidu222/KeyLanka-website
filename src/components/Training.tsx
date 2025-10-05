import React from 'react';
import { BookOpenIcon, ShieldCheckIcon, FlameIcon, AlertTriangleIcon, ClipboardCheckIcon, CheckCircleIcon } from 'lucide-react';
export function Training() {
  return <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="training-heading">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4 font-medium text-sm">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <span>Excellence in Preparation</span>
          </div>
          <h2 id="training-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Training & Operations
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Our comprehensive training programs and meticulous operational
            procedures ensure the highest level of security service delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100/50 h-full hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 text-white">
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Training Excellence
              </h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Upon recruitment, our security guards undergo comprehensive
              training to ensure a high standard of preparedness and
              professionalism.
            </p>
            <div className="space-y-6">
              {['Security protocols and guard room procedures', 'Basic necessities of firefighting and emergency evacuation', 'Response to chemical spills and handling procedures for potential radioactive accidents', 'Occupational health and safety standards'].map((item, index) => <div key={index} className="flex items-start group">
                  <div className="bg-blue-100 p-2 rounded-xl mr-3 mt-1 group-hover:bg-blue-200 transition-colors">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>)}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100/50 h-full hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 text-white">
                <ClipboardCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Operational Excellence
              </h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Our standard operations procedure ensures meticulous deployment
              and ongoing management of security personnel.
            </p>
            <div className="space-y-6">
              {['Thorough site analysis and deployment of best-suited security teams', 'On-duty training and comprehensive orientation for site-specific needs', 'Continuous operational support through sector managers and general managers', 'Regular review meetings and periodic team rotation for enhanced security effectiveness'].map((item, index) => <div key={index} className="flex items-start group">
                  <div className="bg-blue-100 p-2 rounded-xl mr-3 mt-1 group-hover:bg-blue-200 transition-colors">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>)}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 text-white shadow-xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Emergency Response Capabilities
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our teams are trained to handle various emergency situations with
              precision and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[{
            icon: <FlameIcon className="h-8 w-8" />,
            title: 'Fire Emergencies',
            description: 'Guards are trained in fire emergency procedures, alarm activation, evacuation guidance, and coordination with fire brigades.'
          }, {
            icon: <AlertTriangleIcon className="h-8 w-8" />,
            title: 'Theft Incidents',
            description: 'Our team promptly assists with police entries, conducts impartial inquiries, and provides continuous support until resolution.'
          }, {
            icon: <ShieldCheckIcon className="h-8 w-8" />,
            title: 'Misconduct Management',
            description: 'Swift protocols for handling misconduct by staff, personnel, or outsiders, with clear communication and immediate action.'
          }].map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:bg-white/20 transition-colors border border-white/20 group">
                <div className="bg-white/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-white/30 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-blue-100">{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}