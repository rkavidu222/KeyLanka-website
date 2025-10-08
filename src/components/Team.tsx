import React from "react";
import {
  LinkedinIcon,
  MailIcon,
  AwardIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  UserIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export function Team() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const cardHover =
    "hover:shadow-2xl hover:scale-[1.02] transition-all duration-500";

  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-purple-50"
      aria-labelledby="team-heading"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[15%] left-[5%] w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] animate-pulse delay-200"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-200 text-blue-700 rounded-full mb-4 font-medium text-sm shadow-md">
            <UserIcon className="h-4 w-4 mr-2" />
            <span>Leadership</span>
          </div>
          <h2
            id="team-heading"
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 mb-4"
          >
            Management & Expertise
          </h2>
          <div className="h-1 w-28 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700">
            Led by veterans and innovators, our leadership team blends
            discipline, modern technology, and operational excellence to ensure
            reliable and intelligent security solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Brigadier Priyankara Card */}
          <motion.div
            {...fadeInUp}
            className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-gray-100 group ${cardHover}`}
          >
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transition-transform group-hover:scale-105" />
                <img
                  src="/images/owner.jpeg"
                  alt="Brigadier Priyankara Vidanagamage"
                  className="w-full h-full object-cover object-center rounded-3xl relative z-10 transform transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Managing Director
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  Brigadier Priyankara Vidanagamage (Retd)
                </h3>
                <p className="text-blue-600 font-medium mb-4 border-b border-gray-100 pb-4">
                  RSP, IG, MLRHRM (UOC), PGDLRHRM (UOC)
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  With over 34 years of service, Brigadier Priyankara brings
                  unmatched experience in operational command, discipline, and
                  strategic leadership to Key Lanka Solutions.
                </p>

                {/* Achievements */}
                <ul className="space-y-4 mb-8">
                  {[
                    {
                      icon: <AwardIcon className="h-5 w-5 text-blue-600" />,
                      text: "34 years of operational and logistical service",
                    },
                    {
                      icon: <BookOpenIcon className="h-5 w-5 text-blue-600" />,
                      text: "Expertise in risk management and security operations",
                    },
                    {
                      icon: <BriefcaseIcon className="h-5 w-5 text-blue-600" />,
                      text: "Specialized in strategic planning and security deployment",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Contact */}
                <div className="flex space-x-4">
                  {[
                    {
                      href: "mailto:keylanka.sec@gmail.com",
                      icon: <MailIcon className="h-5 w-5" />,
                      label: "Email",
                    },
                    {
                      href: "#",
                      icon: <LinkedinIcon className="h-5 w-5" />,
                      label: "LinkedIn",
                    },
                  ].map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      aria-label={btn.label}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-blue-600 p-3 rounded-full shadow-md hover:scale-110 transition-all"
                    >
                      {btn.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Januda Vidanagamage Card */}
          <motion.div
            {...fadeInUp}
            className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-10 group text-center md:text-left ${cardHover}`}
          >
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                Director
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Januda Vidanagamage, BEng (Hons) Software Engineering
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Januda drives Key Lanka’s software and digital transformation,
                ensuring advanced IT solutions empower security operations and
                client services.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  {
                    href: "mailto:keylanka.sec@gmail.com",
                    icon: <MailIcon className="h-5 w-5" />,
                    label: "Email",
                  },
                  {
                    href: "#",
                    icon: <LinkedinIcon className="h-5 w-5" />,
                    label: "LinkedIn",
                  },
                ].map((btn, i) => (
                  <a
                    key={i}
                    href={btn.href}
                    aria-label={btn.label}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-blue-600 p-3 rounded-full shadow-md hover:scale-110 transition-all"
                  >
                    {btn.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recruitment Philosophy */}
          <motion.div
            {...fadeInUp}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-10 space-y-12"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
              Our Recruitment & Team Building Philosophy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inlisting System */}
              {[
                {
                  title: "Inlisting System",
                  icon: <UserIcon className="h-5 w-5 text-blue-600" />,
                  items: [
                    "Priority for individuals with military experience",
                    "Thorough screening with GS certificate & police verification",
                    "Employee referrals to maintain standards",
                  ],
                },
                {
                  title: "Backup Security Cadre",
                  icon: <ShieldCheckIcon className="h-5 w-5 text-blue-600" />,
                  items: [
                    "Immediate backup officers available on call",
                    "Maintaining an active reserve for rapid deployment",
                    "Ensuring seamless replacements when needed",
                  ],
                },
              ].map((block, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="font-semibold text-xl text-blue-700 mb-4 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      {block.icon}
                    </div>
                    {block.title}
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    {block.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="bg-blue-100 p-1 rounded-lg mt-1.5">
                          <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
