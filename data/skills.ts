import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiGo,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiElectron,
  SiGit,
  SiClaude,
  SiOpenai,
} from "react-icons/si";
import { Layout, Server, Database, Sparkles } from "lucide-react";
import type { SkillGroup } from "./types";

const ADV = { en: "Advanced", fa: "پیشرفته" };
const PRO = { en: "Proficient", fa: "مسلط" };
const WORK = { en: "Comfortable", fa: "کاربلد" };
const LEARN = { en: "Growing", fa: "در حال رشد" };

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Frontend", fa: "فرانت‌اند" },
    blurb: {
      en: "Interfaces that feel fast and look sharp.",
      fa: "رابط‌هایی که سریع‌اند و تمیز به نظر می‌رسند.",
    },
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact, level: 92, label: ADV },
      { name: "Next.js", icon: SiNextdotjs, level: 88, label: ADV },
      { name: "TypeScript", icon: SiTypescript, level: 85, label: PRO },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, label: ADV },
      { name: "Redux", icon: SiRedux, level: 82, label: PRO },
      { name: "TanStack Query", icon: SiReactquery, level: 84, label: PRO },
      { name: "Framer Motion", icon: SiFramer, level: 80, label: PRO },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend", fa: "بک‌اند" },
    blurb: {
      en: "APIs and services built to stay up.",
      fa: "سرویس‌ها و APIهایی که پایدار می‌مانند.",
    },
    icon: Server,
    skills: [
      { name: "Go (Golang)", icon: SiGo, level: 65, label: PRO },
      { name: "Docker", icon: SiDocker, level: 65, label: PRO },
    ],
  },
  {
    id: "data",
    title: { en: "Databases & Infra", fa: "دیتابیس و زیرساخت" },
    blurb: {
      en: "Where the data lives and how it ships.",
      fa: "جایی که داده زندگی می‌کند و چطور منتشر می‌شود.",
    },
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 82, label: PRO },
      { name: "Redis", icon: SiRedis, level: 78, label: WORK },
      { name: "MongoDB", icon: SiMongodb, level: 80, label: PRO },
      { name: "Supabase", icon: SiSupabase, level: 84, label: PRO },
      { name: "Docker", icon: SiDocker, level: 75, label: WORK },
    ],
  },
  {
    id: "tools",
    title: { en: "Desktop & AI Workflow", fa: "دسکتاپ و جریان کاری AI" },
    blurb: {
      en: "Cross-platform apps and AI-assisted building.",
      fa: "اپ‌های چندسکویی و توسعه با کمک هوش مصنوعی.",
    },
    icon: Sparkles,
    skills: [
      { name: "Electron", icon: SiElectron, level: 82, label: PRO },
      { name: "Claude Code", icon: SiClaude, level: 88, label: ADV },
      { name: "AI / LLM tooling", icon: SiOpenai, level: 82, label: PRO },
      { name: "Git", icon: SiGit, level: 88, label: ADV },
    ],
  },
];

/** Flat list, handy for the hero marquee / floating chips. */
export const featuredStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Go",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Claude Code",
];
