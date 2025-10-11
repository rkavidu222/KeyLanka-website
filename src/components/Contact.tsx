import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";

type ContactLine = {
  text: string;
  link?: string; // optional link
};

type ContactDetail = {
  icon: JSX.Element;
  title: string;
  content: ContactLine[];
  bg: string;
};

export function Contact() {
  const contactDetails: ContactDetail[] = [
    {
      icon: <PhoneIcon className="h-6 w-6 text-white" />,
      title: "Phone",
      content: [
        { text: "070 331 1333 (Official)", link: "tel:0703311333" },
        { text: "071 252 7950 (Personal)", link: "tel:0712527950" },
        { text: "011 284 8391 (Land)", link: "tel:0112848391" },
      ],
      bg: "from-blue-500 to-indigo-500",
    },
    {
      icon: <MailIcon className="h-6 w-6 text-white" />,
      title: "Email",
      content: [
        { text: "keylanka.sec@gmail.com", link: "mailto:keylanka.sec@gmail.com" },
      ],
      bg: "from-purple-500 to-fuchsia-500",
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-white" />,
      title: "Location",
      content: [
        {
          text: "4/88, Highlevel Road, Maharagama, Sri Lanka",
          link: "" 
        },
        { text: "Key Lanka Solutions (Pvt) Ltd" },
      ],
      bg: "from-green-400 to-emerald-500",
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-white" />,
      title: "Hours",
      content: [
        { text: "Monday - Friday: 8:00 AM - 5:00 PM" },
        { text: "24/7 Emergency Response" },
      ],
      bg: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100"
      aria-labelledby="contact-heading"
    >
      {/* Soft Gradient Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full mb-4 font-medium text-sm shadow-sm">
            <MailIcon className="h-4 w-4 mr-2" />
            <span>Let’s Talk Security</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Key Lanka Solutions
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Get in touch with our security professionals to explore tailored
            protection solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-8 md:p-10"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${item.bg} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.content.map((line, i) =>
                line.link ? (
                  <a
                    key={i}
                    href={line.link}
                    target={line.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-purple-600 text-sm md:text-base leading-relaxed transition-colors underline-offset-2 hover:underline"
                  >
                    {line.text}
                  </a>
                ) : (
                  <p
                    key={i}
                    className="text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    {line.text}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31.07,743.84,15.41c-82.26-16.05-168.06-6.79-250.45,13.05C416.83,46.44,332.16,77.36,250.34,93.4c-85.36,16.83-169.23,8.69-250.34-10.64V120H1200V95.8C1117.81,112.03,1038.15,113.68,985.66,92.83Z"
            fill="url(#gradient)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
