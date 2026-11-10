import { useState } from "react";
import { useI18n } from "../i18n";

const CHART_3M = {
  bars: [
    { x: 46, y: 212, height: 76 },
    { x: 148, y: 196, height: 92 },
    { x: 250, y: 184, height: 104 },
    { x: 352, y: 160, height: 128 },
    { x: 454, y: 144, height: 144 },
    { x: 556, y: 128, height: 160 },
  ],
  line: "M 46 232 L 148 214 L 250 220 L 352 176 L 454 164 L 556 136",
  labels: [100, 300, 500],
};

const CHART_6M = {
  bars: [
    { x: 46, y: 244, height: 44 },
    { x: 148, y: 226, height: 62 },
    { x: 250, y: 204, height: 84 },
    { x: 352, y: 180, height: 108 },
    { x: 454, y: 156, height: 132 },
    { x: 556, y: 128, height: 160 },
  ],
  line: "M 46 258 L 148 238 L 250 214 L 352 190 L 454 160 L 556 128",
  labels: [54, 156, 258, 360, 462, 564],
};

export default function ProgressChart() {
  const { content } = useI18n();
  const progress = content.progress;
  const [rangeIndex, setRangeIndex] = useState(0);
  const range = progress.ranges[rangeIndex] ?? progress.ranges[0];
  const data = rangeIndex === 0 ? CHART_3M : CHART_6M;

  return (
    <figure className="chart-figure" data-slot="progress-chart">
      <div className="chart-panel">
        <div className="chart-head">
          <p className="chart-title">{progress.panel}</p>
          <div className="legend">
            <span className="legend-item">
              <span className="legend-line" aria-hidden="true" />
              {progress.weight}
            </span>
            <span className="legend-item">
              <span className="legend-bar" aria-hidden="true" />
              {progress.volume}
            </span>
          </div>
        </div>

        <div className="chart-ranges" role="group" aria-label={progress.rangeLabel}>
          {progress.ranges.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`chart-range${index === rangeIndex ? " chart-range--active" : ""}`}
              aria-pressed={index === rangeIndex}
              onClick={() => setRangeIndex(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <svg
          className="chart"
          viewBox="0 0 640 320"
          role="img"
          aria-label={`${content.a11y.chartExample}: ${range.label}`}
        >
          <g className="chart-grid" aria-hidden="true">
            <line x1="32" y1="48" x2="608" y2="48" />
            <line x1="32" y1="128" x2="608" y2="128" />
            <line x1="32" y1="208" x2="608" y2="208" />
            <line x1="32" y1="288" x2="608" y2="288" />
          </g>

          <g className="chart-bars" aria-hidden="true">
            {data.bars.map((bar) => (
              <rect key={bar.x} x={bar.x} y={bar.y} width="34" height={bar.height} />
            ))}
          </g>

          <path className="chart-line" d={data.line} aria-hidden="true" />

          <g className="chart-labels" aria-hidden="true">
            <text x="8" y="52">90</text>
            <text x="8" y="132">80</text>
            <text x="8" y="212">70</text>
            {range.months.map((month, index) => (
              <text key={month} x={data.labels[index]} y="312" textAnchor="middle">
                {month}
              </text>
            ))}
          </g>
        </svg>
      </div>
      <figcaption className="figure-caption">{progress.caption}</figcaption>
    </figure>
  );
}
