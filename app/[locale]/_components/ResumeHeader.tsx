import Image from "next/image";
import Profile from "@/public/profile.jpg";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

function ResumeHeader() {
  return (
    <div className="w-full px-6 sm:px-8 py-12 border-b border-divider">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border shadow-purple-glow">
              <Image
                src={Profile}
                fill
                className="object-cover"
                alt="مهدی کاظمی"
                priority
              />
            </div>
          </div>

          {/* Header Info */}
          <div className="flex-1 w-full text-center md:text-right" dir="rtl">
            {/* Name & Title */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                مهدی کاظمی
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                توسعه دهنده فرانت اند
              </h2>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-end gap-3 mb-8">
              <a
                href="mailto:mahdykazemyo1i2@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-primary transition-colors group"
              >
                <span className="text-sm sm:text-base">
                  mahdykazemyo1i2@gmail.com
                </span>
                <MdEmail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="tel:+989393591452"
                className="flex items-center gap-3 text-muted hover:text-primary transition-colors group"
              >
                <span className="text-sm sm:text-base" dir="ltr">
                  +98 939 3591 452
                </span>
                <MdPhone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-end">
              <a
                href="https://www.linkedin.com/in/tiredboy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary hover:bg-surface-elevated transition-all hover:shadow-glow group"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5 text-subtle group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/tiredbooy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary hover:bg-surface-elevated transition-all hover:shadow-glow group"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5 text-subtle group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://tiredboy.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary hover:bg-surface-elevated transition-all hover:shadow-glow group"
                aria-label="Personal Website"
              >
                <IoGlobeOutline className="w-5 h-5 text-subtle group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
