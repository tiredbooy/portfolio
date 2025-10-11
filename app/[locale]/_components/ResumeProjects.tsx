import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  titleFa: string;
  description: string;
  year: string;
  tags: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gym Automation Desktop App",
    titleFa: "اپلیکیشن دسکتاپ مدیریت باشگاه",
    description:
      "اپلیکیشن جامع مدیریت باشگاه با یکپارچه‌سازی سخت‌افزار، شامل ردیابی اعضا، نظارت بر تجهیزات و صورت‌حساب خودکار",
    year: "۱۴۰۴",
    tags: ["Electron.js", "React", "Redux", "Django"],
    highlights: [
      "یکپارچه‌سازی سخت‌افزار",
      "نظارت لحظه‌ای",
      "صورت‌حساب خودکار",
      "مدیریت اعضا",
    ],
    github: "https://github.com/tiredbooy",
  },
  {
    id: 2,
    title: "Wild Oasis Management",
    titleFa: "سیستم مدیریت رزرو کابین",
    description:
      "داشبورد مدرن برای مدیریت اجاره کابین با سیستم رزرو، مدیریت مهمانان و تحلیل داده‌ها",
    year: "۱۴۰۴",
    tags: ["React", "React-Query", "Redux", "Supabase"],
    highlights: [
      "مدیریت رزرو",
      "تحلیل مهمانان",
      "یکپارچه‌سازی پرداخت",
      "به‌روزرسانی لحظه‌ای",
    ],
    github: "https://github.com/tiredbooy/Wild-Oasis",
    demo: "http://wild-oasis-mangment.netlify.app",
  },
  {
    id: 3,
    title: "Wild Oasis Client Website",
    titleFa: "وبسایت رزرو آنلاین کابین",
    description:
      "وبسایت مدرن سمت سرور برای رزرو کابین با مدیریت حساب کاربری و سیستم احراز هویت",
    year: "۱۴۰۴",
    tags: ["Next.js", "React", "Auth.js", "Supabase"],
    highlights: ["رندر سمت سرور", "مدیریت رزرو", "احراز هویت امن"],
    github: "https://github.com/tiredbooy/the-wild-oasis-website",
    demo: "https://the-wild-oasis-website-iota-dusky.vercel.app/",
  },
  {
    id: 4,
    title: "Allmaxsport E-commerce",
    titleFa: "فروشگاه آنلاین تجهیزات ورزشی",
    description:
      "پلتفرم فروشگاهی کامل برای تجهیزات باشگاهی با فیلترینگ پیشرفته و پردازش پرداخت امن",
    year: "۱۴۰۴",
    tags: ["React", "Django", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "کار تیمی",
      "کاتالوگ محصول",
      "پردازش پرداخت",
      "مدیریت موجودی",
    ],
    demo: "https://allmaxsport.com/",
  },
  {
    id: 5,
    title: "Pizza Express",
    titleFa: "سیستم سفارش پیتزا",
    description:
      "اپلیکیشن سفارش پیتزا با نقشه مبتنی بر موقعیت مکانی و تخمین فاصله لحظه‌ای",
    year: "۱۴۰۴",
    tags: ["React", "Tailwind CSS"],
    highlights: [
      "نقشه تحویل مبتنی بر موقعیت",
      "تخمین فاصله لحظه‌ای",
      "رابط کاربری ریسپانسیو",
    ],
    github: "https://github.com/tiredbooy/pizza-express",
    demo: "https://tiredbooy.github.io/pizza-express",
  },
];

function ResumeProjects() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h3 className="text-xl font-bold text-foreground mb-6">پروژه‌ها</h3>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-r-4 border-primary pr-4 hover:border-secondary transition-colors duration-300"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    {project.titleFa}
                  </h4>
                  <p className="text-xs text-subtle" dir="ltr">
                    {project.title}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted">{project.year}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-subtle hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-subtle hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeProjects;