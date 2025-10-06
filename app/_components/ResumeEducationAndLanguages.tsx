function ResumeEducationAndLanguages() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">تحصیلات</h3>

          <div className="space-y-6">
            {/* Diploma */}
            <div className="border-r-2 border-border pr-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    دیپلم کامپیوتر
                  </h4>
                  <p className="text-sm text-muted mt-1">دوره متوسطه</p>
                </div>
              </div>
            </div>

            {/* Self-taught Section */}
            <div className="border-r-2 border-primary pr-4">
              <h4 className="text-base font-bold text-foreground mb-3">
                آموزش خودآموز و مستمر
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>
                    دوره‌های تخصصی React و Next.js از پلتفرم‌های معتبر آنلاین
                  </span>
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>
                    مطالعه مستندات رسمی و پروژه‌های عملی برای تسلط بر
                    تکنولوژی‌ها
                  </span>
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>
                    یادگیری مداوم از منابع معتبر مانند MDN، React Docs و GitHub
                  </span>
                </li>
              </ul>

              {/* Learning Platforms */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                  Udemy
                </span>
                <span className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                  Git.ir
                </span>
                <span className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                  Sabzlearn
                </span>
                <span className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                  YouTube
                </span>
                <span className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                  Documentation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">زبان‌ها</h3>

          <div className="space-y-4">
            {/* Persian */}
            <div className="border-r-2 border-primary pr-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-foreground">فارسی</h4>
                <span className="text-xs px-3 py-1 bg-success/10 text-success border border-success/20 rounded-full font-medium">
                  زبان مادری
                </span>
              </div>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-2 flex-1 bg-success rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* English */}
            <div className="border-r-2 border-border pr-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-foreground">English</h4>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium">
                  متوسط - B1
                </span>
              </div>

              {/* Proficiency Bars */}
              <div className="space-y-2 mt-3">
                <div>
                  <div className="flex justify-between text-xs text-muted mb-1">
                    <span>خواندن</span>
                    <span className="text-foreground">متوسط به بالا</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i <= 3 ? "bg-primary" : "bg-border"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-muted mb-1">
                    <span>نوشتن</span>
                    <span className="text-foreground">متوسط</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i <= 2 ? "bg-primary" : "bg-border"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-muted mb-1">
                    <span>مکالمه</span>
                    <span className="text-foreground">متوسط</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i <= 2 ? "bg-primary" : "bg-border"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical English Note */}
              <p className="text-xs text-subtle mt-3 leading-relaxed">
                توانایی خواندن مستندات فنی، کار با منابع انگلیسی و ارتباط کتبی
                در محیط کاری
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeEducationAndLanguages;
