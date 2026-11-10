import { Check } from "lucide-react";
import { useI18n } from "../i18n";

export default function RunsGoals() {
  const { content } = useI18n();
  const runs = content.runs;
  return (
    <div className="duo">
      <figure className="route-figure" data-slot="run-route">
        <div className="route-panel">
          <div className="route-head">
            <p className="route-title">{runs.routeTitle}</p>
            <p className="panel-meta">{runs.routeMeta}</p>
          </div>

          <svg
            className="route-chart"
            viewBox="0 0 640 360"
            role="img"
            aria-label={runs.routeCaption}
          >
            <g className="route-grid" aria-hidden="true">
              <line x1="80" y1="24" x2="80" y2="320" />
              <line x1="200" y1="24" x2="200" y2="320" />
              <line x1="320" y1="24" x2="320" y2="320" />
              <line x1="440" y1="24" x2="440" y2="320" />
              <line x1="560" y1="24" x2="560" y2="320" />
              <line x1="40" y1="80" x2="600" y2="80" />
              <line x1="40" y1="160" x2="600" y2="160" />
              <line x1="40" y1="240" x2="600" y2="240" />
            </g>

            <path
              className="route-line"
              d="M 84 286 C 132 248, 154 206, 210 218 S 286 278, 330 224 S 396 144, 452 176 S 528 138, 574 78"
              aria-hidden="true"
            />

            <g className="route-nodes" aria-hidden="true">
              <circle cx="84" cy="286" r="6" />
              <circle cx="330" cy="224" r="4" />
              <circle cx="574" cy="78" r="6" />
            </g>

            <g className="route-labels" aria-hidden="true">
              <text x="84" y="326">{runs.start}</text>
              <text x="574" y="56" textAnchor="end">{runs.finish}</text>
            </g>
          </svg>

          <div className="route-stats">
            <span>
              <span className="measure">5,2</span> {runs.km}
            </span>
            <span>
              <span className="measure">28:40</span> {runs.time}
            </span>
            <span>
              <span className="measure">5:31</span> {runs.pace}
            </span>
            <span>
              <span className="measure">148</span> {runs.heart}
            </span>
            <span>
              <span className="measure">312</span> {runs.kcal}
            </span>
          </div>
        </div>
        <figcaption className="figure-caption">{runs.routeCaption}</figcaption>
      </figure>

      <div className="goals-panel" data-slot="goals-list">
        <div className="goals-head">
          <p className="goals-title">{runs.goalsTitle}</p>
          <p className="panel-meta">{runs.goalsMeta}</p>
        </div>

        <ul className="goal-list">
          {runs.goals.map((goal) => (
            <li className="goal" key={goal.text}>
              <span
                className={`goal-box${goal.done ? " goal-box--done" : ""}`}
                aria-hidden="true"
              >
                {goal.done && <Check />}
              </span>
              <span className="goal-text">{goal.text}</span>
              <span className="sr-only">
                {goal.done ? content.a11y.done : content.a11y.notDone}
              </span>
            </li>
          ))}
        </ul>

        <p className="goals-note">{runs.goalsNote}</p>
      </div>
    </div>
  );
}
