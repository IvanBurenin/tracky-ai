import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { LANGUAGE_META, useI18n } from "../i18n";

export default function LanguageSwitcher() {
  const { lang, content, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const current = LANGUAGE_META.find((item) => item.code === lang) ?? LANGUAGE_META[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        type="button"
        className="lang-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={content.header.language}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-button-code">{current.short}</span>
        <ChevronDown
          className={`lang-chevron${open ? " lang-chevron--open" : ""}`}
          size={14}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          className="lang-menu"
          role="listbox"
          aria-label={content.a11y.languages}
        >
          {LANGUAGE_META.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                role="option"
                aria-selected={item.code === lang}
                className={`lang-option${item.code === lang ? " lang-option--active" : ""}`}
                onClick={() => {
                  setLang(item.code);
                  setOpen(false);
                }}
              >
                <span className="lang-option-code">{item.short}</span>
                <span className="lang-option-name">{item.label}</span>
                {item.code === lang && (
                  <Check className="lang-option-check" size={15} aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
