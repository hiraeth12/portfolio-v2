// components/about/StatsGrid.tsx
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
  return (
    <a href="#Portofolio">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
        {statsData.map((stat) => (
          <Statcard key={stat.label} {...stat} />
        ))}
      </div>
    </a>
  );
};

export default memo(StatsGrid);
