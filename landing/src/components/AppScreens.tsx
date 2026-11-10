import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useI18n } from "../i18n";

export default function AppScreens() {
  const { lang, content } = useI18n();
  const screens = content.screens.items;
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const current = screens[active] ?? screens[0];
  const src = `${import.meta.env.BASE_URL}screens/${lang}/${current.id}.png`;

  const move = (delta: number) => {
    setActive((index) => (index + delta + screens.length) % screens.length);
  };

  const closeLightbox = () => {
    setOpen(false);
    openerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openerRef.current?.focus();
      } else if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + screens.length) % screens.length);
      } else if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % screens.length);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, screens.length]);

  return (
    <div className="screens-stage">
      <div
        className="screen-tabs"
        role="tablist"
        aria-label={content.screens.tabsLabel}
      >
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`screen-tab${index === active ? " screen-tab--active" : ""}`}
            onClick={() => setActive(index)}
          >
            <img
              className="screen-tab-thumb"
              src={`${import.meta.env.BASE_URL}screens/${lang}/${screen.id}.png`}
              alt=""
              width={44}
              height={95}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="screen-tab-text">
              <span className="screen-tab-name">{screen.name}</span>
              <span className="screen-tab-note">{screen.note}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="screen-stage">
        <span className="screens-orbit" aria-hidden="true" />

        <div className="screens-rail" aria-hidden="true">
          {screens.map((screen, index) => (
            <span
              key={screen.id}
              className={`screens-node${index === active ? " screens-node--active" : ""}`}
            />
          ))}
        </div>

        <figure className="screen-card screen-card--stage">
          <button
            type="button"
            className="screen-open"
            ref={openerRef}
            onClick={() => setOpen(true)}
            aria-label={`${content.screens.open}: ${current.name}`}
          >
            <img
              src={src}
              alt={current.alt}
              width={860}
              height={1864}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </button>
          <figcaption className="screen-caption" aria-live="polite">
            <span className="screen-name">{current.name}</span>
            <span className="screen-note">{current.note}</span>
            <span className="screen-hint">
              <Maximize2 size={13} aria-hidden="true" />
              {content.screens.hint}
            </span>
          </figcaption>
        </figure>

        <div className="screen-controls">
          <button
            type="button"
            className="screen-arrow"
            onClick={() => move(-1)}
            aria-label={content.screens.prev}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="screen-arrow"
            onClick={() => move(1)}
            aria-label={content.screens.next}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${content.screens.open}: ${current.name}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            ref={closeRef}
            onClick={closeLightbox}
            aria-label={content.screens.close}
          >
            <X size={18} aria-hidden="true" />
          </button>
          <div className="lightbox-body">
            <img src={src} alt={current.alt} />
            <div className="lightbox-caption">
              <span className="screen-name">{current.name}</span>
              <span className="screen-note">{current.note}</span>
            </div>
            <div className="lightbox-controls">
              <button
                type="button"
                className="screen-arrow"
                onClick={() => move(-1)}
                aria-label={content.screens.prev}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="screen-arrow"
                onClick={() => move(1)}
                aria-label={content.screens.next}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
