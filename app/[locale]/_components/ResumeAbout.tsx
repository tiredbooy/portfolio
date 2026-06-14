import { resumeAbout } from "@/data/resume";

const dotColors = ["bg-success", "bg-primary", "bg-secondary"];

function ResumeAbout() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-foreground mb-4">درباره من</h3>

        <div className="space-y-4">
          {resumeAbout.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-muted leading-relaxed">
              {p.fa}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            {resumeAbout.badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className={`w-1.5 h-1.5 rounded-full ${dotColors[i % dotColors.length]}`} />
                <span className="text-muted">{badge.fa}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeAbout;
