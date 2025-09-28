"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Globe,
  Atom,
} from "lucide-react";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiElectron, SiRedux } from "react-icons/si";

const skills = [
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
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-linear-to-r from-white to-accent"
      >
        Skills & Technologies
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
              className="card flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <skill.icon className="w-16 h-16 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
