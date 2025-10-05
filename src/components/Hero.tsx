import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockIcon, EyeIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export function Hero() {
  const banners = [
    '/images/banner1.png',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
  ];

  const features = [
    {
      icon: <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />,
      title: 'Professional Team',
      description: 'Carefully selected, trained, and background-verified security personnel with military discipline.',
    },
    {
      icon: <LockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />,
      title: 'Comprehensive Solutions',
      description: 'Full spectrum of security and fire-safety services for individuals, corporates, and institutions.',
    },
    {
      icon: <EyeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />,
      title: '24/7 Availability',
      description: 'Rapid response capability and continuous monitoring to ensure your safety around the clock.',
    },
  ];

  // Framer Motion variants for staggered features
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-16"
    >
      <Helmet>
        <title>Key Lanka Solutions - Professional Security Services</title>
      </Helmet>

      {/* Full-Screen Background Slider */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
                style={{ backgroundImage: `url(${banner})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[15%] w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-6xl mx-auto text-center py-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100/20 text-blue-200 rounded-full mb-6 font-medium text-sm border border-blue-500/30 backdrop-blur-sm"
          >
            <ShieldCheckIcon className="h-4 w-4 mr-2" />
            <span>Professional Security Services</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Securing Your Future
            </span>{' '}
            with Professionalism & Discipline
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            KEY LANKA SOLUTIONS (PVT) LTD delivers reliable, efficient, and innovative security services managed by experienced ex-army officers with military precision.
          </motion.p>

          {/* Features Grid with Staggered Animations */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 md:p-6 text-left"
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="bg-blue-600/20 p-1.5 sm:p-2 rounded-lg mr-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 text-gray-300 text-xs sm:text-sm sm:text-base space-y-2 border-t border-white/10 pt-6 max-w-2xl mx-auto"
          >
            <p>
              <strong>📍 Address:</strong>{' '}
              <a
                href="https://www.google.com/maps?q=Colombo,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Colombo, Sri Lanka
              </a>
            </p>
            <p><strong>📞 Phone:</strong> +94 77 123 4567</p>
            <p>
              <strong>✉️ Email:</strong>{' '}
              <a href="mailto:info@keylankasolutions.com" className="underline hover:text-white">
                info@keylankasolutions.com
              </a>
            </p>
            <p>
              <strong>🌐 Website:</strong>{' '}
              <a href="https://www.keylankasolutions.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                www.keylankasolutions.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
