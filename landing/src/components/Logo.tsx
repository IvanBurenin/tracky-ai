import { useI18n } from "../i18n";

type LogoProps = {
  compact?: boolean;
};

export default function Logo({ compact = false }: LogoProps) {
  const { content } = useI18n();
  return (
    <a className="brand" href="#top" aria-label={content.a11y.logoBack}>
      <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" width={32} height={32} />
      <span className="brand-word">Tracky</span>
      {!compact && <span className="brand-note">{content.header.descriptor}</span>}
    </a>
  );
}
