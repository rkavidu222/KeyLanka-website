import React from "react";
import {
  BookOpenIcon,
  ShieldCheckIcon,
  FlameIcon,
  AlertTriangleIcon,
  ClipboardCheckIcon,
  CheckCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

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
      description: `Guards are trained in alarm activation, evacuation guidance, and fire brigade coordination.`,
      color: "from-red-400 to-red-600",
    },
    {
      icon: <AlertTriangleIcon />,
      title: "Theft Incidents",
      description: `Our team assists with police entries, conducts impartial inquiries, and ensures constant communication.`,
      color: "from-yellow-400 to-amber-600",
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Misconduct Management",
      description: `Swift protocols for handling staff or outsider misconduct with professionalism and tact.`,
      color: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <section
      id="training"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-300/30 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/30 blur-[100px] rounded-full animate-pulse delay-300" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-200 to-pink-200 text-cyan-800 rounded-full mb-4 font-medium text-sm shadow-sm">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <span>Excellence in Preparation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Training & Operations
          </h2>
          <div className="h-1 w-28 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto my-6 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl">
            We ensure world-class training and operational excellence for uncompromised safety and professionalism.
          </p>
        </motion.div>

        {/* Training + Operations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {[
            {
              title: "Training Excellence",
              icon: <BookOpenIcon />,
              color: "from-cyan-500 to-cyan-700",
              highlights: trainingHighlights,
              text: "New recruits undergo rigorous, scenario-based training to build readiness and professionalism.",
            },
            {
              title: "Operational Excellence",
              icon: <ClipboardCheckIcon />,
              color: "from-pink-500 to-fuchsia-600",
              highlights: operationalHighlights,
              text: "Robust supervision, rotation, and performance reviews ensure consistent quality across deployments.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`bg-gradient-to-br ${card.color} p-3 rounded-xl text-white shadow-md group-hover:rotate-3 transition-transform duration-300`}
                >
                  {React.cloneElement(card.icon, { className: "h-7 w-7" })}
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-pink-600 bg-clip-text text-transparent">
                  {card.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{card.text}</p>

              <ul className="space-y-3">
                {card.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-cyan-500 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Emergency Response */}
        <motion.div
          className="relative overflow-hidden rounded-3xl p-12 shadow-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

          <div className="text-center mb-14 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Emergency Response Capabilities
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Scenario-based drills ensure rapid, disciplined responses to any real-world emergency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {emergencies.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/95 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className={`p-4 mb-5 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md inline-flex justify-center`}
                >
                  {React.cloneElement(item.icon, { className: "h-8 w-8" })}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
