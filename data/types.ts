import type { ElementType } from "react";
import type { StaticImageData } from "next/image";

/** The two locales the site supports. */
export type Locale = "en" | "fa";

/** A string that exists in both languages. */
export type Localized = { en: string; fa: string };

/** A list of strings that exists in both languages. */
export type LocalizedList = { en: string[]; fa: string[] };

export type Skill = {
  name: string;
  icon: ElementType;
  /** 0–100, drives the proficiency bar. */
  level: number;
  label: Localized;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  blurb: Localized;
  icon: ElementType;
  skills: Skill[];
};

export type ProjectStatus = "live" | "completed" | "inProgress";
export type ProjectCategory =
  | "fullstack"
  | "webApp"
  | "desktop"
  | "ecommerce"
  | "foodBeverage";

export type Project = {
  id: string;
  title: Localized;
  tagline: Localized;
  description: Localized;
  /** Cover image; when null the card renders a branded gradient cover. */
  image: StaticImageData | null;
  /** Tailwind gradient used for the fallback cover + accent glow. */
  accent: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  highlights: LocalizedList;
  tags: string[];
  github?: string;
  demo?: string;
};

export type Experience = {
  role: Localized;
  company: Localized;
  duration: Localized;
  type: Localized;
  responsibilities: LocalizedList;
  achievements: LocalizedList;
};

export type SocialLink = {
  name: string;
  icon: ElementType;
  href: string;
};

export type ContactChannel = {
  icon: ElementType;
  title: Localized;
  value: string;
  description: Localized;
  href?: string;
  accent: string;
};
