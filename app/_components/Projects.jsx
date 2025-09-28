"use client";

import Allmax from "@/public/allmaxsport.png";
import PizzaExpress from "@/public/pizzaexpress.png";
import StorePicture from "@/public/store.png";
import WildOasisWebsite from "@/public/wild-oasis-website.png";
import WildOasis from "@/public/wildoasis.png";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Code,
  ExternalLink,
  Eye,
  Github,
  Star
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const projects = [
  {
    id: 1,
    title: "Gym Automation Desktop App",
    description:
      "A comprehensive desktop application that integrates with hardware systems for complete gym management. Features member tracking, equipment monitoring, and automated billing.",
    fullDescription:
      "This cutting-edge desktop application revolutionizes gym management by seamlessly integrating with hardware systems. Built with Electron.js and React, it provides real-time equipment monitoring, automated member check-ins, billing management, and comprehensive analytics dashboard.",
    image: StorePicture,
    github: "https://github.com/tiredbooy",
    category: "Desktop Application",
    featured: true,
    status: "Completed",
    year: "2025",
    stats: { stars: 0, views: 0 },
    tags: [
      "Electron.js",
      "React",
      "Redux",
      "React-Query",
      "Hardware Integration",
      "Django",
      "Tailwind CSS",
    ],
    highlights: [
      "Hardware Integration",
      "Real-time Monitoring",
      "Automated Billing",
      "Member Management",
    ],
  },
  {
    id: 2,
    title: "Wild Oasis Management",
    description:
      "Modern dashboard for cabin rental management with booking system, guest management, and analytics. Features real-time availability and automated notifications.",
    fullDescription:
      "A sophisticated cabin rental management system featuring an intuitive dashboard for property managers. Includes comprehensive booking management, guest profiles, payment processing, and detailed analytics with beautiful data visualizations.",
    image: WildOasis,
    github: "https://github.com/tiredbooy/Wild-Oasis",
    demo: "http://wild-oasis-mangment.netlify.app",
    category: "Web Application",
    featured: true,
    status: "Live",
    year: "2025",
    stats: { stars: 0, views: 0 },
    tags: ["React", "React-Query", "Redux", "Supabase"],
    highlights: [
      "Booking Management",
      "Guest Analytics",
      "Payment Integration",
      "Real-time Updates",
    ],
  },
  {
    id: 3,
    title: "Wild Oasis Client Website",
    description:
      "Modern Website for Wild Oasis to Reserve a Cabin, account Managment",
    fullDescription:
      "Server Side Modern Website for Wild Oasis to Reserve a Cabin,  Includes comprehensive booking Managment, guest profiles",
    image: WildOasisWebsite,
    github: "https://github.com/tiredbooy/the-wild-oasis-website",
    demo: "https://the-wild-oasis-website-iota-dusky.vercel.app/",
    category: "Web Application",
    featured: true,
    status: "Live",
    year: "2025",
    stats: { stars: 0, views: 0 },
    tags: ["React", "Nextjs", "Authjs", "Supabase"],
    highlights: ["Booking Management", "Guest Analytics", "Real-time Updates"],
  },
  {
    id: 4,
    title: "Allmaxsport E-commerce",
    description:
      "Full-featured e-commerce platform specialized in gym equipment with advanced filtering, wishlist, and secure payment processing.",
    fullDescription:
      "A comprehensive e-commerce solution tailored for fitness equipment sales. Features advanced product filtering, user reviews, wishlist functionality, secure payment processing, and an admin panel for inventory management.",
    image: Allmax,
    github: "https://github.com/tiredbooy",
    demo: "https://allmaxsport.com/",
    category: "E-commerce",
    featured: false,
    status: "Live",
    year: "2025",
    stats: { stars: 0, views: 0 },
    tags: ["React", "Django", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "Team Work",
      "Product Catalog",
      "Payment Processing",
      "User Reviews",
      "Inventory Management",
    ],
  },
  {
    id: 5,
    title: "Pizza Express",
    description:
      "A fast, delightful pizza ordering app with a location-based delivery map, built with React and Tailwind CSS.",
    fullDescription:
      "Pizza Express is a lean, responsive pizza ordering platform that leverages a location-aware map to streamline delivery. It uses React for the UI and Tailwind CSS for styling, featuring an interactive map to select delivery areas, real-time distance estimates, and an intuitive checkout flow.",
    image: PizzaExpress,
    github: "https://github.com/tiredbooy/pizza-express",
    demo: "https://tiredbooy.github.io/pizza-express",
    category: "Food & Beverage",
    featured: false,
    status: "Live",
    year: "2025",
    stats: { stars: 0, views: 0 },
    tags: ["React", "Tailwind CSS"],
    highlights: [
      "Location-based delivery map",
      "Real-time distance estimation",
      "Intuitive cart & checkout",
      "Responsive UI",
      "Lightweight & fast",
    ],
  },
];

