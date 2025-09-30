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
      className="sticky z-50 mx-auto top-4 w-fit"
    >
      <nav className="px-8 py-4 rounded-2xl shadow-purple-glow glass-effect">
        <div className="flex space-x-6 md:space-x-8">
          {navItems?.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
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
};

export default Header;
