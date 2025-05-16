"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";
import {
  Github,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Zap,
} from "lucide-react";

export default function ContactSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for subtle card hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Custom variants for featured items
  const featuredItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative z-10 py-10 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        

        {/* Bento Grid with Framer Motion */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
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
              style={{
                transform:
                  hovered === item.id
                    ? `perspective(1000px) rotateX(${
                        (mousePosition.y - 0.5) * 5
                      }deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`
                    : "none",
                transition: "transform 0.2s ease-out",
              }}
              variants={item.featured ? featuredItemVariants : itemVariants}
            >
              {/* Background gradient */}
              <div
                className={cn(
                  "absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 bg-gradient-to-r",
                  item.gradient
                )}
              />

              {/* Icon with gradient background */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                  item.featured
                    ? "bg-gradient-to-r from-rose-500 to-indigo-500"
                    : "bg-white/10"
                )}
              >
                <div
                  className={
                    item.featured
                      ? "text-white"
                      : "text-white/70 group-hover:text-white transition-colors"
                  }
                >
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">{item.description}</p>

              {/* Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors relative z-10"
                >
                  Connect <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              )}

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div
                  className={cn(
                    "absolute top-0 right-0 w-4 h-4 -mt-2 -mr-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r",
                    item.gradient
                  )}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements with animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="relative">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/10 rounded-full border border-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
