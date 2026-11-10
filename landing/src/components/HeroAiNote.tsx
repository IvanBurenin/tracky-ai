import { Sparkles } from "lucide-react";
import { useI18n } from "../i18n";

export default function HeroAiNote() {
  const { content } = useI18n();

  return (
    <p className="hero-ai">
      <Sparkles size={16} aria-hidden="true" />
      {content.hero.ai}
    </p>
  );
}
