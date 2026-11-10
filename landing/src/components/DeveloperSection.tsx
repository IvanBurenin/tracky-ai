import { SquarePlay } from "lucide-react";
import { useI18n } from "../i18n";

const CHANNEL_URL = "https://www.youtube.com/@espadasportsru";
const BOT_URL = "https://t.me/AiTrackyBot";
const PROJECT_URLS = [CHANNEL_URL, BOT_URL];

export default function DeveloperSection() {
  const { content } = useI18n();
  const dev = content.developer;

  return (
    <div
      className="developer-band"
      role="region"
      aria-labelledby="developer-title"
    >
      <div className="container developer">
        <div className="developer-brand">
          <svg className="espada-mark" viewBox="0 0 40 32" aria-hidden="true">
            <path d="M0 32 L40 0 L40 32 Z" fill="currentColor" />
          </svg>
          <div className="developer-brand-text">
            <h2 id="developer-title" className="developer-title">
              {dev.title}
            </h2>
            <p className="developer-lede">{dev.lede}</p>
          </div>
        </div>

        <div className="developer-copy">
          <p className="developer-about">{dev.about}</p>

          <dl className="developer-stats">
            {dev.stats.map((stat) => (
              <div className="developer-stat" key={stat.label}>
                <dt className="developer-stat-label">{stat.label}</dt>
                <dd className="developer-stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="developer-projects">
            <p className="developer-projects-label">{dev.projectsLabel}</p>
            <ul className="developer-projects-list">
              {dev.projects.map((project, index) => (
                <li className="developer-project" key={project.name}>
                  <a
                    className="developer-project-link"
                    href={PROJECT_URLS[index] ?? CHANNEL_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="developer-project-id">
                      {index === 0 ? (
                        <svg
                          className="developer-project-mark developer-project-mark--triangle"
                          viewBox="0 0 40 32"
                          aria-hidden="true"
                        >
                          <path d="M0 32 L40 0 L40 32 Z" fill="currentColor" />
                        </svg>
                      ) : (
                        <img
                          className="developer-project-mark developer-project-mark--tracky"
                          src={`${import.meta.env.BASE_URL}logo.jpg`}
                          alt=""
                          width={24}
                          height={24}
                        />
                      )}
                      <span className="developer-project-name">{project.name}</span>
                    </span>
                    <span className="developer-project-role">{project.role}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            className="developer-link"
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
          >
            <SquarePlay size={20} aria-hidden="true" />
            <span>{dev.channel}</span>
            <span className="developer-handle">{dev.handle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
