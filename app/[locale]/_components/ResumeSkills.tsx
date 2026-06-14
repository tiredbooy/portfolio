import { skillGroups } from "@/data/skills";

function ResumeSkills() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-foreground mb-6">مهارت‌ها</h3>

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-2 mb-3">
                <group.icon className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-bold text-foreground">{group.title.fa}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full hover:border-primary transition-all duration-200 group"
                    >
                      <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-subtle px-2 py-0.5 bg-background rounded-full border border-border-light">
                        {skill.label.fa}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeSkills;
