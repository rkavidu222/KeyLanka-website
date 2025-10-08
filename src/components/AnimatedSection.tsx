import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number; // optional delay for staggered animations
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0, // earlier trigger for mobile
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 30, // smaller offset for better mobile feel
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants as any}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
