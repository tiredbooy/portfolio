"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const next = locale === "fa" ? "en" : "fa";

  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={switchLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 px-2.5 h-9 rounded-full text-sm font-medium text-text-secondary hover:text-primary transition-colors disabled:opacity-50"
    >
      <Languages className="w-4 h-4" />
      <span className="uppercase tracking-wide">{next}</span>
    </button>
  );
}
