"use client";

import { motion } from "framer-motion";
import { Home, Code, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 mx-auto w-fit"
    >
      <nav className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl">
        <div className="flex space-x-6 md:space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center cursor-pointer group relative"
            >
              <Link
                href={item.href}
                className="flex flex-row gap-5 items-center"
              >
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gray-300 group-hover:text-accent transition-colors" />
                <span className="group-hover:text-accent">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
