"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StorePicture from "@/public/store.png"
import WildOasis from "@/public/wildoasis.png" 
import Allmax from "@/public/allmaxsport.png"


const projects = [
  {
    title: "Gym Automation Desktop app ",
    description: "A modern desktop app That work with hardware built with React and Electronjs.",
    image: StorePicture,
    github: "https://github.com/tiredbooy",
    tags: ["Electron js", "Tailwind" , "React" , "Redux", "React-query", "Hardware" , "Django"],
  },
  {
    title: "Wild Oasis",
    description: "Dashboard For Managing A Cabins And Guests For Renting Cabins",
    image: WildOasis,
     github: "https://github.com/tiredbooy",
    demo: "http://wild-oasis-mangment.netlify.app",
    tags: ["React", "React-Query", "Redux"],
  },
  {
    title: "Allmaxsport",
    description: "E-commerce platform For Selling Gym Equipment.",
    image: Allmax,
     github: "https://github.com/tiredbooy",
    demo: "https://allmaxsport.com/",
    tags: ["React", "Tailwind", "Django"],
  },
  // {
  //   title: "Pizza Express",
  //   description: "Platform To Order Pizza ",
  //   image: "/placeholder.jpg",
  //    github: "https://github.com/tiredbooy",
  //   demo: "https://demo.com",
  //   tags: ["React", "Node.js", "MongoDB"],
  // },
  // Add more
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-linear-to-r from-white to-accent"
      >
        Projects
      </motion.h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card flex flex-col h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-t-2xl object-cover"
              />
              <div className="p-6 grow">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between p-6 border-t border-accent/10">
                <a
                  href={project.github}
                  className="flex items-center text-accent hover:text-white transition"
                >
                  <Github className="w-5 h-5 mr-2" /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-accent hover:text-white transition"
                >
                  <ExternalLink className="w-5 h-5 mr-2" /> Demo
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
