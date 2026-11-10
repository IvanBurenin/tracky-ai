import { useEffect, useRef, useState } from "react";
import { ArrowUp, Check, Copy, Send } from "lucide-react";
import AiDialog from "./components/AiDialog";
import AppScreens from "./components/AppScreens";
import DeveloperSection from "./components/DeveloperSection";
import FreeNote from "./components/FreeNote";
import HeaderNav from "./components/HeaderNav";
import HeroAiNote from "./components/HeroAiNote";
import HeroHighlights from "./components/HeroHighlights";
import HowItWorks from "./components/HowItWorks";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Levels from "./components/Levels";
import Logo from "./components/Logo";
import Measurements from "./components/Measurements";
import ProgramTable from "./components/ProgramTable";
import ProgressChart from "./components/ProgressChart";
import RunsGoals from "./components/RunsGoals";
import SquareField from "./components/SquareField";
import WeekLog from "./components/WeekLog";
import { useI18n } from "./i18n";

const BOT_URL = "https://t.me/AiTrackyBot";
const BOT_HANDLE = "@AiTrackyBot";

export default function App() {
  const { content } = useI18n();
  const [copied, setCopied] = useState(false);
  const [scrollState, setScrollState] = useState({
    scrolled: false,
    progress: 0,
    showTop: false,
  });
  const copiedTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimer.current != null) window.clearTimeout(copiedTimer.current);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY || 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const cta = document.getElementById("cta");
      const ctaVisible = cta
        ? cta.getBoundingClientRect().top < window.innerHeight - 140
        : false;
      setScrollState({
        scrolled: y > 8,
        progress: max > 0 ? Math.min(1, Math.max(0, y / max)) : 0,
        showTop: y > 700 && max - y > 220 && !ctaVisible,
      });
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

  function backToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  async function copyHandle() {
    try {
      await navigator.clipboard.writeText(BOT_HANDLE);
      setCopied(true);
      if (copiedTimer.current != null) window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard может быть недоступен */
    }
  }

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        {content.a11y.skip}
      </a>

      <header
        className={`site-header${scrollState.scrolled ? " site-header--scrolled" : ""}`}
      >
        <div className="container header-inner">
          <Logo />
          <HeaderNav />
          <div className="header-actions">
            <LanguageSwitcher />
            <a className="header-link" href={BOT_URL}>
              <Send size={18} aria-hidden="true" />
              {content.header.writeBot}
            </a>
          </div>
        </div>
        <span
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollState.progress})` }}
          aria-hidden="true"
        />
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}hero-cardio.jpg`}
              alt=""
              width={1800}
              height={1200}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-veil" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <SquareField className="hero-squares" />
              <HeroAiNote />
              <h1 id="hero-title" className="hero-title">
                {content.hero.title}
              </h1>
              <p className="hero-lede">{content.hero.lede}</p>
              <div className="hero-actions">
                <a className="button-primary button-primary--hero" href={BOT_URL}>
                  <Send size={20} aria-hidden="true" />
                  {content.hero.cta}
                </a>
              </div>
              <FreeNote />
            </div>

            <WeekLog />
          </div>

          <HeroHighlights />
        </section>

        <section
          id="how"
          className="section section--surface"
          aria-labelledby="steps-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="steps-title" className="section-title">
                {content.steps.title}
              </h2>
              <p className="section-lede">{content.steps.lede}</p>
            </div>

            <HowItWorks />
            <FreeNote />
          </div>
        </section>

        <section id="screens" className="section" aria-labelledby="screens-title">
          <div className="container">
            <div className="section-head">
              <h2 id="screens-title" className="section-title">
                {content.screens.title}
              </h2>
              <p className="section-lede">{content.screens.lede}</p>
            </div>

            <AppScreens />

            <div className="screens-foot">
              <p className="screens-foot-copy">{content.screens.foot}</p>
              <ul className="lang-row" aria-label={content.a11y.languages}>
                {["EN", "RU", "ZH", "FR", "DE", "ES"].map((lang) => (
                  <li className="lang-tile" key={lang}>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="program"
          className="section section--light"
          aria-labelledby="program-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="program-title" className="section-title">
                {content.program.title}
              </h2>
              <p className="section-lede">{content.program.lede}</p>
            </div>

            <ProgramTable />
          </div>
        </section>

        <section id="runs" className="section section--light" aria-labelledby="runs-title">
          <div className="container">
            <div className="section-head">
              <h2 id="runs-title" className="section-title">
                {content.runs.title}
              </h2>
              <p className="section-lede">{content.runs.lede}</p>
            </div>

            <RunsGoals />
          </div>
        </section>

        <section id="ai" className="section" aria-labelledby="ai-title">
          <div className="container">
            <div className="section-head">
              <h2 id="ai-title" className="section-title">
                {content.ai.title}
              </h2>
              <p className="section-lede">{content.ai.lede}</p>
            </div>

            <AiDialog />
          </div>
        </section>

        <section
          id="progress"
          className="section section--surface"
          aria-labelledby="progress-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="progress-title" className="section-title">
                {content.progress.title}
              </h2>
              <p className="section-lede">{content.progress.lede}</p>
            </div>

            <div className="progress-layout">
              <ProgressChart />
              <Measurements />
            </div>

            <div className="levels-block">
              <div className="levels-head">
                <h3 className="levels-title">{content.levels.title}</h3>
                <p className="levels-lede">{content.levels.lede}</p>
              </div>
              <Levels />
            </div>
          </div>
        </section>

        <section id="cta" className="cta" aria-labelledby="cta-title">
          <DeveloperSection />

          <div className="container cta-inner">
            <span className="cta-mark" aria-hidden="true" />
            <div>
              <h2 id="cta-title" className="cta-title">
                {content.cta.title}
              </h2>
              <p className="cta-copy">{content.cta.copy}</p>
              <FreeNote inverse />
            </div>
            <div className="cta-actions">
              <a className="button-outline" href={BOT_URL}>
                <Send size={18} aria-hidden="true" />
                {content.cta.button}
              </a>
              <button
                type="button"
                className="copy-handle"
                onClick={() => void copyHandle()}
                aria-label={content.cta.copyHandle}
              >
                {copied ? (
                  <Check size={14} aria-hidden="true" />
                ) : (
                  <Copy size={14} aria-hidden="true" />
                )}
                <span>{copied ? content.cta.copied : BOT_HANDLE}</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo compact />
          <div className="footer-meta">
            <p className="footer-note">{content.footer.note}</p>
          </div>
          <a className="footer-link" href={BOT_URL}>
            <Send size={16} aria-hidden="true" />
            {BOT_HANDLE}
          </a>
        </div>
      </footer>

      {scrollState.showTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={backToTop}
          aria-label={content.a11y.backToTop}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
