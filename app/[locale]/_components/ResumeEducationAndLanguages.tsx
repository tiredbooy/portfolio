import { education, languages } from "@/data/resume";

function ResumeEducationAndLanguages() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">تحصیلات</h3>

          <div className="space-y-6">
            <div className="border-r-2 border-border pr-4">
              <h4 className="text-base font-bold text-foreground">{education.diploma.title.fa}</h4>
              <p className="text-sm text-muted mt-1">{education.diploma.subtitle.fa}</p>
            </div>

            <div className="border-r-2 border-primary pr-4">
              <h4 className="text-base font-bold text-foreground mb-3">{education.selfTaught.title.fa}</h4>
              <ul className="space-y-2">
                {education.selfTaught.points.fa.map((point, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {education.selfTaught.platforms.map((p) => (
                  <span key={p} className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">زبان‌ها</h3>

          <div className="space-y-4">
            {languages.map((lang) => (
              <div
                key={lang.name.en}
                className={`border-r-2 pr-4 ${lang.native ? "border-primary" : "border-border"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-foreground">
                    {lang.native ? lang.name.fa : lang.name.en}
                  </h4>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium border ${
                      lang.native
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-primary/10 text-primary border-primary/20"
                    }`}
                  >
                    {lang.level.fa}
                  </span>
                </div>

                {lang.native ? (
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-2 flex-1 bg-success rounded-full" />
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="space-y-2 mt-3">
                      {lang.skills?.map((s) => (
                        <div key={s.label.en}>
                          <div className="flex justify-between text-xs text-muted mb-1">
                            <span>{s.label.fa}</span>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: s.max }).map((_, i) => (
                              <div
                                key={i}
                                className={`h-2 flex-1 rounded-full ${i < s.score ? "bg-primary" : "bg-border"}`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {lang.note && (
                      <p className="text-xs text-subtle mt-3 leading-relaxed">{lang.note.fa}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeEducationAndLanguages;
