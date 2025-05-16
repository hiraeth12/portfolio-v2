"use client";
import { useState, useEffect } from "react";
import ContactItem from "./ContactItem";
import { contactItems } from "./items";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="relative z-10 py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:mb-8 mb-2 px-[5%] font-cascadia">
          <div className="inline-block relative group">
            <h2
              className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC]"
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              Contact
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2 font-cascadia">
              I'd love to hear from you! Whether it's to discuss a project or
              simply connect, drop me a message via any of the links below
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {contactItems.map((item) => (
            <ContactItem
              key={item.id}
              item={item}
              hovered={hovered}
              setHovered={setHovered}
              mousePosition={mousePosition}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/10 rounded-full border border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
