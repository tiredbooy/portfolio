import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { RiUser3Line } from "react-icons/ri";
import SubmitButton from "./SubmitButton";
import { sendMail } from "../_lib/action";

function ContactForm() {
  return (
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
            <h3 className="text-2xl font-bold text-text-primary">
              Send Message
            </h3>
          </div>

          <form name="contact" method="POST" netlify className="space-y-6">
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
                className="w-full px-4 py-4 transition-all duration-300 border resize-none glass-effect rounded-xl border-border focus:border-primary focus:outline-none text-text-primary placeholder-text-tertiary"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <SubmitButton pendingLabel="Sending...">
              <Send className="w-5 h-5" />
              Send Message
            </SubmitButton>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactForm;
