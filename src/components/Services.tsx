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
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      icon: <FlameIcon className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Fire & Safety Solutions",
      description: (
        <>
          <p className="mb-2 text-sm md:text-base text-gray-200">
            Comprehensive fire protection for your business and premises:
          </p>
          <ul className="list-disc list-inside text-gray-100/80 space-y-1 text-sm md:text-base">
            <li>Fire risk assessment</li>
            <li>System design & installation</li>
            <li>Fire equipment supply</li>
            <li>Inspection & maintenance</li>
            <li>Fire-safety training</li>
          </ul>
        </>
      ),
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <BuildingIcon className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Static Security Guarding",
      description:
        "Professional guards for industrial, commercial, and residential sites with military-grade discipline and training.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <CarIcon className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Mobile Patrol & Escort Services",
      description:
        "Secure transport and rapid response units for dynamic protection of assets and personnel.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: <UserIcon className="h-8 w-8 md:h-10 md:w-10" />,
      title: "VIP Protection / Executive Security",
      description:
        "Close protection for high-profile clients and events by experienced professionals trained in advanced defensive strategies.",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: <AlertTriangleIcon className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Event Security",
      description:
        "Tailored planning, crowd management, and on-site coordination for corporate, entertainment, and private events.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: <CameraIcon className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Surveillance & Access Control",
      description:
        "CCTV monitoring, intrusion detection, and access systems integrated with the latest digital technology.",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-indigo-950 via-purple-950 to-blue-950 text-white"
    >
      {/* Animated background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 blur-[160px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/30 blur-[160px] rounded-full animate-pulse-slow delay-200"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-blue-200 rounded-full mb-4 font-medium text-sm shadow-sm border border-white/20">
            <ShieldIcon className="h-4 w-4 mr-2 text-blue-300" />
            <span>Professional Security Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Specialized Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Key Lanka Solutions delivers a complete range of protection and fire-safety
            services designed for reliability, readiness, and trust.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-purple-900/50 hover:bg-white/15 backdrop-blur-md transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div
                className={`mb-6 bg-gradient-to-br ${service.color} p-4 rounded-2xl text-white inline-flex justify-center items-center shadow-md mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-center text-white mb-3 group-hover:text-purple-200 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <div className="text-gray-200/90 text-sm md:text-base text-left leading-relaxed">
                {typeof service.description === "string"
                  ? service.description
                  : service.description}
              </div>

              {/* Glow Line */}
              <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
