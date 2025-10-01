"use client";

import { motion } from "framer-motion";
import { FaHome, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { FC } from "react";

type Nav = {
  icon: React.ElementType;
  label: string;
  href: string;
};

const navItems: Nav[] = [
  { icon: FaHome, label: "Home", href: "#hero" },
  { icon: FaCode, label: "Skills", href: "#skills" },
  { icon: FaBriefcase, label: "Projects", href: "#projects" },
  { icon: FaEnvelope, label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50  md:mx-auto w-[65%] sm:w-1/2 md:w-fit bottom-2 left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto"
    >
      <nav className="px-8 py-4 rounded-full shadow-purple-glow bg-gradient-to-bl from-white/10 via-surface/20 to-background/20 backdrop-blur-xl md:px-8 md:py-4 md:rounded-2xl">
        <div className="flex flex-row items-center justify-center space-x-5 sm:space-x-10 md:space-x-8">
          {navItems?.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex flex-col items-center cursor-pointer group"
            >
              <Link
                href={item.href}
                className="flex flex-row items-center gap-2 transition-colors duration-300 text-secondary hover:text-secondary-hover md:gap-3"
              >
                <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                <span className="hidden font-medium md:block">
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
