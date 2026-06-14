import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

function ResumeProjects() {
  return (
    <div className="w-full px-6 sm:px-8 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-foreground mb-6">پروژه‌ها</h3>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-r-4 border-primary pr-4 hover:border-secondary transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-bold text-foreground">{project.title.fa}</h4>
                  <p className="text-xs text-subtle" dir="ltr">{project.title.en}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted">{project.year}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" aria-label="GitHub">
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" aria-label="Demo">
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-3">{project.tagline.fa}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.highlights.fa.map((highlight, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">
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
