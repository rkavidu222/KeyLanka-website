import React from "react";
import {
  ShieldIcon,
  BuildingIcon,
  AlertTriangleIcon,
  UserIcon,
  CameraIcon,
  FlameIcon,
  CarIcon,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <FlameIcon className="h-7 w-7 md:h-10 md:w-10" />,
      title: "Fire & Safety Solutions",
      description: (
        <>
          <p className="mb-2 text-sm md:text-base">
            Comprehensive fire protection for your business and premises. Services include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
            <li>Fire risk assessment</li>
            <li>Fire system design & installation</li>
            <li>Supply of fire equipment</li>
            <li>System inspection & maintenance</li>
            <li>Training</li>
          </ul>
        </>
      ),
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <BuildingIcon className="h-7 w-7 md:h-10 md:w-10" />,
      title: "Static Security Guarding",
      description:
        "Professional guards for industrial, commercial, and residential sites with military-grade discipline.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <CarIcon className="h-7 w-7 md:h-10 md:w-10" />,
      title: "Mobile Patrol & Escort Services",
      description:
        "Secure transport and rapid response teams for dynamic security needs and asset protection.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: <UserIcon className="h-7 w-7 md:h-10 md:w-10" />,
      title: "VIP Protection / Executive Security",
      description:
        "Close protection for high-profile individuals and events by experienced security professionals.",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: <AlertTriangleIcon className="h-7 w-7 md:h-10 md:w-10" />,
      title: "Event Security",
      description:
        "Planning and deployment for corporate and private events with meticulous attention to detail.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: <CameraIcon className="h-7 w-7 md:h-10 md:w-10" />,
      title: "Surveillance & Access Control",
      description:
        "CCTV monitoring, intrusion detection, and electronic access control systems with modern technology integration.",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 rounded-full mb-3 md:mb-4 font-medium text-xs md:text-sm shadow-sm">
            <ShieldIcon className="h-4 w-4 mr-2" />
            <span>Professional Security</span>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Our Security Services
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4 md:mb-6 rounded-full"></div>
          <p className="text-gray-600 text-sm md:text-lg">
            Key Lanka Solutions offers a full spectrum of security and fire-safety
            services for individuals, corporates, and institutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-md hover:shadow-xl transition-all p-4 md:p-6 lg:p-8 group border border-gray-200 hover:-translate-y-1 duration-300 flex flex-col items-start"
            >
              {/* Icon */}
              <div
                className={`mb-4 md:mb-6 bg-gradient-to-br ${service.color} p-3 md:p-4 rounded-2xl text-white inline-flex justify-center items-center group-hover:scale-105 transition-transform duration-300 shadow-md self-center`}
              >
                {service.icon}
              </div>
              {/* Title (centered) */}
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center w-full">
                {service.title}
              </h3>
              {/* Description (left-aligned) */}
              <div className="text-gray-600 text-sm md:text-base text-left w-full">
                {typeof service.description === "string"
                  ? service.description
                  : service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
