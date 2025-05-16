import { ExternalLink } from "lucide-react";
import { cn } from "@/libs/utils";
import { ContactItemType } from "./items";

interface Props {
  item: ContactItemType;
  hovered: string | null;
  setHovered: (id: string | null) => void;
  mousePosition: { x: number; y: number };
}

export default function ContactItem({
  item,
  hovered,
  setHovered,
  mousePosition,
}: Props) {
  return (
    <div
      className={cn(
        "relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm overflow-hidden group transition-all duration-300",
        item.size,
        hovered === item.id ? "bg-white/10" : ""
      )}
      onMouseEnter={() => setHovered(item.id)}
      onMouseLeave={() => setHovered(null)}
      style={{
        transform:
          hovered === item.id
            ? `perspective(1000px) rotateX(${
                (mousePosition.y - 0.5) * 5
              }deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`
            : "none",
        transition: "transform 0.2s ease-out",
      }}
    >
      <div
        className={cn(
          "absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 bg-gradient-to-r",
          item.gradient
        )}
      />
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          item.featured
            ? "bg-gradient-to-r from-rose-500 to-indigo-500"
            : "bg-white/10"
        )}
      >
        <div
          className={
            item.featured
              ? "text-white"
              : "text-white/70 group-hover:text-white transition-colors"
          }
        >
          {item.icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
      <p className="text-white/70 text-sm mb-4">{item.description}</p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors"
        >
          Connect <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      )}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div
          className={cn(
            "absolute top-0 right-0 w-4 h-4 -mt-2 -mr-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r",
            item.gradient
          )}
        />
      </div>
    </div>
  );
}
