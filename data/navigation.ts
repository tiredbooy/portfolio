import { Home, Code2, Briefcase, Mail, FileText } from "lucide-react";
import type { ElementType } from "react";
import type { Localized } from "./types";

export type NavItem = {
  key: string;
  icon: ElementType;
  label: Localized;
  href: string;
  /** External route (resume page) vs in-page anchor. */
  route?: boolean;
};

export const navItems: NavItem[] = [
  { key: "home", icon: Home, label: { en: "Home", fa: "خانه" }, href: "#hero" },
  { key: "skills", icon: Code2, label: { en: "Skills", fa: "مهارت‌ها" }, href: "#skills" },
  { key: "projects", icon: Briefcase, label: { en: "Work", fa: "نمونه‌کار" }, href: "#projects" },
  { key: "contact", icon: Mail, label: { en: "Contact", fa: "تماس" }, href: "#contact" },
  { key: "resume", icon: FileText, label: { en: "Résumé", fa: "رزومه" }, href: "/resume", route: true },
];
