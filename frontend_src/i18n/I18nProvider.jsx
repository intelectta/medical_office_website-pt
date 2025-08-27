import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nCtx = createContext(null);
const LS_KEY = "lang";

async function load(lang) {
  const res = await fetch(`/i18n/${lang}.json`, { cache: "no-store" });
  return res.json();
}

function detectLang() {
  const fromUrl = new URL(window.location.href).searchParams.get("lang");
  if (fromUrl === "en" || fromUrl === "pt") return fromUrl;
  const fromLS = localStorage.getItem(LS_KEY);
  if (fromLS === "en" || fromLS === "pt") return fromLS;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang());
  const [dict, setDict] = useState({});

  useEffect(() => {
    load(lang).then(setDict);
    localStorage.setItem(LS_KEY, lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = useMemo(() => (key) => dict[key] ?? key, [dict]);
  const setLang = (l) => setLangState(l);
  const value = useMemo(() => ({ t, lang, setLang }), [t, lang]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18nCtx() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18nCtx must be used within I18nProvider");
  return ctx;
}
