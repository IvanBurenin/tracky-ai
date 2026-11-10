import { useI18n } from "../i18n";

export default function ProgramTable() {
  const { content } = useI18n();
  const program = content.program;
  return (
    <figure className="program-figure">
      <table className="program-table">
        <caption className="sr-only">{content.a11y.programExample}</caption>
        <thead>
          <tr>
            <th scope="col">{program.headers.day}</th>
            <th scope="col">{program.headers.type}</th>
            <th scope="col">{program.headers.exercises}</th>
          </tr>
        </thead>
        <tbody>
          {program.rows.map((row) => (
            <tr key={row.day}>
              <td className="program-day">{row.day}</td>
              <td className="program-type">{row.type}</td>
              <td className="program-exercises">{row.exercises}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="program-meta">
        {program.meta.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <figcaption className="figure-caption">{program.caption}</figcaption>
    </figure>
  );
}
