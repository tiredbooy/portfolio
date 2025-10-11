"use client";
import { motion } from "framer-motion";
import {
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter
} from "lucide-react";
import { FC } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import ContactForm from "./ContactForm";

type ContactInfo = {
  icon: React.ElementType;
  title: string | number;
  value: string | number;
  description: string;
  href?: string;
  color: string;
};

type SocialLink = {
  icon: React.ElementType;
  name: string;
  href?: string;
  color: string;
};

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "mahdykazemyo1i2@gmail",
    description: "Send me an email anytime",
    href: "mailto:mahdykazemyo1i2@gmail",
    color: "text-primary",
  },
  {
    icon: RiWhatsappLine,
    title: "Whatsapp",
    value: "09393591452",
    description: "Send me an Message anytime",
    href: "https://api.whatsapp.com/send/?phone=%2B989393591452&text&type=phone_number&app_absent=0",
    color: "text-primary",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+98 9393591452",
    description: "Call me for urgent inquiries",
    href: "tel:+0989393591452",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "IRAN, Tehran",
    description: "Available for remote work",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "I'll get back to you soon",
    color: "text-success",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/tiredbooy",
    color: "hover:text-text-primary",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/mahdikazemi",
    color: "hover:text-primary",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/mahdikazemi",
    color: "hover:text-accent",
  },
];

const Contact: FC = () => {
  return (
    <section id="contact" className="relative px-6 py-20 overflow-hidden">
      <div className="container relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold text-gradient">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mb-8 text-xl text-text-secondary">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 px-2 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="mx-auto w-fit md:w-full group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-6 p-6 transition-all duration-300 cursor-pointer glass-effect rounded-2xl hover:bg-surface-elevated"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-text-primary">
                          {info.title}
                        </h3>
                        <p className="mb-1 font-medium text-text-secondary">
                          {info.value}
                        </p>
                        <p className="text-sm text-text-tertiary">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-6 p-6 mx-auto glass-effect rounded-2xl">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}
                      >
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-text-primary">
                          {info.title}
                        </h3>
                        <p className="mb-1 font-medium text-text-secondary">
                          {info.value}
                        </p>
                        <p className="text-sm text-text-tertiary">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 glass-effect rounded-2xl"
            >
              <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-text-primary">
                <MessageSquare className="w-5 h-5 text-accent" />
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl glass-effect flex items-center justify-center text-text-tertiary transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="mt-4 text-sm text-text-tertiary">
                Follow me for updates on my latest projects and tech insights
              </p>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 mx-auto border glass-effect rounded-2xl border-success/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                <h3 className="text-lg font-semibold text-success">
                  Available for Work
                </h3>
              </div>
              <p className="mb-2 text-text-secondary">
                Currently accepting new projects and collaborations
              </p>
              <p className="text-sm text-text-tertiary">
                Let&apos;s discuss your ideas and bring them to life!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
