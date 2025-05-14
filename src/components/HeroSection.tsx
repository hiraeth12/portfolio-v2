"use client";

import React, { useState, useEffect, memo } from "react";
import TypewriterEffect from "./type-writer";
import type { FC } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  interface SocialLinkProps {
    icon: FC<React.SVGProps<SVGSVGElement>>;
    link: string;
  }

  const SocialLink: FC<SocialLinkProps> = memo(({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="group relative p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#333399] to-[#FF00CC] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </button>
    </a>
  ));

  const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/hiraeth12" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/sahrulfirdaus/" },
    { icon: Instagram, link: "https://www.instagram.com/sahrulfirdaus/" },
  ];

  const TECHNOLOGIES = ["Next.js", "React", "TypeScript", "Tailwind"];
  const badgeClass =
    "px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors";

  // Track mouse position for parallax effect
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

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black,black)]" />
      </div>

      {/* Gradient orbs - larger and positioned for full-page effect */}
      <div
        className="fixed top-1/4 -left-40 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${
            mousePosition.y * -30
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="fixed bottom-1/3 -right-40 w-[45rem] h-[45rem] bg-rose-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${
            mousePosition.y * 30
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="fixed -bottom-20 left-1/4 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Futuristic elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] border border-white/10 rounded-full opacity-20" />
        <div className="absolute w-[30rem] h-[30rem] border border-white/10 rounded-full opacity-30" />
        <div className="absolute w-[20rem] h-[20rem] border border-white/10 rounded-full opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 text-center font-cascadia">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {/* <span className="block mb-4">I Create</span> */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#333399] to-[#FF00CC] font-cascadia">
            <TypewriterEffect
              words={[
                "Laboratory Assistant.",
                "AI Enthusiast.",
                "Computer Engineer Student.",
              ]}
            />
          </span>
        </h1>

        <p className="text-lg md:text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Pushing the boundaries of web development with cutting-edge
          technologies and innovative design solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {TECHNOLOGIES.map((tech) => (
            <span key={tech} className={badgeClass}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className="hidden sm:flex gap-4 justify-center mt-8">
          {SOCIAL_LINKS.map((social, index) => (
            <SocialLink key={index} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
