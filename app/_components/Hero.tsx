"use client";

import Profile from "@/public/profile.jpg";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  RiGithubLine as Github,
  RiLinkedinBoxLine as Linkedin,
  RiMailAddLine as Mail,
  RiNextjsLine,
  RiReactjsLine,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import type { IOptions, RecursivePartial } from "tsparticles-engine";
import Typewriter from "typewriter-effect";

type SocialBtns = {
  icon: React.ElementType;
  label: string;
  href?: string;
};

const socialBtns: SocialBtns[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/tiredbooy" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tiredboy",
  },
  { icon: Mail, label: "Email", href: "mailto:mahdykazemyo1i2@gmail.com" },
];

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: RecursivePartial<IOptions> = {
    preset: "stars",
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: ["#60a5fa", "#a78bfa", "#22d3ee"],
      },
      opacity: {
        value: { min: 0.1, max: 0.8 },
      },
      number: {
        value: 80,
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
      move: {
        speed: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      {/* Animated Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Main Content */}
      <div className="container relative z-10 grid items-center gap-12 px-6 mx-auto lg:grid-cols-2 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="py-12 space-y-8 text-center lg:text-left"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight text-gradient sm:text-5xl lg:text-7xl"
          >
            Mahdi Kazemi
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl font-semibold text-text-secondary sm:text-2xl lg:text-3xl"
          >
            <Typewriter
              options={{
                strings: [
                  `FrontEnd Developer`,
                  "Desktop App Developer 💻",
                  "Creative Problem Solver 💡",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full text-lg leading-relaxed text-text-tertiary lg:text-xl"
          >
            Crafting immersive digital experiences with passion and precision. I
            transform ideas into stunning, functional applications that users
            love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#projects">
              <button className="px-8 cursor-pointer py-4 font-semibold text-text-inverse transition-all duration-300 rounded-full bg-primary hover:bg-primary-hover shadow-glow hover:shadow-xl hover:scale-105">
                View My Work
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 cursor-pointer py-4 font-semibold transition-all duration-300 rounded-full glass-effect text-text-primary hover:bg-surface-elevated hover:scale-105">
                Get In Touch
              </button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-6 lg:justify-start"
          >
            {socialBtns.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 transition-all duration-300 rounded-full glass-effect hover:bg-primary/20 hover:shadow-glow"
              >
                <social.icon className="w-6 h-6 text-text-secondary hover:text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Animated Background Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed rounded-full border-secondary/30 animate-spin-slow"
              style={{
                width: "120%",
                height: "120%",
                top: "-10%",
                left: "-10%",
              }}
            />

            {/* Main Image */}
            <div className="relative overflow-hidden border-4 rounded-full shadow-xl border-gradient">
              <Image
                src={Profile}
                alt="Mahdi Kazemi - Frontend Developer"
                width={400}
                height={400}
                className="object-cover w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute p-3 rounded-full -top-4 -right-4 glass-effect"
            >
              <span className="text-2xl">
                <RiNextjsLine className="text-secondary-light" />
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute p-3 rounded-full -bottom-4 -right-4 glass-effect"
            >
              <span className="text-2xl">
                <SiTypescript className="text-primary" />
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute p-3 rounded-full -bottom-4 -left-4 glass-effect"
            >
              <span className="text-2xl">
                <RiReactjsLine className="text-accent" />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-tertiary"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
