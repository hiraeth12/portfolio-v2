// components/about/BioSection.tsx
import { memo } from "react";
import { FileText } from "lucide-react";
import ActionButton from "./ActionButton";

const BioSection = () => {
  return (
    <div className="space-y-6 text-center lg:text-left font-cascadia">
      <h2
        className="text-xl sm:text-3xl lg:text-5xl font-bold"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC]">
          Hi Everyone, I am
        </span>
        <span
          className="block mt-2 text-gray-200"
          data-aos="fade-right"
          data-aos-duration="1300"
        >
          Sahrul Ridho Firdaus
        </span>
      </h2>

      <p
        className="text-base sm:text-md lg:text-md text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        I'm a Computer Engineering student at Telkom University with a strong
        passion for shaping the digital world. I specialize in web development
        and have a keen interest in artificial intelligence. This field drives
        my curiosity and motivates me to build innovative, scalable solutions
        for tomorrow’s technological challenges.
      </p>

      <ActionButton />
    </div>
  );
};

export default memo(BioSection);
