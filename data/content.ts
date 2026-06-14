import type { Localized } from "./types";

/**
 * Section headings, eyebrows and recurring UI strings — all in one place so the
 * site reads the same way it's written.
 */
export const content = {
  nav: {
    home: { en: "Home", fa: "خانه" },
    skills: { en: "Skills", fa: "مهارت‌ها" },
    projects: { en: "Work", fa: "نمونه‌کار" },
    contact: { en: "Contact", fa: "تماس" },
    resume: { en: "Résumé", fa: "رزومه" },
  } as Record<string, Localized>,

  hero: {
    badge: { en: "Open to work", fa: "آماده همکاری" } as Localized,
    viewWork: { en: "View my work", fa: "نمونه‌کارها" } as Localized,
    resume: { en: "Résumé", fa: "رزومه" } as Localized,
    scroll: { en: "Scroll", fa: "اسکرول" } as Localized,
  },

  skills: {
    eyebrow: { en: "What I work with", fa: "ابزارهای کاری من" } as Localized,
    title: { en: "Skills & Stack", fa: "مهارت‌ها و تکنولوژی‌ها" } as Localized,
    subtitle: {
      en: "Full-stack, end to end — front-of-house React all the way down to Go services, databases, and infra.",
      fa: "فول‌استک از سر تا ته — از React در جلو تا سرویس‌های Go، دیتابیس و زیرساخت.",
    } as Localized,
  },

  projects: {
    eyebrow: { en: "Selected work", fa: "نمونه‌کارهای منتخب" } as Localized,
    title: { en: "Things I've built", fa: "چیزهایی که ساخته‌ام" } as Localized,
    subtitle: {
      en: "A mix of full-stack platforms, web apps, and desktop software — most of them live and in real use.",
      fa: "ترکیبی از پلتفرم‌های فول‌استک، وب‌اپ‌ها و نرم‌افزار دسکتاپ — بیشترشان زنده و در حال استفاده.",
    } as Localized,
    featured: { en: "Featured", fa: "ویژه" } as Localized,
    keyFeatures: { en: "Highlights", fa: "نکات کلیدی" } as Localized,
    techStack: { en: "Built with", fa: "ساخته‌شده با" } as Localized,
    sourceCode: { en: "Source", fa: "سورس" } as Localized,
    liveDemo: { en: "Live demo", fa: "دمو زنده" } as Localized,
    viewCode: { en: "Code", fa: "کد" } as Localized,
    viewDemo: { en: "Demo", fa: "دمو" } as Localized,
    explore: { en: "View details", fa: "جزئیات" } as Localized,
    ctaQuestion: {
      en: "Got something in mind? Let's see if I can help.",
      fa: "ایده‌ای داری؟ ببینیم می‌توانم کمک کنم.",
    } as Localized,
    ctaButton: { en: "Start a conversation", fa: "شروع گفتگو" } as Localized,
  },

  status: {
    live: { en: "Live", fa: "زنده" } as Localized,
    completed: { en: "Completed", fa: "تکمیل‌شده" } as Localized,
    inProgress: { en: "In progress", fa: "در حال ساخت" } as Localized,
  } as Record<string, Localized>,

  contact: {
    eyebrow: { en: "Get in touch", fa: "در تماس باشیم" } as Localized,
    title: { en: "Let's build something", fa: "بیا چیزی بسازیم" } as Localized,
    subtitle: {
      en: "Have a project, a role, or just a question? Drop me a line — I read everything and reply fast.",
      fa: "پروژه، موقعیت شغلی یا حتی یک سوال داری؟ پیام بده — همه را می‌خوانم و سریع جواب می‌دهم.",
    } as Localized,
    connect: { en: "Find me online", fa: "آنلاین پیدایم کن" } as Localized,
    formTitle: { en: "Send a message", fa: "ارسال پیام" } as Localized,
    name: { en: "Name", fa: "نام" } as Localized,
    namePlaceholder: { en: "Your name", fa: "نام شما" } as Localized,
    emailLabel: { en: "Email", fa: "ایمیل" } as Localized,
    emailPlaceholder: { en: "you@email.com", fa: "you@email.com" } as Localized,
    subject: { en: "Subject", fa: "موضوع" } as Localized,
    subjectPlaceholder: { en: "What's this about?", fa: "درباره چیست؟" } as Localized,
    message: { en: "Message", fa: "پیام" } as Localized,
    messagePlaceholder: { en: "Tell me about it…", fa: "برایم بگو…" } as Localized,
    send: { en: "Send message", fa: "ارسال پیام" } as Localized,
    sending: { en: "Sending…", fa: "در حال ارسال…" } as Localized,
    success: { en: "Sent — thanks! I'll be in touch soon.", fa: "ارسال شد — ممنون! به‌زودی در تماس خواهم بود." } as Localized,
    error: { en: "Something went wrong. Try again or email me directly.", fa: "مشکلی پیش آمد. دوباره تلاش کن یا مستقیم ایمیل بزن." } as Localized,
  },

  footer: {
    built: {
      en: "Built with Next.js, Tailwind & a lot of coffee.",
      fa: "ساخته‌شده با Next.js، Tailwind و کلی قهوه.",
    } as Localized,
  },
};
