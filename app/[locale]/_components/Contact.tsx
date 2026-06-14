"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { FC } from "react";
import ContactForm from "./ContactForm";
import { contactChannels, contactSocials, profile } from "@/data/profile";
import { content } from "@/data/content";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";

const Contact: FC = () => {
  const { t } = useLocalized();

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8">
      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1 text-sm font-medium text-primary">
            {t(content.contact.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {t(content.contact.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            {t(content.contact.subtitle)}
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {contactChannels.map((info, i) => {
                const inner = (
                  <>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 transition-transform group-hover:scale-110">
                      <info.icon className={`h-5 w-5 ${info.accent}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-text-primary">{t(info.title)}</h3>
                      <p className="truncate text-sm text-text-secondary" dir="ltr">{info.value}</p>
                      <p className="mt-0.5 text-xs text-text-tertiary">{t(info.description)}</p>
                    </div>
                  </>
                );
                const cls = "group flex items-center gap-3 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                    className={i === contactChannels.length - 1 ? "sm:col-span-2" : ""}
                  >
                    {info.href ? (
                      <a href={info.href} className={cls}>{inner}</a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="rounded-2xl glass p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-text-primary">
                <MessageSquare className="h-5 w-5 text-accent" />
                {t(content.contact.connect)}
              </h3>
              <div className="flex gap-3">
                {contactSocials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-xl glass text-text-tertiary transition-all hover:-translate-y-1 hover:text-primary"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-2xl glass border border-success/20 p-5">
              <div className="mb-2 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
                <h3 className="font-semibold text-success">{t(profile.availability.badge)}</h3>
              </div>
              <p className="text-sm text-text-secondary">{t(profile.availability.description)}</p>
              <p className="mt-1 text-sm text-text-tertiary">{t(profile.availability.callToAction)}</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
