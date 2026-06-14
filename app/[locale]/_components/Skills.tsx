"use client";

import { FC, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/app/[locale]/hooks/useGsap";
import { skillGroups } from "@/data/skills";
import { content } from "@/data/content";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";

gsap.registerPlugin(ScrollTrigger);

const Skills: FC = () => {
  const { t } = useLocalized();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      ".skills-head",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
    gsap.fromTo(
      ".skill-group",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-grid", start: "top 85%" },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative px-5 py-24 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="skills-head mb-14 text-center">
          <span className="inline-block rounded-full glass px-4 py-1 text-sm font-medium text-primary">
            {t(content.skills.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {t(content.skills.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            {t(content.skills.subtitle)}
          </p>
        </div>

        {/* Grouped grid */}
        <div className="skills-grid grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="skill-group group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:shadow-lg sm:p-7"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

              {/* Group header */}
              <div className="relative mb-6 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-text-inverse">
                  <group.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">{t(group.title)}</h3>
                  <p className="mt-0.5 text-sm text-text-tertiary">{t(group.blurb)}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="relative space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                        <skill.icon className="h-4 w-4 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-tertiary">{t(skill.label)}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
