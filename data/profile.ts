import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
  RiTwitterXLine,
} from "react-icons/ri";
import type { ContactChannel, Localized, SocialLink } from "./types";

export const profile = {
  name: { en: "Mahdi Kazemi", fa: "مهدی کاظمی" } as Localized,
  role: { en: "Full-Stack Developer", fa: "توسعه‌دهنده فول‌استک" } as Localized,

  /** Rotating lines for the hero typewriter. */
  roles: [
    { en: "Full-Stack Developer", fa: "توسعه‌دهنده فول‌استک" },
    { en: "Frontend — React & Next.js", fa: "فرانت‌اند — React و Next.js" },
    { en: "Backend — Go", fa: "بک‌اند — Go " },
    { en: "I build with AI, daily", fa: "هر روز با AI می‌سازم" },
  ] as Localized[],

  /** Short, human intro under the title. */
  tagline: {
    en: "I'm a full-stack developer who ships end to end — polished React interfaces on the front, Go and Node services with Postgres and Redis behind them. Lately I build alongside AI tools like Claude Code to move faster without cutting corners.",
    fa: "توسعه‌دهنده فول‌استکی هستم که محصول را از ابتدا تا انتها می‌سازد — رابط‌های تمیز React در جلو و سرویس‌های Go و با Postgres و Redis در پشت. این روزها کنار ابزارهای AI مثل Claude Code کار می‌کنم تا سریع‌تر و بدون سرهم‌بندی پیش بروم.",
  } as Localized,

  /** A couple of quick stats for the hero / about. */
  stats: [
    { value: "3+", label: { en: "Years building", fa: "سال تجربه" } },
    { value: "6+", label: { en: "Shipped projects", fa: "پروژه منتشرشده" } },
    { value: "∞", label: { en: "Things still learning", fa: "چیزها برای یادگیری" } },
  ] as { value: string; label: Localized }[],

  email: "mahdykazemyo1i2@gmail.com",
  phone: "+98 910 225 4699",
  phoneHref: "tel:+989393591452",
  location: { en: "Tehran, Iran · Remote-friendly", fa: "تهران، ایران · دورکاری" } as Localized,
  resumeUrl: "/resume.pdf",
  resumePage: "/resume",

  github: "https://github.com/tiredbooy",
  linkedin: "https://www.linkedin.com/in/tiredboy",

  availability: {
    badge: { en: "Available for work", fa: "آماده همکاری" } as Localized,
    description: {
      en: "Open to full-stack roles, freelance builds, and interesting collaborations.",
      fa: "آماده برای موقعیت‌های فول‌استک، پروژه‌های فریلنس و همکاری‌های جذاب.",
    } as Localized,
    callToAction: {
      en: "Tell me what you're building — I'll tell you how I'd help.",
      fa: "بگو چه می‌سازی — می‌گویم چطور می‌توانم کمک کنم.",
    } as Localized,
  },
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: RiGithubLine, href: "https://github.com/tiredbooy" },
  { name: "LinkedIn", icon: RiLinkedinBoxLine, href: "https://www.linkedin.com/in/tiredboy" },
  {
    name: "WhatsApp",
    icon: RiWhatsappLine,
    href: "https://api.whatsapp.com/send/?phone=%2B989393591452&text&type=phone_number&app_absent=0",
  },
  { name: "Email", icon: Mail, href: "mailto:mahdykazemyo1i2@gmail.com" },
];

export const contactChannels: ContactChannel[] = [
  {
    icon: Mail,
    title: { en: "Email", fa: "ایمیل" },
    value: "mahdykazemyo1i2@gmail.com",
    description: { en: "Best for anything detailed", fa: "بهترین راه برای موضوعات مفصل" },
    href: "mailto:mahdykazemyo1i2@gmail.com",
    accent: "text-primary",
  },
  {
    icon: RiWhatsappLine,
    title: { en: "WhatsApp", fa: "واتساپ" },
    value: "+98 939 359 1452",
    description: { en: "Quick questions, fast replies", fa: "سوال‌های سریع، پاسخ سریع" },
    href: "https://api.whatsapp.com/send/?phone=%2B989393591452&text&type=phone_number&app_absent=0",
    accent: "text-success",
  },
  {
    icon: Phone,
    title: { en: "Phone", fa: "تلفن" },
    value: "+98 939 359 1452",
    description: { en: "For when it's urgent", fa: "برای مواقع فوری" },
    href: "tel:+989393591452",
    accent: "text-secondary",
  },
  {
    icon: MapPin,
    title: { en: "Location", fa: "موقعیت" },
    value: "Tehran, Iran",
    description: { en: "Available for remote work", fa: "آماده برای دورکاری" },
    accent: "text-accent",
  },
  {
    icon: Clock,
    title: { en: "Response time", fa: "زمان پاسخ" },
    value: "< 24h",
    description: { en: "I don't leave people hanging", fa: "کسی را معطل نمی‌گذارم" },
    accent: "text-warning",
  },
];

export const contactSocials: SocialLink[] = [
  { name: "GitHub", icon: RiGithubLine, href: "https://github.com/tiredbooy" },
  { name: "LinkedIn", icon: RiLinkedinBoxLine, href: "https://www.linkedin.com/in/tiredboy" },
  { name: "Twitter", icon: RiTwitterXLine, href: "https://twitter.com/tiredboy" },
];
