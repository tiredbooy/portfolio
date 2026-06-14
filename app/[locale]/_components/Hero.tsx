"use client";

import Profile from "@/public/profile.jpg";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiReact, SiNextdotjs, SiGo, SiTypescript } from "react-icons/si";
import type { ISourceOptions } from "@tsparticles/engine";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/app/[locale]/hooks/useGsap";
import { Link as IntlLink } from "@/i18n/navigation";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";
import { profile, socialLinks } from "@/data/profile";
import { featuredStack } from "@/data/skills";
import { content } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const floatingIcons = [
  { Icon: SiNextdotjs, className: "-top-4 -right-2 text-foreground" },
  { Icon: SiGo, className: "top-1/4 -left-6 text-accent" },
  { Icon: SiTypescript, className: "-bottom-3 -right-4 text-primary" },
  { Icon: SiReact, className: "-bottom-2 -left-4 text-accent" },
];

export default function Hero() {
  const { t, isRtl } = useLocalized();
  const [init, setInit] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => setInit(true));
  }, []);

  useGSAP(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    gsap.fromTo(
      ".hero-reveal",
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.1 }
    );
    gsap.fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.25 }
    );

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  const particlesOptions: ISourceOptions = {
    preset: "stars",
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: ["#6d8bff", "#b388ff", "#2dd4d4"] },
      opacity: { value: { min: 0.1, max: 0.7 } },
      number: { value: 60 },
      size: { value: { min: 0.4, max: 1.8 } },
      move: { speed: 0.4 },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="aurora-bg relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 lg:pt-0 lg:pb-0"
    >
      <div className="grid-bg absolute inset-0 -z-10" />
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10"
        />
      )}

      <div className="container relative z-10 mx-auto grid items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Text */}
        <div className={`order-2 lg:order-1 ${isRtl ? "text-center lg:text-right" : "text-center lg:text-left"}`}>
          <div className="hero-reveal mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {t(content.hero.badge)}
          </div>

          <h1 className="hero-reveal text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-text-primary">{t(profile.name)}</span>
          </h1>

          <div className="hero-reveal mt-3 text-xl font-semibold text-gradient-animated sm:text-2xl lg:text-3xl min-h-[1.4em]">
            <Typewriter
              options={{
                strings: profile.roles.map((r) => t(r)),
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 35,
              }}
            />
          </div>

          <p className="hero-reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary lg:mx-0 lg:text-lg">
            {t(profile.tagline)}
          </p>

          {/* CTAs */}
          <div className={`hero-reveal mt-8 flex flex-col gap-3 sm:flex-row ${isRtl ? "sm:justify-center lg:justify-end" : "sm:justify-center lg:justify-start"}`}>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-semibold text-text-inverse shadow-glow transition-transform hover:scale-[1.03]"
            >
              {t(content.hero.viewWork)}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </a>
            <IntlLink
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-text-primary transition-colors hover:text-primary"
            >
              <FileText className="w-4 h-4" />
              {t(content.hero.resume)}
            </IntlLink>
          </div>

          {/* Socials */}
          <div className={`hero-reveal mt-8 flex items-center gap-3 ${isRtl ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full glass text-text-secondary transition-all hover:scale-110 hover:text-primary"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-reveal mt-10 grid max-w-md grid-cols-3 gap-4 lg:mx-0 mx-auto">
            {profile.stats.map((s) => (
              <div key={s.value} className="text-center lg:text-start">
                <div className="text-2xl font-bold text-text-primary lg:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-text-tertiary">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hero-image order-1 flex justify-center lg:order-2">
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-3xl" />
            <div
              className="absolute -inset-3 rounded-full border border-dashed border-secondary/30 animate-spin-slow"
              aria-hidden
            />
            <div className="gradient-border relative overflow-hidden rounded-full shadow-lg">
              <Image
                src={Profile}
                alt={t(profile.name)}
                width={420}
                height={420}
                priority
                className="h-60 w-60 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>

            {floatingIcons.map(({ Icon, className }, i) => (
              <div
                key={i}
                className={`absolute grid h-11 w-11 place-items-center rounded-2xl glass animate-float ${className}`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech marquee strip */}
      <div className="absolute bottom-0 inset-x-0 hidden border-t border-border/60 bg-background/40 py-3 backdrop-blur-sm lg:block">
        <div className="flex items-center justify-center gap-8 text-sm font-medium text-text-tertiary">
          {featuredStack.map((tech) => (
            <span key={tech} className="whitespace-nowrap">{tech}</span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-tertiary lg:flex">
        <span className="text-xs font-medium">{t(content.hero.scroll)}</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
