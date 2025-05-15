"use client";

import { useState, useMemo, useCallback } from "react";
import Certificate from "@/components/Certificate";
import ToggleButton from "./ToggleButton";
import { Certificate as CertificateType } from "@/types/portfolioTypes";

interface CertificatesTabProps {
  certificates: CertificateType[];
}

export default function CertificatesTab({ certificates }: CertificatesTabProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  const [showAll, setShowAll] = useState(false);

  const toggleShowMore = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const displayedCertificates = useMemo(() => {
    return showAll ? certificates : certificates.slice(0, initialItems);
  }, [showAll, certificates, initialItems]);

  return (
    <div className="container mx-auto flex justify-center items-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
        {displayedCertificates.map((certificate, index) => (
          <div
            key={index}
            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            data-aos-duration={index % 3 === 1 ? "1200" : "1000"}
          >
            <Certificate ImgSertif={certificate.Img} />
          </div>
        ))}
      </div>

      {certificates.length > initialItems && (
        <div className="mt-6 w-full flex justify-start">
          <ToggleButton onClick={toggleShowMore} isShowingMore={showAll} />
        </div>
      )}
    </div>
  );
}
