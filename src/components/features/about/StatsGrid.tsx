import { memo } from "react";
import Statcard from "./Statcard";

interface StatGridProps {
  statsData: {
    icon: any;
    color: string;
    value: number;
    label: string;
    description: string;
    animation: string;
  }[];
}

const StatsGrid = ({ statsData }: StatGridProps) => {
  const handleScroll = () => {
    const target = document.getElementById("Portofolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {statsData.map((stat) => (
        <Statcard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default memo(StatsGrid);
