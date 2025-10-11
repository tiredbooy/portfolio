"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

export default function TranslationProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  const [i18n, setI18n] = useState(null);

  useEffect(() => {
    const i18nInstance = createInstance();

    i18nInstance
      .use(initReactI18next)
      .init({
        lng: locale,
        resources,
        fallbackLng: "en",
        ns: namespaces,
        defaultNS: namespaces[0],
      })
      .then(() => setI18n(i18nInstance));
  }, [locale, namespaces, resources]);

  if (!i18n) return null; // or a loading spinner

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
