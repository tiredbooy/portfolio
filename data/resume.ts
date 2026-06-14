import type { Experience, Localized, LocalizedList } from "./types";

/**
 * Resume content. The résumé page renders in Persian (RTL), so the Persian
 * fields are what show there — but everything is bilingual so it can flip later.
 */

export const resumeAbout: { paragraphs: Localized[]; badges: Localized[] } = {
  paragraphs: [
    {
      en: "Full-stack developer with 3+ years building modern, user-facing products. I'm strongest on the frontend with React, Next.js and TypeScript, and comfortable across the backend — Go, Node.js, Python/Django — with PostgreSQL, Redis and MongoDB behind them.",
      fa: "توسعه‌دهنده فول‌استک با بیش از سه سال تجربه در ساخت محصولات مدرن و کاربرمحور. قوی‌ترین نقطه‌ام فرانت‌اند با React، Next.js و TypeScript است و در بک‌اند هم راحتم — Go، Node.js، Python/Django — با PostgreSQL، Redis و MongoDB در پشت آن‌ها.",
    },
    {
      en: "I've shipped a hardware-integrated gym management desktop app, a cabin-rental management system, and a live fitness e-commerce store — and I'm currently building a Go + React operations platform for an audio store with ~15 modular tools.",
      fa: "اپ دسکتاپ مدیریت باشگاه با یکپارچه‌سازی سخت‌افزار، سیستم مدیریت رزرو کابین و فروشگاه آنلاین تجهیزات ورزشی را منتشر کرده‌ام — و همین حالا یک پلتفرم عملیاتی Go + React با حدود ۱۵ ابزار ماژولار برای یک فروشگاه صوتی می‌سازم.",
    },
    {
      en: "I'm self-taught and pick up new tech fast. I build alongside AI tools like Claude Code every day, and I care about clean, maintainable code and a smooth experience for whoever uses what I make.",
      fa: "خودآموزم و تکنولوژی‌های جدید را سریع یاد می‌گیرم. هر روز کنار ابزارهای AI مثل Claude Code کار می‌کنم و برایم کد تمیز و قابل‌نگهداری و تجربه روان برای کاربر نهایی مهم است.",
    },
  ],
  badges: [
    { en: "Available now", fa: "آماده همکاری فوری" },
    { en: "Remote / on-site", fa: "دورکاری / حضوری" },
    { en: "Full-time / part-time", fa: "تمام‌وقت / پاره‌وقت" },
  ],
};

