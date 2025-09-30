"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FC, useState } from "react";
import { RiUser3Line } from "react-icons/ri";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);

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

      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative p-8 overflow-hidden glass-effect rounded-3xl">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <Send className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-text-primary">
              Send Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-text-secondary">
                Full Name
              </label>
              <div className="relative">
                <RiUser3Line className="absolute z-10 w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-text-tertiary" />
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full py-4 pl-12 pr-4 transition-all duration-300 border glass-effect rounded-xl border-border focus:border-primary focus:outline-none text-text-primary placeholder-text-tertiary"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-text-secondary">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute z-10 w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-text-tertiary" />
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full py-4 pl-12 pr-4 transition-all duration-300 border glass-effect rounded-xl border-border focus:border-primary focus:outline-none text-text-primary placeholder-text-tertiary"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-text-secondary">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-4 transition-all duration-300 border glass-effect rounded-xl border-border focus:border-primary focus:outline-none text-text-primary placeholder-text-tertiary"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-text-secondary">
                Message
              </label>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={5}
                disabled={isSubmitting}
                className="w-full px-4 py-4 transition-all duration-300 border resize-none glass-effect rounded-xl border-border focus:border-primary focus:outline-none text-text-primary placeholder-text-tertiary"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                isSubmitting
                  ? "bg-surface text-text-tertiary cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white shadow-glow"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-text-tertiary border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-xl bg-success/20 text-success">
                Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-xl bg-error/20 text-error">
                Failed to send message.
              </div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
