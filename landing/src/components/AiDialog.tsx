import { useState } from "react";
import { Bot } from "lucide-react";
import { useI18n } from "../i18n";

export default function AiDialog() {
  const { content } = useI18n();
  const ai = content.ai;
  const [active, setActive] = useState(0);
  const current = ai.prompts[active] ?? ai.prompts[0];

  return (
    <figure className="ai-figure" data-slot="ai-dialog">
      <div className="ai-panel">
        <div className="ai-head">
          <Bot aria-hidden="true" />
          <span>{ai.assistant}</span>
        </div>

        <div className="ai-chips" role="group" aria-label={ai.promptsLabel}>
          {ai.prompts.map((prompt, index) => (
            <button
              key={prompt.label}
              type="button"
              className={`ai-chip${index === active ? " ai-chip--active" : ""}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {prompt.label}
            </button>
          ))}
        </div>

        <div className="ai-thread" aria-live="polite">
          <p className="ai-message ai-message--user">{current.user}</p>
          <div className="ai-message ai-message--bot">
            {current.reply.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="figure-caption">{ai.caption}</figcaption>
    </figure>
  );
}
