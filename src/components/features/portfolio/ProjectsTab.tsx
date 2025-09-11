"use client";

import { useState, useMemo, useCallback } from "react";
import CardProject from "./CardProject";
import ToggleButton from "./ToggleButton";
import { Project } from "@/types/portfolioTypes";

interface ProjectsTabProps {
  projects: Project[];
}

export default function ProjectsTab({ projects }: ProjectsTabProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  const [showAll, setShowAll] = useState(false);

  const toggleShowMore = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const displayedProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, initialItems);
  }, [showAll, projects, initialItems]);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden font-cascadia">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id || index}
            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            data-aos-duration={index % 3 === 1 ? "1200" : "1000"}
          >
            <CardProject
              Img={project.Img}
              Title={project.Title}
              Description={project.Description}
              Link={project.Link}
              id={project.id}
            />
          </div>
        ))}
      </div>

      {projects.length > initialItems && (
        <div className="mt-6 w-full flex justify-center">
          <ToggleButton onClick={toggleShowMore} isShowingMore={showAll} />
        </div>
      )}
    </div>
  );
}
