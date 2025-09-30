"use client";

import { motion } from "framer-motion";
import { Database, Globe } from "lucide-react";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiElectron, SiRedux, SiTypescript } from "react-icons/si";
import { FC } from "react";
import Tilt from "react-parallax-tilt";

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
  return (
    <section id="skills" className="px-6 py-20">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-4xl font-bold text-center text-gradient"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={450}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center p-6 text-center transition-all duration-300 glass-effect rounded-xl group hover:shadow-glow"
              >
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-secondary/10 to-transparent group-hover:opacity-100 rounded-xl" />

                <skill.icon className="relative z-10 w-16 h-16 mb-4 transition-colors duration-300 text-accent group-hover:text-accent-hover" />

                <h3 className="relative z-10 mb-2 text-xl font-semibold text-text-primary">
                  {skill.name}
                </h3>

                <p className="relative z-10 text-sm text-text-tertiary">
                  {skill.description}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
