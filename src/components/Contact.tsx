import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";

export function Contact() {
  const contactDetails = [
    {
      icon: <PhoneIcon className="h-6 w-6 text-white" />,
      title: "Phone",
      content: ["070 331 1333 (Official)", "071 252 7950 (Personal)", "011 284 8391 (Land)"],
      bg: "from-blue-500 to-blue-600",
    },
    {
      icon: <MailIcon className="h-6 w-6 text-white" />,
      title: "Email",
      content: ["keylanka.sec@gmail.com"],
      bg: "from-purple-500 to-purple-600",
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-white" />,
      title: "Location",
      content: ["Key Lanka Solutions (Pvt) Ltd", "Colombo, Sri Lanka"],
      bg: "from-green-400 to-green-500",
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-white" />,
      title: "Hours",
      content: ["Monday - Friday: 8:00 AM - 5:00 PM", "24/7 Emergency Response"],
      bg: "from-red-400 to-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4 font-medium text-sm">
            <MailIcon className="h-4 w-4 mr-2" />
            <span>Get In Touch</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl">
            Connect with our security experts to discuss your protection needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all flex flex-col items-center text-center`}
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${item.bg} group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.content.map((line, i) => (
                <p key={i} className="text-gray-600 text-sm md:text-base">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
