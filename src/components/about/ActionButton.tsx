// components/about/ActionButtons.tsx
import { memo } from "react";
import { FileText, Mail } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
      <a
        href="../CV.pdf"
        className="w-full lg:w-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          data-aos="fade-up"
          data-aos-duration="800"
          className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#333399] to-[#FF00CC] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          Download CV
        </button>
      </a>

      <a href="mailto:sahrulridho@student.telkomuniversity.ac.id" className="w-full lg:w-auto">
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#333399]/50 text-slate-400 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          Contact Me
        </button>
      </a>
    </div>
  );
};

export default memo(ActionButtons);
