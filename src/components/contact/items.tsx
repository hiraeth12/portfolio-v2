// components/contact/contactItems.tsx
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Code,
  Zap,
} from "lucide-react";

export type ContactItemType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  size: string;
  gradient: string;
  featured?: boolean;
  aos?: string;
  delay?: number;
};

export const contactItems: ContactItemType[] = [
  {
    id: "github",
    title: "GitHub",
    description: "Check out my code repositories",
    icon: <Github className="h-6 w-6" />,
    link: "https://github.com",
    size: "col-span-1 row-span-1",
    gradient: "from-gray-500 to-gray-700",
    aos: "zoom-in",
    delay: 0,
  },
  {
    id: "twitter",
    title: "Twitter",
    description: "Follow me for updates",
    icon: <Twitter className="h-6 w-6" />,
    link: "https://twitter.com",
    size: "col-span-1 row-span-1",
    gradient: "from-blue-400 to-blue-600",
    aos: "fade-right",
    delay: 100,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect with me professionally",
    icon: <Linkedin className="h-6 w-6" />,
    link: "https://linkedin.com",
    size: "col-span-1 row-span-1",
    gradient: "from-blue-600 to-blue-800",
    aos: "fade-left",
    delay: 200,
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "See my visual portfolio",
    icon: <Instagram className="h-6 w-6" />,
    link: "https://instagram.com",
    size: "col-span-1 row-span-1",
    gradient: "from-pink-500 to-purple-600",
    aos: "flip-left",
    delay: 300,
  },
  {
    id: "email",
    title: "Email Me",
    description: "sahrulridho@student.telkomuniversity.ac.id",
    icon: <Mail className="h-6 w-6" />,
    link: "mailto:sahrulridho@student.telkomuniversity.ac.id?subject=Hello&body=Hello Sahrul 👋,",
    size: "col-span-2 row-span-1",
    gradient: "from-rose-500 to-indigo-500",
    featured: true,
    aos: "zoom-in-up",
    delay: 400,
  },
  {
    id: "location",
    title: "Location",
    description: "Bandung, Indonesia",
    icon: <MapPin className="h-6 w-6" />,
    size: "col-span-1 row-span-1",
    gradient: "from-green-500 to-emerald-700",
    aos: "fade-up",
    delay: 500,
  },
  {
    id: "availability",
    title: "Status",
    description: "Available for work",
    icon: <Zap className="h-6 w-6" />,
    size: "col-span-1 row-span-1",
    gradient: "from-yellow-400 to-amber-600",
    featured: true,
    aos: "fade-up",
    delay: 800,
  },
];
