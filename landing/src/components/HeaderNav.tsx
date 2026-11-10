import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n";

const ITEMS = [
  { id: "how", key: "how" },
  { id: "screens", key: "screens" },
  { id: "program", key: "program" },
  { id: "progress", key: "progress" },
] as const;

export default function HeaderNav() {
  const { content } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("how");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = 150;
      let current: string = ITEMS[0].id;
      for (const item of ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= offset) {
          current = item.id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = ITEMS.map((item) => ({
    ...item,
    label: content.header.nav[item.key],
  }));

  return (
    <nav className="header-nav" aria-label={content.header.navLabel}>
      <ul className="header-nav-list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              className={`header-nav-link${active === link.id ? " header-nav-link--active" : ""}`}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="header-nav-toggle"
        aria-expanded={open}
        aria-controls="header-nav-mobile"
        aria-label={content.header.menu}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X size={18} aria-hidden="true" />
        ) : (
          <Menu size={18} aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="header-nav-mobile" id="header-nav-mobile">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  className={`header-nav-link${active === link.id ? " header-nav-link--active" : ""}`}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
