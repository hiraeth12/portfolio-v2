"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks";
import {
  Github,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
} from "lucide-react";

export default function ContactSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    margin: "-100px 0px -100px 0px" 
  });
  
  const { scrollY } = useScroll();
  
  // Transform values for scroll animations
  const opacity = useTransform(scrollY, (value) => {
    if (!sectionRef.current) return 1;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // Fade in when entering viewport
    if (value < elementTop - windowHeight) return 0;
    
    // Fade out when scrolling up past the element
    if (value > elementTop + elementHeight) return Math.max(0, 1 - (value - (elementTop + elementHeight)) / 200);
    
    return 1;
  });

  // Track mouse position for subtle card hover effects (desktop only)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Bento grid items
  const bentoItems = [
    {
      id: "github",
      title: "GitHub",
      description: "Check out my code repositories",
      icon: <Github className="h-6 w-6" />,
      link: "https://github.com/hiraeth12",
      size: "col-span-1 row-span-1",
      gradient: "from-gray-500 to-gray-700",
    },

    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Connect with me professionally",
      icon: <Linkedin className="h-6 w-6" />,
      link: "https://linkedin.com/in/sahrulfirdaus",
      size: "col-span-1 row-span-1",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      id: "twitter",
      title: "YouTube",
      description: "My Personal Channel",
      icon: <Youtube className="h-6 w-6" />,
      link: "https://www.youtube.com/@Kaagaya",
      size: "col-span-1 row-span-1",
      gradient: "from-red-400 to-red-600",
    },
    {
      id: "instagram",
      title: "Instagram",
      description: "See my visual portfolio",
      icon: <Instagram className="h-6 w-6" />,
      link: "https://instagram.com/sahrulfirdaus",
      size: "col-span-1 row-span-1",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: "email",
      title: "Email Me",
      description: "sahrulridho@student.telkomuniversity.ac.id",
      icon: <Mail className="h-6 w-6" />,
      link: "mailto:sahrulridho@student.telkomuniversity.ac.id?subject=Hello&body=Hello Sahrul 👋,",
      size: "col-span-2 row-span-1",
      gradient: "from-rose-500 to-indigo-500",
      featured: true,
    },
    {
      id: "location",
      title: "Location",
      description: "Bandung, ID",
      icon: <MapPin className="h-6 w-6" />,
      size: "col-span-1 row-span-1",
      gradient: "from-green-500 to-emerald-700",
    },
    {
      id: "availability",
      title: "Status",
      description: "Available for work",
      icon: <Zap className="h-6 w-6" />,
      size: "col-span-1 row-span-1",
      gradient: "from-yellow-400 to-amber-600",
      featured: true,
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: isMobile ? 30 : 0 
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: isMobile ? 0.15 : 0.1,
        delayChildren: isMobile ? 0.3 : 0.2,
        duration: isMobile ? 0.8 : 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: isMobile ? -30 : -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 40 : 20,
      scale: isMobile ? 0.9 : 1,
      rotateX: isMobile ? 10 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 80 : 100,
        damping: isMobile ? 15 : 12,
        duration: isMobile ? 0.8 : 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: isMobile ? -40 : -20,
      scale: isMobile ? 0.9 : 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Custom variants for featured items with enhanced mobile animations
  const featuredItemVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 50 : 30, 
      scale: isMobile ? 0.85 : 0.95,
      rotateX: isMobile ? 15 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 70 : 80,
        damping: isMobile ? 18 : 15,
        duration: isMobile ? 1 : 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: isMobile ? -50 : -30,
      scale: isMobile ? 0.85 : 0.9,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative z-10 py-10 px-8 md:px-16 font-cascadia"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bento Grid with Framer Motion */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          viewport={{ once: false, margin: "-100px" }}
        >
          {bentoItems.map((item) => (
            <motion.div
              key={item.id}
              className={cn(
                "relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm overflow-hidden group transition-all duration-300",
                item.size,
                hovered === item.id ? "bg-white/10" : ""
              )}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{
                scale: isMobile ? 1.02 : 1.05,
                y: isMobile ? -2 : -5,
                rotateX: isMobile ? 0 : (mousePosition.y - 0.5) * 3,
                rotateY: isMobile ? 0 : (mousePosition.x - 0.5) * -3,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              whileTap={isMobile ? {
                scale: 0.98,
                transition: { duration: 0.1 }
              } : {}}
              style={{
                transform: !isMobile && hovered === item.id
                    ? `perspective(1000px) rotateX(${
                        (mousePosition.y - 0.5) * 5
                      }deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`
                    : "none",
                transition: "transform 0.2s ease-out",
              }}
              variants={item.featured ? featuredItemVariants : itemVariants}
            >
              {/* Background gradient */}
              <motion.div
                className={cn(
                  "absolute -inset-1 rounded-2xl opacity-0 blur-xl bg-gradient-to-r",
                  item.gradient
                )}
                animate={{
                  opacity: hovered === item.id ? 0.3 : 0,
                }}
                transition={{
                  duration: isMobile ? 0.3 : 0.5,
                  ease: "easeInOut"
                }}
              />

              {/* Icon with gradient background */}
              <motion.div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                  item.featured
                    ? "bg-gradient-to-br from-rose-500 to-indigo-500"
                    : "bg-white/10"
                )}
                whileHover={{
                  scale: isMobile ? 1.1 : 1.15,
                  rotate: isMobile ? 5 : 10,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }
                }}
              >
                <motion.div
                  className={
                    item.featured
                      ? "text-white"
                      : "text-white/70 group-hover:text-white transition-colors"
                  }
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.icon}
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-lg font-semibold text-white mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-white/70 text-sm mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {item.description}
              </motion.p>

              {/* Link */}
              {item.link && (
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors relative z-10"
                  whileHover={{
                    x: isMobile ? 2 : 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                  whileTap={isMobile ? {
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  } : {}}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Connect 
                  <motion.div
                    whileHover={{
                      x: isMobile ? 1 : 3,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </motion.div>
                </motion.a>
              )}

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <motion.div
                  className={cn(
                    "absolute top-0 right-0 w-4 h-4 -mt-2 -mr-2 rounded-full bg-gradient-to-r",
                    item.gradient
                  )}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hovered === item.id ? 1 : 0,
                    scale: hovered === item.id ? 1 : 0,
                  }}
                  transition={{
                    duration: isMobile ? 0.3 : 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements with animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            delay: isMobile ? 1.2 : 1, 
            duration: isMobile ? 1.2 : 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: isMobile ? 1.4 : 1.2, duration: 0.8 }}
            />
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/10 rounded-full border border-white/20"
              initial={{ scale: 0, rotate: 0 }}
              animate={isInView ? { scale: 1, rotate: 180 } : { scale: 0, rotate: 0 }}
              transition={{ 
                delay: isMobile ? 1.6 : 1.4, 
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
