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
      icon: <FlameIcon />,
      title: "Fire Emergencies",
      description: `
        Guards are trained in fire emergency procedures, alarm activation, evacuation guidance, and coordination with fire brigades.
      `,
      color: "from-red-400 to-red-600",
    },
    {
      icon: <AlertTriangleIcon />,
      title: "Theft Incidents",
      description: `
        Our team promptly assists with police entries, conducts impartial inquiries, and provides continuous support until resolution.
      `,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Misconduct Management",
      description: `
        Swift protocols for handling misconduct by staff, personnel, or outsiders, with clear communication and immediate action.
      `,
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section
      className="py-24 bg-gray-50 relative overflow-hidden"
      aria-labelledby="training-heading"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-200 to-pink-200 text-cyan-700 rounded-full mb-4 font-medium text-sm shadow-md">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <span>Excellence in Preparation</span>
          </div>
          <h2
            id="training-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Training & Operations
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl">
            Comprehensive training programs and meticulous operational procedures ensure the highest level of security service delivery.
          </p>
        </div>

        {/* Training & Operations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Training Card */}
          <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-xl text-white group-hover:rotate-12 transition-transform shadow-lg flex justify-center">
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-pink-500 bg-clip-text text-transparent text-center sm:text-left">
                Training Excellence
              </h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg text-center sm:text-left">
              Upon recruitment, our security guards undergo comprehensive training to ensure a high standard of preparedness and professionalism.
            </p>
            <ul className="space-y-4">
              {trainingHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-cyan-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Card */}
          <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-xl text-white group-hover:-rotate-12 transition-transform shadow-lg flex justify-center">
                <ClipboardCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-cyan-500 bg-clip-text text-transparent text-center sm:text-left">
                Operational Excellence
              </h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg text-center sm:text-left">
              Our standard operations procedures ensure meticulous deployment and ongoing management of security personnel.
            </p>
            <ul className="space-y-4">
              {operationalHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-pink-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Response */}
        <div className="rounded-3xl p-10 shadow-xl overflow-hidden relative bg-gradient-to-r from-cyan-600 to-pink-500">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              Emergency Response Capabilities
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Our teams are trained to handle various emergency situations with precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {emergencies.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col items-center text-center"
              >
                {/* Icon with gradient */}
                <div
                  className={`p-4 rounded-xl inline-block mb-6 bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 flex justify-center`}
                >
                  {React.cloneElement(item.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-800 whitespace-pre-line">{item.description.trim()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
