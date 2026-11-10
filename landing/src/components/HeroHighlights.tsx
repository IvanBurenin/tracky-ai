import { Dumbbell, Map, Sparkles, TrendingUp } from "lucide-react";
import { useI18n } from "../i18n";

const ICONS = [Dumbbell, Map, TrendingUp, Sparkles];
const HREFS = ["#program", "#runs", "#progress", "#ai"];

export default function HeroHighlights() {
  const { content } = useI18n();
  return (
    <div className="hero-highlights">
      <ul className="container hero-highlights-inner">
        {content.hero.highlights.map((item, index) => {
          const Icon = ICONS[index] ?? Dumbbell;
          return (
            <li key={item.title}>
              <a className="hero-highlight" href={HREFS[index] ?? "#program"}>
                <Icon aria-hidden="true" />
                <span className="hero-highlight-text">
                  <span className="hero-highlight-title">{item.title}</span>
                  <span className="hero-highlight-copy">{item.copy}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
