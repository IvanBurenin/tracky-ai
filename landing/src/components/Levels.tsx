import { useI18n } from "../i18n";

export default function Levels() {
  const { content } = useI18n();
  return (
    <div className="levels" data-slot="levels">
      <ol className="levels-rail">
        {content.levels.items.map((item, index) => (
          <li className="level" key={item.name}>
            <img
              className="level-badge"
              src={`${import.meta.env.BASE_URL}levels/level${index + 1}.png`}
              alt=""
              width={96}
              height={88}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="level-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="level-name">{item.name}</span>
            <span className="level-points">
              <span className="measure">{item.points}</span>{" "}
              {content.levels.pointsLabel}
            </span>
          </li>
        ))}
      </ol>
      <div className="levels-foot">
        <p className="levels-rule">{content.levels.rule}</p>
        <p className="levels-note">{content.levels.note}</p>
      </div>
    </div>
  );
}
