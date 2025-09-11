"use client";

import TechStackIcon from "./TechStackIcon";
import { TechStackItem } from "@/types/portfolioTypes";

interface TechStackTabProps {
  techStacks: TechStackItem[];
}

export default function TechStackTab({ techStacks }: TechStackTabProps) {
  return (
    <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
        {techStacks.map((stack, index) => (
          <div
            key={index}
            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            data-aos-duration={index % 3 === 1 ? "1200" : "1000"}
          >
            <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
          </div>
        ))}
      </div>
    </div>
  );
}
