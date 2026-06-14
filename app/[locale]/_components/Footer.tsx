"use client";

import { FC } from "react";
import { socialLinks, profile } from "@/data/profile";
import { content } from "@/data/content";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";

const Footer: FC = () => {
  const { t } = useLocalized();
  const year = "2026";

  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-start">
          <p className="font-bold text-text-primary">{t(profile.name)}</p>
          <p className="mt-0.5 text-sm text-text-tertiary">{t(content.footer.built)}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="grid h-9 w-9 place-items-center rounded-full glass text-text-tertiary transition-colors hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-text-tertiary">© {year} {t(profile.name)}</p>
      </div>
    </footer>
  );
};

export default Footer;
