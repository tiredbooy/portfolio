"use client";

import { motion } from "framer-motion";
import { Mail, Send, User, Check, AlertCircle } from "lucide-react";
import { FC, useState } from "react";
import emailjs from "@emailjs/browser";
import { content } from "@/data/content";
import { useLocalized } from "@/app/[locale]/hooks/useLocalized";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "");

const ContactForm: FC = () => {
  const { t } = useLocalized();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }
      );
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-surface/50 px-4 py-3.5 text-text-primary placeholder-text-tertiary transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl glass p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-bl from-primary/15 to-transparent blur-2xl" />

      <div className="relative z-10">
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-text-inverse">
            <Send className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-text-primary">{t(content.contact.formTitle)}</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-secondary">{t(content.contact.name)}</label>
              <div className="relative">
                <User className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
                <input name="name" required disabled={isSubmitting} placeholder={t(content.contact.namePlaceholder)} className={`${inputCls} ps-10`} />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-secondary">{t(content.contact.emailLabel)}</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
                <input type="email" name="email" required disabled={isSubmitting} placeholder={t(content.contact.emailPlaceholder)} className={`${inputCls} ps-10`} dir="ltr" />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-secondary">{t(content.contact.subject)}</label>
            <input name="subject" required disabled={isSubmitting} placeholder={t(content.contact.subjectPlaceholder)} className={inputCls} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-secondary">{t(content.contact.message)}</label>
            <textarea name="message" required maxLength={1000} rows={5} disabled={isSubmitting} placeholder={t(content.contact.messagePlaceholder)} className={`${inputCls} resize-none`} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 font-semibold transition-all duration-300 ${
              isSubmitting
                ? "cursor-not-allowed bg-surface-elevated text-text-tertiary"
                : "bg-gradient-to-r from-primary to-secondary text-text-inverse shadow-glow hover:scale-[1.01]"
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-text-tertiary border-t-transparent" />
                {t(content.contact.sending)}
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                {t(content.contact.send)}
              </>
            )}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-xl bg-success/15 px-4 py-3 text-sm text-success">
              <Check className="h-4 w-4 shrink-0" />
              {t(content.contact.success)}
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl bg-error/15 px-4 py-3 text-sm text-error">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {t(content.contact.error)}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
