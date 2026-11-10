import { useI18n } from "../i18n";

export default function Measurements() {
  const { content } = useI18n();
  const progress = content.progress;
  return (
    <div className="measurements-panel" data-slot="measurements">
      <div className="measurements-head">
        <p className="measurements-title">{progress.measurementsTitle}</p>
        <p className="panel-meta">{progress.measurementsNote}</p>
      </div>
      <dl className="measurements-list">
        {progress.measurements.map((item) => (
          <div className="measurements-row" key={item.label}>
            <dt>{item.label}</dt>
            <dd className="measure">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
