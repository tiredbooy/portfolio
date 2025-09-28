"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { RiUser2Line, RiUser3Line, RiUser4Line , RiWhatsappLine } from "react-icons/ri";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mahdykazemyo1i2@gmail",
      description: "Send me an email anytime",
      href: "mailto:mahdykazemyo1i2@gmail",
      color: "text-primary"
    },
    {
      icon: RiWhatsappLine,
      title: "Whatsapp",
      value: "09393591452",
      description: "Send me an Message anytime",
      href: "wa.me/+989393591452",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+98 9393591452",
      description: "Call me for urgent inquiries",
      href: "tel:+0989393591452",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "IRAN, Tehran",
      description: "Available for remote work",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you soon",
      color: "text-success"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/tiredbooy",
      color: "hover:text-text-primary"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      href: "https://linkedin.com/in/mahdikazemi",
      color: "hover:text-primary"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/mahdikazemi",
      color: "hover:text-accent"
    }
  ];

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
            Let's Work Together
          </h2>
          <p className="mx-auto mb-8 text-xl text-text-secondary">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
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
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
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
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}>
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
                <h3 className="text-lg font-semibold text-success">Available for Work</h3>
              </div>
              <p className="mb-2 text-text-secondary">
                Currently accepting new projects and collaborations
              </p>
              <p className="text-sm text-text-tertiary">
                Let's discuss your ideas and bring them to life!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 overflow-hidden glass-effect rounded-3xl">
              {/* Form Background Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-text-primary">Send Message</h3>
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
                        value={formData.name}
                        onChange={handleInputChange}
                        required
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
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
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 transition-all duration-300 border resize-none glass-effect rounded-xl border-border focus:border-primary focus:outline-none text-text-primary placeholder-text-tertiary"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? "bg-surface text-text-tertiary cursor-not-allowed"
                        : "bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white shadow-glow hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 rounded-full border-text-tertiary border-t-transparent animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 border bg-success/20 text-success rounded-xl border-success/20"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 border bg-error/20 text-error rounded-xl border-error/20"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="p-8 mx-auto glass-effect rounded-3xl">
            <h3 className="mb-4 text-2xl font-bold text-text-primary">
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 text-text-secondary">
              I'm here to help bring your ideas to life with modern web technologies and creative solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="px-6 py-3 font-semibold text-white transition-all rounded-full bg-primary hover:bg-primary-hover hover:scale-105 shadow-glow">
                <Calendar className="inline w-5 h-5 mr-2" />
                Schedule a Call
              </button>
              <a
                href="mailto:mahdi.dev@example.com"
                className="px-6 py-3 font-semibold transition-all rounded-full glass-effect hover:bg-surface-elevated hover:scale-105 text-text-primary"
              >
                <Mail className="inline w-5 h-5 mr-2" />
                Quick Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}