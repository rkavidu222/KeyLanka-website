import React from "react";
import {
  BookOpenIcon,
  ShieldCheckIcon,
  FlameIcon,
  AlertTriangleIcon,
  ClipboardCheckIcon,
  CheckCircleIcon,
} from "lucide-react";

export function Training() {
  const trainingHighlights = [
    "Security protocols and guard room procedures",
    "Basic necessities of firefighting and emergency evacuation",
    "Response to chemical spills and handling procedures for potential radioactive accidents",
    "Occupational health and safety standards",
  ];

  const operationalHighlights = [
    "Thorough site analysis and deployment of best-suited security teams",
    "On-duty training and comprehensive orientation for site-specific needs",
    "Continuous operational support through sector managers and general managers",
    "Regular review meetings and periodic team rotation for enhanced security effectiveness",
  ];

  const emergencies = [
    {
      icon: <FlameIcon className="h-8 w-8" />,
      title: "Fire Emergencies",
      description:
        "Guards are trained in fire emergency procedures, alarm activation, evacuation guidance, and coordination with fire brigades.",
    },
    {
      icon: <AlertTriangleIcon className="h-8 w-8" />,
      title: "Theft Incidents",
      description:
        "Our team promptly assists with police entries, conducts impartial inquiries, and provides continuous support until resolution.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Misconduct Management",
      description:
        "Swift protocols for handling misconduct by staff, personnel, or outsiders, with clear communication and immediate action.",
    },
  ];

  return (
    <section
      className="py-24 bg-gray-50 relative overflow-hidden"
      aria-labelledby="training-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-200 text-blue-700 rounded-full mb-4 font-medium text-sm shadow-sm">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <span>Excellence in Preparation</span>
          </div>
          <h2
            id="training-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Training & Operations
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl">
            Comprehensive training programs and meticulous operational procedures
            ensure the highest level of security service delivery.
          </p>
        </div>

        {/* Training & Operations Cards (Fixed Hover Blur/Ring) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Training */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:ring-0 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 text-white group-hover:scale-105 transition-transform"> {/* Reduced scale for subtlety */}
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent">
                Training Excellence
              </h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Upon recruitment, our security guards undergo comprehensive
              training to ensure a high standard of preparedness and
              professionalism.
            </p>
            <ul className="space-y-4">
              {trainingHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-1 group-hover:scale-105 transition-transform" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:ring-0 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl mr-4 text-white group-hover:scale-105 transition-transform"> {/* Reduced scale for subtlety */}
                <ClipboardCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
                Operational Excellence
              </h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Our standard operations procedures ensure meticulous deployment and
              ongoing management of security personnel.
            </p>
            <ul className="space-y-4">
              {operationalHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-1 group-hover:scale-105 transition-transform" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Response */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-3xl p-10 text-white shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Response Capabilities
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Our teams are trained to handle various emergency situations with
              precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {emergencies.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl group hover:bg-white/20 transition-colors border border-white/20"
              >
                <div className="bg-white/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-white/30 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}