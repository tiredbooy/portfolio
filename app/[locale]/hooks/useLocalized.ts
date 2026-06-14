"use client";

import { useLocale } from "next-intl";
import type { Locale, Localized, LocalizedList } from "@/data/types";

/**
 * Tiny helper for reading bilingual values out of the centralized `data/`
 * modules. Everything content-related lives in one place; components just call
 * `t()` / `tl()` to render it in the active language.
 */
export function useLocalized() {
  const raw = useLocale();
  const locale: Locale = raw === "fa" ? "fa" : "en";
  const isRtl = locale === "fa";

  return {
    locale,
    isRtl,
    dir: isRtl ? ("rtl" as const) : ("ltr" as const),
    t: (value: Localized) => value[locale] ?? value.en,
    tl: (value: LocalizedList) => value[locale] ?? value.en,
  };
}
