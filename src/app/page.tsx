"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, certificatesRes, techStacksRes] = await Promise.all(
          [
            fetch("/data/projects.json"),
            fetch("/data/certificates.json"),
            fetch("/data/techStacks.json"),
          ]
        );

        const projectsData = await projectsRes.json();
        const certificatesData = await certificatesRes.json();
        const techStacksData = await techStacksRes.json();

        setProjects(projectsData);
        setCertificates(certificatesData);
        setTechStacks(techStacksData);
      } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <HeroSection />
        <About />

        {/* PortfolioTabs di sini */}
        <div className="py-20 px-8 md:px-16 bg-black" id="Portofolio">
          {/* Header section */}
          <div
            className="text-center pb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC] font-cascadia">
              <span
                style={{
                  color: "#333399",
                  backgroundImage:
                    "linear-gradient(45deg, #333399 10%, #FF00CC 93%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Portfolio
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2 font-cascadia">
              Below is a list of projects I have worked on.
            </p>
          </div>

          {/* Portfolio Tabs */}
          <PortfolioTabs
            projects={projects}
            certificates={certificates}
            techStacks={techStacks}
          />
        </div>
      </main>
    </>
  );
}
