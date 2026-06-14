import { experiences } from "@/data/resume";

function ResumeExperience() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-foreground mb-6">تجربه کاری</h3>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pr-6 border-r-2 border-border">
              <div className="absolute right-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />

              <div className="mb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{exp.role.fa}</h4>
                    <p className="text-xs text-subtle" dir="ltr">{exp.role.en}</p>
                  </div>
                  <span className="text-sm text-muted">{exp.duration.fa}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-primary">{exp.company.fa}</p>
                  <span className="text-xs px-2 py-0.5 bg-surface border border-border rounded-full text-subtle">
                    {exp.type.fa}
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm font-semibold text-foreground mb-2">مسئولیت‌ها:</p>
                <ul className="space-y-1.5">
                  {exp.responsibilities.fa.map((resp, idx) => (
                    <li key={idx} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements.fa.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">دستاوردها:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.fa.map((achievement, idx) => (
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
