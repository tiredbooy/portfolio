import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiElectron,
  SiRedux,
  SiTypescript,
  SiFramer,
  SiReactquery,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: "مبتدی" | "متوسط" | "پیشرفته" | "تخصصی";
}

const skills: Skill[] = [
  {
    name: "React",
    icon: RiReactjsFill,
    level: "پیشرفته",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    level: "متوسط",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "متوسط",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    level: "تخصصی",
  },
  {
    name: "Redux",
    icon: SiRedux,
    level: "متوسط",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    level: "متوسط",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    level: "متوسط",
  },
  {
    name: "طراحی وب",
    icon: MdDesignServices,
    level: "پیشرفته",
  },
  {
    name: "Desktop Applications",
    icon: SiElectron,
    level: "متوسط",
  },
  {
    name: "Prompt Engineering",
    icon: IoSparkles,
    level: "متوسط",
  },
];

function ResumeSkills() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h3 className="text-xl font-bold text-foreground mb-4">مهارت‌ها</h3>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full hover:border-primary hover:bg-surface-elevated transition-all duration-200 group"
              >
                <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs text-subtle px-2 py-0.5 bg-background rounded-full border border-border-light">
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResumeSkills;
