function ResumeExperience() {
  const experiences = [
    {
      title: "توسعه‌دهنده فرانت‌اند",
      titleEn: "Frontend Developer",
      company: "پروژه تیمی - سیستم مدیریت باشگاه",
      companyEn: "Freelance - Gym Management System",
      duration: "۱۴۰۳ - ۱۴۰۴",
      type: "دورکاری",
      responsibilities: [
        "طراحی و توسعه اپلیکیشن دسکتاپ با Electron.js و React",
        "پیاده‌سازی یکپارچه‌سازی سخت‌افزاری برای سیستم‌های کنترل تردد",
        "مدیریت state با Redux و React Query برای عملکرد بهینه",
        "همکاری با توسعه‌دهنده بک‌اند برای API integration",
        "طراحی رابط کاربری کاربرپسند با Tailwind CSS",
      ],
      achievements: [
        "کنترل سرهت اسکن اثرانگشت در کمتر از  50 میلی ثانیه",
        "پیاده‌سازی سیستم real-time monitoring",
      ],
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      titleEn: "Frontend Developer",
      company: "پروژه تیمی - Allmaxsport",
      companyEn: "Team Project - Allmaxsport E-commerce",
      duration: "۱۴۰۴",
      type: "دورکاری",
      responsibilities: [
        "توسعه رابط کاربری فروشگاه آنلاین با React و Tailwind CSS",
        "پیاده‌سازی فیلترینگ پیشرفته محصولات و سیستم جستجو",
        "همکاری در تیم برای یکپارچه‌سازی فرانت‌اند با Django backend",
        "بهینه‌سازی عملکرد و responsive design",
      ],
      achievements: [
        "پلتفرم به صورت live و در حال استفاده",
        "تجربه کار تیمی و همکاری با بک‌اند",
      ],
    },
  ];

  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h3 className="text-xl font-bold text-foreground mb-6">تجربه کاری</h3>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pr-6 border-r-2 border-border">
              {/* Timeline Dot */}
              <div className="absolute right-[-5px] top-1 w-2 h-2 rounded-full bg-primary"></div>

              {/* Job Header */}
              <div className="mb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-subtle" dir="ltr">
                      {exp.titleEn}
                    </p>
                  </div>
                  <span className="text-sm text-muted">{exp.duration}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <span className="text-xs px-2 py-0.5 bg-surface border border-border rounded-full text-subtle">
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs text-subtle mt-1" dir="ltr">
                  {exp.companyEn}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-3">
                <p className="text-sm font-semibold text-foreground mb-2">
                  مسئولیت‌ها:
                </p>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    دستاورد‌ها:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-success/10 text-success border border-success/20 rounded"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeExperience;