const categories = [
  "All",
  "Web Application",
  "Desktop Application",
  "E-commerce",
  "Food & Beverage"
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-h-[90vh] overflow-y-auto glass-effect rounded-3xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute z-10 flex items-center justify-center w-10 h-10 transition-colors rounded-full cursor-pointer top-4 text-text-secondary right-4 glass-effect hover:bg-error/20"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex flex-col gap-8 mb-8 lg:flex-row">
                <div className="lg:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full rounded-2xl"
                  />
                </div>

                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live"
                          ? "bg-success/20 text-success"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-surface text-text-tertiary">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold text-gradient">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-text-secondary">
                    {project.fullDescription}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2 text-text-tertiary">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">
                        {project.stats.stars} stars
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-text-tertiary">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">
                        {project.stats.views} views
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 font-semibold transition-all rounded-full text-text-inverse bg-primary hover:bg-primary-hover hover:scale-105 "
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 font-semibold transition-all rounded-full text-text-tertiary glass-effect hover:bg-surface-elevated hover:text-text-primary hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-text-primary">
                  <Star className="w-5 h-5 " />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-3 text-center glass-effect rounded-xl text-text-secondary"
                    >
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-secondary">
                  <Code className="w-5 h-5" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer glass-effect hover:bg-accent/20 hover:text-accent text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      id="projects"
      className="relative w-full px-6 py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold text-gradient">
            Featured Projects
          </h2>
          <p className="w-full mx-auto mb-8 text-xl text-text-secondary">
            Explore my latest work showcasing modern web technologies, creative
            problem-solving, and attention to detail
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-secondary text-inverse shadow-glow"
                    : "glass-effect text-text-secondary hover:bg-surface-elevated"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2.5 },
            }}
            className="w-full pb-16"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={project.id} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute z-10 px-3 py-1 text-xs font-bold text-white rounded-full top-4 left-4 bg-accent/90 backdrop-blur-sm">
                      FEATURED
                    </div>
                  )}

                  {/* Main Card */}
                  <div className="relative w-full overflow-hidden transition-all duration-500 glass-effect rounded-3xl group-hover:shadow-2xl">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-sm"
                          >
                            <motion.div
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0.8 }}
                              className="text-lg font-semibold text-white"
                            >
                              Click to explore
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-4 text-text-tertiary">
                          <div className="flex items-center gap-1 text-xs">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <Star className="w-3 h-3" />
                            {project.stats.stars}
                          </div>
                        </div>
                      </div>

                      <h3 className="mb-3 text-xl font-bold transition-all text-text-primary group-hover:text-gradient">
                        {project.title}
                      </h3>

                      <p className="mb-4 text-sm text-text-tertiary line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-surface text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 text-xs rounded-full bg-surface text-accent">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 transition-colors text-text-secondary hover:text-primary"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 transition-colors text-text-secondary hover:text-accent"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">Demo</span>
                          </a>
                        )}
                        <span className="text-xs text-text-tertiary">
                          Click to explore
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="flex items-center justify-center w-12 h-12 transition-all rounded-full cursor-pointer swiper-button-prev-custom glass-effect hover:bg-primary/20 group">
              <span className="text-xl text-primary/40 group-hover:text-primary">
                <ArrowLeft />
              </span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 transition-all rounded-full cursor-pointer swiper-button-next-custom glass-effect hover:bg-primary/20 group">
              <span className="text-xl text-primary/40 group-hover:text-primary">
                <ArrowRight />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-text-secondary">
            Interested in working together on your next project?
          </p>
          <button className="px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-glow hover:shadow-xl hover:scale-105">
            Let's Create Something Amazing
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
