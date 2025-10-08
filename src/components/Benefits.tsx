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
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
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
    <>
      {/* Section 1: Company Intro + Vision + Mission */}
      <section
        id="about-intro"
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/about/company-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-[50%] left-[80%] w-48 h-48 bg-blue-400/15 rounded-full blur-xl animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 space-y-16 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8 text-white">
            {/* Company Intro */}
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <ShieldCheckIcon className="w-12 h-12 text-white drop-shadow-lg" />
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-white/20 blur-xl animate-ping"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Company Introduction
              </h2>
              <div className="text-white/90 text-base md:text-lg max-w-4xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg text-justify">
                <p className="mb-4">
                  <strong>Key Lanka Solutions (Pvt) Ltd</strong> is a professional security and
                  safety solutions provider committed to delivering reliable, efficient, and
                  innovative services. Managed by well-experienced ex-army officers with decades
                  of operational expertise, discipline, and leadership.
                </p>
                <p className="mb-4">
                  With a strong foundation built on integrity, dedication, and precision, we
                  ensure our clients receive the highest level of protection and service.
                  Extensive experience in operations, logistics, and emergency response allows
                  us to design customized solutions for each client.
                </p>
                <p>
                  We focus on fire and safety management, security operations, and risk
                  mitigation, offering a comprehensive range of services for residential,
                  commercial, and industrial sectors. Key Lanka Solutions stands for trust,
                  professionalism, and commitment to client safety.
                </p>
                <p className="mt-4 text-sm font-semibold">
                  Company Registration Number: MOD/CSD/PS/01/1006
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div
                className="group relative rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.25))",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <EyeIcon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-white text-base leading-relaxed drop-shadow-lg">
                  To be the most trusted and innovative security and safety solutions provider in
                  Sri Lanka, setting new standards in professionalism, reliability, and client
                  satisfaction.
                </p>
              </div>

              <div
                className="group relative rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.25))",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <TargetIcon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-white text-base leading-relaxed drop-shadow-lg">
                  To deliver effective, efficient, and customized security and fire-safety
                  solutions through disciplined operations, well-trained personnel, and
                  cutting-edge technology — ensuring the highest level of protection for our
                  clients.
                </p>
              </div>
            </div>

            {/* After Vision & Mission */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full md:w-3/4 lg:w-2/3 overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow">
                {/* Overlay gradient for cinematic effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 z-10 pointer-events-none rounded-3xl"></div>
                
                {/* Full view image */}
                <motion.img
                  src="/images/about/company-uniform.jpeg"
                  alt="Company Uniform"
                  className="w-full h-auto rounded-3xl object-contain"
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Professional Uniform
                </motion.div>
              </div>
            </motion.div>



          </div>
        </div>
      </section>

     {/* Section 2: Image Slider + Benefits */}
<section id="benefits" className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
  {/* Background blurred shapes */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

  <div className="container mx-auto px-6 md:px-12 space-y-16 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Image Slider */}
      <div className="w-full md:w-1/2 relative group rounded-3xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="rounded-3xl overflow-hidden"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className="relative rounded-3xl overflow-hidden">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full object-cover aspect-[4/3] transition-transform group-hover:scale-105 rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fixed Counter on card */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all max-w-[70%] md:max-w-[50%] z-20">
          <div className="flex items-center gap-2 md:gap-3">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              <Counter from={0} to={34} />+
            </p>
            <p className="text-gray-800 font-medium text-xs md:text-sm">
              Years of <br /> Military Experience
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start p-4 md:p-5 bg-white rounded-2xl shadow hover:shadow-2xl transition-shadow gap-4 md:gap-6 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl text-white flex-shrink-0 shadow-md">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
