import { useI18nCtx } from "../i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18nCtx();
  return (
    <button
      aria-label="Change language"
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
