import { useState } from "react";
import { Check, ChevronDown, Minus } from "lucide-react";
import { useI18n } from "../i18n";

type DayState = "done" | "rest" | "today";

const STATES: DayState[] = [
  "done",
  "rest",
  "done",
  "rest",
  "done",
  "rest",
  "today",
];

const SCHEMES = [
  { scheme: "3×8", weight: "60" },
  { scheme: "3×8", weight: "45" },
  { scheme: "3×10", weight: "40" },
];

function DayMark({ state }: { state: DayState }) {
  const { content } = useI18n();
  if (state === "done") {
    return (
      <span className="day-mark">
        <Check aria-hidden="true" />
        <span className="sr-only">{content.weekLog.done}</span>
      </span>
    );
  }

  if (state === "rest") {
    return (
      <span className="day-mark day-mark--rest">
        <Minus aria-hidden="true" />
        <span className="sr-only">{content.a11y.rest}</span>
      </span>
    );
  }

  return (
    <span className="day-mark day-mark--today">
      <span className="day-today-square" aria-hidden="true" />
      <span className="sr-only">{content.a11y.today}</span>
    </span>
  );
}

export default function WeekLog() {
  const { content } = useI18n();
  const log = content.weekLog;
  const [openExercise, setOpenExercise] = useState<number | null>(null);

  return (
    <figure className="log-figure" data-slot="workout-log">
      <span className="hero-plate" aria-hidden="true" />
      <span className="log-corner log-corner--tl" aria-hidden="true" />
      <span className="log-corner log-corner--tr" aria-hidden="true" />
      <span className="log-corner log-corner--bl" aria-hidden="true" />
      <span className="log-corner log-corner--br" aria-hidden="true" />
      <div className="log-sheet">
        <div className="log-sheet-head">
          <p className="log-sheet-title">{log.title}</p>
          <p className="log-sheet-meta">{log.sample}</p>
        </div>

        <ol className="week" aria-label={content.a11y.weekExample}>
          {log.days.map((day, index) => {
            const state = STATES[index] ?? "rest";
            return (
              <li
                key={`${day}-${index}`}
                className={`day${state === "today" ? " day--today" : ""}${
                  state === "done" ? " day--done" : ""
                }`}
              >
                <span className="day-label">{day}</span>
                <DayMark state={state} />
              </li>
            );
          })}
        </ol>

        <div className="workout">
          <div className="workout-head">
            <p className="workout-type">{log.workoutType}</p>
            <p className="workout-time">{log.minutes}</p>
          </div>

          <ul className="exercise-list">
            {log.exercises.map((name, index) => {
              const scheme = SCHEMES[index] ?? SCHEMES[0];
              const [sets, reps] = scheme.scheme.split("×");
              const isOpen = openExercise === index;
              const panelId = `exercise-sets-${index}`;
              return (
                <li
                  className={`exercise-item${isOpen ? " exercise-item--open" : ""}`}
                  key={name}
                >
                  <button
                    type="button"
                    className="exercise-row"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenExercise(isOpen ? null : index)}
                  >
                    <span className="exercise-name">{name}</span>
                    <span className="exercise-scheme">
                      <span className="measure">{scheme.scheme}</span>
                      <span className="exercise-weight">
                        <span className="measure">{scheme.weight}</span> {log.kg}
                      </span>
                    </span>
                    <ChevronDown
                      className={`exercise-chevron${isOpen ? " exercise-chevron--open" : ""}`}
                      size={14}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`exercise-sets${isOpen ? " exercise-sets--open" : ""}`}
                    id={panelId}
                    aria-hidden={!isOpen}
                  >
                    {Array.from({ length: Number(sets) || 3 }).map((_, setIndex) => (
                      <span className="exercise-set" key={setIndex}>
                        <span className="exercise-set-index">{setIndex + 1}</span>
                        <span className="measure">
                          {reps} × {scheme.weight}
                        </span>{" "}
                        {log.kg}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="exercise-hint">{log.hint}</p>

          <p className="log-sheet-foot">
            <Check aria-hidden="true" />
            <span>{log.done}</span>
          </p>
        </div>
      </div>
      <figcaption className="figure-caption">{log.caption}</figcaption>
    </figure>
  );
}
