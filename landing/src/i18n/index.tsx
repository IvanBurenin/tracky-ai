import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CONTENT, LANGUAGE_META, type Language, type LandingContent } from "./content";

const STORAGE_KEY = "tracky.landing.lang.v2";

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && LANGUAGE_META.some((item) => item.code === value);
}

function detectInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    /* private mode */
  }
  // English is the primary landing language. A visitor's explicit choice is
  // stored above and wins on later visits.
  return "en";
}

type I18nValue = {
  lang: Language;
  content: LandingContent;
  setLang: (language: Language) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLanguage);
  const content = CONTENT[lang];

  const setLang = (language: Language) => {
    setLangState(language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* private mode */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", content.meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute("content", content.meta.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription?.setAttribute("content", content.meta.description);
  }, [lang, content]);

  const value = useMemo(() => ({ lang, content, setLang }), [lang, content]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

export { LANGUAGE_META };
export type { Language, LandingContent };
