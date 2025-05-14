// components/about/AboutLayout.tsx
import { memo } from "react";
import BioSection from "./BioSection";
import ProfileImage from "./ProfileImage";

const AboutLayout = () => {
  return (
    <div className="w-full mx-auto pt-8 sm:pt-12 relative">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <BioSection />
        <ProfileImage />
      </div>
    </div>
  );
};

export default memo(AboutLayout);
