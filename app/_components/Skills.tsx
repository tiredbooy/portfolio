"use client";

import { Database, Globe } from "lucide-react";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiElectron, SiRedux, SiTypescript } from "react-icons/si";
import { FC, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { useGSAP } from "@/app/hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Skill = {
  name: string;
  icon: React.ElementType;
  description: string | undefined;
};

const skills: Skill[] = [
  { name: "React", icon: RiReactjsLine, description: "Building dynamic UIs" },
  {
    name: "Next.js",
    icon: RiNextjsLine,
    description: "Server-side rendering expert",
  },
  {
    name: "TailwindCSS",
    icon: RiTailwindCssLine,
    description: "Rapid styling",
  },
  { name: "Framer Motion", icon: Database, description: "Smooth Animations" },
  { name: "Web Design", icon: Globe, description: "Aesthetic interfaces" },
  { name: "Redux", icon: SiRedux, description: "Centralized app state" },
  {
    name: "Desktop App",
    icon: SiElectron,
    description: "Building Desktop Apps",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Safer, scalable JS",
  },
];

const Skills: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP((context) => {
    if (!containerRef.current) return;

    // Title animation - simple and smooth
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }

    // Skills cards animation - optimized batch animation
    const skillCards = gsap.utils.toArray(".skill-card");

    gsap.fromTo(
      skillCards,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.08, // Faster stagger
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true, // Only animate once
        },
      }
    );

    // Icon pop animation
    gsap.fromTo(
      ".skill-icon",
      {
        scale: 0,
        rotation: -180,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="px-6 py-20" ref={containerRef}>
      <div className="container max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="mb-16 text-4xl font-bold text-center text-gradient"
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={300}
              tiltReverse={false}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#60a5fa"
              glarePosition="all"
              glareBorderRadius="12px"
            >
              <div className="skill-card relative flex flex-col items-center p-6 text-center transition-all duration-300 glass-effect rounded-xl group hover:shadow-glow cursor-pointer h-full">
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-secondary/10 to-transparent group-hover:opacity-100 rounded-xl pointer-events-none" />

                <skill.icon className="skill-icon relative z-10 w-16 h-16 mb-4 transition-all duration-300 text-accent group-hover:text-accent-hover group-hover:scale-110" />

                <h3 className="relative z-10 mb-2 text-xl font-semibold text-text-primary">
                  {skill.name}
                </h3>

                <p className="relative z-10 text-sm text-text-tertiary">
                  {skill.description}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
