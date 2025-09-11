"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import { 
  Navbar,
  HeroSection,
  AboutSection,
  ContactSection
} from "@/components";
import { PortfolioTabs } from "@/components/features/portfolio";

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
        <section id="Home">
          <HeroSection />
        </section>
        <section id="About" className="scroll-mt-24">
          <AboutSection />
        </section>
        {/* PortfolioTabs di sini */}
        <section id="Portfolio">
          <div className="py-20 px-8 md:px-16 bg-black">
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
        </section>
        <section id="Contact">
          <div className="text-center lg:mb-8 mb-2 px-[5%] font-cascadia">
            <div className="inline-block relative group">
              <h2
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC]"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                Contact
              </h2>
              <p
                className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2 font-cascadia"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                I’d love to hear from you! Whether it's to discuss a project or
                simply connect, drop me a message via any of the links below
              </p>
            </div>
          </div>
          <ContactSection />
        </section>
        <footer className="relative z-10 py-8 border-t border-white/10 font-cascadia">
          <div className="max-w-5xl mx-auto px-8 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Sahrul Ridho Firdaus. All rights
            reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
