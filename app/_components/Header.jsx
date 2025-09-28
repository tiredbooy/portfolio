// ============ HEADER.JS ============
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
      className="sticky z-50 mx-auto top-4 w-fit"
    >
      <nav className="px-8 py-4 rounded-2xl shadow-purple-glow glass-effect">
        <div className="flex space-x-6 md:space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex flex-col items-center cursor-pointer group"
            >
              <Link
                href={item.href}
                className="flex flex-row items-center gap-3 transition-colors duration-300 text-secondary hover:text-secondary-hover"
              >
                <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                <span className="hidden font-medium sm:block">
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
