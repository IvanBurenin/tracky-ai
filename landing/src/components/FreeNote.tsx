import { Check } from "lucide-react";
import { useI18n } from "../i18n";

type Props = {
  inverse?: boolean;
};

export default function FreeNote({ inverse = false }: Props) {
  const { content } = useI18n();

  return (
    <p className={`free-note${inverse ? " free-note--inverse" : ""}`}>
      <Check className="free-note-icon" size={18} aria-hidden="true" />
      {content.free}
    </p>
  );
}
