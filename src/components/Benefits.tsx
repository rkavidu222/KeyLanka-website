import React from "react";
import {
  EyeIcon,
  TargetIcon,
  CheckCircleIcon,
  ClockIcon,
  AwardIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Counter } from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Benefits() {
  const benefits = [
    {
      icon: <CheckCircleIcon className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Integrity & Discipline",
      description:
        "We act with honesty and transparency in all our dealings, maintaining military-grade discipline in operations and service delivery.",
    },
    {
      icon: <ClockIcon className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Client-Centric Approach",
      description:
        "We prioritize the needs and concerns of our clients, offering personalized services and maintaining open communication to build lasting partnerships.",
    },
    {
      icon: <AwardIcon className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Leadership & Experience",
      description:
        "Founded and led by a retired Brigadier with 34 years of service in operational areas and logistics, bringing unmatched expertise.",
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Flexible Security Plans",
      description:
        "Recognizing that each client has unique requirements, we offer flexible security plans that can be customized to adapt to evolving security needs.",
    },
  ];

  const images = [
    "/images/about/about1.jpg",
    "/images/about/about2.jpg",
    "/images/about/about3.jpg",
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] left-[80%] w-48 h-48 bg-blue-400/15 rounded-full blur-xl animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 space-y-16 relative z-10">
        {/* Company Intro Section */}
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <ShieldCheckIcon className="w-12 h-12 text-blue-700 drop-shadow-lg" />
              <div className="absolute inset-0 w-12 h-12 rounded-full bg-blue-700/20 blur-xl animate-ping"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Company Introduction
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-blue-100/50 shadow-md">
              Key Lanka Solutions (Pvt) Ltd is a professional security and safety
              solutions provider committed to delivering reliable, efficient, and
              innovative services. Managed by experienced ex-army officers, our
              leadership brings decades of operational expertise, discipline, and
              integrity to every project.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 -z-10 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <EyeIcon className="w-8 h-8 text-blue-700 group-hover:text-blue-600 transition-colors" />
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed relative z-10">
                To be the most trusted and innovative security and safety
                solutions provider in Sri Lanka, setting new standards in
                professionalism, reliability, and client satisfaction.
              </p>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 -z-10 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <TargetIcon className="w-8 h-8 text-blue-700 group-hover:text-blue-600 transition-colors" />
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed relative z-10">
                To deliver effective, efficient, and customized security and
                fire-safety solutions through disciplined operations, well-trained
                personnel, and cutting-edge technology — ensuring the highest
                level of protection for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Image Slider + Benefits List */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image Slider */}
          <div className="w-full md:w-1/2 relative group">
            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="w-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Fixed Counter on the slider */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hover:shadow-2xl transition-all max-w-[80%] md:max-w-none">
              <div className="flex items-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mr-3 md:mr-4">
                  <Counter from={0} to={34} />+
                </p>
                <p className="text-gray-800 font-medium text-sm md:text-base">
                  Years of
                  <br />
                  Military Experience
                </p>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6 font-medium text-sm shadow-sm">
              <AwardIcon className="h-4 w-4 mr-2" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Our Core Values & Approach
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 md:p-5 bg-white rounded-2xl shadow hover:shadow-2xl transition-shadow gap-4 md:gap-6"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
