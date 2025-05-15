"use client"; // jika pakai app router
import { memo, useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Globe } from "lucide-react";

import Header from "@/components/about/Header";
import AboutLayout from "@/components/about/AboutLayout";
import StatsGrid from "@/components/about/StatsGrid";

const About = () => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProjects = await fetch("../data/projects.json");
        const resCertificates = await fetch("../data/certificates.json");

        const dataProjects = await resProjects.json();
        const dataCertificates = await resCertificates.json();

        setProjects(dataProjects);
        setCertificates(dataCertificates);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const startDate = new Date("2022-09-11");
    const today = new Date();
    const experience =
      today.getFullYear() -
      startDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
        ? 1
        : 0);

    return {
      totalProjects: projects.length,
      totalCertificates: certificates.length,
      YearExperience: experience,
    };
  }, [projects, certificates]);

  useEffect(() => {
    const initAOS = () => AOS.init({ once: false });
    initAOS();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "from-[#333399] to-[#FF00CC]",
        value: totalProjects,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
        animation: "fade-right",
      },
      {
        icon: Award,
        color: "from-[#FF00CC] to-[#333399]",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
      },
      {
        icon: Globe,
        color: "from-[#333399] to-[#FF00CC]",
        value: YearExperience,
        label: "Years of Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
      },
    ],
    [totalProjects, totalCertificates, YearExperience]
  );

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Header />
      <AboutLayout />
      <StatsGrid statsData={statsData} />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(About);
