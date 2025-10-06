function ResumeAbout() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h3 className="text-xl font-bold text-foreground mb-4">درباره من</h3>

        {/* About Content */}
        <div className="space-y-4">
          <p className="text-base text-muted leading-relaxed">
            توسعه‌دهنده فرانت‌اند با بیش از{" "}
            <span className="text-foreground font-semibold">سه سال تجربه</span>{" "}
            در ساخت وب‌اپلیکیشن‌های مدرن و کاربرپسند. تخصص من در استفاده از{" "}
            <span className="text-primary font-medium">React</span>،{" "}
            <span className="text-primary font-medium">Next.js</span> و{" "}
            <span className="text-primary font-medium">TypeScript</span> برای
            ایجاد رابط‌های کاربری پویا و بهینه است.
          </p>

          <p className="text-base text-muted leading-relaxed">
            در پروژه‌های گذشته، موفق به توسعه{" "}
            <span className="text-foreground font-medium">
              اپلیکیشن دسکتاپ مدیریت باشگاه
            </span>{" "}
            با یکپارچه‌سازی سخت‌افزار،{" "}
            <span className="text-foreground font-medium">
              سیستم مدیریت رزرو کابین
            </span>{" "}
            و{" "}
            <span className="text-foreground font-medium">
              فروشگاه آنلاین تجهیزات ورزشی
            </span>{" "}
            شده‌ام که همگی در حال حاضر به صورت زنده در دسترس هستند.
          </p>

          <p className="text-base text-muted leading-relaxed">
            به عنوان یک فرد خودآموز، توانایی{" "}
            <span className="text-foreground font-medium">
              یادگیری سریع تکنولوژی‌های جدید
            </span>
            ،{" "}
            <span className="text-foreground font-medium">حل مسائل پیچیده</span>{" "}
            و <span className="text-foreground font-medium">کار تیمی</span> را
            دارم. تمرکز من بر نوشتن کد تمیز، قابل نگهداری و ایجاد تجربه کاربری
            روان است.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
              <span className="text-muted">آماده همکاری فوری</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-muted">دورکاری / حضوری</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <span className="text-muted">تمام وقت / پاره وقت</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeAbout;
