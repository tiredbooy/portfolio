"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Profile from "@/public/profile.jpg";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    preset: "stars",
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.3,
      },
      number: {
        value: 50,
      },
      size: {
        value: { min: 0.1, max: 1 },
      },
    },
  };

  return (
    <section
      id="hero"
      className="flex items-center w-screen min-h-screen overflow-hidden bg-red-500 section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end" />
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      <div className="z-10 grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-accent to-white"
          >
            Mahdi Kazemi
          </motion.h1>
          <div className="text-2xl md:text-4xl text-accent">
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "Desktop App Developer",
                  "Creative Thinker",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-full px-4 mx-auto leading-relaxed text-gray-300 sm:max-w-lg md:px-0" // ensure padding and centering on small screens
            style={{
              // optional: limit line length for readability
              overflowWrap: "anywhere",
            }}
          >
            Crafting immersive digital experiences with passion and precision.
            Let’s turn your ideas into reality.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <Image
            src={Profile}
            alt="Profile"
            className="object-cover mx-auto scale-75 border-4 rounded-full shadow-2xl max-w-96 max-h-96 border-accent/50"
          />
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
