// components/about/Header.tsx
import { memo } from "react";
import { Sparkles } from "lucide-react";

const Header = () => (
  <div className="text-center lg:mb-8 mb-2 px-[5%] font-cascadia">
    <div className="inline-block relative group">
      <h2
        className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC]"
        data-aos="zoom-in-up"
        data-aos-duration="700"
      >
        About Me
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2 font-cascadia">
        Get to know me 
      </p>
    </div>
  </div>
);

export default memo(Header);
