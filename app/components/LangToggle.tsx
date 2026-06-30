"use client";

import { useLang } from "../lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      aria-label="Switch language"
      className="flex h-9 items-center justify-center rounded-full border border-line px-3 text-xs font-medium tracking-wide text-muted transition-colors hover:border-ink hover:text-ink"
    >
      {lang === "en" ? "中" : "EN"}
    </button>
  );
}
