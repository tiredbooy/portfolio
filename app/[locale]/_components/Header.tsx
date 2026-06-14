"use client";

import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { Link as IntlLink } from "@/i18n/navigation";
import { navItems } from "@/data/navigation";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const sectionIds = navItems.filter((n) => !n.route).map((n) => n.href.slice(1));

const Header: FC = () => {
  const { t } = useLocalized();
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-5"
    >
      <nav
        className={`flex items-center gap-1 rounded-full glass px-2 py-1.5 transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        {/* Brand */}
        <IntlLink
          href="/"
          className="hidden sm:flex items-center gap-2 pl-3 pr-2 select-none"
        >
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary text-text-inverse text-sm font-bold">
            M
          </span>
        </IntlLink>

        <div className="hidden sm:block w-px h-6 bg-border mx-1" />

        {/* Nav links */}
        <ul className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = !item.route && active === item.href.slice(1);
            const inner = (
              <span className="relative z-10 flex items-center gap-1.5">
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{t(item.label)}</span>
              </span>
            );
            const className = `relative flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? "text-text-inverse"
                : "text-text-secondary hover:text-text-primary"
            }`;

            return (
              <li key={item.key}>
                {item.route ? (
                  <IntlLink href={item.href} className={className}>
                    {inner}
                  </IntlLink>
                ) : (
                  <a href={item.href} className={className}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {inner}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="w-px h-6 bg-border mx-1" />

        {/* Controls */}
        <div className="flex items-center">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
