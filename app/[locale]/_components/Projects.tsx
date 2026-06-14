"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Github, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import type { Project } from "@/data/types";
import { content } from "@/data/content";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";

function StatusBadge({ status }: { status: Project["status"] }) {
  const { t } = useLocalized();
  const styles: Record<Project["status"], string> = {
    live: "bg-success/15 text-success",
    completed: "bg-primary/15 text-primary",
    inProgress: "bg-warning/15 text-warning",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {t(content.status[status])}
    </span>
  );
}

function Cover({ project, className = "" }: { project: Project; className?: string }) {
  const { t } = useLocalized();
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={t(project.title)}
        fill
        className={`object-cover ${className}`}
      />
    );
  }
  // Branded gradient fallback (Tehranspeaker dashboard has no public screenshot)
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} ${className}`}>
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center text-white/95">
          <Sparkles className="mx-auto mb-2 h-8 w-8" />
          <p className="px-6 text-lg font-bold leading-tight">{t(project.title)}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, tl, isRtl } = useLocalized();
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative px-5 py-24 md:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1 text-sm font-medium text-primary">
            {t(content.projects.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {t(content.projects.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            {t(content.projects.subtitle)}
          </p>
        </motion.div>

        {/* Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-text-inverse shadow-glow"
                  : "glass text-text-secondary hover:text-text-primary"
              }`}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelected(project)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                {/* Cover */}
                <div className="relative h-48 overflow-hidden">
                  <Cover project={project} className="transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    {project.featured && (
                      <span className="rounded-full bg-secondary/90 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        {t(content.projects.featured)}
                      </span>
                    )}
                  </div>
                  <div className="absolute right-3 top-3">
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-text-primary transition-colors group-hover:text-primary">
                      {t(project.title)}
                    </h3>
                    <span className="text-xs text-text-tertiary">{project.year}</span>
                  </div>
                  <p className="mb-4 line-clamp-2 text-sm text-text-tertiary">{t(project.tagline)}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-accent">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                      {t(content.projects.explore)}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Source" className="text-text-tertiary transition-colors hover:text-text-primary">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo" className="text-text-tertiary transition-colors hover:text-accent">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-lg text-text-secondary">{t(content.projects.ctaQuestion)}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 font-semibold text-text-inverse shadow-glow transition-transform hover:scale-[1.03]"
          >
            {t(content.projects.ctaButton)}
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl glass"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass text-text-secondary transition-colors hover:text-error"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative h-52 overflow-hidden rounded-t-3xl sm:h-64">
                <Cover project={selected} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{t(selected.title)}</h3>
                    <p className="text-sm text-text-secondary">{t(selected.tagline)}</p>
                  </div>
                  <StatusBadge status={selected.status} />
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-relaxed text-text-secondary">{t(selected.description)}</p>

                {/* Highlights */}
                <div className="mt-7">
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-text-primary">
                    <Sparkles className="h-4 w-4 text-secondary" />
                    {t(content.projects.keyFeatures)}
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {tl(selected.highlights).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-xl bg-surface-elevated px-3 py-2 text-sm text-text-secondary">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-7">
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-text-primary">
                    <Code2 className="h-4 w-4 text-accent" />
                    {t(content.projects.techStack)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="rounded-full glass px-3 py-1.5 text-sm text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-text-inverse transition-transform hover:scale-[1.03]">
                      <Github className="h-4 w-4" />
                      {t(content.projects.sourceCode)}
                    </a>
                  )}
                  {selected.demo && (
                    <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold text-text-primary transition-colors hover:text-accent">
                      <ExternalLink className="h-4 w-4" />
                      {t(content.projects.liveDemo)}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