export const experiences: Experience[] = [
  {
    role: { en: "Full-Stack Developer", fa: "توسعه‌دهنده فول‌استک" },
    company: { en: "Tehranspeaker — Operations Platform", fa: "تهران‌اسپیکر — پلتفرم عملیاتی" },
    duration: { en: "2026 — Present", fa: "۱۴۰۴ - اکنون" },
    type: { en: "Remote", fa: "دورکاری" },
    responsibilities: {
      en: [
        "Building a Go (Gin) backend that mounts ~15 independent tools behind a single token-auth boundary",
        "Developing the React + Vite + TypeScript dashboard with TanStack Query and live SSE notifications",
        "Designing the in-store Audio Lab on the Web Audio API — EQ, spatial effects, test signals, device detection",
        "Working with MongoDB + GridFS and a PostgreSQL catalog, with cost-aware AI caching",
      ],
      fa: [
        "ساخت بک‌اند Go (Gin) که حدود ۱۵ ابزار مستقل را پشت یک لایه احراز توکنی سوار می‌کند",
        "توسعه داشبورد React + Vite + TypeScript با TanStack Query و اعلان‌های زنده SSE",
        "طراحی آزمایشگاه صدای درون‌فروشگاهی روی Web Audio API — اکولایزر، افکت فضایی، سیگنال تست، تشخیص دستگاه",
        "کار با MongoDB + GridFS و کاتالوگ PostgreSQL، با کش هوشمند و کم‌هزینه AI",
      ],
    },
    achievements: {
      en: ["~15 modular tools in one binary", "Built end to end, frontend + backend"],
      fa: ["حدود ۱۵ ابزار ماژولار در یک باینری", "ساخت کامل، فرانت‌اند + بک‌اند"],
    },
  },
  {
    role: { en: "Frontend Developer", fa: "توسعه‌دهنده فرانت‌اند" },
    company: { en: "Gym Management System (Team)", fa: "سیستم مدیریت باشگاه (تیمی)" },
    duration: { en: "2024 — 2025", fa: "۱۴۰۳ - ۱۴۰۴" },
    type: { en: "Remote", fa: "دورکاری" },
    responsibilities: {
      en: [
        "Designed and built a desktop app with Electron.js and React",
        "Integrated fingerprint scanners and access-control hardware",
        "Managed state with Redux and React Query for a fast, busy UI",
        "Worked with the backend developer on API integration (Django)",
      ],
      fa: [
        "طراحی و توسعه اپلیکیشن دسکتاپ با Electron.js و React",
        "یکپارچه‌سازی اسکنر اثر انگشت و سخت‌افزار کنترل تردد",
        "مدیریت state با Redux و React Query برای رابطی سریع و پرکار",
        "همکاری با توسعه‌دهنده بک‌اند برای یکپارچه‌سازی API (Django)",
      ],
    },
    achievements: {
      en: ["Fingerprint scan handling under 50ms", "Real-time monitoring system"],
      fa: ["پردازش اسکن اثر انگشت زیر ۵۰ میلی‌ثانیه", "سیستم نظارت لحظه‌ای"],
    },
  },
  {
    role: { en: "Frontend Developer", fa: "توسعه‌دهنده فرانت‌اند" },
    company: { en: "Allmaxsport E-commerce (Team)", fa: "فروشگاه آل‌مکس‌اسپرت (تیمی)" },
    duration: { en: "2025", fa: "۱۴۰۴" },
    type: { en: "Remote", fa: "دورکاری" },
    responsibilities: {
      en: [
        "Built the storefront UI with React and Tailwind CSS",
        "Implemented advanced product filtering and search",
        "Integrated the frontend with a Django + PostgreSQL backend",
        "Optimized performance and responsive design",
      ],
      fa: [
        "توسعه رابط فروشگاه با React و Tailwind CSS",
        "پیاده‌سازی فیلترینگ پیشرفته محصولات و جستجو",
        "یکپارچه‌سازی فرانت‌اند با بک‌اند Django + PostgreSQL",
        "بهینه‌سازی عملکرد و طراحی ریسپانسیو",
      ],
    },
    achievements: {
      en: ["Live and in production", "Real team collaboration experience"],
      fa: ["زنده و در حال استفاده", "تجربه واقعی کار تیمی"],
    },
  },
];

export const education = {
  diploma: {
    title: { en: "Computer Diploma", fa: "دیپلم کامپیوتر" },
    subtitle: { en: "Secondary education", fa: "دوره متوسطه" },
  },
  selfTaught: {
    title: { en: "Self-taught & continuous learning", fa: "آموزش خودآموز و مستمر" },
    points: {
      en: [
        "Specialized React, Next.js and Go courses from reputable platforms",
        "Official docs and hands-on projects to really master the tools",
        "Daily learning from MDN, framework docs, GitHub and AI pair-programming",
      ],
      fa: [
        "دوره‌های تخصصی React، Next.js و Go از پلتفرم‌های معتبر",
        "مستندات رسمی و پروژه‌های عملی برای تسلط واقعی بر ابزارها",
        "یادگیری روزانه از MDN، مستندات فریم‌ورک‌ها، GitHub و جفت‌برنامه‌نویسی با AI",
      ],
    } as LocalizedList,
    platforms: ["Udemy", "Sabzlearn", "Documentation", "GitHub", "Claude Code"],
  },
};

export const languages = [
  {
    name: { en: "Persian", fa: "فارسی" },
    level: { en: "Native", fa: "زبان مادری" },
    score: 5,
    native: true,
  },
  {
    name: { en: "English", fa: "English" },
    level: { en: "Intermediate · B1", fa: "متوسط · B1" },
    native: false,
    skills: [
      { label: { en: "Reading", fa: "خواندن" }, score: 3, max: 4 },
      { label: { en: "Writing", fa: "نوشتن" }, score: 2, max: 4 },
      { label: { en: "Speaking", fa: "مکالمه" }, score: 2, max: 4 },
    ],
    note: {
      en: "Comfortable reading technical docs and working with English resources daily.",
      fa: "توانایی خواندن مستندات فنی و کار روزانه با منابع انگلیسی.",
    } as Localized,
  },
];
