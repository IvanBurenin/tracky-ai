import { useI18n } from "../i18n";

export default function HowItWorks() {
  const { content } = useI18n();
  return (
    <ol className="steps">
      {content.steps.items.map((step, index) => (
        <li className="step" key={step.title}>
          <span className="step-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-copy">{step.copy}</p>
        </li>
      ))}
    </ol>
  );
}
