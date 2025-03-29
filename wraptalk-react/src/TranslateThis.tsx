import React, { ReactNode } from "react";
import { useLanguage } from "./index";

type TranslationsType = Record<string, Record<string, string>>;

type TranslateThisProps = {
  children?: ReactNode;
  tid: string;
};

export function TranslateThis({ children, tid }: TranslateThisProps) {
  const { language, translations } = useLanguage();
  console.log("translations", translations);

  if (!tid) {
    console.error("TranslateThis: No translation ID provided.");
    return <span>{children}</span>;
  }

  if (!translations || typeof translations !== "object") {
    console.error(
      "TranslateThis: The translation file provided via props in the provider is missing or invalid."
    );
    return <span>{children}</span>;
  }

  const typedTranslations = translations as TranslationsType;

  if (!typedTranslations[language]) {
    console.error(
      `TranslateThis: No translations found for language "${language}".`
    );
    return <span>{children}</span>;
  }

  const translatedText = typedTranslations[language][tid];

  if (!translatedText) {
    console.warn(
      `TranslateThis: No translation found for ID "${tid}" in language "${language}".`
    );
    return <span>{children}</span>;
  }

  return <span>{translatedText}</span>;
}
