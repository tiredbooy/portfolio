"use client";

import Profile from "@/public/profile.jpg";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {
  RiGithubLine as Github,
  RiLinkedinBoxLine as Linkedin,
  RiMailAddLine as Mail,
  RiNextjsLine,
  RiReactjsLine,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import type { ISourceOptions } from "@tsparticles/engine";
import Typewriter from "typewriter-effect";
import { useGSAP } from "@/app/[locale]/hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useGSAP((context) => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    // Title animation - simplified for better performance
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }

    // Text content animation - optimized
    gsap.fromTo(
      ".hero-text-content > *:not(h1)",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Social buttons - simplified animation
    gsap.fromTo(
      ".social-btn",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.5)",
      }
    );

    // Profile image initial animation
    if (imageWrapperRef.current) {
      gsap.fromTo(
        imageWrapperRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }

    // Floating animation for profile - subtle
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Floating tech icons - simplified
    floatingRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.to(el, {
        y: -8,
        x: index % 2 === 0 ? -5 : 5,
        duration: 2.5 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });

    // Scroll indicator
    gsap.fromTo(
      ".scroll-indicator",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1.5,
        ease: "power2.out",
      }
    );

    // Parallax on scroll - Fixed to prevent fading
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    // Only apply subtle parallax without opacity changes
    parallaxTl.to(".hero-text-content", {
      y: 80,
      ease: "none",
    });

    // Fixed: Removed opacity from image parallax
    if (imageWrapperRef.current) {
      gsap.to(imageWrapperRef.current, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 100,
        ease: "none",
      });
    }
  }, []);

  const particlesOptions: ISourceOptions = {
    preset: "stars",
    background: { color: { value: "transparent" } },
    particles: {
      color: { value: ["#60a5fa", "#a78bfa", "#22d3ee"] },
      opacity: { value: { min: 0.1, max: 0.8 } },
      number: { value: 80 },
      size: { value: { min: 0.5, max: 2 } },
      move: { speed: 0.5 },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen h-[130vh] overflow-hidden"
      ref={containerRef}
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
      <div className="container relative z-10 flex flex-col-reverse items-center gap-8 px-4 mx-auto md:gap-12 md:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Text Content */}
        <div className="hero-text-content py-8 space-y-6 text-center lg:py-12 lg:space-y-8 lg:text-left">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-3xl font-extrabold leading-tight text-gradient xs:text-4xl sm:text-5xl lg:text-7xl"
          >
            Mahdi Kazemi
          </h1>

          {/* Typewriter */}
          <div className="text-lg font-semibold text-text-secondary xs:text-xl sm:text-2xl lg:text-3xl">
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
          </div>

          {/* Description */}
          <p className="w-full text-base leading-relaxed text-text-tertiary lg:text-xl">
            Crafting immersive digital experiences with passion and precision. I
            transform ideas into stunning, functional applications that users
            love.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="#projects">
              <button className="px-6 cursor-pointer py-3 font-semibold text-text-inverse transition-all duration-300 rounded-full bg-primary hover:bg-primary-hover shadow-glow hover:shadow-xl hover:scale-105 sm:px-8 sm:py-4">
                View My Work
              </button>
            </Link>
            <Link href="/resume">
              <button className="px-6 cursor-pointer py-3 font-semibold transition-all duration-300 rounded-full glass-effect text-text-primary hover:bg-surface-elevated hover:scale-105 sm:px-8 sm:py-4">
                Check my Resume
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 lg:gap-6 lg:justify-start">
            {socialBtns.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="social-btn p-2.5 transition-all duration-300 rounded-full glass-effect hover:border-primary hover:shadow-glow hover:scale-110 lg:p-3 group group-hover:shadow-gradient-neon-purple"
              >
                <social.icon className="w-5 h-5 text-text-secondary group-hover:text-primary lg:w-6 lg:h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center pt-8 lg:pt-0">
          <div ref={imageWrapperRef} className="relative">
            <div ref={imageRef} className="relative">
              {/* Animated Background Rings */}
              <div
                className="absolute inset-0 border-2 border-dashed rounded-full border-secondary/30 animate-spin-slow"
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                  animation: "spin 20s linear infinite",
                }}
              />

              {/* Main Image */}
              <div className="relative overflow-hidden border-4 rounded-full shadow-xl border-gradient">
                <Image
                  src={Profile}
                  alt="Mahdi Kazemi - Frontend Developer"
                  width={400}
                  height={400}
                  className="object-cover w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div
                ref={(el) => {
                  floatingRefs.current[0] = el;
                }}
                className="absolute p-2.5 rounded-full -top-3 -right-3 glass-effect xs:p-3 xs:-top-4 xs:-right-4"
              >
                <span className="text-xl xs:text-2xl">
                  <RiNextjsLine className="text-secondary-light" />
                </span>
              </div>

              <div
                ref={(el) => {
                  floatingRefs.current[1] = el;
                }}
                className="absolute p-2.5 rounded-full -bottom-3 -right-3 glass-effect xs:p-3 xs:-bottom-4 xs:-right-4"
              >
                <span className="text-xl xs:text-2xl">
                  <SiTypescript className="text-primary" />
                </span>
              </div>

              <div
                ref={(el) => {
                  floatingRefs.current[2] = el;
                }}
                className="absolute p-2.5 rounded-full -bottom-3 -left-3 glass-effect xs:p-3 xs:-bottom-4 xs:-left-4"
              >
                <span className="text-xl xs:text-2xl">
                  <RiReactjsLine className="text-accent" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
