import Allmax from "@/public/allmaxsport.png";
import PizzaExpress from "@/public/pizzaexpress.png";
import StorePicture from "@/public/store.png";
import WildOasisWebsite from "@/public/wild-oasis-website.png";
import WildOasis from "@/public/wildoasis.png";
import type { Project, ProjectCategory } from "./types";

export const projectCategories: { id: "all" | ProjectCategory; label: { en: string; fa: string } }[] = [
  { id: "all", label: { en: "All", fa: "همه" } },
  { id: "fullstack", label: { en: "Full-Stack", fa: "فول‌استک" } },
  { id: "webApp", label: { en: "Web Apps", fa: "وب‌اپ" } },
  { id: "desktop", label: { en: "Desktop", fa: "دسکتاپ" } },
  { id: "ecommerce", label: { en: "E-commerce", fa: "فروشگاهی" } },
  { id: "foodBeverage", label: { en: "Food & Drink", fa: "غذا و نوشیدنی" } },
];

export const projects: Project[] = [
  {
    id: "tehranspeaker",
    title: { en: "Tehranspeaker Dashboard", fa: "داشبورد تهران‌اسپیکر" },
    tagline: {
      en: "A Go + React operations platform for an audio store",
      fa: "پلتفرم عملیاتی Go + React برای فروشگاه تجهیزات صوتی",
    },
    description: {
      en: "An internal operations platform I'm building right now for an audio-equipment store. A Go (Gin) backend mounts ~15 independent, toggleable tools behind a single token-auth boundary, backed by MongoDB + GridFS and a Postgres catalog. The React + Vite + TypeScript dashboard ships catalog management, live SSE notifications, and a Tools suite — image/audio studios, an SEO workbench, a QR/short-link generator, and an AI sales assistant with a permanent answer cache. The standout is the Audio Lab: a Web Audio in-store instrument with a 10-band EQ, 8D/3D spatial effects, generated test signals, and real device-capability detection for demoing speakers on the shop floor.",
      fa: "پلتفرم عملیاتی داخلی که همین حالا برای یک فروشگاه تجهیزات صوتی می‌سازم. یک بک‌اند Go (Gin) حدود ۱۵ ابزار مستقل و قابل‌فعال‌سازی را پشت یک لایه احراز هویت توکنی سوار می‌کند، با MongoDB + GridFS و کاتالوگ Postgres. داشبورد React + Vite + TypeScript مدیریت کاتالوگ، اعلان‌های زنده SSE و مجموعه ابزارها را ارائه می‌دهد — استودیوی تصویر/صدا، میز کار سئو، تولید QR و لینک کوتاه و دستیار فروش هوش مصنوعی با کش دائمی پاسخ. ستاره کار، آزمایشگاه صداست: یک ابزار Web Audio درون‌فروشگاهی با اکولایزر ۱۰ باند، افکت‌های فضایی 8D/3D، سیگنال‌های تست تولیدی و تشخیص واقعی توان دستگاه برای دمو اسپیکرها در فروشگاه.",
    },
    image: null,
    accent: "from-cyan-500 via-blue-500 to-violet-600",
    category: "fullstack",
    status: "inProgress",
    year: "2026",
    featured: true,
    highlights: {
      en: [
        "Go (Gin) microservice backend",
        "~15 modular, toggleable tools",
        "Web Audio in-store Audio Lab",
        "Live SSE notifications",
        "AI assistant with permanent cache",
        "Token-auth security boundary",
      ],
      fa: [
        "بک‌اند میکروسرویس Go (Gin)",
        "حدود ۱۵ ابزار ماژولار",
        "آزمایشگاه صدای Web Audio",
        "اعلان‌های زنده SSE",
        "دستیار AI با کش دائمی",
        "لایه امنیتی احراز توکنی",
      ],
    },
    tags: [
      "Go",
      "Gin",
      "React",
      "TypeScript",
      "Vite",
      "MongoDB",
      "PostgreSQL",
      "TanStack Query",
      "Web Audio API",
      "Docker",
    ],
  },
  {
    id: "gymAutomation",
    title: { en: "Gym Automation Desktop App", fa: "اپ دسکتاپ مدیریت باشگاه" },
    tagline: {
      en: "Hardware-integrated gym management on the desktop",
      fa: "مدیریت باشگاه با یکپارچه‌سازی سخت‌افزار روی دسکتاپ",
    },
    description: {
      en: "A desktop app that runs the floor of a gym end to end. It talks directly to fingerprint scanners and access hardware for instant check-ins, tracks members and equipment in real time, and automates billing. Built with Electron and React, with Redux and React Query keeping a busy UI fast, and a Django backend behind the API.",
      fa: "اپ دسکتاپی که کل کار یک باشگاه را از ابتدا تا انتها مدیریت می‌کند. مستقیماً با اسکنر اثر انگشت و سخت‌افزار کنترل تردد صحبت می‌کند، اعضا و تجهیزات را لحظه‌ای ردیابی و صورت‌حساب را خودکار می‌کند. ساخته‌شده با Electron و React، با Redux و React Query برای سرعت رابط و بک‌اند Django پشت API.",
    },
    image: StorePicture,
    accent: "from-amber-500 via-orange-500 to-rose-500",
    category: "desktop",
    status: "completed",
    year: "2025",
    featured: true,
    highlights: {
      en: ["Hardware integration", "Sub-50ms scan handling", "Real-time monitoring", "Automated billing"],
      fa: ["یکپارچه‌سازی سخت‌افزار", "پردازش اسکن زیر ۵۰ms", "نظارت لحظه‌ای", "صورت‌حساب خودکار"],
    },
    tags: ["Electron.js", "React", "Redux", "React Query", "Django", "Tailwind CSS"],
    github: "https://github.com/tiredbooy",
  },
  {
    id: "wildOasisManagement",
    title: { en: "Wild Oasis Management", fa: "سیستم مدیریت رزرو کابین" },
    tagline: {
      en: "An operations dashboard for a cabin-rental business",
      fa: "داشبورد عملیاتی برای کسب‌وکار اجاره کابین",
    },
    description: {
      en: "A management dashboard for cabin rentals: bookings, guest profiles, payments, and analytics with clean data visualizations. Real-time availability and an interface built so staff can actually move quickly.",
      fa: "داشبورد مدیریت اجاره کابین: رزروها، پروفایل مهمانان، پرداخت‌ها و تحلیل داده با نمودارهای تمیز. در دسترس بودن لحظه‌ای و رابطی که کارکنان واقعاً می‌توانند با آن سریع کار کنند.",
    },
    image: WildOasis,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    category: "webApp",
    status: "live",
    year: "2025",
    featured: true,
    highlights: {
      en: ["Booking management", "Guest analytics", "Payment integration", "Real-time updates"],
      fa: ["مدیریت رزرو", "تحلیل مهمانان", "یکپارچه‌سازی پرداخت", "به‌روزرسانی لحظه‌ای"],
    },
    tags: ["React", "React Query", "Redux", "Supabase"],
    github: "https://github.com/tiredbooy/Wild-Oasis",
    demo: "http://wild-oasis-mangment.netlify.app",
  },
  {
    id: "wildOasisWebsite",
    title: { en: "Wild Oasis Website", fa: "وبسایت رزرو کابین" },
    tagline: {
      en: "The guest-facing booking site, server-rendered",
      fa: "سایت رزرو سمت مهمان، با رندر سمت سرور",
    },
    description: {
      en: "The customer side of Wild Oasis: a fast, server-rendered Next.js site where guests browse cabins, sign in, and manage their reservations. Auth.js handles sessions; Supabase backs the data.",
      fa: "سمت مشتری وایلد اوسیس: سایت سریع Next.js با رندر سمت سرور که مهمانان کابین‌ها را می‌بینند، وارد می‌شوند و رزروهای خود را مدیریت می‌کنند. Auth.js نشست‌ها را مدیریت و Supabase داده‌ها را تأمین می‌کند.",
    },
    image: WildOasisWebsite,
    accent: "from-violet-500 via-purple-500 to-fuchsia-500",
    category: "webApp",
    status: "live",
    year: "2025",
    featured: false,
    highlights: {
      en: ["Server-side rendering", "Booking management", "Secure auth"],
      fa: ["رندر سمت سرور", "مدیریت رزرو", "احراز هویت امن"],
    },
    tags: ["Next.js", "React", "Auth.js", "Supabase"],
    github: "https://github.com/tiredbooy/the-wild-oasis-website",
    demo: "https://the-wild-oasis-website-iota-dusky.vercel.app/",
  },
  {
    id: "allmaxsport",
    title: { en: "Allmaxsport E-commerce", fa: "فروشگاه آنلاین آل‌مکس" },
    tagline: {
      en: "A live storefront for fitness equipment",
      fa: "فروشگاه آنلاین زنده برای تجهیزات ورزشی",
    },
    description: {
      en: "A production e-commerce store for fitness gear, built with a team. I worked the frontend — advanced product filtering, search, reviews, and a responsive storefront — wired into a Django + PostgreSQL backend. It's live and selling.",
      fa: "فروشگاه آنلاین واقعی برای تجهیزات ورزشی که با یک تیم ساختیم. من روی فرانت‌اند کار کردم — فیلترینگ پیشرفته محصول، جستجو، نظرات و فروشگاهی ریسپانسیو — متصل به بک‌اند Django + PostgreSQL. زنده است و فروش دارد.",
    },
    image: Allmax,
    accent: "from-blue-500 via-indigo-500 to-purple-500",
    category: "ecommerce",
    status: "live",
    year: "2025",
    featured: false,
    highlights: {
      en: ["Team collaboration", "Product catalog", "Payment processing", "Inventory management"],
      fa: ["کار تیمی", "کاتالوگ محصول", "پردازش پرداخت", "مدیریت موجودی"],
    },
    tags: ["React", "Django", "Tailwind CSS", "PostgreSQL"],
    demo: "https://allmaxsport.com/",
  },
  {
    id: "pizzaExpress",
    title: { en: "Pizza Express", fa: "پیتزا اکسپرس" },
    tagline: {
      en: "A snappy pizza-ordering app with a delivery map",
      fa: "اپ سفارش پیتزای سریع با نقشه تحویل",
    },
    description: {
      en: "A lean, fast pizza-ordering app. A location-aware map estimates delivery distance in real time, and the cart-to-checkout flow stays out of the way. React and Tailwind, kept deliberately lightweight.",
      fa: "اپ سفارش پیتزای سبک و سریع. نقشه مبتنی بر موقعیت، فاصله تحویل را لحظه‌ای تخمین می‌زند و مسیر سبد تا پرداخت ساده و روان است. React و Tailwind، عمداً سبک نگه داشته شده.",
    },
    image: PizzaExpress,
    accent: "from-red-500 via-orange-500 to-amber-500",
    category: "foodBeverage",
    status: "live",
    year: "2025",
    featured: false,
    highlights: {
      en: ["Location-based delivery map", "Real-time distance", "Fast checkout", "Lightweight"],
      fa: ["نقشه تحویل مبتنی بر موقعیت", "تخمین فاصله لحظه‌ای", "پرداخت سریع", "سبک و سریع"],
    },
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/tiredbooy/pizza-express",
    demo: "https://tiredbooy.github.io/pizza-express",
  },
];
